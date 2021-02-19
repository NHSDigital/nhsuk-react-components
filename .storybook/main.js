module.exports = {
  stories: ['../stories/*.stories.@(ts|tsx)', '../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/preset-scss'],

  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
  },
};
