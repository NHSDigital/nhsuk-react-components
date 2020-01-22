# Checkboxes

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/checkboxes).

## Implementation Notes

For details on the new form design pattern, check the documentation for the `Form` component.

The `Checkbox` component provides a `CheckboxContext` context, which the `Checkbox.Box` components use. When each box initially renders, it will attempt to assign itself an `id` by calling the `getBoxId` method in the context. This will assign each box a sequential ID using either the `idPrefix` or `name` supplied to the Checkbox. If neither are provided, the element will generate it's own unique identifier.

## Usage

**Note:** More detailed implementations can be found in the [Storybook](https://tomdango.github.io/nhsuk-react-components).

### Standard

```jsx
import { Checkboxes } from "nhsuk-react-components";

const Element = () => {
    return (
        <Checkboxes name="nationality" id="nationality">
            <Checkboxes.Box value="british">British</Checkboxes.Box>
            <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
            <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
        </Checkboxes>
    );
}
```
