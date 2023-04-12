import{j as d,a as e}from"./jsx-runtime-953c45a8.js";import{g as t}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const b={title:"Components/DoDontList",component:t,parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/do-dont-list" target="_blank" rel="noopener noreferrer">here</a>.

## Implementation Notes

The \`DoDontList\` component has one subcomponent: \`DoDontList.Item\`.

As long as a \`listType\` is supplied to the \`DoDontList\` component, all subcomponents will render as desired. If you require a \`DoDontList.Item\` to be different, a \`listItemType\` prop can be supplied to force the type.

## Usage

### Standard

\`\`\`jsx
import { DoDontList } from "nhsuk-react-components";

const Element = () => {
    return (
        <DoDontList listType="do">
            <DoDontList.Item>
                cover blisters that are likely to burst with a soft plaster or dressing
            </DoDontList.Item>
            <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
            <DoDontList.Item>
                allow the fluid in a burst blister to drain before covering it with a plaster or dressing
            </DoDontList.Item>
        </DoDontList>
    );
}
\`\`\``}}}},o={render:()=>d(t,{listType:"do",children:[e(t.Item,{children:"cover blisters that are likely to burst with a soft plaster or dressing"}),e(t.Item,{children:"wash your hands before touching a burst blister"}),e(t.Item,{children:"allow the fluid in a burst blister to drain before covering it with a plaster or dressing"})]})},n={render:()=>d(t,{listType:"dont",children:[e(t.Item,{children:"do not burst a blister yourself"}),e(t.Item,{children:"do not peel the skin off a burst blister"}),e(t.Item,{children:"do not pick at the edges of the remaining skin"}),e(t.Item,{children:"do not wear the shoes or use the equipment that caused your blister until it heals"})]})};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <DoDontList listType="do">
      <DoDontList.Item>
        cover blisters that are likely to burst with a soft plaster or dressing
      </DoDontList.Item>
      <DoDontList.Item>wash your hands before touching a burst blister</DoDontList.Item>
      <DoDontList.Item>
        allow the fluid in a burst blister to drain before covering it with a plaster or dressing
      </DoDontList.Item>
    </DoDontList>
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var a,l,D;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <DoDontList listType="dont">
      <DoDontList.Item>do not burst a blister yourself</DoDontList.Item>
      <DoDontList.Item>do not peel the skin off a burst blister</DoDontList.Item>
      <DoDontList.Item>do not pick at the edges of the remaining skin</DoDontList.Item>
      <DoDontList.Item>
        do not wear the shoes or use the equipment that caused your blister until it heals
      </DoDontList.Item>
    </DoDontList>
}`,...(D=(l=n.parameters)==null?void 0:l.docs)==null?void 0:D.source}}};const f=["Do","Dont"];export{o as Do,n as Dont,f as __namedExportsOrder,b as default};
//# sourceMappingURL=DoDontList.stories-754c46ab.js.map
