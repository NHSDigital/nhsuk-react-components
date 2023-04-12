import{j as n,a as e}from"./jsx-runtime-953c45a8.js";import{D as r}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const D={title:"Components/Details",component:r,parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/contents-list" target="_blank">here</a>.

## Implementation Notes

The \`Details\` component has three subcomponents:

- \`Details.Summary\`
- \`Details.Text\`
- \`Details.ExpanderGroup\`

## Usage

### Standard

\`\`\`jsx
import { Details } from "nhsuk-react-components";

const Element = () => {
    return (
        <Details>
            <Details.Summary>Where can I find my NHS number?</Details.Summary>
            <Details.Text>
                <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
                <p>
                You can find your NHS number on any document sent to you by the NHS. This may include:
                </p>
                <ul>
                    <li>prescriptions</li>
                    <li>test results</li>
                    <li>hospital referral letters</li>
                    <li>appointment letters</li>
                    <li>your NHS medical card</li>
                </ul>
                <p>Ask your GP practice for help if you can't find your NHS number.</p>
            </Details.Text>
        </Details>
    );
}
\`\`\``}}}},t={argTypes:{expander:{table:{disable:!0}}},render:({expander:i})=>n(r,{expander:i,children:[e(r.Summary,{children:"Where can I find my NHS number?"}),n(r.Text,{children:[e("p",{children:"An NHS number is a 10 digit number, like 485 777 3456."}),e("p",{children:"You can find your NHS number on any document sent to you by the NHS. This may include:"}),n("ul",{children:[e("li",{children:"prescriptions"}),e("li",{children:"test results"}),e("li",{children:"hospital referral letters"}),e("li",{children:"appointment letters"}),e("li",{children:"your NHS medical card"})]}),e("p",{children:"Ask your GP practice for help if you can't find your NHS number."})]})]})},l={args:{expander:!0},render:({expander:i})=>n(r,{expander:i,children:[e(r.Summary,{children:"Opening times"}),e(r.Text,{children:e("table",{children:n("tbody",{children:[n("tr",{children:[e("th",{children:e("strong",{children:"Day of the week"})}),e("th",{children:e("strong",{children:"Opening hours"})})]}),n("tr",{children:[e("th",{children:"Monday"}),e("td",{children:"9am to 6pm"})]}),n("tr",{children:[e("th",{children:"Tuesday"}),e("td",{children:"9am to 6pm"})]}),n("tr",{children:[e("th",{children:"Wednesday"}),e("td",{children:"9am to 6pm"})]}),n("tr",{children:[e("th",{children:"Thursday"}),e("td",{children:"9am to 6pm"})]}),n("tr",{children:[e("th",{children:"Friday"}),e("td",{children:"9am to 6pm"})]}),n("tr",{children:[e("th",{children:"Saturday"}),e("td",{children:"9am to 1pm"})]}),n("tr",{children:[e("th",{children:"Sunday"}),e("td",{children:"Closed"})]})]})})})]})},a={render:()=>n(r.ExpanderGroup,{children:[n(r,{expander:!0,children:[e(r.Summary,{children:"How to measure your blood glucose levels"}),n(r.Text,{children:[e("p",{children:"Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better."}),e("p",{children:"You would have been given:"}),n("ul",{children:[e("li",{children:"a blood glucose metre"}),e("li",{children:"small needles called lancets"}),e("li",{children:"a plastic pen to hold the lancest"}),e("li",{children:"small test strips"})]})]})]}),n(r,{expander:!0,children:[e(r.Summary,{children:"When to check your blood glucose level"}),n(r.Text,{children:[e("p",{children:"Try to check your blood:"}),n("ul",{children:[e("li",{children:"before meals"}),e("li",{children:"2 to 3 hours after meals"}),e("li",{children:"before, during (take a break) and after exercise"})]}),e("p",{children:"This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels."})]})]})]})};var o,s,d;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  argTypes: {
    expander: {
      table: {
        disable: true
      }
    }
  },
  render: ({
    expander
  }) => <Details expander={expander}>
      <Details.Summary>Where can I find my NHS number?</Details.Summary>
      <Details.Text>
        <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
        <p>
          You can find your NHS number on any document sent to you by the NHS. This may include:
        </p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
          <li>your NHS medical card</li>
        </ul>
        <p>Ask your GP practice for help if you can&apos;t find your NHS number.</p>
      </Details.Text>
    </Details>
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var c,h,u;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    expander: true
  },
  render: ({
    expander
  }) => <Details expander={expander}>
      <Details.Summary>Opening times</Details.Summary>
      <Details.Text>
        <table>
          <tbody>
            <tr>
              <th>
                <strong>Day of the week</strong>
              </th>
              <th>
                <strong>Opening hours</strong>
              </th>
            </tr>
            <tr>
              <th>Monday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Tuesday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Wednesday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Friday</th>
              <td>9am to 6pm</td>
            </tr>
            <tr>
              <th>Saturday</th>
              <td>9am to 1pm</td>
            </tr>
            <tr>
              <th>Sunday</th>
              <td>Closed</td>
            </tr>
          </tbody>
        </table>
      </Details.Text>
    </Details>
}`,...(u=(h=l.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Details.ExpanderGroup>
      <Details expander>
        <Details.Summary>How to measure your blood glucose levels</Details.Summary>
        <Details.Text>
          <p>
            Testing your blood at home is quick and easy, although it can be uncomfortable. It does
            get better.
          </p>
          <p>You would have been given:</p>
          <ul>
            <li>a blood glucose metre</li>
            <li>small needles called lancets</li>
            <li>a plastic pen to hold the lancest</li>
            <li>small test strips</li>
          </ul>
        </Details.Text>
      </Details>
      <Details expander>
        <Details.Summary>When to check your blood glucose level</Details.Summary>
        <Details.Text>
          <p>Try to check your blood:</p>
          <ul>
            <li>before meals</li>
            <li>2 to 3 hours after meals</li>
            <li>before, during (take a break) and after exercise</li>
          </ul>
          <p>
            This helps you understand your blood glucose levels and how they’re affected by meals
            and exercise. It should help you have more stable blood glucose levels.
          </p>
        </Details.Text>
      </Details>
    </Details.ExpanderGroup>
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const T=["Standard","Expander","ExpanderGroup"];export{l as Expander,a as ExpanderGroup,t as Standard,T as __namedExportsOrder,D as default};
//# sourceMappingURL=Details.stories-b409d04d.js.map
