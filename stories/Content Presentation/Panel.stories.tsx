import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Panel } from '#components';

const meta: Meta<typeof Panel> = {
  title: 'Content Presentation/Panel',
  component: Panel,
};
export default meta;
type Story = StoryObj<typeof Panel>;

export const StandardPanel: Story = {
  render: (args) => (
    <Panel {...args}>
      <Panel.Title>Booking complete</Panel.Title>
      We have sent you a confirmation email
    </Panel>
  ),
};

export const PanelWithCustomHeadingLevel: Story = {
  render: (args) => (
    <Panel {...args}>
      <Panel.Title headingLevel="h2">Booking complete</Panel.Title>
      We have sent you a confirmation email
    </Panel>
  ),
};
