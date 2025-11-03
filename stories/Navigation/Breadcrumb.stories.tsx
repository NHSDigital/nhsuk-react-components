import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Breadcrumb } from '#components/navigation/breadcrumb/index.js';
import { Container } from '#components/layout/index.js';

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
    <Container>
      <Breadcrumb {...args}>
        <Breadcrumb.Item href="/level/one">Level One</Breadcrumb.Item>
        <Breadcrumb.Item href="/level/two">Level Two</Breadcrumb.Item>
        <Breadcrumb.Item href="/level/three">Level Three</Breadcrumb.Item>
        <Breadcrumb.Back href="/level/three">Level Three</Breadcrumb.Back>
      </Breadcrumb>
    </Container>
  ),
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Standard: Story = {};

export const OverrideAriaLabel: Story = {
  args: {
    'aria-label': 'custom-aria-label',
  },
};
