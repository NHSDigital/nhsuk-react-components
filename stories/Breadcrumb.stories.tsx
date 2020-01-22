/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb } from '../src';

const stories = storiesOf('Breadcrumb', module);

stories.add('Breadcrumb', () => (
  <Breadcrumb>
    <Breadcrumb.Item href="/level/one">Level One</Breadcrumb.Item>
    <Breadcrumb.Item href="/level/two">Level Two</Breadcrumb.Item>
    <Breadcrumb.Item href="/level/three">Level Three</Breadcrumb.Item>
    <Breadcrumb.Back href="/level/three">Back to Level Three</Breadcrumb.Back>
  </Breadcrumb>
));
