import React, { MouseEvent, useState } from 'react';
import { Textarea, Button, Input } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  args: {
    label: 'Can you provide more detail?',
    hint: "Don't include personal or financial information, eg your National Insurance number or credit card details.",
    id: 'more-detail',
    name: 'more-detail',
    rows: 5,
  },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Standard: Story = {};
export const TextareaWithAutoCompleteAttribute: Story = {
  args: {
    autoComplete: 'street-address',
    label: 'Full address',
    id: 'textarea-with-autocomplete-attribute',
  },
};

export const TextareaWithErrorBoolean: Story = {
  render: function TextareaWithErrorBooleanRender() {
    const [error, setError] = useState<boolean>(true);

    return (
      <>
        <Textarea
          error={error}
          id="no-ni-reason"
          name="no-ni-reason"
          rows={5}
          label="Why can&#39;t you provide a National Insurance number?"
        />
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setError(!error);
          }}
        >
          Toggle Error
        </Button>
      </>
    );
  },

  name: 'Textarea With Error (Boolean)',
};

export const TextareaWithErrorString: Story = {
  render: function TextareaWithErrorStringRender() {
    const [error, setError] = useState<string>('You must provide an explanation');
    return (
      <>
        <Textarea
          error={error}
          id="no-ni-reason"
          name="no-ni-reason"
          rows={5}
          label="Why can&#39;t you provide a National Insurance number?"
        />
        <Input
          id="no-ni-reason-input"
          name="no-ni-reason-input"
          label="Use this input to change the error message"
          onChange={(e) => setError(e.currentTarget.value)}
          value={error}
        />
      </>
    );
  },

  name: 'Textarea With Error (String)',
};
