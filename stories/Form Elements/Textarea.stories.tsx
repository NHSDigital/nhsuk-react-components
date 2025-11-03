import { type Meta, type StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { TextInput } from '#components/form-elements/text-input/index.js';
import { Textarea } from '#components/form-elements/textarea/index.js';

const meta: Meta<typeof Textarea> = {
  title: 'Form Elements/Textarea',
  component: Textarea,
  args: {
    label: 'Can you provide more detail?',
    labelProps: { isPageHeading: true, size: 'l' },
    hint: 'Do not include personal information, like your name, date of birth or NHS number',
    id: 'example',
    name: 'example',
    rows: 5,
  },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Standard: Story = {};

export const TextareaWithAutoCompleteAttribute: Story = {
  args: {
    autoComplete: 'street-address',
  },
};

export const TextareaWithError: Story = {
  render: function TextareaWithErrorRender(args) {
    const [error, setError] = useState<string>('You must provide an explanation');
    return (
      <>
        <Textarea error={error} {...args} />
        <TextInput onChange={(e) => setError(e.currentTarget.value)} value={error} />
      </>
    );
  },

  name: 'Textarea With Error (String)',
};
