# Fieldset

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/fieldset).

## Implementation Notes

The `Fieldset` component has one subcomponent: `Fieldset.Legend`.

The `Fieldset.Legend` component has one default prop: `headingLevel: 'h1'`. This can be overridden and any valid heading level can be used (i.e. `h1`, `h2`).

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
