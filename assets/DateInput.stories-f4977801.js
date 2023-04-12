import{j as t,a as e}from"./jsx-runtime-953c45a8.js";import{r as O}from"./index-6f814c40.js";import{V as n}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./_commonjsHelpers-042e6b4d.js";const F={title:"FormBehaviour/DateInput",component:n},r={render:()=>t("div",{style:{padding:20},children:[e("h2",{children:"Scenario: onChange and onInput handlers are bound without any other props"}),e("h5",{children:"Expected Behaviour"}),t("ul",{className:"nhsuk-hint",children:[e("li",{children:"OnChange Handlers are fired using the generated IDs and Names"}),e("li",{children:"The value is passed through"})]}),e("h5",{children:"Component"}),e(n,{onChange:a=>console.log(a.target.value),hint:"Test hint",label:"Test label"})]})},l={render:()=>t("div",{style:{padding:20},children:[e("h2",{children:"Scenario: onChange and onInput handlers are bound without any other props"}),e("h5",{children:"Expected Behaviour"}),t("ul",{className:"nhsuk-hint",children:[e("li",{children:"OnChange Handlers are fired using the generated IDs and Names"}),e("li",{children:"The value is passed through"})]}),e("h5",{children:"Component"}),e(n,{onChange:a=>console.log(a.target.value),error:"Test Error",hint:"Test hint",label:"Test label"}),e("h5",{children:"Component with specific field errors"}),t(n,{onChange:a=>console.log(a.target.value),error:"Test Error",hint:"Test hint",label:"Test label",children:[e(n.Day,{error:!1}),e(n.Month,{}),e(n.Year,{})]})]})},o={render:()=>{const a={day:"20",month:"09",year:"1996"};return t("div",{style:{padding:20},children:[e("h5",{children:"Component"}),t(n,{hint:"Test hint",label:"Test label",children:[e(n.Day,{defaultValue:a.day}),e(n.Month,{defaultValue:a.month}),e(n.Year,{defaultValue:a.year})]})]})}},d={render:()=>t("div",{style:{padding:20},children:[e("h5",{children:"Component"}),e(n,{hint:"Test hint",label:"Test label",defaultValue:{day:"20",month:"09",year:"1996"}})]})},s={render:()=>{const a={day:"20",month:"09",year:"1996"};return t("div",{style:{padding:20},children:[e("h5",{children:"Component"}),t(n,{hint:"Test hint",label:"Test label",children:[e(n.Day,{value:a.day}),e(n.Month,{value:a.month}),e(n.Year,{value:a.year})]})]})}},h={render:()=>t("div",{style:{padding:20},children:[e("h5",{children:"Component"}),e(n,{hint:"Test hint",label:"Test label",value:{day:"20",month:"09",year:"1996"}})]})},i={render:function(){const[W,Y]=O.useState({day:"20",month:"09",year:"1996"});return t("div",{style:{padding:20},children:[e("h5",{children:"Component"}),e(n,{hint:"Test hint",label:"Test label",value:W,onChange:B=>Y(B.currentTarget.value)})]})}};var u,p,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput onChange={e => console.log(e.target.value)} hint="Test hint" label="Test label" />
    </div>
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,g,v;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
      <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
      <h5>Expected Behaviour</h5>
      <ul className="nhsuk-hint">
        <li>OnChange Handlers are fired using the generated IDs and Names</li>
        <li>The value is passed through</li>
      </ul>
      <h5>Component</h5>
      <DateInput onChange={e => console.log(e.target.value)} error="Test Error" hint="Test hint" label="Test label" />
      <h5>Component with specific field errors</h5>

      <DateInput onChange={e => console.log(e.target.value)} error="Test Error" hint="Test hint" label="Test label">
        <DateInput.Day error={false} />
        <DateInput.Month />
        <DateInput.Year />
      </DateInput>
    </div>
}`,...(v=(g=l.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,C,T;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const defaultValue = {
      day: '20',
      month: '09',
      year: '1996'
    };
    return <div style={{
      padding: 20
    }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label">
          <DateInput.Day defaultValue={defaultValue.day} />
          <DateInput.Month defaultValue={defaultValue.month} />
          <DateInput.Year defaultValue={defaultValue.year} />
        </DateInput>
      </div>;
  }
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var b,I,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const defaultValue = {
      day: '20',
      month: '09',
      year: '1996'
    };
    return <div style={{
      padding: 20
    }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label" defaultValue={defaultValue} />
      </div>;
  }
}`,...(f=(I=d.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var D,E,V;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const value = {
      day: '20',
      month: '09',
      year: '1996'
    };
    return <div style={{
      padding: 20
    }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label">
          <DateInput.Day value={value.day} />
          <DateInput.Month value={value.month} />
          <DateInput.Year value={value.year} />
        </DateInput>
      </div>;
  }
}`,...(V=(E=s.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var S,x,N;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const value = {
      day: '20',
      month: '09',
      year: '1996'
    };
    return <div style={{
      padding: 20
    }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label" value={value} />
      </div>;
  }
}`,...(N=(x=h.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var P,w,M;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function ChangeableControlledElementRender() {
    const [value, setValue] = useState({
      day: '20',
      month: '09',
      year: '1996'
    });
    return <div style={{
      padding: 20
    }}>
        <h5>Component</h5>
        <DateInput hint="Test hint" label="Test label" value={value} onChange={e => setValue(e.currentTarget.value)} />
      </div>;
  }
}`,...(M=(w=i.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};const q=["Standard","StandardWithError","PrePopulatedIndividualComponents","PrePopulatedWrapper","ControlledElementIndividualComponents","ControlledElementWrapper","ChangeableControlledElement"];export{i as ChangeableControlledElement,s as ControlledElementIndividualComponents,h as ControlledElementWrapper,o as PrePopulatedIndividualComponents,d as PrePopulatedWrapper,r as Standard,l as StandardWithError,q as __namedExportsOrder,F as default};
//# sourceMappingURL=DateInput.stories-f4977801.js.map
