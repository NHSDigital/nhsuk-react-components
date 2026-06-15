import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button } from '#components/form-elements/button/index.js';

const meta: Meta<typeof Button> = {
  title: 'Form Elements/Button',
  component: Button,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the button component and when to use it, visit the [design system in
          the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/button) for guidance,
          examples and options.
        </Markdown>
      ),
    },
  },
  render: (args) => <Button {...args} />,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: 'Button default',
  args: {
    children: 'Save and continue',
  },
};

export const SmallDefault: Story = {
  name: 'Button default, small',
  args: {
    small: true,
    children: 'Save and continue',
  },
};

export const Secondary: Story = {
  name: 'Button secondary',
  args: {
    secondary: true,
    children: 'Find my location',
  },
};

export const SmallSecondary: Story = {
  name: 'Button secondary, small',
  args: {
    secondary: true,
    small: true,
    children: 'Find my location',
  },
};

export const Warning: Story = {
  name: 'Button warning',
  args: {
    warning: true,
    children: 'Yes, delete this vaccine',
  },
};

export const SmallWarning: Story = {
  name: 'Button warning, small',
  args: {
    warning: true,
    small: true,
    children: 'Yes, delete this vaccine',
  },
};

export const Login: Story = {
  name: 'Button login',
  args: {
    login: true,
    children: 'Continue to NHS login',
  },
};

export const SmallLogin: Story = {
  name: 'Button login, small',
  args: {
    login: true,
    small: true,
    children: 'Continue to NHS login',
  },
};

export const Reverse: Story = {
  name: 'Button reverse',
  args: {
    reverse: true,
    children: 'Log out',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const SmallReverse: Story = {
  name: 'Button reverse, small',
  args: {
    reverse: true,
    small: true,
    children: 'Log out',
  },
  globals: {
    backgrounds: { value: 'dark' },
  },
};

export const Disabled: Story = {
  name: 'Button disabled',
  args: {
    disabled: true,
    children: 'Disabled button',
  },
};

export const SmallDisabled: Story = {
  name: 'Button disabled, small',
  args: {
    small: true,
    disabled: true,
    children: 'Disabled button',
  },
};

export const AsALink: Story = {
  name: 'Button as a link',
  args: {
    href: '/',
    children: 'Link button',
  },
};

export const SmallAsALink: Story = {
  name: 'Button as a link, small',
  args: {
    href: '/',
    small: true,
    children: 'Link button',
  },
};

export const PreventDoubleClickButton: Story = {
  name: 'Button with double click prevented',
  args: {
    preventDoubleClick: true,
    onClick: () => console.log(new Date()),
    children: 'Save and continue',
  },
};

export const PreventDoubleClickLinkButton: Story = {
  name: 'Button as a link with double click prevented',
  args: {
    href: '#',
    preventDoubleClick: true,
    onClick: () => console.log(new Date()),
    children: 'Save and continue',
  },
};
