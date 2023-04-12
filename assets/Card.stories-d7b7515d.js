import{a as r,j as a}from"./jsx-runtime-953c45a8.js";import{C as e}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const x={title:"Components/Card",component:e},d={render:()=>r(e,{children:a(e.Content,{children:[r(e.Heading,{children:"If you need help now but it's not an emergency"}),a(e.Description,{children:["Go to ",r("a",{href:"stories#",children:"111.nhs.uk"})," or ",r("a",{href:"stories#",children:"call 111"})]})]})})},i={args:{clickable:!0},render:n=>r(e,{clickable:n.clickable,children:a(e.Content,{children:[r(e.Heading,{className:"nhsuk-heading-m",children:r(e.Link,{href:"#",children:"Introduction to care and support"})}),r(e.Description,{children:"A quick guide for people who have care and support needs and their carers"})]})})},t={args:{clickable:!0},render:n=>a(e,{clickable:n.clickable,children:[r(e.Image,{src:"https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",alt:""}),a(e.Content,{children:[r(e.Heading,{className:"nhsuk-heading-m",children:r(e.Link,{href:"#",children:"Exercise"})}),r(e.Description,{children:"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"})]})]})},s={args:{feature:!0},render:n=>r(e,{feature:n.feature,children:a(e.Content,{children:[r(e.Heading,{children:"Feature card heading"}),r(e.Description,{children:"Feature card description"})]})})},o={args:{width:"one-half"},argTypes:{width:{control:"radio",options:["one-half","one-third","one-quarter"]}},render:n=>a(e.Group,{children:[r(e.GroupItem,{width:n.width,children:r(e,{clickable:!0,children:a(e.Content,{children:[r(e.Heading,{className:"nhsuk-heading-m",children:r(e.Link,{href:"#",children:"Introduction to care and support"})}),r(e.Description,{children:"A quick guide for people who have care and support needs and their carers"})]})})}),r(e.GroupItem,{width:n.width,children:r(e,{clickable:!0,children:a(e.Content,{children:[r(e.Heading,{className:"nhsuk-heading-m",children:r(e.Link,{href:"#",children:"Help from social services and charities"})}),r(e.Description,{children:"Includes helplines, needs assessments, advocacy and reporting abuse"})]})})}),r(e.GroupItem,{width:n.width,children:r(e,{clickable:!0,children:a(e.Content,{children:[r(e.Heading,{className:"nhsuk-heading-m",children:r(e.Link,{href:"#",children:"Money, work and benefits"})}),r(e.Description,{children:"How to pay for care and support, and where you can get help with costs"})]})})}),r(e.GroupItem,{width:n.width,children:r(e,{clickable:!0,children:a(e.Content,{children:[r(e.Heading,{className:"nhsuk-heading-m",children:r(e.Link,{href:"#",children:"Care after a hospital stay"})}),r(e.Description,{children:"Includes hospital discharge and care and support afterwards"})]})})})]})};var c,h,l;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Card>
      <Card.Content>
        <Card.Heading>If you need help now but it&apos;s not an emergency</Card.Heading>
        <Card.Description>
          Go to <a href="stories#">111.nhs.uk</a> or <a href="stories#">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
}`,...(l=(h=d.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var p,C,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    clickable: true
  },
  render: args => <Card clickable={args.clickable}>
      <Card.Content>
        <Card.Heading className="nhsuk-heading-m">
          <Card.Link href="#">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their carers
        </Card.Description>
      </Card.Content>
    </Card>
}`,...(u=(C=i.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var g,m,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    clickable: true
  },
  render: args => <Card clickable={args.clickable}>
      <Card.Image src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg" alt="" />
      <Card.Content>
        <Card.Heading className="nhsuk-heading-m">
          <Card.Link href="#">Exercise</Card.Link>
        </Card.Heading>
        <Card.Description>
          Programmes, workouts and tips to get you moving and improve your fitness and wellbeing
        </Card.Description>
      </Card.Content>
    </Card>
}`,...(k=(m=t.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var f,w,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    feature: true
  },
  render: args => <Card feature={args.feature}>
      <Card.Content>
        <Card.Heading>Feature card heading</Card.Heading>
        <Card.Description>Feature card description</Card.Description>
      </Card.Content>
    </Card>
}`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var H,I,D;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    width: 'one-half'
  },
  argTypes: {
    width: {
      control: 'radio',
      options: ['one-half', 'one-third', 'one-quarter']
    }
  },
  render: args => <Card.Group>
      <Card.GroupItem width={(args.width as ColWidth)}>
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="#">Introduction to care and support</Card.Link>
            </Card.Heading>
            <Card.Description>
              A quick guide for people who have care and support needs and their carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem width={(args.width as ColWidth)}>
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="#">Help from social services and charities</Card.Link>
            </Card.Heading>
            <Card.Description>
              Includes helplines, needs assessments, advocacy and reporting abuse
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem width={(args.width as ColWidth)}>
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="#">Money, work and benefits</Card.Link>
            </Card.Heading>
            <Card.Description>
              How to pay for care and support, and where you can get help with costs
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem width={(args.width as ColWidth)}>
        <Card clickable>
          <Card.Content>
            <Card.Heading className="nhsuk-heading-m">
              <Card.Link href="#">Care after a hospital stay</Card.Link>
            </Card.Heading>
            <Card.Description>
              Includes hospital discharge and care and support afterwards
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
}`,...(D=(I=o.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};const F=["Standard","ClickableCard","CardWithImage","FeatureCard","CardGroup"];export{o as CardGroup,t as CardWithImage,i as ClickableCard,s as FeatureCard,d as Standard,F as __namedExportsOrder,x as default};
//# sourceMappingURL=Card.stories-d7b7515d.js.map
