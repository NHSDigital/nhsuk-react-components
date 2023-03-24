import React from 'react';
import { Tag } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const StandardTag: Story = {};

export const AllColours: Story = {
  render: () => (
    <div className="tag-wrapper">
      <Tag color="white">Started</Tag>
      <Tag color="grey">Not started</Tag>
      <Tag color="green">New</Tag>
      <Tag color="aqua-green">Active</Tag>
      <Tag color="blue">Pending</Tag>
      <Tag color="purple">Received</Tag>
      <Tag color="pink">Sent</Tag>
      <Tag color="red">Rejected</Tag>
      <Tag color="orange">Declined</Tag>
      <Tag color="yellow">Delayed</Tag>
    </div>
  ),
};
