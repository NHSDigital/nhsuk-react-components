import{j as i,a as r}from"./jsx-runtime-953c45a8.js";import{a as e}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const B={title:"Components/Breadcrumb",component:e,render:d=>i(e,{"aria-label":d["aria-label"],children:[r(e.Item,{href:"/level/one",children:"Level One"}),r(e.Item,{href:"/level/two",children:"Level Two"}),r(e.Item,{href:"/level/three",children:"Level Three"}),r(e.Back,{href:"/level/three",children:"Back to Level Three"})]}),parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/breadcrumb" target="_blank">here</a>.


## Implementation Notes

The \`Breadcrumb\` component contains two subcomponents: \`Breadcrumb.Item\` and \`Breadcrumb.Back\`. These are both anchor elements.

The base \`Breadcrumb\` component has the default prop \`aria-label\` set to \`"Breadcrumb"\`. This is only a default prop and can be overridden.

## Usage

\`\`\`jsx
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
\`\`\``}}}},a={},n={args:{"aria-label":"custom-aria-label"}};var t,o,c;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,m,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'aria-label': 'custom-aria-label'
  }
}`,...(s=(m=n.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const f=["Standard","OverrideAriaLabel"];export{n as OverrideAriaLabel,a as Standard,f as __namedExportsOrder,B as default};
//# sourceMappingURL=Breadcrumb.stories-e46ad5be.js.map
