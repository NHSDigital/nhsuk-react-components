import{j as n,a as e}from"./jsx-runtime-953c45a8.js";import{h as r}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";const y={title:"Components/ErrorSummary",component:r,parameters:{docs:{description:{component:`This component can be found in the \`nhsuk-frontend\` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/error-summary" target="_blank" rel="noopener noreferrer">here</a>.

## Implementation Notes

The \`ErrorSummary\` component has four subcomponents:

- \`ErrorSummary.Title\`
- \`ErrorSummary.Body\`
- \`ErrorSummary.List\`
- \`ErrorSummary.Item\`

## Usage

### Standard

\`\`\`jsx
import { ErrorSummary } from "nhsuk-react-components";

const Element = () => {
    return (
        <ErrorSummary aria-labelledby="error-summary-title" role="alert" tabIndex={-1}>
            <ErrorSummary.Title id="error-summary-title">There is a problem</ErrorSummary.Title>
            <ErrorSummary.Body>
                <p>Optional description of the errors and how to correct them</p>
                <ErrorSummary.List>
                    <ErrorSummary.Item href="#example-error-1">
                        Link to error with explanation
                    </ErrorSummary.Item>
                    <ErrorSummary.Item href="#example-error-2">
                        Link to error with explanation
                    </ErrorSummary.Item>
                </ErrorSummary.List>
            </ErrorSummary.Body>
        </ErrorSummary>
    );
}
\`\`\``}}}},o={render:()=>n(r,{"aria-labelledby":"error-summary-title",role:"alert",tabIndex:-1,children:[e(r.Title,{id:"error-summary-title",children:"There is a problem"}),n(r.Body,{children:[e("p",{children:"Optional description of the errors and how to correct them"}),n(r.List,{children:[e(r.Item,{href:"#example-error-1",children:"Link to error with explanation"}),e(r.Item,{href:"#example-error-2",children:"Link to error with explanation"})]})]})]})};var m,t,a;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ErrorSummary aria-labelledby="error-summary-title" role="alert" tabIndex={-1}>
      <ErrorSummary.Title id="error-summary-title">There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body>
        <p>Optional description of the errors and how to correct them</p>
        <ErrorSummary.List>
          <ErrorSummary.Item href="#example-error-1">
            Link to error with explanation
          </ErrorSummary.Item>
          <ErrorSummary.Item href="#example-error-2">
            Link to error with explanation
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const d=["Standard"];export{o as Standard,d as __namedExportsOrder,y as default};
//# sourceMappingURL=ErrorSummary.stories-8ea5df4e.js.map
