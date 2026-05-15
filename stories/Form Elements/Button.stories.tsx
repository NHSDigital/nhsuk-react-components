import { type Meta, type StoryObj } from '@storybook/react-vite';

import { Button } from '#components/form-elements/button/index.js';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/button" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation notes
 *
 * The `Button` component from `nhsuk-react-components` will either render a standard `<button>` or `<a>` element depending on whether an `href` prop is supplied.
 *
 * If you want to use a specific component instead of the wrapper, you can supply the `as="a"` or `as="button"` props.
 *
 * ## Usage
 *
 * ### As a button
 *
 * ```jsx
 * import { Button } from "nhsuk-react-components";
 *
 * const Element = () => {
 *   return (
 *     <Button>Button</Button>
 *   );
 * }
 * ```
 *
 * ### As a link
 *
 * ```jsx
 * import { Button } from "nhsuk-react-components";
 *
 * const ButtonEl = () => (
 *   <Button as="a">Anchor</Button>
 * );
 *
 * const ButtonEl2 = () => (
 *   <Button href="/link">Anchor</Button>
 * );
 * ```
 */
const meta: Meta<typeof Button> = {
  title: 'Form Elements/Button',
  component: Button,
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

/**
 * Disabled buttons have poor contrast and can confuse some users. Only use them if user research shows it makes things easier for users to understand.
 */
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

/**
 * You can test this button by opening the browser console. It will log the current dateTime once per debounce.
 */
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
