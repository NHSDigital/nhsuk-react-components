import{j as i,a as e,F as j}from"./jsx-runtime-953c45a8.js";import{R as z}from"./index-6f814c40.js";import{R as a,F as n,d as o,b as _,I as J}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./_commonjsHelpers-042e6b4d.js";const ee={title:"Components/Radios",component:a},d={render:()=>i(n,{children:[e(n.Legend,{children:"Have you changed your name?"}),i(a,{name:"example",id:"standard-example",hint:"This includes changing your last name or spelling your name differently.",children:[e(a.Radio,{value:"yes",children:"Yes"}),e(a.Radio,{value:"no",checked:!0,children:"No"})]})]})},s={render:()=>i(n,{children:[e(n.Legend,{children:"Have you changed your name?"}),i(a,{name:"example",inline:!0,id:"inline-example",hint:"This includes changing your last name or spelling your name differently.",children:[e(a.Radio,{value:"yes",children:"Yes"}),e(a.Radio,{value:"no",checked:!0,children:"No"})]})]})},t={render:()=>i(n,{children:[e(n.Legend,{children:"Have you changed your name?"}),i(a,{name:"example",id:"disabled-example",hint:"This includes changing your last name or spelling your name differently.",children:[e(a.Radio,{disabled:!0,value:"yes",children:"Yes"}),e(a.Radio,{disabled:!0,value:"no",children:"No"})]})]})},l={render:()=>{const g=i(o,{name:"impairments",id:"impairments",children:[e(o.Box,{value:"autism",children:"Autism"}),e(o.Box,{value:"developmental-conditions",children:"Developmental conditions (excluding autism)"}),e(o.Box,{value:"dementia",children:"Dementia"}),e(o.Box,{value:"learning-disability",children:"Learning disability"}),e(o.Box,{value:"mental-health-condition",children:"Mental Health Condition"}),e(o.Box,{value:"physical-disability",children:"Physical disability"}),e(o.Box,{value:"sensory-disability",children:"Sensory disability - such as sight, hearing or verbal"}),e(o.Box,{value:"long-term-condition",children:"Long-term condition"})]});return i(n,{children:[e(n.Legend,{children:"Impairment requirement"}),i(a,{name:"example",id:"example-conditional",hint:"Select relevant options.",children:[e(a.Radio,{id:"hello1",value:"yes",conditional:g,children:"Patient requires an impairment to be added"}),e(a.Radio,{id:"hello2",value:"no",children:"Patient would prefer not to say"})]})]})}},c={render:()=>i(n,{children:[e(n.Legend,{children:"How do you want to sign in?"}),i(a,{name:"example",id:"example-divider",children:[e(a.Radio,{value:"government-gateway",children:"Use Government Gateway"}),e(a.Radio,{value:"nhsuk-login",children:"Use NHS.UK login"}),e(a.Divider,{children:"or"}),e(a.Radio,{value:"create-account",children:"Create an account"})]})]})},u={render:()=>i(n,{children:[e(n.Legend,{children:"How do you want to sign in?"}),i(a,{name:"example",id:"example-divider",children:[e(a.Radio,{value:"government-gateway",hint:"You'll have a user ID if you've registered for self-assessment or filed a tax return online before.",children:"Use Government Gateway"}),e(a.Radio,{value:"nhsuk-login",hint:"You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.",children:"Use NHS.UK login"})]})]})},m={render:()=>i(a,{name:"colours",id:"colours",children:[e(a.Radio,{value:"red",children:"Red"}),e(a.Radio,{value:"green",children:"Green"}),e(a.Radio,{value:"blue",children:"Blue"})]})},h={render:function(){const[r,p]=z.useState(!0);return i(j,{children:[i(n,{children:[e(n.Legend,{children:"Have you changed your name?"}),i(a,{name:"example",error:r,hint:"This includes changing your last name or spelling your name differently.",children:[e(a.Radio,{id:"example-1",value:"yes",children:"Yes"}),e(a.Radio,{id:"example-2",value:"no",checked:!0,children:"No"})]})]}),e(_,{onClick:y=>{y.preventDefault(),p(!r)},children:"Toggle Error"})]})},name:"Radios With Error (Boolean)"},R={render:function(){const[r,p]=z.useState("Please select an option");return i(j,{children:[i(n,{children:[e(n.Legend,{children:"Have you changed your name?"}),i(a,{name:"example",error:r,hint:"This includes changing your last name or spelling your name differently.",children:[e(a.Radio,{id:"example-1",value:"yes",children:"Yes"}),e(a.Radio,{id:"example-2",value:"no",checked:!0,children:"No"})]})]}),e(J,{value:r,onChange:y=>p(y.currentTarget.value)})]})},name:"Radios With Error (String)"};var v,x,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios name="example" id="standard-example" hint="This includes changing your last name or spelling your name differently.">
        <Radios.Radio value="yes">Yes</Radios.Radio>
        <Radios.Radio value="no" checked>
          No
        </Radios.Radio>
      </Radios>
    </Fieldset>
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var b,F,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios name="example" inline id="inline-example" hint="This includes changing your last name or spelling your name differently.">
        <Radios.Radio value="yes">Yes</Radios.Radio>
        <Radios.Radio value="no" checked>
          No
        </Radios.Radio>
      </Radios>
    </Fieldset>
}`,...(B=(F=s.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var C,k,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
      <Radios name="example" id="disabled-example" hint="This includes changing your last name or spelling your name differently.">
        <Radios.Radio disabled value="yes">
          Yes
        </Radios.Radio>
        <Radios.Radio disabled value="no">
          No
        </Radios.Radio>
      </Radios>
    </Fieldset>
}`,...(S=(k=t.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var L,E,H;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const impairmentsForm = <Checkboxes name="impairments" id="impairments">
        <Checkboxes.Box value="autism">Autism</Checkboxes.Box>
        <Checkboxes.Box value="developmental-conditions">
          Developmental conditions (excluding autism)
        </Checkboxes.Box>
        <Checkboxes.Box value="dementia">Dementia</Checkboxes.Box>
        <Checkboxes.Box value="learning-disability">Learning disability</Checkboxes.Box>
        <Checkboxes.Box value="mental-health-condition">Mental Health Condition</Checkboxes.Box>
        <Checkboxes.Box value="physical-disability">Physical disability</Checkboxes.Box>
        <Checkboxes.Box value="sensory-disability">
          Sensory disability - such as sight, hearing or verbal
        </Checkboxes.Box>
        <Checkboxes.Box value="long-term-condition">Long-term condition</Checkboxes.Box>
      </Checkboxes>;
    return <Fieldset>
        <Fieldset.Legend>Impairment requirement</Fieldset.Legend>
        <Radios name="example" id="example-conditional" hint="Select relevant options.">
          <Radios.Radio id="hello1" value="yes" conditional={impairmentsForm}>
            Patient requires an impairment to be added
          </Radios.Radio>
          <Radios.Radio id="hello2" value="no">
            Patient would prefer not to say
          </Radios.Radio>
        </Radios>
      </Fieldset>;
  }
}`,...(H=(E=l.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var W,w,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
      <Radios name="example" id="example-divider">
        <Radios.Radio value="government-gateway">Use Government Gateway</Radios.Radio>
        <Radios.Radio value="nhsuk-login">Use NHS.UK login</Radios.Radio>
        <Radios.Divider>or</Radios.Divider>
        <Radios.Radio value="create-account">Create an account</Radios.Radio>
      </Radios>
    </Fieldset>
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var T,N,Y;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <Fieldset.Legend>How do you want to sign in?</Fieldset.Legend>
      <Radios name="example" id="example-divider">
        <Radios.Radio value="government-gateway" hint="You&#39;ll have a user ID if you've registered for self-assessment or filed a tax return online before.">
          Use Government Gateway
        </Radios.Radio>
        <Radios.Radio value="nhsuk-login" hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.">
          Use NHS.UK login
        </Radios.Radio>
      </Radios>
    </Fieldset>
}`,...(Y=(N=u.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var I,U,G;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Radios name="colours" id="colours">
      <Radios.Radio value="red">Red</Radios.Radio>
      <Radios.Radio value="green">Green</Radios.Radio>
      <Radios.Radio value="blue">Blue</Radios.Radio>
    </Radios>
}`,...(G=(U=m.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var P,M,O;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function RadiosWithErrorBooleanRender() {
    const [error, setError] = React.useState<boolean>(true);
    return <>
        <Fieldset>
          <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
          <Radios name="example" error={error} hint="This includes changing your last name or spelling your name differently.">
            <Radios.Radio id="example-1" value="yes">
              Yes
            </Radios.Radio>
            <Radios.Radio id="example-2" value="no" checked>
              No
            </Radios.Radio>
          </Radios>
        </Fieldset>
        <Button onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setError(!error);
      }}>
          Toggle Error
        </Button>
      </>;
  },
  name: 'Radios With Error (Boolean)'
}`,...(O=(M=h.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var q,A,K;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: function RadiosWithErrorStringRender() {
    const [error, setError] = React.useState('Please select an option');
    return <>
        <Fieldset>
          <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
          <Radios name="example" error={error} hint="This includes changing your last name or spelling your name differently.">
            <Radios.Radio id="example-1" value="yes">
              Yes
            </Radios.Radio>
            <Radios.Radio id="example-2" value="no" checked>
              No
            </Radios.Radio>
          </Radios>
        </Fieldset>
        <Input value={error} onChange={e => setError(e.currentTarget.value)} />
      </>;
  },
  name: 'Radios With Error (String)'
}`,...(K=(A=R.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};const ae=["StandardRadios","InlineRadios","DisabledRadios","RadiosWithConditionalContent","RadiosWithADivider","RadiosWithHintsOnItems","RadiosWithoutFieldset","RadiosWithErrorBoolean","RadiosWithErrorString"];export{t as DisabledRadios,s as InlineRadios,c as RadiosWithADivider,l as RadiosWithConditionalContent,h as RadiosWithErrorBoolean,R as RadiosWithErrorString,u as RadiosWithHintsOnItems,m as RadiosWithoutFieldset,d as StandardRadios,ae as __namedExportsOrder,ee as default};
//# sourceMappingURL=Radios.stories-670232a3.js.map
