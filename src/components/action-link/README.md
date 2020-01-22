# ActionLink

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/action-link).

## Implementation Notes

The ActionLink component does not use the `nhsuk-frontend` "openInNewWindow" property, instead it allows the user to add the `target="_blank"` property (if desired).

## Usage

```jsx
import { ActionLink } from "nhsuk-react-components";

const Link = () => {
    return <ActionLink href="/to-somewhere">Link</ActionLink>;
}
```
