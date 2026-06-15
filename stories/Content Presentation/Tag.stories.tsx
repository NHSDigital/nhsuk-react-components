import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Tag } from '#components/content-presentation/tag/index.js';

const meta: Meta<typeof Tag> = {
  title: 'Content Presentation/Tag',
  component: Tag,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the tag component and when to use it, visit the [design system in the
          NHS digital service manual](https://service-manual.nhs.uk/design-system/components/tag)
          for guidance, examples and options.
        </Markdown>
      ),
    },
  },
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
        <Tag colour="white">In progress</Tag>
      </p>
      <p>
        <Tag colour="grey">Inactive</Tag>
      </p>
      <p>
        <Tag colour="green">New</Tag>
      </p>
      <p>
        <Tag colour="aqua-green">Active</Tag>
      </p>
      <p>
        <Tag colour="blue">Pending</Tag>
      </p>
      <p>
        <Tag colour="purple">Received</Tag>
      </p>
      <p>
        <Tag colour="pink">Sent</Tag>
      </p>
      <p>
        <Tag colour="red">Rejected</Tag>
      </p>
      <p>
        <Tag colour="orange">Declined</Tag>
      </p>
      <p>
        <Tag colour="yellow">Delayed</Tag>
      </p>
    </>
  ),
};
