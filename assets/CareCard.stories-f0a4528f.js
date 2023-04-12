import{j as n,a as e}from"./jsx-runtime-953c45a8.js";import{c as r}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const P={title:"Components/CareCard",component:r,parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/care-card" target="_blank" rel="noopener noreferrer">here</a>.

## Implementation Notes

By default, CareCard components prepend hidden text before the title. These are:

- ("non-urgent") Non-urgent advice:
- ("urgent") Urgent advice:
- ("immediate") Immediate action required:

If you wish to disable this behaviour, pass the prop \`visuallyHiddenText={false}\` to the \`CareCard.Heading\` component or specify your own visually hidden text by using \`visuallyHiddenText="Custom"\`.

You can change the heading type (i.e. \`h1\`, \`h2\` and so on) of the title by passing the prop \`headingLevel="<headingLevel>"\` to the \`CareCard.Heading\`.

## Usage


### Standard

\`\`\`jsx
import { CareCard } from "nhsuk-react-components";

const Element = () => {
    return (
        <CareCard type="non-urgent">
            <CareCard.Heading>Speak to a GP if:</CareCard.Heading>
            <CareCard.Content>
                <ul>
                    <li>you're not sure it's chickenpox</li>
                    <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
                    <li>your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a></li>
                    <li>you're concerned about your child or they get worse</li>
                </ul>
                <p>Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.</p>
            </CareCard.Content>
        </CareCard>
    );
}
\`\`\``}}}},i={render:()=>n(r,{type:"non-urgent",children:[e(r.Heading,{children:"Speak to a GP if:"}),e(r.Content,{children:n("ul",{children:[e("li",{children:"you're not sure it's chickenpox"}),e("li",{children:"the skin around the blisters is red, hot or painful (signs of infection)"}),n("li",{children:["your child is ",e("a",{href:"https://www.nhs.uk/conditions/dehydration",children:"dehydrated"})]}),e("li",{children:"you're concerned about your child or they get worse"})]})})]}),name:"Non-Urgent"},t={render:()=>n(r,{type:"urgent",children:[e(r.Heading,{children:"Ask for an urgent GP appointment if:"}),n(r.Content,{children:[n("ul",{children:[e("li",{children:"you're an adult and have chickenpox"}),e("li",{children:"you're pregnant and haven't had chickenpox before and you've been near someone with it"}),e("li",{children:"you have a weakened immune system and you've been near someone with chickenpox"}),e("li",{children:"you think your newborn baby has chickenpox"})]}),e("p",{children:"In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out."})]})]})},a={render:()=>n(r,{type:"immediate",children:[e(r.Heading,{children:"Call 999 if you have sudden chest pain that:"}),n(r.Content,{children:[n("ul",{children:[e("li",{children:"spreads to your arms, back, neck or jaw"}),e("li",{children:"makes your chest feel tight or heavy"}),e("li",{children:"also started with shortness of breath, sweating and feeling or being sick"})]}),e("p",{children:"You could be having a heart attack. Call 999 immediately as you need immediate treatment in hospital."})]})]})},o={render:()=>n(r,{type:"non-urgent",children:[e(r.Heading,{visuallyHiddenText:!1,children:"Speak to a GP if:"}),n(r.Content,{children:[n("ul",{children:[e("li",{children:"you're not sure it's chickenpox"}),e("li",{children:"the skin around the blisters is red, hot or painful (signs of infection)"}),n("li",{children:["your child is ",e("a",{href:"https://www.nhs.uk/conditions/dehydration",children:"dehydrated"})]}),e("li",{children:"you're concerned about your child or they get worse"})]}),e("p",{children:"Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk."})]})]})},d={render:()=>n(r,{type:"non-urgent",children:[e(r.Heading,{visuallyHiddenText:"Custom Hidden Text",children:"Speak to a GP if:"}),n(r.Content,{children:[n("ul",{children:[e("li",{children:"you're not sure it's chickenpox"}),e("li",{children:"the skin around the blisters is red, hot or painful (signs of infection)"}),n("li",{children:["your child is ",e("a",{href:"https://www.nhs.uk/conditions/dehydration",children:"dehydrated"})]}),e("li",{children:"you're concerned about your child or they get worse"})]}),e("p",{children:"Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk."})]})]})};var s,h,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (): JSX.Element => <CareCard type="non-urgent">
      <CareCard.Heading>Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you&apos;re not sure it&apos;s chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you&apos;re concerned about your child or they get worse</li>
        </ul>
      </CareCard.Content>
    </CareCard>,
  name: 'Non-Urgent'
}`,...(l=(h=i.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var c,u,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <CareCard type="urgent">
      <CareCard.Heading>Ask for an urgent GP appointment if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you&apos;re an adult and have chickenpox</li>
          <li>
            you&apos;re pregnant and haven&apos;t had chickenpox before and you&apos;ve been near
            someone with it
          </li>
          <li>
            you have a weakened immune system and you&apos;ve been near someone with chickenpox
          </li>
          <li>you think your newborn baby has chickenpox</li>
        </ul>
        <p>
          In these situations, your GP can prescribe medicine to prevent complications. You need to
          take it within 24 hours of the spots coming out.
        </p>
      </CareCard.Content>
    </CareCard>
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var y,m,C;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <CareCard type="immediate">
      <CareCard.Heading>Call 999 if you have sudden chest pain that:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>spreads to your arms, back, neck or jaw</li>
          <li>makes your chest feel tight or heavy</li>
          <li>also started with shortness of breath, sweating and feeling or being sick</li>
        </ul>
        <p>
          You could be having a heart attack. Call 999 immediately as you need immediate treatment
          in hospital.
        </p>
      </CareCard.Content>
    </CareCard>
}`,...(C=(m=a.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var g,f,k;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <CareCard type="non-urgent">
      <CareCard.Heading visuallyHiddenText={false}>Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you&apos;re not sure it&apos;s chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you&apos;re concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it&apos;s chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </CareCard.Content>
    </CareCard>
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var b,w,x;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <CareCard type="non-urgent">
      <CareCard.Heading visuallyHiddenText="Custom Hidden Text">Speak to a GP if:</CareCard.Heading>
      <CareCard.Content>
        <ul>
          <li>you&apos;re not sure it&apos;s chickenpox</li>
          <li>the skin around the blisters is red, hot or painful (signs of infection)</li>
          <li>
            your child is <a href="https://www.nhs.uk/conditions/dehydration">dehydrated</a>
          </li>
          <li>you&apos;re concerned about your child or they get worse</li>
        </ul>
        <p>
          Tell the receptionist you think it&apos;s chickenpox before going in. They may recommend a
          special appointment time if other patients are at risk.
        </p>
      </CareCard.Content>
    </CareCard>
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const U=["NonUrgent","Urgent","Immediate","WithoutVisuallyHiddenText","WithCustomVisuallyHiddenText"];export{a as Immediate,i as NonUrgent,t as Urgent,d as WithCustomVisuallyHiddenText,o as WithoutVisuallyHiddenText,U as __namedExportsOrder,P as default};
//# sourceMappingURL=CareCard.stories-f0a4528f.js.map
