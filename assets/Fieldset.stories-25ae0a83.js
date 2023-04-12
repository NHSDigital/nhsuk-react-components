import{a as t}from"./jsx-runtime-953c45a8.js";import{F as e}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"Components/Fieldset",component:e,args:{children:"What is your address?"},parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/fieldset" target="_blank" rel="noopener noreferrer">here</a>.

## Implementation Notes

The \`Fieldset\` component has one subcomponent: \`Fieldset.Legend\`.

The \`Fieldset.Legend\` component has one default prop: \`headingLevel: 'h1'\`. This can be overridden and any valid heading level can be used (i.e. \`h1\`, \`h2\`).

## Usage

### Standard

\`\`\`jsx
import { Fieldset } from "nhsuk-react-components";

const Element = () => {
    return (
        <Fieldset>
            <Fieldset.Legend>What is your address?</Fieldset.Legend>
        </Fieldset>
    );
}
\`\`\``}}}},n={},s={render:()=>t(e,{children:t(e.Legend,{isPageHeading:!0,children:"What is your address?"})})},r={render:()=>t(e,{children:t(e.Legend,{size:"m",children:"What is your address?"})})};var d,a,o;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
    </Fieldset>
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var l,p,h;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <Fieldset.Legend size="m">What is your address?</Fieldset.Legend>
    </Fieldset>
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const S=["Standard","AsAPageHeading","WithCustomLegendSize"];export{s as AsAPageHeading,n as Standard,r as WithCustomLegendSize,S as __namedExportsOrder,y as default};
//# sourceMappingURL=Fieldset.stories-25ae0a83.js.map
