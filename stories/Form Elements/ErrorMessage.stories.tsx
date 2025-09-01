import { ErrorMessage } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/error-message" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `ErrorMessage` component has a default `visuallyHiddenText` of "Error: ". This can be overriden, or disabled using `visuallyHiddenText={false}`.
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
 *         <ErrorMessage>Error!</ErrorMessage>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof ErrorMessage> = {
  title: 'Form Elements/ErrorMessage',
  component: ErrorMessage,
  args: {
    children: 'Error message about full name goes here',
  },
};
export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Standard: Story = {
  argTypes: { visuallyHiddenText: { control: false } },
};
export const NoVisuallyHiddenText: Story = {
  args: { visuallyHiddenText: false },
  argTypes: { visuallyHiddenText: { control: false } },
};
export const CustomVisuallyHiddenText: Story = { args: { visuallyHiddenText: 'Custom Text' } };
