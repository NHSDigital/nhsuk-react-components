import React from 'react';
import { storiesOf } from '@storybook/react';
import { SubNavigation } from '../src';

const stories = storiesOf('Sub Navigation Panel', module);

stories.add('Standard', () => (
  <SubNavigation>
    <SubNavigation.SubNavigationItem text="Hello world" target="#" active></SubNavigation.SubNavigationItem>
    <SubNavigation.SubNavigationItem text="Hello world" target="#"></SubNavigation.SubNavigationItem>
    <SubNavigation.SubNavigationItem text="Hello world" target="#"></SubNavigation.SubNavigationItem>
  </SubNavigation>
));
