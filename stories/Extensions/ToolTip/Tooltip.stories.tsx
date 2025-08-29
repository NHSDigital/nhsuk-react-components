import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { WarningIcon } from '@components/icons';
import Tooltip from '@components/tooltip/Tooltip';
const meta: Meta<typeof Tooltip> = {
  title: 'Extensions/Tooltip',
  component: Tooltip,
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Standard: Story = {
  render: () => (
    <div className="tooltip-demo">
      <Tooltip tooltip="Hello!">
        <div>Hover Over Me!</div>
      </Tooltip>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="tooltip-demo">
      <Tooltip tooltip="Data Quality Issues">
        <WarningIcon />
      </Tooltip>
    </div>
  ),
};
