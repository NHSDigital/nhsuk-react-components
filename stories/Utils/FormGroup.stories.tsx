import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FormGroup, TextInput } from 'src';
import HeadingLevel from '@components/utils/HeadingLevel';

/**
 * This component is designed as a grouping wrapper around one or more inputs on a form.
 * Typically, a consumer would use the `Fieldset` component which uses `FormGroup`, but there
 * may be occassions where the same `FormGroup` functionality may be desired without rendering a `<fieldset />` element.
 *
 *  ## Usage
 *
 *  ### Standard
 *
 *  ```jsx
 *  import { FormGroup, Fieldset, TextInput } from "nhsuk-react-components";
 *
 *  const Element = () => {
 *     return (
 *         <FormGroup>
 *             <HeadingLevel headingLevel="h3">What is your weight, in kilograms?</HeadingLevel>
 *             <TextInput id="weight" label="Kilograms" suffix="kg" />
 *         </FormGroup>
 *     );
 *  }
 *  ```
 */

const meta: Meta<typeof FormGroup> = {
  title: 'Utils/FormGroup',
  component: FormGroup,
  args: {
    enableErrorLine: true,
  },
};
export default meta;
type Story = StoryObj<typeof FormGroup>;

export const WithFormElement: Story = {
  render: (args) => (
    <FormGroup enableErrorLine={args.enableErrorLine}>
      <HeadingLevel headingLevel="h3">What is your weight, in kilograms?</HeadingLevel>
      <TextInput id="weight" label="Kilograms" suffix="kg" />
    </FormGroup>
  ),
};

export const WithFormElementInError: Story = {
  render: (args) => (
    <FormGroup enableErrorLine={args.enableErrorLine}>
      <HeadingLevel headingLevel="h3">What is your weight, in kilograms?</HeadingLevel>
      <TextInput error="Enter weight" id="weight" label="Kilograms" suffix="kg" />
    </FormGroup>
  ),
};
