import type { StorybookConfig } from '@storybook/sveltekit';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|ts|svelte)"
  ],
  "addons": [
    "@storybook/addon-svelte-csf",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/sveltekit",
    "options": {}
  },
  async viteFinal(config) {
    // Ensure Vite handles .svelte files correctly in Storybook
    return config;
  }
};
export default config;