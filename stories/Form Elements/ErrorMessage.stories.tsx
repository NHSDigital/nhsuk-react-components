import { type Meta, type StoryObj } from '@storybook/react';
import { ErrorMessage } from 'nhsuk-react-components';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/error-message" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `ErrorMessage` component has a default `visuallyHiddenText` of "Error: ". This can be overriden using `visuallyHiddenText`.
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { ErrorMessage } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <ErrorMessage>Enter your full name</ErrorMessage>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof ErrorMessage> = {
  title: 'Form Elements/ErrorMessage',
  component: ErrorMessage,
  args: {
    children: 'Enter your full name',
  },
};
export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Standard: Story = {
  argTypes: { visuallyHiddenText: { control: false } },
};

export const CustomVisuallyHiddenText: Story = {
  args: { visuallyHiddenText: 'Custom' },
  argTypes: { visuallyHiddenText: { control: false } },
};

export const EmptyVisuallyHiddenText: Story = {
  args: { visuallyHiddenText: '' },
  argTypes: { visuallyHiddenText: { control: false } },
};
