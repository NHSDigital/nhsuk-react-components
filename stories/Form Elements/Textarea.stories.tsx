import React, { MouseEvent, useState } from 'react';
import { Textarea, Button, TextInput } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  title: 'Form Elements/Textarea',
  component: Textarea,
  args: {
    id: 'example',
    name: 'example',
    rows: 5,
  },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Standard: Story = {
  args: {
    label: 'Can you provide more detail?',
    labelProps: { size: 'l' },
    hint: 'Do not include personal information, like your name, date of birth or NHS number',
  },
};

export const WithLabelAsPageHeading: Story = {
  args: {
    label: 'Can you provide more detail?',
    labelProps: { isPageHeading: true, size: 'l' },
    hint: 'Do not include personal information, like your name, date of birth or NHS number',
    autoComplete: 'street-address',
  },
};

export const TextareaWithAutoCompleteAttribute: Story = {
  args: {
    label: 'Can you provide more detail?',
    labelProps: { size: 'l' },
    hint: 'Do not include personal information, like your name, date of birth or NHS number',
    autoComplete: 'street-address',
  },
};

export const TextareaWithError: Story = {
  render: function TextareaWithErrorRender() {
    const [error, setError] = useState<string>('You must provide an explanation');
    return (
      <>
        <Textarea
          label="Can you provide more detail?"
          labelProps={{ size: 'l' }}
          hint="Do not include personal information, like your name, date of birth or NHS number"
          error={error}
          id="with-error-message"
          name="with-error-message"
          rows={5}
        />
        <TextInput onChange={(e) => setError(e.currentTarget.value)} value={error} />
      </>
    );
  },

  name: 'Textarea With Error (String)',
};
