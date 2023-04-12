import{j as S,F as v,a as n}from"./jsx-runtime-953c45a8.js";import{r as f}from"./index-6f814c40.js";import{U as u,b as B,I as C}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./_commonjsHelpers-042e6b4d.js";const R={title:"Components/Textarea",component:u,args:{label:"Can you provide more detail?",hint:"Don't include personal or financial information, eg your National Insurance number or credit card details.",id:"more-detail",name:"more-detail",rows:5}},e={},a={args:{autoComplete:"street-address",label:"Full address",id:"textarea-with-autocomplete-attribute"}},t={render:function(){const[r,s]=f.useState(!0);return S(v,{children:[n(u,{error:r,id:"no-ni-reason",name:"no-ni-reason",rows:5,label:"Why can't you provide a National Insurance number?"}),n(B,{onClick:i=>{i.preventDefault(),s(!r)},children:"Toggle Error"})]})},name:"Textarea With Error (Boolean)"},o={render:function(){const[r,s]=f.useState("You must provide an explanation");return S(v,{children:[n(u,{error:r,id:"no-ni-reason",name:"no-ni-reason",rows:5,label:"Why can't you provide a National Insurance number?"}),n(C,{onChange:i=>s(i.currentTarget.value),value:r})]})},name:"Textarea With Error (String)"};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    autoComplete: 'street-address',
    label: 'Full address',
    id: 'textarea-with-autocomplete-attribute'
  }
}`,...(x=(p=a.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var h,g,E;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: function TextareaWithErrorBooleanRender() {
    const [error, setError] = useState<boolean>(true);
    return <>
        <Textarea error={error} id="no-ni-reason" name="no-ni-reason" rows={5} label="Why can&#39;t you provide a National Insurance number?" />
        <Button onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setError(!error);
      }}>
          Toggle Error
        </Button>
      </>;
  },
  name: 'Textarea With Error (Boolean)'
}`,...(E=(g=t.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var T,W,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: function TextareaWithErrorStringRender() {
    const [error, setError] = useState<string>('You must provide an explanation');
    return <>
        <Textarea error={error} id="no-ni-reason" name="no-ni-reason" rows={5} label="Why can&#39;t you provide a National Insurance number?" />
        <Input onChange={e => setError(e.currentTarget.value)} value={error} />
      </>;
  },
  name: 'Textarea With Error (String)'
}`,...(b=(W=o.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};const j=["Standard","TextareaWithAutoCompleteAttribute","TextareaWithErrorBoolean","TextareaWithErrorString"];export{e as Standard,a as TextareaWithAutoCompleteAttribute,t as TextareaWithErrorBoolean,o as TextareaWithErrorString,j as __namedExportsOrder,R as default};
//# sourceMappingURL=Textarea.stories-80a00e15.js.map
