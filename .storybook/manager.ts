import { addons } from 'storybook/manager-api';

import nhsTheme from './theme.js';

addons.setConfig({
  theme: nhsTheme,
});
