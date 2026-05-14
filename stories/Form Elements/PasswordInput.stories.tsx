import { type Meta, type StoryObj } from '@storybook/react-vite';

import { PasswordInput } from '#components/form-elements/password-input/index.js';

const meta: Meta<typeof PasswordInput> = {
  title: 'Form Elements/Password input',
  component: PasswordInput,
  args: {
    id: 'input-example',
    name: 'example',
    label: 'Password',
    labelProps: { isPageHeading: true, size: 'l' },
  },
  argTypes: {
    ref: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  name: 'Password input default',
};

export const WithHint: Story = {
  name: 'Password input with hint',
  args: {
    hint: 'It probably has some letters, numbers and maybe even some symbols in it',
  },
};

export const WithError: Story = {
  name: 'Password input with error message',
  args: {
    error: 'Enter a password',
  },
};

export const WithErrorAndHint: Story = {
  name: 'Password input with error message and hint',
  args: {
    error: 'Enter a password',
    hint: 'It probably has some letters, numbers and maybe even some symbols in it',
  },
};

export const WithTranslations: Story = {
  name: 'Password input with translations',
  args: {
    label: 'Cyfrinair',
    i18n: {
      showPassword: 'Datguddia',
      hidePassword: 'Cuddio',
      showPasswordAriaLabel: 'Datgelu cyfrinair',
      hidePasswordAriaLabel: 'Cuddio cyfrinair',
      passwordShownAnnouncement: 'Mae eich cyfrinair yn weladwy.',
      passwordHiddenAnnouncement: "Mae eich cyfrinair wedi'i guddio.",
    },
  },
};
