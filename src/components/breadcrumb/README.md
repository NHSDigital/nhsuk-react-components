# Breadcrumb

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb).

## Implementation Notes

The `Breadcrumb` component contains two subcomponents: `Breadcrumb.Item` and `Breadcrumb.Back`. These are both anchor elements.

The base `Breadcrumb` component has the default prop `aria-label` set to `"Breadcrumb"`. This is only a default prop and can be overridden.

## Usage

```jsx
import { Breadcrumb } from "nhsuk-react-components";

const Link = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/level-one">Level one</Breadcrumb.Item>
            <Breadcrumb.Item href="/level-one/level-two">Level two</Breadcrumb.Item>
            <Breadcrumb.Item href="/level-one/level-two/level-three">Level three</Breadcrumb.Item>
            <Breadcrumb.Back href="/level-one/level-two/level-three">Back to Level three</Breadcrumb.Back>
        </Breadcrumb>
    );
}
```
