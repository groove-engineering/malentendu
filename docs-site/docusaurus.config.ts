import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Le Malentendu',
  tagline: 'An open method for fusing musical genres',
  favicon: 'img/favicon.ico',

  url: 'https://groove-engineering.github.io',
  baseUrl: '/malentendu/',

  organizationName: 'groove-engineering',
  projectName: 'malentendu',
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

  themes: [
    '@docusaurus/theme-mermaid',
    ['@easyops-cn/docusaurus-search-local', { hashed: true, language: ['en', 'fr'] }],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/groove-engineering/malentendu/edit/main/docs-site/',
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
          href: 'https://github.com/groove-engineering/malentendu',
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
            { label: 'GitHub', href: 'https://github.com/groove-engineering/malentendu' },
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
