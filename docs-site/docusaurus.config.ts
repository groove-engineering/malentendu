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
          sidebarId: 'methodSidebar',
          position: 'left',
          label: 'The Method',
        },
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeGraphSidebar',
          position: 'left',
          label: 'Knowledge Graph',
        },
        {
          type: 'docSidebar',
          sidebarId: 'contributeSidebar',
          position: 'left',
          label: 'Contribute',
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
          title: 'The Method',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
            { label: 'Core Spec', to: '/docs/method/core' },
            { label: 'Political Vision', to: '/docs/method/political-vision' },
          ],
        },
        {
          title: 'Knowledge Graph',
          items: [
            { label: 'Atoms', to: '/docs/knowledge-graph/atoms' },
            { label: 'Crossings', to: '/docs/knowledge-graph/crossings' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'GitHub', href: 'https://github.com/trivoallan/groove-engineering' },
          ],
        },
      ],
      copyright: `AGPLv3 — Le Malentendu. <em>non = malentendu</em>`,
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
