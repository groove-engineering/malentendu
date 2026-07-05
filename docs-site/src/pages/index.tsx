import clsx from 'clsx';
import Link from '@docusaurus/Link';
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
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroQuote}>"Music that never existed."</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/explanation/intro">
            Read the Method
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/docs/reference/knowledge-graph/overview">
            Browse the Knowledge Graph
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: 'Model-Agnostic',
    description: 'Describe a fusion once. Compile to Suno, Udio, MusicGen, or a human brief. The models are interchangeable backends.',
  },
  {
    title: 'Three Registers',
    description: 'Every claim is musicological (fact), felt (subjective), or political (values). Never conflate them.',
  },
  {
    title: 'Atoms & Molecules',
    description: 'Curate ~600 atoms (genres), not 360,000 molecules (fusions). Fix an atom once, fix all its crossings.',
  },
  {
    title: 'Sourced & Falsifiable',
    description: 'Every musicological claim carries a citation and a locator. No source, no fact.',
  },
  {
    title: 'Political by Design',
    description: 'Creolization, not flattening. Right to opacity. Self-implication. The engine room, not the lyrics.',
  },
  {
    title: 'Free & Open',
    description: 'AGPLv3. A commons that resists enclosure. What was made by all must not be re-privatized by a few.',
  },
];

function Feature({title, description}: {title: string; description: string}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="padding-horiz--md padding-vert--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="An open method for fusing musical genres">
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
        <section className={styles.signature}>
          <div className="container">
            <p><em>non = malentendu</em></p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
