import { type StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)', '../stories/**/*.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
