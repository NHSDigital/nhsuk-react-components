import { type StorybookConfig } from '@storybook/react-vite';
import { mergeConfig, type InlineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { isLogIgnored } from '../rollup.config.js';

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
      build: {
        rollupOptions: {
          onwarn(warning, handler) {
            if (isLogIgnored(warning)) {
              return;
            }

            handler(warning);
          },
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
      plugins: [
        tsConfigPaths({
          projects: ['./tsconfig.dev.json', './tsconfig.build.json'],
        }),
      ],
    } satisfies InlineConfig);
  },
};

export default config;
