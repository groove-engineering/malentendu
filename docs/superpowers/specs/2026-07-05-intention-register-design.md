# Design: Intention Register (4th Register)

## Summary

Add a fourth register — **intention** — to the method's existing three (musicological, felt, political). The intention register captures the maker's declared project: what they want to accomplish with a fusion.

## Register Definition

| Register | Nature | Source | Falsifiable | Role at render |
|---|---|---|---|---|
| **intention** 🎯 | declared project (what the maker wants to accomplish with the fusion) | the maker / alternative curator | no (held, declarative) | direction / brief |

## Where It Lives

- **Crossing level** — design intention: "by fusing A × B, I'm aiming for [X]."
- **Exemplar level** — execution intention: "on this specific track, I wanted [Y]."

A single crossing can carry multiple intentions (from different curators). A single exemplar can carry its own intention distinct from the crossing-level one.

## Attribution

Same mechanics as the other registers:

- Every intention claim carries `held_by` + named source.
- The maker is the default source, but an alternative curator can formulate their own intention. The engine holds both — positions, not truths.

## What It Does Not Do

- **No falsification.** "The intention wasn't realized" is a felt or musicological claim, not an invalidation of the intention itself. The intention is sovereign.
- **No constraining role at render.** Unlike musicological constraints (tempo, mode, language), the intention is a brief, not a rule. It guides but does not enforce.

## Emoji

🎯 — consistent with 🎼 👂 ✊, visually distinct.

## Scope of Changes

Files that reference the three-register model and will need updating:

- `docs-site/docs/explanation/method.md` — register table (§2), attribution (§3), curator roster (§8)
- `docs-site/docs/explanation/examples.md` — register diagram, example annotations
- `docs-site/docs/explanation/intro.md` — register summary line
- `docs-site/docs/explanation/comparison.md` — comparison table rows mentioning registers
- `docs-site/docs/reference/knowledge-graph/overview.md` — register list
- `docs-site/docs/reference/knowledge-graph/crossings.md` — crossing description
- `docs-site/docs/reference/schema.md` — schema definition (if register is modeled)
- `docs-site/docs/how-to/send-listening-sheet.md` — listener prompt (add 🎯 line)
- All French i18n counterparts of the above
