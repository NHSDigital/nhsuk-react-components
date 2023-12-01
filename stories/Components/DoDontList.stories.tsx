import React from 'react';
import { DoDontList } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/do-dont-list" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `DoDontList` component has one subcomponent: `DoDontList.Item`.
 *
 * As long as a `listType` is supplied to the `DoDontList` component, all subcomponents will render as desired. If you require a `DoDontList.Item` to be different, a `listItemType` prop can be supplied to force the type.
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { DoDontList } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <DoDontList listType="do">
 *             <DoDontList.Item>
 *                 cover blisters that are likely to burst with a soft plaster or dressing
 *             </DoDontList.Item>
 *             <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
 *             <DoDontList.Item>
 *                 allow the fluid in a burst blister to drain before covering it with a plaster or dressing
 *             </DoDontList.Item>
 *         </DoDontList>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof DoDontList> = {
  title: 'Components/DoDontList',
  component: DoDontList,
};
export default meta;
type Story = StoryObj<typeof DoDontList>;

export const Do: Story = {
  render: (args) => (
    <DoDontList listType="do">
      <DoDontList.Item>
        cover blisters that are likely to burst with a soft plaster or dressing
      </DoDontList.Item>
      <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
      <DoDontList.Item>
        allow the fluid in a burst blister to drain before covering it with a plaster or dressing
      </DoDontList.Item>
    </DoDontList>
  ),
};

export const Dont: Story = {
  render: (args) => (
    <DoDontList listType="dont">
      <DoDontList.Item>do not burst a blister yourself</DoDontList.Item>
      <DoDontList.Item>do not peel the skin off a burst blister</DoDontList.Item>
      <DoDontList.Item>do not pick at the edges of the remaining skin</DoDontList.Item>
      <DoDontList.Item>
        do not wear the shoes or use the equipment that caused your blister until it heals
      </DoDontList.Item>
    </DoDontList>
  ),
};
