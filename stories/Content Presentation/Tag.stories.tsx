import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Tag } from '#components/content-presentation/tag/index.js';

const meta: Meta<typeof Tag> = {
  title: 'Content Presentation/Tag',
  component: Tag,
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  name: 'Tag default',
  args: {
    children: 'Active',
  },
};

export const Colours: Story = {
  name: 'Tag colours',
  render: () => (
    <>
      <p>
        <Tag modifier="white">In progress</Tag>
      </p>
      <p>
        <Tag modifier="grey">Inactive</Tag>
      </p>
      <p>
        <Tag modifier="green">New</Tag>
      </p>
      <p>
        <Tag modifier="aqua-green">Active</Tag>
      </p>
      <p>
        <Tag modifier="blue">Pending</Tag>
      </p>
      <p>
        <Tag modifier="purple">Received</Tag>
      </p>
      <p>
        <Tag modifier="pink">Sent</Tag>
      </p>
      <p>
        <Tag modifier="red">Rejected</Tag>
      </p>
      <p>
        <Tag modifier="orange">Declined</Tag>
      </p>
      <p>
        <Tag modifier="yellow">Delayed</Tag>
      </p>
    </>
  ),
};
