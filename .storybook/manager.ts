import { addons } from '@storybook/manager-api';
import nhsTheme from './theme';
import { startCase, upperFirst } from 'lodash';

const sentenceCase = (name = '') => {
  if (!name || typeof name !== 'string') {
    return '';
  }

  return upperFirst(startCase(name).toLowerCase());
};

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) => sentenceCase(name),
  },
  theme: nhsTheme,
});
