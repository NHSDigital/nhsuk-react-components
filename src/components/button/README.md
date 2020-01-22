# Button

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/button).

## Implementation Notes

When importing `Button` from `nhsuk-react-components`, the `ButtonWrapper` component is imported. This will either render a standard `Button` or `ButtonLink` component depending on whether a `href` prop is supplied.

If you want to use a specific component instead of the wrapper, you can supply the `as="a"` or `as="button"` props.

## Usage

### Standard

```jsx
import { Button } from "nhsuk-react-components";

const Element = () => {
    return (
        <Button>Button</Button>
    );
}
```

### As a Link

```jsx
import { Button } from "nhsuk-react-components";

const ButtonEl = () => (
    <Button as="a">Anchor</Button>
);

const ButtonEl2 = () => (
    <Button href="/link">Anchor</Button>
);
```
