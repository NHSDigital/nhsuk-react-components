import { create } from 'storybook/theming/create';

import packageJson from '../package.json' with { type: 'json' };

export default create({
  base: 'light',
  brandTitle: `NHS.UK React Components (v${packageJson.version})`,
  brandUrl: 'https://github.com/NHSDigital/nhsuk-react-components',
});
