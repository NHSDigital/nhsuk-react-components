# CareCard

This component can be found in the `nhsuk-frontend` repository [here](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/care-card).

## Implementation Notes

By default, CareCard components prepend hidden text before the title. These are:

- ("non-urgent") Non-urgent advice:
- ("urgent") Urgent advice:
- ("immediate") Immediate acion required:

If you wish to disable this behaviour, pass the prop `visuallyHiddenText={false}` to the `CareCard.Heading` component or specify your own visually hidden text by using `visuallyHiddenText="Custom"`.

You can change the heading type (i.e. `h1`, `h2` and so on) of the title by passing the prop `headingLevel="<headingLevel>"` to the `CareCard.Heading`.

## Usage

**Note:** More detailed implementations can be found in the [Storybook](https://tomdango.github.io/nhsuk-react-components).

### Standard

```jsx
import { CareCard } from "nhsuk-react-components";

const Element = () => {
    return (
        <CareCard type="non-urgent">
            <CareCard.Heading>Speak to a GP if:</CareCard.Heading>
            <CareCard.Content>
                <ul>
                    <li>you're not sure it's chickenpox</li>
                    <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
                    <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
                    <li>you're concerned about your child or they get worse</li>
                </ul>
                <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
            </CareCard.Content>
        </CareCard>
    );
}
```
