import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Breadcrumb } from '#components/navigation/breadcrumb/index.js';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the breadcrumb component and when to use it, visit the [design system
          in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/breadcrumbs) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
  argTypes: {
    'aria-label': {
      control: 'text',
      table: {
        defaultValue: { summary: 'Breadcrumb' },
      },
    },
  },
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">NHS services</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Hospitals</Breadcrumb.Item>
    </Breadcrumb>
  ),
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  name: 'Breadcrumb default',
};

export const OverrideAriaLabel: Story = {
  name: 'Breadcrumb with custom ARIA label',
  args: {
    'aria-label': 'custom-aria-label',
  },
};

export const OverrideBackLink: Story = {
  name: 'Breadcrumb with custom back link text',
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Advanced search</Breadcrumb.Item>
      <Breadcrumb.Back href="#">Search results</Breadcrumb.Back>
    </Breadcrumb>
  ),
};

export const Reverse: Story = {
  name: 'Breadcrumb reverse',
  args: {
    reverse: true,
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};
