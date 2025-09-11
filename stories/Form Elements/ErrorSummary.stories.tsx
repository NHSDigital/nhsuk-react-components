import React from 'react';
import { ErrorSummary } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/error-summary" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `ErrorSummary` component has three subcomponents:
 *
 * - `ErrorSummary.Title`
 * - `ErrorSummary.List`
 * - `ErrorSummary.ListItem`
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
 *             <p>Describe the errors and how to correct them</p>
 *             <ErrorSummary.List>
 *                 <ErrorSummary.ListItem href="#example-error-1">
 *                     Date of birth must be in the past
 *                 </ErrorSummary.ListItem>
 *             </ErrorSummary.List>
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

export const Standard: Story = {
  render: (args) => (
    <ErrorSummary>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.List>
        <ErrorSummary.ListItem href="#example-error-1">Enter your full name</ErrorSummary.ListItem>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
};

export const WithDescription: Story = {
  render: (args) => (
    <ErrorSummary>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <p>Describe the errors and how to correct them</p>
      <ErrorSummary.List>
        <ErrorSummary.ListItem href="#example-error-1">
          Date of birth must be in the past
        </ErrorSummary.ListItem>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
};

export const WithAutoFocusDisabled: Story = {
  render: (args) => (
    <ErrorSummary disableAutoFocus={true}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.List>
        <ErrorSummary.ListItem href="#example-error-1">
          Date of birth must be in the past
        </ErrorSummary.ListItem>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
};
