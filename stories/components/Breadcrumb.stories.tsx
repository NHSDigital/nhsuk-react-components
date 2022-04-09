import type { Story } from '@storybook/react';
import React from 'react';
import { Breadcrumb } from '../../src';

export const StandardBreadcrumb: Story = () => (
  <Breadcrumb>
    <Breadcrumb.Item href="/level/one">Level One</Breadcrumb.Item>
    <Breadcrumb.Item href="/level/two">Level Two</Breadcrumb.Item>
    <Breadcrumb.Item href="/level/three">Level Three</Breadcrumb.Item>
    <Breadcrumb.Back href="/level/three">Back to Level Three</Breadcrumb.Back>
  </Breadcrumb>
);

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  subcomponents: { Item: Breadcrumb.Item, Back: Breadcrumb.Back },
};
