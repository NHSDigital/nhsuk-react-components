# Fieldset

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/fieldset).

## Implementation Notes

Form components (such as `Checkboxes`, `DateInput` etc.) will identify if they're wrapped within a `Form` component, and if so they will report errors back down the tree. This is so that the form element can be appended with `nhsuk-form-group--error`.

You can disable this behaviour by supplying the prop `disableErrorFromComponents`.

## Usage

**Note:** More detailed implementations can be found in the [Storybook](https://tomdango.github.io/nhsuk-react-components).

### Standard

```jsx
import { Fieldset } from "nhsuk-react-components";

const Element = () => {
    return (
        <Fieldset>
            <Fieldset.Legend>What is your address?</Fieldset.Legend>
        </Fieldset>
    );
}
```
