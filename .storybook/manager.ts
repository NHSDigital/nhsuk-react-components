import { addons } from 'storybook/manager-api';
import nhsTheme from './theme';
import { startCase, upperFirst } from "lodash";

const sentenceCase = string => {
  if (typeof string !== 'string') return ''
  return upperFirst(startCase(string).toLowerCase())
}

addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) =>
      sentenceCase(name),
  },
  theme: nhsTheme
});
