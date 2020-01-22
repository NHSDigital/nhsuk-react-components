# ErrorSummary

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-summary).

## Implementation Notes

The `ErrorSummary` component has four subcomponents:

- `ErrorSummary.Title`
- `ErrorSummary.Body`
- `ErrorSummary.List`
- `ErrorSummary.Item`

## Usage

**Note:** More detailed implementations can be found in the [Storybook](https://tomdango.github.io/nhsuk-react-components).

### Standard

```jsx
import { ErrorSummary } from "nhsuk-react-components";

const Element = () => {
    return (
        <ErrorSummary aria-labelledby="error-summary-title" role="alert" tabIndex={-1}>
            <ErrorSummary.Title id="error-summary-title">There is a problem</ErrorSummary.Title>
            <ErrorSummary.Body>
                <p>Optional description of the errors and how to correct them</p>
                <ErrorSummary.List>
                    <ErrorSummary.Item href="#example-error-1">
                        Link to error with explanation
                    </ErrorSummary.Item>
                    <ErrorSummary.Item href="#example-error-2">
                        Link to error with explanation
                    </ErrorSummary.Item>
                </ErrorSummary.List>
            </ErrorSummary.Body>
        </ErrorSummary>
    );
}
```
