# ErrorMessage

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message).

## Implementation Notes

The `ErrorMessage` component has a default `visuallyHiddenText` of "Error: ". This can be overriden, or disabled using `visuallyHiddenText={false}`.

## Usage

**Note:** More detailed implementations can be found in the [Storybook](https://tomdango.github.io/nhsuk-react-components).

### Standard

```jsx
import { ErrorMessage } from "nhsuk-react-components";

const Element = () => {
    return (
        <ErrorMessage>Error!</ErrorMessage>
    );
}
```
