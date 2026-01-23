import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Panel } from '#components/content-presentation/panel/index.js';
import { Button } from '#components/form-elements/button/index.js';

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

export const InterruptionPanel: Story = {
  name: 'Interruption panel',
  args: {
    interruption: true,
  },
  render: (args) => (
    <Panel {...args}>
      <Panel.Title size="l">Jodie Brown had a COVID-19 vaccine less than 3 months ago</Panel.Title>
      <p>They had a COVID-19 vaccine on 25 September 2025.</p>
      <p>
        For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.
      </p>
      <div className="nhsuk-button-group">
        <Button href="#/continue" reverse>
          Continue anyway
        </Button>
        <a href="#/cancel">Cancel</a>
      </div>
    </Panel>
  ),
};

export const InterruptionPanelCancel: Story = {
  name: 'Interruption panel for confirmation to cancel',
  args: {
    interruption: true,
  },
  render: (args) => (
    <Panel {...args}>
      <Panel.Title size="l">Confirm you want to cancel your hospital appointment</Panel.Title>
      <p>
        You will be able to reschedule your appointment for another time, but this may delay your
        treatment.
      </p>
      <p>Cancelling your appointment cannot be undone.</p>
      <div className="nhsuk-button-group">
        <Button href="#/cancel" reverse>
          Cancel appointment
        </Button>
        <a href="#/change">Change my weight</a>
      </div>
    </Panel>
  ),
};

export const InterruptionPanelContinue: Story = {
  name: 'Interruption panel for confirmation to continue',
  args: {
    interruption: true,
  },
  render: (args) => (
    <Panel {...args}>
      <Panel.Title size="l">Is your weight correct?</Panel.Title>
      <p>
        You entered your weight as <b>21.4 kilograms</b>. This is lower than expected.
      </p>
      <div className="nhsuk-button-group">
        <Button href="#/continue" reverse>
          Yes, this is correct
        </Button>
        <a href="#/change">Change my weight</a>
      </div>
    </Panel>
  ),
};
