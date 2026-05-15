import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ErrorSummary } from '#components/form-elements/error-summary/index.js';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/nhsuk-frontend/src/nhsuk/components/error-summary" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation notes
 *
 * The `ErrorSummary` component has three subcomponents:
 *
 * - `ErrorSummary.Title`
 * - `ErrorSummary.List`
 * - `ErrorSummary.ListItem`
 */
const meta: Meta<typeof ErrorSummary> = {
  title: 'Form Elements/Error summary',
  component: ErrorSummary,
};

export default meta;
type Story = StoryObj<typeof ErrorSummary>;

export const Default: Story = {
  name: 'Error summary default',
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <p>Describe the errors and how to correct them</p>
      <ErrorSummary.List>
        <ErrorSummary.ListItem href="#example-day">
          Date of birth must be in the past
        </ErrorSummary.ListItem>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
};

export const WithMultipleErrors: Story = {
  name: 'Error summary with multiple errors',
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.List>
        <ErrorSummary.ListItem href="#example-first-name">
          Enter your first name
        </ErrorSummary.ListItem>
        <ErrorSummary.ListItem href="#example-last-name">
          Enter your last name
        </ErrorSummary.ListItem>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
};

export const WithoutDescription: Story = {
  name: 'Error summary without description',
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.List>
        <ErrorSummary.ListItem href="#example-day">
          Date of birth must be in the past
        </ErrorSummary.ListItem>
      </ErrorSummary.List>
    </ErrorSummary>
  ),
};

export const WithoutErrorList: Story = {
  name: 'Error summary without error list',
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <p>Describe the errors and how to correct them</p>
    </ErrorSummary>
  ),
};

export const WithAutoFocusDisabled: Story = {
  name: 'Error summary with auto-focus disabled',
  args: {
    disableAutoFocus: true,
  },
  render: Default.render,
};
