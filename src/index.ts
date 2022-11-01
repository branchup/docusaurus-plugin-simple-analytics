import type { LoadContext, Plugin } from '@docusaurus/types';

export default function pluginSimpleAnalytics(context: LoadContext): Plugin {
  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-plugin-simple-analytics',

    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        postBodyTags: [
          {
            tagName: 'script',
            attributes: {
              async: true,
              defer: true,
              src: 'https://scripts.simpleanalyticscdn.com/latest.js',
            },
          },
          {
            tagName: 'noscript',
            innerHTML:
              '<img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" />',
          },
        ],
      };
    },
  };
}
