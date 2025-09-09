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
		plugins: [tsConfigPaths()],
		css: {
			preprocessorOptions: {
			scss: {
				// Hide deprecation noise coming from dependencies like nhsuk-frontend
				quietDeps: true,
				// Specifically silence the Dart Sass "misplaced-rest" deprecation
				// (Type cast to any in case your TS types don't include this yet)
				silenceDeprecations: ['misplaced-rest'],
				// Optional: ensure node_modules is in the Sass load path
				// includePaths: ['node_modules'],
			} as any,
			},
		},
		});
	}
};

export default config;
