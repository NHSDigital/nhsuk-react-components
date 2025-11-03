import { type Meta, type StoryObj } from '@storybook/react-vite';

import { HintText } from '#components/form-elements/hint-text/index.js';

const meta: Meta<typeof HintText> = {
  title: 'Form Elements/HintText',
  component: HintText,
};
export default meta;
type Story = StoryObj<typeof HintText>;

export const Standard: Story = {
  args: {
    children: 'Do not include personal information like your name, date of birth or NHS number',
  },
  render: (args) => <HintText {...args} />,
};
