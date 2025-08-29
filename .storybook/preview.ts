import './storybook.scss';
import { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Migration Guides',
          'Form Elements',
          'Content Presentation',
          'Navigation',
          'Layout',
          'Patterns',
        ],
      },
    },
  },

  tags: ['autodocs']
};
export default preview;
