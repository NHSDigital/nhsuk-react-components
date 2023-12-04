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
 *
 * The `DoDontList.Item` component can also accept a `prefixText` prop, which can be used to override the default prefix text.
 *
 * See the <b><a href="#custom-prefix-text" >custom prefix text</a></b> story for an example.
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
  render: () => (
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
  render: () => (
    <DoDontList listType="dont">
      <DoDontList.Item>burst a blister yourself</DoDontList.Item>
      <DoDontList.Item>peel the skin off a burst blister</DoDontList.Item>
      <DoDontList.Item>pick at the edges of the remaining skin</DoDontList.Item>
      <DoDontList.Item>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoDontList.Item>
    </DoDontList>
  ),
};

/**
 * By default DoDontList's of type "dont" will have Items prefixed with `do not`
 *
 * This is the recommended usage, <b><a href="https://service-manual.nhs.uk/design-system/components/do-and-dont-lists#research">as stated in the Service Manual</a></b>
 *
 * However, if you need to override this, you can supply a `prefixText` prop to the `DoDontList.Item` component.
 *
 * This is optional and of type `ReactNode`, so you can supply a string, a JSX element, or `undefined` or `null`
 *
 * See the table below and click the `Show code` button on the story for examples of each.
 *
 * | Value     | Outcome                                     |
 * |-----------|---------------------------------------------|
 * | undefined | The default `do not` text will be displayed |
 * | null      | There will be no prefix                     |
 * | string    | The string will be displayed                |
 * | JSX       | The JSX will be rendered, such as `<span>`  |
 */
export const CustomPrefixText: Story = {
  render: () => (
    <DoDontList listType="dont">
      <DoDontList.Item prefixText="You must not">burst a blister yourself</DoDontList.Item>
      <DoDontList.Item prefixText={undefined}>peel the skin off a burst blister</DoDontList.Item>
      <DoDontList.Item prefixText={null}>pick at the edges of the remaining skin</DoDontList.Item>
      <DoDontList.Item prefixText={<span>please dont </span>}>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoDontList.Item>
      <DoDontList.Item>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoDontList.Item>
    </DoDontList>

  ),
}
