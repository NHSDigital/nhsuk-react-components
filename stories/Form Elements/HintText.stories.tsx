import { type Meta, type StoryObj } from '@storybook/react-vite';

import { HintText } from '#components/form-elements/hint-text/index.js';

const meta: Meta<typeof HintText> = {
  title: 'Form Elements/Hint text',
  component: HintText,
};

export default meta;
type Story = StoryObj<typeof HintText>;

export const Default: Story = {
  args: {
    children: 'Do not include personal information like your name, date of birth or NHS number',
  },
  render: (args) => <HintText {...args} />,
};
