import { Label } from '../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  args: {
    children: 'National Insurance Number',
    size: undefined,
    bold: false,
    isPageHeading: false,
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Standard: Story = {};
export const BoldLabel: Story = {
  args: {
    bold: true,
  },
};
export const PageHeadingLabel: Story = {
  args: {
    isPageHeading: true,
  },
};
export const CustomSizeLabel: Story = {
  args: {
    size: 'm',
  },
};
