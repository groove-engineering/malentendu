import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Le Malentendu',
  tagline: 'An open method for fusing musical genres',
  favicon: 'img/favicon.ico',

  url: 'https://trivoallan.github.io',
  baseUrl: '/groove-engineering/',

  organizationName: 'trivoallan',
  projectName: 'groove-engineering',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: { label: 'English', direction: 'ltr', htmlLang: 'en-US' },
      fr: { label: 'Français', direction: 'ltr', htmlLang: 'fr-FR' },
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/trivoallan/groove-engineering/tree/main/docs-site/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Le Malentendu',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'explanationSidebar',
          position: 'left',
          label: 'Explanation',
        },
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'Reference',
        },
        {
          type: 'docSidebar',
          sidebarId: 'howToSidebar',
          position: 'left',
          label: 'How-to',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/trivoallan/groove-engineering',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Explanation',
          items: [
            { label: 'Introduction', to: '/docs/explanation/intro' },
            { label: 'The Method', to: '/docs/explanation/method' },
            { label: 'Political Vision', to: '/docs/explanation/political-vision' },
          ],
        },
        {
          title: 'Reference',
          items: [
            { label: 'Knowledge Graph', to: '/docs/reference/knowledge-graph/overview' },
            { label: 'Atoms', to: '/docs/reference/knowledge-graph/atoms' },
            { label: 'Crossings', to: '/docs/reference/knowledge-graph/crossings' },
          ],
        },
        {
          title: 'How-to',
          items: [
            { label: 'Give Feedback', to: '/docs/how-to/give-feedback' },
            { label: 'GitHub', href: 'https://github.com/trivoallan/groove-engineering' },
          ],
        },
      ],
      copyright: `AGPLv3 — Le Malentendu.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml', 'python', 'bash'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
