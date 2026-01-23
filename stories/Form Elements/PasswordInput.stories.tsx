import { type Meta, type StoryObj } from '@storybook/react-vite';

import { PasswordInput } from '#components/form-elements/password-input/index.js';

const meta: Meta<typeof PasswordInput> = {
  title: 'Form Elements/PasswordInput',
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

export const Standard: Story = {};
export const WithHintText: Story = {
  args: {
    hint: 'It probably has some letters, numbers and maybe even some symbols in it',
  },
};

export const WithError: Story = {
  args: {
    error: 'Enter a password',
  },
};

export const WithErrorAndHintText: Story = {
  args: {
    error: 'Enter a password',
    hint: 'It probably has some letters, numbers and maybe even some symbols in it',
  },
};

export const WithTranslations: Story = {
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
