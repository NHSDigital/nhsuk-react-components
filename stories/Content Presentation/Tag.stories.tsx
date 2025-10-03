import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';
import { Tag } from 'nhsuk-react-components';

const meta: Meta<typeof Tag> = {
  title: 'Content Presentation/Tag',
  component: Tag,
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const StandardTag: Story = { args: { children: 'Standard' } };

export const AllColours: Story = {
  render: (args) => (
    <div className="tag-wrapper">
      <Tag modifier="white">Started</Tag>
      <Tag modifier="grey">Not started</Tag>
      <Tag modifier="green">New</Tag>
      <Tag modifier="aqua-green">Active</Tag>
      <Tag modifier="blue">Pending</Tag>
      <Tag modifier="purple">Received</Tag>
      <Tag modifier="pink">Sent</Tag>
      <Tag modifier="red">Rejected</Tag>
      <Tag modifier="orange">Declined</Tag>
      <Tag modifier="yellow">Delayed</Tag>
    </div>
  ),
};
