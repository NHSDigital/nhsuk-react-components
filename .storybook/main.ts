import { type StorybookConfig } from '@storybook/react-vite';
import preserveDirectives from 'rollup-preserve-directives';
import { type InlineConfig, mergeConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  addons: ['@storybook/addon-docs'],
  features: {
    actions: false,
    interactions: false,
  },
  framework: '@storybook/react-vite',

  staticDirs: ['../node_modules/nhsuk-frontend/dist/nhsuk'],
  stories: ['../stories/**/*.stories.@(ts|tsx)', '../stories/**/*.mdx'],

  viteFinal(config) {
    return mergeConfig(config, {
      build: {
        rollupOptions: {
          plugins: [preserveDirectives()],
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            quietDeps: true,
            loadPaths: ['node_modules'],
          },
        },
      },
      esbuild: {
        jsx: 'automatic',
      },
      plugins: [tsConfigPaths()],
    } satisfies InlineConfig);
  },
};

export default config;
