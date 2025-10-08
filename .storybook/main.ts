import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)', '../stories/**/*.mdx'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  viteFinal(config) {
    return mergeConfig(config, {
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
      plugins: [
        tsConfigPaths({
          projects: ['./tsconfig.dev.json', './tsconfig.build.json'],
        }),
      ],
    });
  },
};

export default config;
