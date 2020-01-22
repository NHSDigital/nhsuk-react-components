# DoDontList

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/do-dont-list).

## Implementation Notes

The `DoDontList` component has one subcomponent: `DoDontList.Item`.

As long as a `listType` is supplied to the `DoDontList` component, all subcomponents will render as desired. If you require a `DoDontList.Item` to be different, a `listItemType` prop can be supplied to force the type.

## Usage

**Note:** More detailed implementations can be found in the [Storybook](https://tomdango.github.io/nhsuk-react-components).

### Standard

```jsx
import { DoDontList } from "nhsuk-react-components";

const Element = () => {
    return (
        <DoDontList listType="do">
            <DoDontList.Item>
                cover blisters that are likely to burst with a soft plaster or dressing
            </DoDontList.Item>
            <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
            <DoDontList.Item>
                allow the fluid in a burst blister to drain before covering it with a plaster or dressing
            </DoDontList.Item>
        </DoDontList>
    );
}
```
