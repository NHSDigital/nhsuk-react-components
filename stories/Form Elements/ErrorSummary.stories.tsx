import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { ErrorSummary } from '#components/form-elements/error-summary/index.js';

const meta: Meta<typeof ErrorSummary> = {
  title: 'Form Elements/Error summary',
  component: ErrorSummary,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the error summary component and when to use it, visit the [design
          system in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/error-summary) for
          guidance, examples and options.
        </Markdown>
      ),
    },
  },
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
