import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import yaml from 'js-yaml';

const ROOT = join(import.meta.dirname, '..', '..');
const ATOMS_DIR = join(ROOT, 'poc', 'atoms');
const CROSSINGS_DIR = join(ROOT, 'poc', 'crossings');
const OUT_ATOMS = join(import.meta.dirname, '..', 'docs', 'knowledge-graph', 'atoms');
const OUT_CROSSINGS = join(import.meta.dirname, '..', 'docs', 'knowledge-graph', 'crossings');

if (!existsSync(OUT_ATOMS)) mkdirSync(OUT_ATOMS, { recursive: true });
if (!existsSync(OUT_CROSSINGS)) mkdirSync(OUT_CROSSINGS, { recursive: true });

function titleCase(str) {
  return str.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function generateAtomPage(filePath) {
  const raw = readFileSync(filePath, 'utf8');
  const data = yaml.load(raw);
  const slug = data.atom;
  const title = titleCase(slug);

  let md = `---\ntitle: "${title}"\nsidebar_label: "${title}"\n---\n\n`;
  md += `# ${title}\n\n`;
  md += `**Status:** \`${data.status || 'proposed'}\`\n\n`;

  if (data.musicological && data.musicological.length > 0) {
    md += `## Musicological claims (register 1)\n\n`;
    for (const claim of data.musicological) {
      md += `- ${claim.claim}\n`;
      if (claim.source) {
        md += `  - **Source:** ${claim.source.citation}`;
        if (claim.source.locator) {
          md += ` — [verify](${claim.source.locator})`;
        }
        md += `\n`;
      }
    }
    md += `\n`;
  }

  if (data.constraints && data.constraints.length > 0) {
    md += `## Constraints\n\n`;
    for (const c of data.constraints) {
      md += `- ${c.claim}`;
      if (c.held_by) md += ` *(held by: ${c.held_by.join(', ')})*`;
      md += `\n`;
    }
    md += `\n`;
  }

  if (data.felt && data.felt.length > 0) {
    md += `## Felt (register 2)\n\n`;
    for (const f of data.felt) {
      md += `- ${f.text || f.claim}`;
      if (f.held_by) md += ` *(held by: ${f.held_by.join(', ')})*`;
      md += `\n`;
    }
    md += `\n`;
  }

  if (data.political && data.political.length > 0) {
    md += `## Political (register 3)\n\n`;
    for (const p of data.political) {
      md += `- ${p.text || p.claim}`;
      if (p.held_by) md += ` *(held by: ${p.held_by.join(', ')})*`;
      md += `\n`;
    }
    md += `\n`;
  }

  if (data.exemplars && data.exemplars.length > 0) {
    md += `## Exemplars\n\n`;
    for (const e of data.exemplars) {
      md += `- **${e.track}**`;
      if (e.cue) md += ` (${e.cue})`;
      if (e.recognized_by && e.recognized_by.length > 0) md += ` — recognized by: ${e.recognized_by.join(', ')}`;
      md += `\n`;
    }
    md += `\n`;
  }

  md += `---\n\n*Source: [\`poc/atoms/${basename(filePath)}\`](https://github.com/trivoallan/groove-engineering/blob/main/poc/atoms/${basename(filePath)})*\n`;

  writeFileSync(join(OUT_ATOMS, `${slug}.md`), md);
  return slug;
}

function generateCrossingPage(filePath) {
  const raw = readFileSync(filePath, 'utf8');
  const data = yaml.load(raw);
  const slug = data.crossing;
  const title = titleCase(slug);

  let md = `---\ntitle: "${title}"\nsidebar_label: "${title}"\n---\n\n`;
  md += `# ${title}\n\n`;

  if (data.atoms) {
    const atomLinks = data.atoms.map(a => `[${titleCase(a)}](../atoms/${a})`);
    md += `**Atoms:** ${atomLinks.join(' × ')}\n\n`;
  }

  if (data.frame_from) {
    md += `**Frame from:** ${titleCase(data.frame_from)} (dominates the groove)\n\n`;
  }

  if (data.tension) {
    md += `## Tension\n\n> ${data.tension}\n\n`;
  }

  if (data.avoid) {
    md += `## Avoid\n\n> ${data.avoid}\n\n`;
  }

  md += `## Political coherence (§6)\n\n`;

  if (data.creolizes) {
    md += `### Creolizes (not flattens)\n\n> ${data.creolizes}\n\n`;
  }

  if (data.opacity_preserved) {
    md += `### Opacity preserved\n\n> ${data.opacity_preserved}\n\n`;
  }

  if (data.self_implication) {
    md += `### Self-implication\n\n> ${data.self_implication}\n\n`;
  }

  if (data.held_by) {
    md += `**Held by:** ${data.held_by.join(', ')}\n\n`;
  }

  md += `---\n\n*Source: [\`poc/crossings/${basename(filePath)}\`](https://github.com/trivoallan/groove-engineering/blob/main/poc/crossings/${basename(filePath)})*\n`;

  writeFileSync(join(OUT_CROSSINGS, `${slug}.md`), md);
  return slug;
}

// Generate atom pages
const atomFiles = readdirSync(ATOMS_DIR).filter(f => f.endsWith('.yaml'));
const atoms = [];
for (const file of atomFiles) {
  const slug = generateAtomPage(join(ATOMS_DIR, file));
  atoms.push(slug);
}
console.log(`Generated ${atoms.length} atom pages: ${atoms.join(', ')}`);

// Generate crossing pages
const crossingFiles = readdirSync(CROSSINGS_DIR).filter(f => f.endsWith('.yaml'));
const crossings = [];
for (const file of crossingFiles) {
  const slug = generateCrossingPage(join(CROSSINGS_DIR, file));
  crossings.push(slug);
}
console.log(`Generated ${crossings.length} crossing pages: ${crossings.join(', ')}`);
