import React from 'react';
import { ErrorSummary } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-summary" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `ErrorSummary` component has four subcomponents:
 *
 * - `ErrorSummary.Title`
 * - `ErrorSummary.Body`
 * - `ErrorSummary.List`
 * - `ErrorSummary.Item`
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { ErrorSummary } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <ErrorSummary>
 *             <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
 *             <ErrorSummary.Body>
 *                 <p>Optional description of the errors and how to correct them</p>
 *                 <ErrorSummary.List>
 *                     <ErrorSummary.Item href="#example-error-1">
 *                         Link to error with explanation
 *                     </ErrorSummary.Item>
 *                     <ErrorSummary.Item href="#example-error-2">
 *                         Link to error with explanation
 *                     </ErrorSummary.Item>
 *                 </ErrorSummary.List>
 *             </ErrorSummary.Body>
 *         </ErrorSummary>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof ErrorSummary> = {
  title: 'Form Elements/ErrorSummary',
  component: ErrorSummary,
};
export default meta;
type Story = StoryObj<typeof ErrorSummary>;

ErrorSummary.Title.displayName = 'ErrorSummary.Title';
ErrorSummary.Body.displayName = 'ErrorSummary.Body';
ErrorSummary.List.displayName = 'ErrorSummary.List';
ErrorSummary.Item.displayName = 'ErrorSummary.Item';

export const Standard: Story = {
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body>
        <p>Optional description of the errors and how to correct them</p>
        <ErrorSummary.List>
          <ErrorSummary.Item href="#example-error-1">
            Link to error with explanation
          </ErrorSummary.Item>
          <ErrorSummary.Item href="#example-error-2">
            Link to error with explanation
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>
  ),
};

export const FocusOnMount: Story = {
  args: {
    autoFocus: true,
  },
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body>
        <p>Optional description of the errors and how to correct them</p>
        <ErrorSummary.List>
          <ErrorSummary.Item href="#example-error-1">
            Link to error with explanation
          </ErrorSummary.Item>
          <ErrorSummary.Item href="#example-error-2">
            Link to error with explanation
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>
  ),
};