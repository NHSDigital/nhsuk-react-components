import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { DoAndDontList } from '#components/content-presentation/do-and-dont-list/index.js';

const meta: Meta<typeof DoAndDontList> = {
  title: "Content Presentation/Do and Don't list",
  component: DoAndDontList,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the do and don&apos;t list component and when to use it, visit the
          [design system in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/do-and-dont-lists) for
          guidance, examples and options.
        </Markdown>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof DoAndDontList>;

export const Do: Story = {
  name: "Do and Don't list (do)",
  args: {
    listType: 'do',
  },
  render: (args) => (
    <DoAndDontList {...args}>
      <DoAndDontList.Item>
        cover blisters that are likely to burst with a soft plaster or dressing
      </DoAndDontList.Item>
      <DoAndDontList.Item>wash your hands before touching a burst blister</DoAndDontList.Item>
      <DoAndDontList.Item>
        allow the fluid in a burst blister to drain before covering it with a plaster or dressing
      </DoAndDontList.Item>
    </DoAndDontList>
  ),
};

export const Dont: Story = {
  name: "Do and Don't list (don't)",
  args: {
    listType: 'dont',
  },
  render: (args) => (
    <DoAndDontList {...args}>
      <DoAndDontList.Item>burst a blister yourself</DoAndDontList.Item>
      <DoAndDontList.Item>peel the skin off a burst blister</DoAndDontList.Item>
      <DoAndDontList.Item>pick at the edges of the remaining skin</DoAndDontList.Item>
      <DoAndDontList.Item>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoAndDontList.Item>
    </DoAndDontList>
  ),
};

export const CustomPrefixText: Story = {
  name: "Do and Don't list with custom prefix",
  args: {
    listType: 'dont',
  },
  render: (args) => (
    <DoAndDontList {...args}>
      <DoAndDontList.Item prefixText="You must not">burst a blister yourself</DoAndDontList.Item>
      <DoAndDontList.Item prefixText={undefined}>
        peel the skin off a burst blister
      </DoAndDontList.Item>
      <DoAndDontList.Item prefixText={null}>
        pick at the edges of the remaining skin
      </DoAndDontList.Item>
      <DoAndDontList.Item prefixText={<span>please dont </span>}>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoAndDontList.Item>
      <DoAndDontList.Item>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoAndDontList.Item>
    </DoAndDontList>
  ),
};
