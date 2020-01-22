# ContentsList

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/contents-list).

## Implementation Notes

The `Details` component has three subcomponents:

- `Details.Summary`
- `Details.Text`
- `Details.ExpanderGroup`

## Usage

**Note:** More detailed implementations can be found in the [Storybook](https://tomdango.github.io/nhsuk-react-components).

### Standard

```jsx
import { Details } from "nhsuk-react-components";

const Element = () => {
    return (
        <Details>
            <Details.Summary>Where can I find my NHS number?</Details.Summary>
            <Details.Text>
                <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
                <p>
                You can find your NHS number on any document sent to you by the NHS. This may include:
                </p>
                <ul>
                    <li>prescriptions</li>
                    <li>test results</li>
                    <li>hospital referral letters</li>
                    <li>appointment letters</li>
                    <li>your NHS medical card</li>
                </ul>
                <p>Ask your GP practice for help if you can't find your NHS number.</p>
            </Details.Text>
        </Details>
    );
}
```
