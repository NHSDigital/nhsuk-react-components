import React from 'react';
import { Breadcrumb } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/breadcrumb" target="_blank">here</a>.
 *
 *
 * ## Implementation Notes
 *
 * The `Breadcrumb` component contains two subcomponents: `Breadcrumb.Item` and `Breadcrumb.Back`. These are both anchor elements.
 *
 * The base `Breadcrumb` component has the default prop `aria-label` set to `"Breadcrumb"`. This is only a default prop and can be overridden.
 *
 * ## Usage
 *
 * ```jsx
 * import { Breadcrumb } from "nhsuk-react-components";
 *
 * const Link = () => {
 *     return (
 *         <Breadcrumb>
 *             <Breadcrumb.Item href="/level-one">Level one</Breadcrumb.Item>
 *             <Breadcrumb.Item href="/level-one/level-two">Level two</Breadcrumb.Item>
 *             <Breadcrumb.Item href="/level-one/level-two/level-three">Level three</Breadcrumb.Item>
 *             <Breadcrumb.Back href="/level-one/level-two/level-three">Back to Level three</Breadcrumb.Back>
 *         </Breadcrumb>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  render: (args) => (
    <Breadcrumb aria-label={args['aria-label']}>
      <Breadcrumb.Item href="/level/one">Level One</Breadcrumb.Item>
      <Breadcrumb.Item href="/level/two">Level Two</Breadcrumb.Item>
      <Breadcrumb.Item href="/level/three">Level Three</Breadcrumb.Item>
      <Breadcrumb.Back href="/level/three">Back to Level Three</Breadcrumb.Back>
    </Breadcrumb>
  ),
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

Breadcrumb.Item.displayName = 'Breadcrumb.Item';
Breadcrumb.Back.displayName = 'Breadcrumb.Back';

export const Standard: Story = {};

export const OverrideAriaLabel: Story = {
  args: {
    'aria-label': 'custom-aria-label',
  },
};
