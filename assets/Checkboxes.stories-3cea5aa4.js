import{j as n,a as e}from"./jsx-runtime-953c45a8.js";import{R as l,r as C}from"./index-6f814c40.js";import{d as r}from"./ReadingWidth-6be229f5.js";import"./UseDevWarning-60f7660b.js";import"./_commonjsHelpers-042e6b4d.js";const _={title:"FormBehaviour/Checkboxes",component:r},k={render:function(){const o=l.useRef(null),a=l.useRef(null),i=l.useRef(null),[c,u]=l.useState({box1:{name:"",id:""},box2:{name:"",id:""},box3:{name:"",id:""}});return C.useEffect(()=>{var x,d,b,h,t,s;u({box1:{name:(x=o.current)==null?void 0:x.name,id:(d=o.current)==null?void 0:d.id},box2:{name:(b=a.current)==null?void 0:b.name,id:(h=a.current)==null?void 0:h.id},box3:{name:(t=i.current)==null?void 0:t.name,id:(s=i.current)==null?void 0:s.id}})},[o.current,a.current,i.current]),n("div",{style:{padding:20},children:[e("h2",{children:"Scenario: No ID Supplied"}),e("h5",{children:"Expected Behaviour"}),n("ul",{className:"nhsuk-hint",children:[e("li",{children:"Boxes are selectable via their labels"}),e("li",{children:"The Checkboxes are assigned IDs"})]}),e("h5",{children:"Results"}),n("ul",{className:"nhsuk-hint",children:[n("li",{children:["Box 1 ID:",c.box1.id]}),n("li",{children:["Box 2 ID:",c.box2.id]}),n("li",{children:["Box 3 ID:",c.box3.id]}),n("li",{children:["Box 1 Name:",c.box1.name]}),n("li",{children:["Box 2 Name:",c.box2.name]}),n("li",{children:["Box 3 Name:",c.box3.name]})]}),e("h5",{children:"Component"}),n(r,{children:[e(r.Box,{inputRef:o,children:"Box 1"}),e(r.Box,{inputRef:a,children:"Box 2"}),e(r.Box,{inputRef:i,children:"Box 3"})]})]})}},p={render:function(){const o=l.useRef(null),a=l.useRef(null),i=l.useRef(null),[c,u]=l.useState({box1:{name:"",id:""},box2:{name:"",id:""},box3:{name:"",id:""}});return C.useEffect(()=>{var x,d,b,h,t,s;u({box1:{name:(x=o.current)==null?void 0:x.name,id:(d=o.current)==null?void 0:d.id},box2:{name:(b=a.current)==null?void 0:b.name,id:(h=a.current)==null?void 0:h.id},box3:{name:(t=i.current)==null?void 0:t.name,id:(s=i.current)==null?void 0:s.id}})},[o.current,a.current,i.current]),n("div",{style:{padding:20},children:[e("h2",{children:"Scenario: Name Supplied"}),e("h5",{children:"Expected Behaviour"}),n("ul",{className:"nhsuk-hint",children:[e("li",{children:"Boxes are selectable via their labels"}),e("li",{children:"The Checkboxes are assigned IDs according to the Checkboxes Name"})]}),e("h5",{children:"Results"}),n("ul",{className:"nhsuk-hint",children:[n("li",{children:["Box 1 ID:",c.box1.id]}),n("li",{children:["Box 2 ID:",c.box2.id]}),n("li",{children:["Box 3 ID:",c.box3.id]}),n("li",{children:["Box 1 Name:",c.box1.name]}),n("li",{children:["Box 2 Name:",c.box2.name]}),n("li",{children:["Box 3 Name:",c.box3.name]})]}),e("h5",{children:"Component"}),n(r,{name:"name-supplied",children:[e(r.Box,{inputRef:o,children:"Box 1"}),e(r.Box,{inputRef:a,children:"Box 2"}),e(r.Box,{inputRef:i,children:"Box 3"})]})]})}},f={render:function(){const o=l.useRef(null),a=l.useRef(null),i=l.useRef(null),[c,u]=l.useState({box1:{name:"",id:""},box2:{name:"",id:""},box3:{name:"",id:""}});return C.useEffect(()=>{var x,d,b,h,t,s;u({box1:{name:(x=o.current)==null?void 0:x.name,id:(d=o.current)==null?void 0:d.id},box2:{name:(b=a.current)==null?void 0:b.name,id:(h=a.current)==null?void 0:h.id},box3:{name:(t=i.current)==null?void 0:t.name,id:(s=i.current)==null?void 0:s.id}})},[o.current,a.current,i.current]),n("div",{style:{padding:20},children:[e("h2",{children:"Scenario: ID Prefix Supplied"}),e("h5",{children:"Expected Behaviour"}),n("ul",{className:"nhsuk-hint",children:[e("li",{children:"Boxes are selectable via their labels"}),e("li",{children:"The Checkboxes are assigned IDs according to the ID prefix"}),e("li",{children:"The Checkboxes are assigned randomly generated names"})]}),e("h5",{children:"Results"}),n("ul",{className:"nhsuk-hint",children:[n("li",{children:["Box 1 ID:",c.box1.id]}),n("li",{children:["Box 2 ID:",c.box2.id]}),n("li",{children:["Box 3 ID:",c.box3.id]}),n("li",{children:["Box 1 Name:",c.box1.name]}),n("li",{children:["Box 2 Name:",c.box2.name]}),n("li",{children:["Box 3 Name:",c.box3.name]})]}),e("h5",{children:"Component"}),n(r,{idPrefix:"idprefix",children:[e(r.Box,{inputRef:o,children:"Box 1"}),e(r.Box,{inputRef:a,children:"Box 2"}),e(r.Box,{inputRef:i,children:"Box 3"})]})]})}},R={render:function(){const o=l.useRef(null),a=l.useRef(null),i=l.useRef(null),[c,u]=l.useState({box1:{name:"",id:""},box2:{name:"",id:""},box3:{name:"",id:""}});return C.useEffect(()=>{var x,d,b,h,t,s;u({box1:{name:(x=o.current)==null?void 0:x.name,id:(d=o.current)==null?void 0:d.id},box2:{name:(b=a.current)==null?void 0:b.name,id:(h=a.current)==null?void 0:h.id},box3:{name:(t=i.current)==null?void 0:t.name,id:(s=i.current)==null?void 0:s.id}})},[o.current,a.current,i.current]),n("div",{style:{padding:20},children:[e("h2",{children:"Scenario: ID Prefix and Name Supplied"}),e("h5",{children:"Expected Behaviour"}),n("ul",{className:"nhsuk-hint",children:[e("li",{children:"Boxes are selectable via their labels"}),e("li",{children:"The Checkboxes are assigned IDs according to the ID prefix"}),e("li",{children:"The Checkboxes have the same name as the Checkboxes component"})]}),e("h5",{children:"Results"}),n("ul",{className:"nhsuk-hint",children:[n("li",{children:["Box 1 ID:",c.box1.id]}),n("li",{children:["Box 2 ID:",c.box2.id]}),n("li",{children:["Box 3 ID:",c.box3.id]}),n("li",{children:["Box 1 Name:",c.box1.name]}),n("li",{children:["Box 2 Name:",c.box2.name]}),n("li",{children:["Box 3 Name:",c.box3.name]})]}),e("h5",{children:"Component"}),n(r,{idPrefix:"idprefix",name:"testname",children:[e(r.Box,{inputRef:o,children:"Box 1"}),e(r.Box,{inputRef:a,children:"Box 2"}),e(r.Box,{inputRef:i,children:"Box 3"})]})]})}},B={render:function(){const[o,a]=l.useState([]),[i,c]=l.useState([]),[u,x]=l.useState([]);return n("div",{style:{padding:20},children:[e("h2",{children:"Scenario: onChange and onInput handlers are bound without any other props"}),e("h5",{children:"Expected Behaviour"}),n("ul",{className:"nhsuk-hint",children:[e("li",{children:"OnChange Handlers are fired using the generated IDs and Names"}),e("li",{children:"The value is passed through"})]}),e("h5",{children:"Component"}),n(r,{onChange:h=>{const t=h.target;a([...o,`[${t.id}] Value: ${t.value}, Checked: ${t.checked}`]),u.includes(t.value)?x(u.filter(s=>s!==t.value)):x([...u,t.value])},onInput:h=>{const t=h.target;c([...i,`[${t.id}] Value: ${t.value}, Checked: ${t.checked}`])},children:[e(r.Box,{value:"1",children:"Box 1"}),e(r.Box,{value:"2",children:"Box 2"}),e(r.Box,{value:"3",children:"Box 3"})]}),e("br",{}),e("h5",{children:"Current Value"}),e("pre",{children:JSON.stringify(u,null,2)}),e("h5",{children:"Change Events"}),e("ul",{className:"nhsuk-hint",children:o.map((h,t)=>e("li",{children:h},t))}),e("h5",{children:"Input Events"}),e("ul",{className:"nhsuk-hint",children:i.map((h,t)=>e("li",{children:h},t))})]})}};var S,g,I;k.parameters={...k.parameters,docs:{...(S=k.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function NoIDSuppliedRender() {
    const checkbox1Ref = React.useRef<HTMLInputElement>(null);
    const checkbox2Ref = React.useRef<HTMLInputElement>(null);
    const checkbox3Ref = React.useRef<HTMLInputElement>(null);
    const [checkboxState, setCheckboxState] = React.useState<CheckboxState>({
      box1: {
        name: '',
        id: ''
      },
      box2: {
        name: '',
        id: ''
      },
      box3: {
        name: '',
        id: ''
      }
    });
    useEffect(() => {
      setCheckboxState({
        box1: {
          name: checkbox1Ref.current?.name,
          id: checkbox1Ref.current?.id
        },
        box2: {
          name: checkbox2Ref.current?.name,
          id: checkbox2Ref.current?.id
        },
        box3: {
          name: checkbox3Ref.current?.name,
          id: checkbox3Ref.current?.id
        }
      });
    }, [checkbox1Ref.current, checkbox2Ref.current, checkbox3Ref.current]);
    return <div style={{
      padding: 20
    }}>
        <h2>Scenario: No ID Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>
            Box 1 ID:
            {checkboxState.box1.id}
          </li>
          <li>
            Box 2 ID:
            {checkboxState.box2.id}
          </li>
          <li>
            Box 3 ID:
            {checkboxState.box3.id}
          </li>
          <li>
            Box 1 Name:
            {checkboxState.box1.name}
          </li>
          <li>
            Box 2 Name:
            {checkboxState.box2.name}
          </li>
          <li>
            Box 3 Name:
            {checkboxState.box3.name}
          </li>
        </ul>
        <h5>Component</h5>
        <Checkboxes>
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </div>;
  }
}`,...(I=(g=k.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var v,N,D;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: function NameSuppliedRender() {
    const checkbox1Ref = React.useRef<HTMLInputElement>(null);
    const checkbox2Ref = React.useRef<HTMLInputElement>(null);
    const checkbox3Ref = React.useRef<HTMLInputElement>(null);
    const [checkboxState, setCheckboxState] = React.useState<CheckboxState>({
      box1: {
        name: '',
        id: ''
      },
      box2: {
        name: '',
        id: ''
      },
      box3: {
        name: '',
        id: ''
      }
    });
    useEffect(() => {
      setCheckboxState({
        box1: {
          name: checkbox1Ref.current?.name,
          id: checkbox1Ref.current?.id
        },
        box2: {
          name: checkbox2Ref.current?.name,
          id: checkbox2Ref.current?.id
        },
        box3: {
          name: checkbox3Ref.current?.name,
          id: checkbox3Ref.current?.id
        }
      });
    }, [checkbox1Ref.current, checkbox2Ref.current, checkbox3Ref.current]);
    return <div style={{
      padding: 20
    }}>
        <h2>Scenario: Name Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the Checkboxes Name</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>
            Box 1 ID:
            {checkboxState.box1.id}
          </li>
          <li>
            Box 2 ID:
            {checkboxState.box2.id}
          </li>
          <li>
            Box 3 ID:
            {checkboxState.box3.id}
          </li>
          <li>
            Box 1 Name:
            {checkboxState.box1.name}
          </li>
          <li>
            Box 2 Name:
            {checkboxState.box2.name}
          </li>
          <li>
            Box 3 Name:
            {checkboxState.box3.name}
          </li>
        </ul>
        <h5>Component</h5>
        <Checkboxes name="name-supplied">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </div>;
  }
}`,...(D=(N=p.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var E,L,T;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: function IDPrefixSuppliedRender() {
    const checkbox1Ref = React.useRef<HTMLInputElement>(null);
    const checkbox2Ref = React.useRef<HTMLInputElement>(null);
    const checkbox3Ref = React.useRef<HTMLInputElement>(null);
    const [checkboxState, setCheckboxState] = React.useState<CheckboxState>({
      box1: {
        name: '',
        id: ''
      },
      box2: {
        name: '',
        id: ''
      },
      box3: {
        name: '',
        id: ''
      }
    });
    useEffect(() => {
      setCheckboxState({
        box1: {
          name: checkbox1Ref.current?.name,
          id: checkbox1Ref.current?.id
        },
        box2: {
          name: checkbox2Ref.current?.name,
          id: checkbox2Ref.current?.id
        },
        box3: {
          name: checkbox3Ref.current?.name,
          id: checkbox3Ref.current?.id
        }
      });
    }, [checkbox1Ref.current, checkbox2Ref.current, checkbox3Ref.current]);
    return <div style={{
      padding: 20
    }}>
        <h2>Scenario: ID Prefix Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the ID prefix</li>
          <li>The Checkboxes are assigned randomly generated names</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>
            Box 1 ID:
            {checkboxState.box1.id}
          </li>
          <li>
            Box 2 ID:
            {checkboxState.box2.id}
          </li>
          <li>
            Box 3 ID:
            {checkboxState.box3.id}
          </li>
          <li>
            Box 1 Name:
            {checkboxState.box1.name}
          </li>
          <li>
            Box 2 Name:
            {checkboxState.box2.name}
          </li>
          <li>
            Box 3 Name:
            {checkboxState.box3.name}
          </li>
        </ul>
        <h5>Component</h5>
        <Checkboxes idPrefix="idprefix">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </div>;
  }
}`,...(T=(L=f.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var y,H,M;R.parameters={...R.parameters,docs:{...(y=R.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: function IDPrefixAndNameSuppliedRender() {
    const checkbox1Ref = React.useRef<HTMLInputElement>(null);
    const checkbox2Ref = React.useRef<HTMLInputElement>(null);
    const checkbox3Ref = React.useRef<HTMLInputElement>(null);
    const [checkboxState, setCheckboxState] = React.useState<CheckboxState>({
      box1: {
        name: '',
        id: ''
      },
      box2: {
        name: '',
        id: ''
      },
      box3: {
        name: '',
        id: ''
      }
    });
    useEffect(() => {
      setCheckboxState({
        box1: {
          name: checkbox1Ref.current?.name,
          id: checkbox1Ref.current?.id
        },
        box2: {
          name: checkbox2Ref.current?.name,
          id: checkbox2Ref.current?.id
        },
        box3: {
          name: checkbox3Ref.current?.name,
          id: checkbox3Ref.current?.id
        }
      });
    }, [checkbox1Ref.current, checkbox2Ref.current, checkbox3Ref.current]);
    return <div style={{
      padding: 20
    }}>
        <h2>Scenario: ID Prefix and Name Supplied</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>Boxes are selectable via their labels</li>
          <li>The Checkboxes are assigned IDs according to the ID prefix</li>
          <li>The Checkboxes have the same name as the Checkboxes component</li>
        </ul>
        <h5>Results</h5>
        <ul className="nhsuk-hint">
          <li>
            Box 1 ID:
            {checkboxState.box1.id}
          </li>
          <li>
            Box 2 ID:
            {checkboxState.box2.id}
          </li>
          <li>
            Box 3 ID:
            {checkboxState.box3.id}
          </li>
          <li>
            Box 1 Name:
            {checkboxState.box1.name}
          </li>
          <li>
            Box 2 Name:
            {checkboxState.box2.name}
          </li>
          <li>
            Box 3 Name:
            {checkboxState.box3.name}
          </li>
        </ul>
        <h5>Component</h5>
        <Checkboxes idPrefix="idprefix" name="testname">
          <Checkboxes.Box inputRef={checkbox1Ref}>Box 1</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox2Ref}>Box 2</Checkboxes.Box>
          <Checkboxes.Box inputRef={checkbox3Ref}>Box 3</Checkboxes.Box>
        </Checkboxes>
      </div>;
  }
}`,...(M=(H=R.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var P,V,O;B.parameters={...B.parameters,docs:{...(P=B.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: function OnChangeAndOnInputHandlersRender() {
    const [changeEventLog, setChangeEventLog] = React.useState<Array<string>>([]);
    const [inputEventLog, setInputEventLog] = React.useState<Array<string>>([]);
    const [currentValue, setCurrentValue] = React.useState<Array<string>>([]);
    const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
      const target = (e.target as HTMLInputElement);
      setChangeEventLog([...changeEventLog, \`[\${target.id}] Value: \${target.value}, Checked: \${target.checked}\`]);
      if (currentValue.includes(target.value)) {
        setCurrentValue(currentValue.filter(x => x !== target.value));
      } else {
        setCurrentValue([...currentValue, target.value]);
      }
    };
    const handleInput = (e: SyntheticEvent<HTMLInputElement>) => {
      const target = (e.target as HTMLInputElement);
      setInputEventLog([...inputEventLog, \`[\${target.id}] Value: \${target.value}, Checked: \${target.checked}\`]);
    };
    return <div style={{
      padding: 20
    }}>
        <h2>Scenario: onChange and onInput handlers are bound without any other props</h2>
        <h5>Expected Behaviour</h5>
        <ul className="nhsuk-hint">
          <li>OnChange Handlers are fired using the generated IDs and Names</li>
          <li>The value is passed through</li>
        </ul>
        <h5>Component</h5>
        <Checkboxes onChange={handleChange} onInput={handleInput}>
          <Checkboxes.Box value="1">Box 1</Checkboxes.Box>
          <Checkboxes.Box value="2">Box 2</Checkboxes.Box>
          <Checkboxes.Box value="3">Box 3</Checkboxes.Box>
        </Checkboxes>
        <br />
        <h5>Current Value</h5>
        <pre>{JSON.stringify(currentValue, null, 2)}</pre>
        <h5>Change Events</h5>
        <ul className="nhsuk-hint">
          {changeEventLog.map((event, index) => <li key={index}>{event}</li>)}
        </ul>
        <h5>Input Events</h5>
        <ul className="nhsuk-hint">
          {inputEventLog.map((event, index) => <li key={index}>{event}</li>)}
        </ul>
      </div>;
  }
}`,...(O=(V=B.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const F=["NoIDSupplied","NameSupplied","IDPrefixSupplied","IDPrefixAndNameSupplied","OnChangeAndOnInputHandlers"];export{R as IDPrefixAndNameSupplied,f as IDPrefixSupplied,p as NameSupplied,k as NoIDSupplied,B as OnChangeAndOnInputHandlers,F as __namedExportsOrder,_ as default};
//# sourceMappingURL=Checkboxes.stories-3cea5aa4.js.map
