import { type Meta, type StoryObj } from '@storybook/react-vite';
import { Label } from '#components';

const meta: Meta<typeof Label> = {
  title: 'Form Elements/Label',
  component: Label,
  args: {
    children: 'National Insurance Number',
    size: undefined,
    isPageHeading: false,
  },
  argTypes: {
    size: { control: 'select', options: [undefined, 's', 'm', 'l', 'xl'] },
  },
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Standard: Story = {};

export const AsPageHeading: Story = {
  args: {
    isPageHeading: true,
  },
};

export const WithCustomSizeS: Story = {
  name: 'With Bold Text (S)',
  args: {
    size: 's',
  },
};

export const WithCustomSizeM: Story = {
  name: 'With Custom Size (M)',
  args: {
    size: 'm',
  },
};

export const WithCustomSizeL: Story = {
  name: 'With Custom Size (L)',
  args: {
    size: 'l',
  },
};

export const WithCustomSizeXL: Story = {
  name: 'With Custom Size (XL)',
  args: {
    size: 'xl',
  },
};
