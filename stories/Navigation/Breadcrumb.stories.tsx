import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Breadcrumb } from '#components/navigation/breadcrumb/index.js';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/breadcrumb" target="_blank">here</a>.
 */
const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
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

export const Standard: Story = {
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
