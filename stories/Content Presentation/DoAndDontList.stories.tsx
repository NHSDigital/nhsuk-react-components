import React from 'react';
import { DoAndDontList } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/do-dont-list" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * ## Implementation Notes
 *
 * The `DoAndDontList` component has one subcomponent: `DoAndDontList.Item`.
 *
 * As long as a `listType` is supplied to the `DoAndDontList` component, all subcomponents will render as desired. If you require a `DoAndDontList.Item` to be different, a `listItemType` prop can be supplied to force the type.
 *
 *
 * The `DoAndDontList.Item` component can also accept a `prefixText` prop, which can be used to override the default prefix text.
 *
 * See the <b><a href="#custom-prefix-text" >custom prefix text</a></b> story for an example.
 *
 * ## Usage
 *
 * ### Standard
 *
 * ```jsx
 * import { DoAndDontList } from "nhsuk-react-components";
 *
 * const Element = () => {
 *     return (
 *         <DoAndDontList listType="do">
 *             <DoAndDontList.Item>
 *                 cover blisters that are likely to burst with a soft plaster or dressing
 *             </DoAndDontList.Item>
 *             <DoAndDontList.Item>wash your hands before touching a burst blister</DoAndDontList.Item>
 *             <DoAndDontList.Item>
 *                 allow the fluid in a burst blister to drain before covering it with a plaster or dressing
 *             </DoAndDontList.Item>
 *         </DoAndDontList>
 *     );
 * }
 * ```
 */
const meta: Meta<typeof DoAndDontList> = {
  title: 'Content Presentation/DoAndDontList',
  component: DoAndDontList,
};
export default meta;
type Story = StoryObj<typeof DoAndDontList>;

DoAndDontList.Item.displayName = 'DoAndDontList.Item';

export const Do: Story = {
  render: (args) => (
    <DoAndDontList listType="do">
      <DoAndDontList.Item>
        cover blisters that are likely to burst with a soft plaster or dressing
      </DoAndDontList.Item>
      <DoAndDontList.Item>wash your hands before touching a burst blister</DoAndDontList.Item>
      <DoAndDontList.Item>
        allow the fluid in a burst blister to drain before covering it with a plaster or dressing
      </DoAndDontList.Item>
    </DoAndDontList>
  ),
};

export const Dont: Story = {
  render: (args) => (
    <DoAndDontList listType="dont">
      <DoAndDontList.Item>burst a blister yourself</DoAndDontList.Item>
      <DoAndDontList.Item>peel the skin off a burst blister</DoAndDontList.Item>
      <DoAndDontList.Item>pick at the edges of the remaining skin</DoAndDontList.Item>
      <DoAndDontList.Item>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoAndDontList.Item>
    </DoAndDontList>
  ),
};

/**
 * By default DoAndDontList's of type "dont" will have Items prefixed with `do not`
 *
 * This is the recommended usage, <b><a href="https://service-manual.nhs.uk/design-system/components/do-and-dont-lists#research">as stated in the Service Manual</a></b>
 *
 * However, if you need to override this, you can supply a `prefixText` prop to the `DoAndDontList.Item` component.
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
    <DoAndDontList listType="dont">
      <DoAndDontList.Item prefixText="You must not">burst a blister yourself</DoAndDontList.Item>
      <DoAndDontList.Item prefixText={undefined}>
        peel the skin off a burst blister
      </DoAndDontList.Item>
      <DoAndDontList.Item prefixText={null}>
        pick at the edges of the remaining skin
      </DoAndDontList.Item>
      <DoAndDontList.Item prefixText={<span>please dont </span>}>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoAndDontList.Item>
      <DoAndDontList.Item>
        wear the shoes or use the equipment that caused your blister until it heals
      </DoAndDontList.Item>
    </DoAndDontList>
  ),
};
