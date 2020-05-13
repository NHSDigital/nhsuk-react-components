import { configure, addParameters } from '@storybook/react';
import './storybook.scss';
import NHSTheme from './theme';

addParameters({
  options: {
    theme: NHSTheme,
  },
});

configure(require.context('../stories', true, /TestFormGroup\.stories\.tsx$/), module);

