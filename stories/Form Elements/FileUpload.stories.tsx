import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { FileUpload } from '#components/form-elements/file-upload/index.js';

const meta: Meta<typeof FileUpload> = {
  title: 'Form Elements/File upload',
  component: FileUpload,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the file upload component and when to use it, visit the [design system
          in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/file-upload) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
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

export const Default: Story = {
  name: 'File upload default',
};

export const WithHint: Story = {
  name: 'File upload with hint',
  args: {
    hint: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder',
  },
};

export const WithError: Story = {
  name: 'File upload with error message',
  args: {
    error: 'The selected file must be a JPG, BMP or TIF',
  },
};

export const WithErrorAndHint: Story = {
  name: 'File upload with error message and hint',
  args: {
    error: 'The selected file must be a JPG, BMP or TIF',
    hint: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder',
  },
};

export const WithSmallPrimaryButton: Story = {
  name: 'File upload with small primary button',
  args: {
    chooseFilesButtonClassList: ['nhsuk-button--small'],
  },
};

export const WithSecondaryButton: Story = {
  name: 'File upload with secondary button',
  args: {
    chooseFilesButtonClassList: ['nhsuk-button--secondary'],
  },
};

export const WithSmallSecondaryButton: Story = {
  name: 'File upload with small secondary button',
  args: {
    chooseFilesButtonClassList: ['nhsuk-button--small', 'nhsuk-button--secondary'],
  },
};

export const WithMultiple: Story = {
  name: 'File upload with multiple',
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
  name: 'File upload with translations',
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
  name: 'File upload disabled',
  args: {
    disabled: true,
  },
};
