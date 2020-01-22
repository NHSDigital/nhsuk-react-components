# ContentsList

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/contents-list).

## Implementation Notes

The `ContentsList` component has one subcomponent: `ContentsList.Item`.

There are two default props set to the ContentsList: `role: 'navigation'` and `visuallyHiddenText: 'Contents'`. These are only default props and can be overriden. `visuallyHiddenText={false}` will disable the visually hidden text.

## Usage

**Note:** More detailed implementations can be found in the [Storybook](https://tomdango.github.io/nhsuk-react-components).

### Standard

```jsx
import { ContentsList } from "nhsuk-react-components";

const Element = () => {
    return (
        <ContentsList aria-label="Pages in this guide">
            <ContentsList.Item current aria-current="page">
                What is AMD?
            </ContentsList.Item>
            <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/">
                Symptoms
            </ContentsList.Item>
            <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/">
                Getting diagnosed
            </ContentsList.Item>
            <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/">
                Treatments
            </ContentsList.Item>
            <ContentsList.Item href="https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/">
                Living with AMD
            </ContentsList.Item>
        </ContentsList>
    );
}
```
