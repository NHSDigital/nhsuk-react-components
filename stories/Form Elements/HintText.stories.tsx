import React from 'react';
import { HintText } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HintText> = {
  title: 'Form Elements/HintText',
  component: HintText,
};
export default meta;
type Story = StoryObj<typeof HintText>;

export const Standard: Story = {
  render: (args) => (
    <HintText>
      It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34
      56 C’.
    </HintText>
  ),
};
