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

export const Primary: Story = {
  args: {
    children: 'Save and continue',
  },
};

export const SmallPrimary: Story = {
  args: {
    small: true,
    children: 'Save and continue',
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
    children: 'Find my location',
  },
};

export const SmallSecondary: Story = {
  args: {
    secondary: true,
    small: true,
    children: 'Find my location',
  },
};

export const Warning: Story = {
  args: {
    warning: true,
    children: 'Yes, delete this vaccine',
  },
};

export const SmallWarning: Story = {
  args: {
    warning: true,
    small: true,
    children: 'Yes, delete this vaccine',
  },
};

export const Login: Story = {
  args: {
    login: true,
    children: 'Continue to NHS login',
  },
};

export const SmallLogin: Story = {
  args: {
    login: true,
    small: true,
    children: 'Continue to NHS login',
  },
};

export const Reverse: Story = {
  args: {
    reverse: true,
    children: 'Log out',
  },
};

export const SmallReverse: Story = {
  args: {
    reverse: true,
    small: true,
    children: 'Log out',
  },
};

/**
 *
 * Disabled buttons have poor contrast and can confuse some users. Only use them if user research shows it makes things easier for users to understand.
 *
 */

export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } };
export const LinkButton: Story = { args: { href: '/', children: 'As a Link' } };
export const ForceButton: Story = { args: { as: 'button', children: 'As a Button' } };
export const ForceAnchor: Story = { args: { as: 'a', children: 'As an Anchor' } };

/**
 * You can test this button by opening the browser console. It will log the current dateTime once per debounce.
 */
export const PreventDoubleClickButton: Story = {
  args: {
    preventDoubleClick: true,
    onClick: () => console.log(new Date()),
    children: 'Debounced Button',
  },
};

export const PreventDoubleClickLinkButton: Story = {
  args: {
    preventDoubleClick: true,
    href: '#',
    onClick: () => console.log(new Date()),
    children: 'Debounced Button as Link',
  },
};
