import{a as i}from"./jsx-runtime-953c45a8.js";import{b as P}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const C={title:"Components/Button",component:P,render:r=>i(R,{...r}),parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/button" target="_blank" rel="noopener noreferrer">here</a>.

## Implementation Notes

When importing \`Button\` from \`nhsuk-react-components\`, the \`ButtonWrapper\` component is imported. This will either render a standard \`Button\` or \`ButtonLink\` component depending on whether a \`href\` prop is supplied.

If you want to use a specific component instead of the wrapper, you can supply the \`as="a"\` or \`as="button"\` props.

## Usage

### Standard

\`\`\`jsx
import { Button } from "nhsuk-react-components";

const Element = () => {
    return (
        <Button>Button</Button>
    );
}
\`\`\`

### As a Link

\`\`\`jsx
import { Button } from "nhsuk-react-components";

const ButtonEl = () => (
    <Button as="a">Anchor</Button>
);

const ButtonEl2 = () => (
    <Button href="/link">Anchor</Button>
);
\`\`\``}}}};function R(r){return i(P,{...r})}const n={args:{children:"Primary"},render:r=>i(R,{...r})},e={args:{secondary:!0,children:"Secondary"}},o={args:{reverse:!0,children:"Reverse"}},t={args:{disabled:!0,children:"Disabled"}},s={args:{href:"/",children:"As a Link"}},a={args:{as:"button",children:"As a Button"}},c={args:{as:"a",children:"As an Anchor"}};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Primary'
  },
  render: args => <Button {...args} />
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,h,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    secondary: true,
    children: 'Secondary'
  }
}`,...(l=(h=e.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var g,B,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    reverse: true,
    children: 'Reverse'
  }
}`,...(f=(B=o.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var k,b,y;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var A,S,v;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    href: '/',
    children: 'As a Link'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var L,x,w;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    as: 'button',
    children: 'As a Button'
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var D,E,F;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    as: 'a',
    children: 'As an Anchor'
  }
}`,...(F=(E=c.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const N=["Primary","Secondary","Reverse","Disabled","LinkButton","ForceButton","ForceAnchor"];export{t as Disabled,c as ForceAnchor,a as ForceButton,s as LinkButton,n as Primary,o as Reverse,e as Secondary,N as __namedExportsOrder,C as default};
//# sourceMappingURL=Button.stories-5edcadcf.js.map
