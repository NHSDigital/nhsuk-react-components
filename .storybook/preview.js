import './storybook.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: { order: ['Components', 'Patterns', 'FormBehaviour', 'Deprecated'] },
  },
};
