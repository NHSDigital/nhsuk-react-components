import './storybook.scss';
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: { order: ['Migration Guides', 'Components', 'FormBehaviour', 'Deprecated'] },
    },
  },
};
export default preview;
