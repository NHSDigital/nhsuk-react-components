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
    i18n: {
      chooseFilesButton: 'Choose files',
      dropInstruction: 'or drop files',
      noFileChosen: 'No files chosen',
    },
  },
};

export const WithTranslations: Story = {
  args: {
    label: 'Upload multiple files',
    multiple: true,
    i18n: {
      chooseFilesButton: 'Dewiswch ffeil',
      dropInstruction: 'neu ollwng ffeil',
      noFileChosen: "Dim ffeil wedi'i dewis",
      multipleFilesChosen: {
        other: "%{count} ffeil wedi'u dewis",
        one: "%{count} ffeil wedi'i dewis",
      },
      enteredDropZone: "Wedi mynd i mewn i'r parth gollwng",
      leftDropZone: "Parth gollwng i'r chwith",
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
