import { create } from '@storybook/theming';

export default create({
  base: 'light',
  background: 'white',
  colorPrimary: '#005eb8',
  colorSecondary: '#425563',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Frutiger W01", Arial, sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#212b32',
  textInverseColor: 'white',

  // Toolbar default and active colors
  barTextColor: 'rgba(255,255,255,0.8)',
  barSelectedColor: 'rgba(255,255,255,1)',
  barBg: '#005eb8',

  // Form colors
  inputBg: 'white',
  inputBorder: '#425563',
  inputTextColor: '#212b32',
  inputBorderRadius: 4,

  brandTitle: 'NHS.UK React Components',
  brandUrl: 'https://beta.nhs.uk/service-manual/',
  brandImage: 'https://assets.nhs.uk/images/nhs-logo.png',
});
