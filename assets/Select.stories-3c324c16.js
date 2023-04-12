import{j as r,a as t,F as K}from"./jsx-runtime-953c45a8.js";import{R as N}from"./index-6f814c40.js";import{z as e,b,I as x}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./_commonjsHelpers-042e6b4d.js";const C={title:"Components/Select",component:e},n={render:()=>r(e,{id:"select-1",label:"Label text goes here",children:[t(e.Option,{value:"1",children:"NHS.UK frontend option 1"}),t(e.Option,{value:"2",selected:!0,children:"NHS.UK frontend option 2"}),t(e.Option,{value:"3",disabled:!0,children:"NHS.UK frontend option 3"})]})},l={render:()=>r(e,{label:"Label text goes here",hint:"Hint text goes here",children:[t(e.Option,{value:"1",children:"NHS.UK frontend option 1"}),t(e.Option,{value:"2",children:"NHS.UK frontend option 2"}),t(e.Option,{value:"3",children:"NHS.UK frontend option 3"})]})},i={render:function(){const[o,c]=N.useState(!0);return r(K,{children:[r(e,{error:o,label:"Label text goes here",children:[t(e.Option,{value:"1",children:"NHS.UK frontend option 1"}),t(e.Option,{value:"2",children:"NHS.UK frontend option 2"}),t(e.Option,{value:"3",children:"NHS.UK frontend option 3"})]}),t(b,{onClick:s=>{s.preventDefault(),c(!o)},children:"Toggle Error"})]})},name:"Select With Error (Boolean)"},a={render:function(){const[o,c]=N.useState("Error message goes here");return r(K,{children:[r(e,{error:o,label:"Label text goes here",children:[t(e.Option,{value:"1",children:"NHS.UK frontend option 1"}),t(e.Option,{value:"2",children:"NHS.UK frontend option 2"}),t(e.Option,{value:"3",children:"NHS.UK frontend option 3"})]}),t(x,{onChange:s=>c(s.currentTarget.value),value:o})]})},name:"Select With Error (String)"};var p,S,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Select id="select-1" label="Label text goes here">
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2" selected>
        NHS.UK frontend option 2
      </Select.Option>
      <Select.Option value="3" disabled>
        NHS.UK frontend option 3
      </Select.Option>
    </Select>
}`,...(d=(S=n.parameters)==null?void 0:S.docs)==null?void 0:d.source}}};var u,h,O;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Select label="Label text goes here" hint="Hint text goes here">
      <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
      <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
      <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
    </Select>
}`,...(O=(h=l.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var m,f,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: function SelectWithErrorBooleanRender() {
    const [error, setError] = React.useState<boolean>(true);
    return <>
        <Select error={error} label="Label text goes here">
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <Button onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setError(!error);
      }}>
          Toggle Error
        </Button>
      </>;
  },
  name: 'Select With Error (Boolean)'
}`,...(g=(f=i.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,H,E;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function SelectWithErrorStringRender() {
    const [error, setError] = React.useState<string>('Error message goes here');
    return <>
        <Select error={error} label="Label text goes here">
          <Select.Option value="1">NHS.UK frontend option 1</Select.Option>
          <Select.Option value="2">NHS.UK frontend option 2</Select.Option>
          <Select.Option value="3">NHS.UK frontend option 3</Select.Option>
        </Select>
        <Input onChange={e => setError(e.currentTarget.value)} value={error} />
      </>;
  },
  name: 'Select With Error (String)'
}`,...(E=(H=a.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};const j=["Standard","SelectWithHintText","SelectWithErrorBoolean","SelectWithErrorString"];export{i as SelectWithErrorBoolean,a as SelectWithErrorString,l as SelectWithHintText,n as Standard,j as __namedExportsOrder,C as default};
//# sourceMappingURL=Select.stories-3c324c16.js.map
