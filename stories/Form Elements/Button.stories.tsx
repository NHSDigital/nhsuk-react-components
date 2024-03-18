import React from 'react';
import { Button as LibButton } from '../../src';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonLinkProps, ButtonProps } from '@components/form-elements/button/Button';

/**
 *
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/button" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * When importing `Button` from `nhsuk-react-components`, the `ButtonWrapper` component is imported. This will either render a standard `Button` or `ButtonLink` component depending on whether a `href` prop is supplied.
 *
 * If you want to use a specific component instead of the wrapper, you can supply the `as="a"` or `as="button"` props.
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { Button } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <Button>Button</Button>
 *     );
 * }
 * ```
 *
 * ### As a Link
 *
 * ```jsx
 * import { Button } from "nhsuk-react-components";
 *
 * const ButtonEl = () => (
 *     <Button as="a">Anchor</Button>
 * );
 *
 * const ButtonEl2 = () => (
 *     <Button href="/link">Anchor</Button>
 * );
 * ```
 */
const meta: Meta<typeof LibButton> = {
  title: 'Form Elements/Button',
  component: LibButton,
  render: (args) => <Button {...args} />,
};

/**
 * There might be a better way to do this, but this is the only way I could get storybook not to use the name of the default exported component
 * which in this case is <ButtonWrapper> and not <Button>
 */
function Button(props: ButtonLinkProps | ButtonProps) {
  return <LibButton {...props} />;
}

export default meta;
type Story = StoryObj<typeof LibButton>;

export const Primary: Story = {
  args: { children: 'Primary' },
  render: (args) => <Button {...args} />,
};
export const Secondary: Story = { args: { secondary: true, children: 'Secondary' } };
export const Reverse: Story = { args: { reverse: true, children: 'Reverse' } };
export const Disabled: Story = { args: { disabled: true, children: 'Disabled' } };
export const LinkButton: Story = { args: { href: '/', children: 'As a Link' } };
export const ForceButton: Story = { args: { as: 'button', children: 'As a Button' } };
export const ForceAnchor: Story = { args: { as: 'a', children: 'As an Anchor' } };
