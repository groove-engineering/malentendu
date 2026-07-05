import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="homepage.hero.tagline">
            An open method for fusing musical genres
          </Translate>
        </p>
        <p className={styles.heroQuote}>
          <Translate id="homepage.hero.quote">
            "Music that never existed."
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/explanation/intro">
            <Translate id="homepage.cta.method">Read the Method</Translate>
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/reference/knowledge-graph/overview">
            <Translate id="homepage.cta.graph">Browse the Knowledge Graph</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    titleId: 'homepage.feature.modelAgnostic.title',
    titleDefault: 'Model-Agnostic',
    descId: 'homepage.feature.modelAgnostic.description',
    descDefault: 'Describe a fusion once. Compile to Suno, Udio, MusicGen, or a human brief. The models are interchangeable backends.',
  },
  {
    titleId: 'homepage.feature.threeRegisters.title',
    titleDefault: 'Three Registers',
    descId: 'homepage.feature.threeRegisters.description',
    descDefault: 'Every claim is musicological (fact), felt (subjective), or political (values). Never conflate them.',
  },
  {
    titleId: 'homepage.feature.atoms.title',
    titleDefault: 'Atoms & Molecules',
    descId: 'homepage.feature.atoms.description',
    descDefault: 'Curate ~600 atoms (genres), not 360,000 molecules (fusions). Fix an atom once, fix all its crossings.',
  },
  {
    titleId: 'homepage.feature.sourced.title',
    titleDefault: 'Sourced & Falsifiable',
    descId: 'homepage.feature.sourced.description',
    descDefault: 'Every musicological claim carries a citation and a locator. No source, no fact.',
  },
  {
    titleId: 'homepage.feature.political.title',
    titleDefault: 'Political by Design',
    descId: 'homepage.feature.political.description',
    descDefault: 'Creolization, not flattening. Right to opacity. Self-implication. The engine room, not the lyrics.',
  },
  {
    titleId: 'homepage.feature.free.title',
    titleDefault: 'Free & Open',
    descId: 'homepage.feature.free.description',
    descDefault: 'AGPLv3. A commons that resists enclosure. What was made by all must not be re-privatized by a few.',
  },
];

function Feature({titleId, titleDefault, descId, descDefault}: {
  titleId: string; titleDefault: string; descId: string; descDefault: string;
}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md padding-vert--md">
        <Heading as="h3">
          <Translate id={titleId}>{titleDefault}</Translate>
        </Heading>
        <p>
          <Translate id={descId}>{descDefault}</Translate>
        </p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={translate({id: 'homepage.hero.tagline', message: 'An open method for fusing musical genres'})}>
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
