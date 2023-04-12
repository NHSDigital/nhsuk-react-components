import{E as u}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./jsx-runtime-953c45a8.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const f={title:"Components/ErrorMessage",component:u,args:{children:"Error message about full name goes here"},parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-message" target="_blank" rel="noopener noreferrer">here</a>.

## Implementation Notes

The \`ErrorMessage\` component has a default \`visuallyHiddenText\` of "Error: ". This can be overriden, or disabled using \`visuallyHiddenText={false}\`.

## Usage

### Standard

\`\`\`jsx
import { ErrorMessage } from "nhsuk-react-components";

const Element = () => {
    return (
        <ErrorMessage>Error!</ErrorMessage>
    );
}
\`\`\``}}}},e={argTypes:{visuallyHiddenText:{control:!1}}},r={args:{visuallyHiddenText:!1},argTypes:{visuallyHiddenText:{control:!1}}},s={args:{visuallyHiddenText:"Custom Text"}};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  argTypes: {
    visuallyHiddenText: {
      control: false
    }
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var t,d,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    visuallyHiddenText: false
  },
  argTypes: {
    visuallyHiddenText: {
      control: false
    }
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    visuallyHiddenText: 'Custom Text'
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const h=["Standard","NoVisuallyHiddenText","CustomVisuallyHiddenText"];export{s as CustomVisuallyHiddenText,r as NoVisuallyHiddenText,e as Standard,h as __namedExportsOrder,f as default};
//# sourceMappingURL=ErrorMessage.stories-f4b5b69c.js.map
