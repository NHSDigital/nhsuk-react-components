import { Story } from '@storybook/react';
import React from 'react';
import { Tag } from '../../src';

export const StandardTag: Story = (args) => <Tag {...args}>Active</Tag>;

export const AllColours: Story = () => (
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
);

export default {
  title: 'Components/Tag',
  component: Tag,
};
