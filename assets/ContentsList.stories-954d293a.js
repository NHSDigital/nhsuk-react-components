import{j as o,a as e}from"./jsx-runtime-953c45a8.js";import{f as t}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const l={title:"Components/ContentsList",component:t,parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/contents-list" target="_blank" rel="noopener noreferrer">here</a>.

## Implementation Notes

The \`ContentsList\` component has one subcomponent: \`ContentsList.Item\`.

There are two default props set to the ContentsList: \`role: 'navigation'\` and \`visuallyHiddenText: 'Contents'\`. These are only default props and can be overriden. \`visuallyHiddenText={false}\` will disable the visually hidden text.

## Usage

### Standard

\`\`\`jsx
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
\`\`\``}}}},n={render:()=>o(t,{"aria-label":"Pages in this guide",children:[e(t.Item,{current:!0,"aria-current":"page",children:"What is AMD?"}),e(t.Item,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/symptoms/",children:"Symptoms"}),e(t.Item,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/getting-diagnosed/",children:"Getting diagnosed"}),e(t.Item,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/treatment/",children:"Treatments"}),e(t.Item,{href:"https://www.nhs.uk/conditions/age-related-macular-degeneration-amd/living-with-amd/",children:"Living with AMD"})]})};var s,a,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <ContentsList aria-label="Pages in this guide">
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
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const g=["Standard"];export{n as Standard,g as __namedExportsOrder,l as default};
//# sourceMappingURL=ContentsList.stories-954d293a.js.map
