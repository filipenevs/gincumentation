import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Gincumentation',
  tagline: 'Unofficial Gin Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://filipenevs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gincumentation/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'filipenevs', // Usually your GitHub org/user name.
  projectName: 'gincumentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      // 'pt-BR': {
      //   label: 'Português (Brasil)',
      //   direction: 'ltr',
      //   htmlLang: 'pt-BR',
      //   calendar: 'gregory',
      //   path: 'pt-br',
      // },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/filipenevs/gincumentation/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-DLG773JKBY',
          anonymizeIP: true
        }
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: './sidebars.ts',
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Gincumentation',
      logo: {
        alt: 'Gin Logo',
        src: 'img/gin-logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: 'api/intro',
          label: 'API',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://github.com/filipenevs/gincumentation',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/gin-gonic/gin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
          ],
        },        
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/filipenevs/gincumentation',
            },
          ],
        },
      ],
      copyright: `Built with 💙 and Docusaurus | Made in 🇧🇷`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
