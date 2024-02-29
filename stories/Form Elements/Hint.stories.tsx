import React from 'react';
import { Hint } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Hint> = {
  title: 'Form Elements/Hint',
  component: Hint,
};
export default meta;
type Story = StoryObj<typeof Hint>;

export const Standard: Story = {
  render: (args) => (
    <Hint>
      It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34
      56 C’.
    </Hint>
  ),
};
