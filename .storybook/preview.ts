import type { Preview } from '@storybook/sveltekit'

import '../src/app.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: {name: 'Dark', value: '#0f172b'},

      }
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  initialGlobals: {

    backgrounds: {value: 'dark'}
  }
};

export default preview;