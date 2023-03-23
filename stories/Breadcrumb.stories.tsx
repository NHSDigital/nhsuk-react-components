import React from 'react';
import { Breadcrumb } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Standard: Story = {
  render: () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/level/one">Level One</Breadcrumb.Item>
      <Breadcrumb.Item href="/level/two">Level Two</Breadcrumb.Item>
      <Breadcrumb.Item href="/level/three">Level Three</Breadcrumb.Item>
      <Breadcrumb.Back href="/level/three">Back to Level Three</Breadcrumb.Back>
    </Breadcrumb>
  ),
};
