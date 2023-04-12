import{j as a,a as e,F as q}from"./jsx-runtime-953c45a8.js";import{R as D}from"./index-6f814c40.js";import{d as r,F as n,e as z,I as j}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./_commonjsHelpers-042e6b4d.js";const U={title:"Components/Checkboxes",component:r,parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/checkboxes" target="_blank" rel="noopener noreferrer">here</a>.

## Implementation Notes

For details on the new form design pattern, check the documentation for the \`Form\` component.

The \`Checkbox\` component provides a \`CheckboxContext\` context, which the \`Checkbox.Box\` components use. When each box initially renders, it will attempt to assign itself an \`id\` by calling the \`getBoxId\` method in the context. This will assign each box a sequential ID using either the \`idPrefix\` or \`name\` supplied to the Checkbox. If neither are provided, the element will generate it's own unique identifier.

## Usage

### Standard

\`\`\`jsx
import { Checkboxes } from "nhsuk-react-components";

const Element = () => {
    return (
        <Checkboxes name="nationality" id="nationality">
            <Checkboxes.Box value="british">British</Checkboxes.Box>
            <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
            <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
        </Checkboxes>
    );
}
\`\`\``}}}},t={render:()=>a(n,{"aria-describedby":"nationality--hint",children:[e(n.Legend,{children:"What is your nationality?"}),a(r,{name:"nationality",id:"nationality",hint:"If you have more than 1 nationality, select all options that are relevant to you.",children:[e(r.Box,{value:"british",children:"British"}),e(r.Box,{value:"irish",children:"Irish"}),e(r.Box,{value:"other",children:"Citizen of another country"})]})]})},i={render:()=>a(n,{children:[e(n.Legend,{isPageHeading:!0,children:"How do you want to sign in?"}),a(r,{children:[e(r.Box,{id:"government-gateway",name:"gateway",type:"checkbox",value:"gov-gateway",hint:"You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.",children:"Sign in with Government Gateway"}),e(r.Box,{id:"nhsuk-login",name:"verify",value:"nhsuk-verify",hint:"You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.",children:"Sign in with NHS.UK login"})]})]})},s={render:()=>a(r,{id:"colours",name:"colours",children:[e(r.Box,{value:"red",children:"Red"}),e(r.Box,{value:"green",children:"Green"}),e(r.Box,{value:"red",disabled:!0,children:"Blue"})]})},l={render:()=>a(n,{"aria-describedby":"waste--hint",children:[e(n.Legend,{isPageHeading:!0,children:"Which types of waste do you transport regularly?"}),e(r,{id:"waste",name:"waste",hint:"Select all that apply",children:e(r.Box,{conditional:e("p",{children:"This includes rocks and earth."}),value:"mines",children:"Waste from mines or quarries"})})]})},c={render:()=>a(n,{"aria-describedby":"waste--hint",children:[e(n.Legend,{isPageHeading:!0,children:"Which types of waste do you transport regularly?"}),a(r,{id:"waste",name:"waste",hint:"Select all that apply",children:[e(r.Box,{value:"animal",children:"Waste from animal carcasses"}),e(r.Box,{value:"mines",children:"Waste from mines or quarries"}),e(r.Box,{value:"farm",children:"Farm or agricultural waste"})]})]})},h={render:function(){const[o,u]=D.useState(!0);return a(q,{children:[a(n,{"aria-describedby":"waste-hint",children:[e(n.Legend,{isPageHeading:!0,children:"Which types of waste do you transport regularly?"}),a(r,{error:o,id:"waste",name:"waste",hint:"Select all that apply",children:[e(r.Box,{value:"animal",children:"Waste from animal carcasses"}),e(r.Box,{value:"mines",children:"Waste from mines or quarries"}),e(r.Box,{value:"farm",children:"Farm or agricultural waste"})]})]}),e(z,{onClick:m=>{m.preventDefault(),u(!o)},children:"Toggle Error"})]})},name:"With Error (Boolean)"},d={render:function(){const[o,u]=D.useState("Please select an option");return a(q,{children:[a(n,{"aria-describedby":"waste-hint",children:[e(n.Legend,{isPageHeading:!0,children:"Which types of waste do you transport regularly?"}),a(r,{id:"waste",name:"waste",hint:"Select all that apply",error:o,children:[e(r.Box,{value:"animal",children:"Waste from animal carcasses"}),e(r.Box,{value:"mines",children:"Waste from mines or quarries"}),e(r.Box,{value:"farm",children:"Farm or agricultural waste"})]})]}),e(j,{label:"Error Value",value:o,onChange:m=>u(m.currentTarget.value)})]})},name:"With Error (String)"};var x,g,p;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Fieldset aria-describedby="nationality--hint">
      <Fieldset.Legend>What is your nationality?</Fieldset.Legend>
      <Checkboxes name="nationality" id="nationality" hint="If you have more than 1 nationality, select all options that are relevant to you.">
        <Checkboxes.Box value="british">British</Checkboxes.Box>
        <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
        <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var b,y,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Fieldset>
      <Fieldset.Legend isPageHeading>How do you want to sign in?</Fieldset.Legend>
      <Checkboxes>
        <Checkboxes.Box id="government-gateway" name="gateway" type="checkbox" value="gov-gateway" hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.">
          Sign in with Government Gateway
        </Checkboxes.Box>
        <Checkboxes.Box id="nhsuk-login" name="verify" value="nhsuk-verify" hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.">
          Sign in with NHS.UK login
        </Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,B,f;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Checkboxes id="colours" name="colours">
      <Checkboxes.Box value="red">Red</Checkboxes.Box>
      <Checkboxes.Box value="green">Green</Checkboxes.Box>
      <Checkboxes.Box value="red" disabled>
        Blue
      </Checkboxes.Box>
    </Checkboxes>
}`,...(f=(B=s.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var v,w,W;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Fieldset aria-describedby="waste--hint">
      <Fieldset.Legend isPageHeading>
        Which types of waste do you transport regularly?
      </Fieldset.Legend>
      <Checkboxes id="waste" name="waste" hint="Select all that apply">
        <Checkboxes.Box conditional={<p>This includes rocks and earth.</p>} value="mines">
          Waste from mines or quarries
        </Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
}`,...(W=(w=l.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var S,F,E;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Fieldset aria-describedby="waste--hint">
      <Fieldset.Legend isPageHeading>
        Which types of waste do you transport regularly?
      </Fieldset.Legend>
      <Checkboxes id="waste" name="waste" hint="Select all that apply">
        <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
        <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
}`,...(E=(F=c.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var L,H,T;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: function WithErrorBooleanRender() {
    const [errorToggle, setErrorToggle] = React.useState(true);
    return <>
        <Fieldset aria-describedby="waste-hint">
          <Fieldset.Legend isPageHeading>
            Which types of waste do you transport regularly?
          </Fieldset.Legend>
          <Checkboxes error={errorToggle} id="waste" name="waste" hint="Select all that apply">
            <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
            <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
            <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
          </Checkboxes>
        </Fieldset>
        <Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErrorToggle(!errorToggle);
      }}>
          Toggle Error
        </Button>
      </>;
  },
  name: 'With Error (Boolean)'
}`,...(T=(H=h.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var I,P,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: function WithErrorStringRender() {
    const [error, setError] = React.useState('Please select an option');
    return <>
        <Fieldset aria-describedby="waste-hint">
          <Fieldset.Legend isPageHeading>
            Which types of waste do you transport regularly?
          </Fieldset.Legend>
          <Checkboxes id="waste" name="waste" hint="Select all that apply" error={error}>
            <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
            <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
            <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
          </Checkboxes>
        </Fieldset>
        <Input label="Error Value" value={error} onChange={e => setError(e.currentTarget.value)} />
      </>;
  },
  name: 'With Error (String)'
}`,...(R=(P=d.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const _=["Standard","WithHintText","WithDisabledItem","WithConditionalContent","WithLegendAsPageHeading","WithErrorBoolean","WithErrorString"];export{t as Standard,l as WithConditionalContent,s as WithDisabledItem,h as WithErrorBoolean,d as WithErrorString,i as WithHintText,c as WithLegendAsPageHeading,_ as __namedExportsOrder,U as default};
//# sourceMappingURL=Checkboxes.stories-bcc6e4b7.js.map
