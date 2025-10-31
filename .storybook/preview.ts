import type { Preview } from '@storybook/sveltekit'

import '../src/app.css';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: {name: 'Dark', value: '#0f172b'},

      }
    },
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
  initialGlobals: {
    viewport: {value: 'desktop'},
    backgrounds: {value: 'dark'}
  }
};

export default preview;