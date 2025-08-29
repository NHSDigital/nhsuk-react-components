import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tag from '@components/content-presentation/tag/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Extensions/Tags',
  component: Tag,
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  render: () => (
    <div className="tag-demo">
      <Tag>Standard</Tag>
      <Tag>Done</Tag>
      <Tag color="white">Started</Tag>
      <Tag color="grey">Not Started</Tag>
      <Tag color="blue">Ready to submit</Tag>
      <Tag color="red">FP69</Tag>
      <Tag color="orange">Ceased - no cervix</Tag>
    </div>
  ),
};

export const Colours: Story = {
  render: () => (
    <div className="tag-demo">
      <Tag>Standard</Tag>
      <Tag color="white">Started</Tag>
      <Tag color="grey">Not Started</Tag>
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
