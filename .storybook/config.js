import { configure } from '@storybook/react';
import './storybook.scss';

configure(require.context('../stories', true, /\.stories\.tsx$/), module);
