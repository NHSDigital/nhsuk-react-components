import { type Meta, type StoryObj } from '@storybook/react-vite';

import { FileUpload } from '#components/form-elements/file-upload/index.js';

const meta: Meta<typeof FileUpload> = {
  title: 'Form Elements/FileUpload',
  component: FileUpload,
  args: {
    id: 'input-example',
    name: 'example',
    label: 'Upload a file',
    labelProps: { isPageHeading: true, size: 'l' },
  },
  argTypes: {
    ref: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof FileUpload>;

export const Standard: Story = {};
export const WithHintText: Story = {
  args: {
    hint: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder',
  },
};

export const WithError: Story = {
  args: {
    error: 'The selected file must be a JPG, BMP or TIF',
  },
};

export const WithErrorAndHintText: Story = {
  args: {
    error: 'The selected file must be a JPG, BMP or TIF',
    hint: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder',
  },
};

export const WithSmallPrimaryButton: Story = {
  args: {
    chooseFilesButtonClassList: ['nhsuk-button--small'],
  },
};

export const WithSecondaryButton: Story = {
  args: {
    chooseFilesButtonClassList: ['nhsuk-button--secondary'],
  },
};

export const WithSmallSecondaryButton: Story = {
  args: {
    chooseFilesButtonClassList: ['nhsuk-button--small', 'nhsuk-button--secondary'],
  },
};

export const WithMultiple: Story = {
  args: {
    label: 'Upload multiple files',
    multiple: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
