import React, { HTMLProps } from 'react';
import { mount } from 'enzyme';
import { axe, toHaveNoViolations } from 'jest-axe';
import FormGroup from '../FormGroup';

expect.extend(toHaveNoViolations);

type InputProps = HTMLProps<HTMLInputElement> & { error?: boolean };

describe('FormGroup', () => {
  it('matches snapshot', () => {
    const component = mount(
      <FormGroup<InputProps> inputType="input" id="testID">
        {props => <input {...props} />}
      </FormGroup>,
    );
    expect(component).toMatchSnapshot();
    component.unmount();
  });

  it('generates a random ID for the input', () => {
    let renderProps: any;
    const component = mount(
      <FormGroup<InputProps> inputType="input">
        {props => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
    );
    expect(renderProps).not.toBe(null);
    expect(renderProps.id).toHaveLength(11);
    expect(renderProps.id).toContain('input');
    component.unmount();
  });

  it('allows passing of custom IDs', () => {
    let renderProps: any;
    const component = mount(
      <FormGroup<InputProps> inputType="input" id="TestID">
        {props => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
    );
    expect(renderProps).not.toBe(null);
    expect(renderProps.id).toBe('TestID');

    component.setProps({ id: undefined });
    expect(renderProps.id).toHaveLength(11);
    expect(renderProps.id).toContain('input');

    component.setProps({ id: 'TestID2ElectricBoogaloo' });
    expect(renderProps.id).toBe('TestID2ElectricBoogaloo');

    component.unmount();
  });

  it('passes correct props for hint (generated id)', () => {
    let renderProps: any;
    const component = mount(
      <FormGroup<InputProps> inputType="input" hint="This is a test hint">
        {props => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
    );
    expect(renderProps).not.toBe(null);
    expect(renderProps.id).toHaveLength(11);
    expect(renderProps.id).toContain('input');

    expect(component.find('input').prop('aria-describedby')).toBe(`${renderProps.id}--hint`);
    expect(component.find('Hint').prop('id')).toBe(`${renderProps.id}--hint`);

    component.unmount();
  });

  it('passes correct props for hint (custom id)', () => {
    let renderProps: any;
    const component = mount(
      <FormGroup<InputProps> inputType="input" hint="This is a test hint" id="testID">
        {props => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
    );
    expect(renderProps).not.toBe(null);
    expect(renderProps.id).toBe('testID');

    expect(component.find('input').prop('aria-describedby')).toBe('testID--hint');
    expect(component.find('Hint').prop('id')).toBe('testID--hint');

    component.unmount();
  });

  it('passes correct props for label (generated id)', () => {
    let renderProps: any;
    const component = mount(
      <FormGroup<InputProps> inputType="input" label="This is a test label">
        {props => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
    );
    expect(renderProps).not.toBe(null);
    expect(renderProps.id).toHaveLength(11);
    expect(renderProps.id).toContain('input');

    expect(component.find('input').prop('aria-labelledby')).toBe(`${renderProps.id}--label`);
    expect(component.find('Label').prop('id')).toBe(`${renderProps.id}--label`);
    expect(component.find('Label').prop('htmlFor')).toBe(renderProps.id);

    component.unmount();
  });

  it('passes correct props for label (custom id)', () => {
    let renderProps: any;
    const component = mount(
      <FormGroup<InputProps>
        inputType="input"
        label="This is a test label"
        labelProps={{ title: 'TestTitle' }}
        id="testID"
      >
        {props => {
          renderProps = props;
          return <input {...props} />;
        }}
      </FormGroup>,
    );
    expect(renderProps).not.toBe(null);
    expect(renderProps.id).toBe('testID');

    expect(component.find('input').prop('aria-labelledby')).toBe('testID--label');
    expect(component.find('Label').prop('id')).toBe('testID--label');
    expect(component.find('Label').prop('htmlFor')).toBe('testID');
    expect(component.find('Label').text()).toBe('This is a test label');
    expect(component.find('Label').prop('title')).toBe('TestTitle');

    component.unmount();
  });

  it('passes correct props for error (generated id)', () => {
    let renderProps: any;
    const component = mount(
      <FormGroup<InputProps>
        inputType="input"
        error="This is a test error"
        errorProps={{ title: 'TestTitle' }}
      >
        {props => {
          renderProps = props;
          return <input />;
        }}
      </FormGroup>,
    );
    expect(renderProps).not.toBe(null);
    expect(renderProps.id).toHaveLength(11);
    expect(renderProps.id).toContain('input');

    expect(component.find('ErrorMessage').prop('id')).toBe(`${renderProps.id}--error-message`);
    expect(component.find('ErrorMessage').text()).toBe('Error: This is a test error');
    expect(component.find('ErrorMessage').prop('title')).toBe('TestTitle');

    component.unmount();
  });

  it('passes correct props for error (custom id)', () => {
    let renderProps: any;
    const component = mount(
      <FormGroup<InputProps>
        inputType="input"
        error="This is a test error"
        errorProps={{ title: 'TestTitle' }}
        id="testID"
      >
        {props => {
          renderProps = props;
          return <input />;
        }}
      </FormGroup>,
    );
    expect(renderProps).not.toBe(null);
    expect(renderProps.id).toBe('testID');

    expect(component.find('ErrorMessage').prop('id')).toBe('testID--error-message');
    expect(component.find('ErrorMessage').text()).toBe('Error: This is a test error');
    expect(component.find('ErrorMessage').prop('title')).toBe('TestTitle');

    component.unmount();
  });

  it('applies the correct classes when errored', () => {
    const booleanErrorComponent = mount(
      <FormGroup<InputProps> inputType="input" error>
        {({ error, ...rest }) => <input {...rest} />}
      </FormGroup>,
    );
    const stringErrorComponent = mount(
      <FormGroup<InputProps> inputType="input" error="Oh no there's an error!">
        {({ error, ...rest }) => <input {...rest} />}
      </FormGroup>,
    );

    expect(
      booleanErrorComponent.find('div.nhsuk-form-group').hasClass('nhsuk-form-group--error'),
    ).toBeTruthy();
    expect(
      stringErrorComponent.find('div.nhsuk-form-group').hasClass('nhsuk-form-group--error'),
    ).toBeTruthy();

    expect(booleanErrorComponent.find('ErrorMessage')).toHaveLength(0);
    expect(stringErrorComponent.find('ErrorMessage')).toHaveLength(1);
    expect(stringErrorComponent.find('ErrorMessage').text()).toBe("Error: Oh no there's an error!");

    booleanErrorComponent.unmount();
    stringErrorComponent.unmount();
  });

  it('should produce an accessible component', async () => {
    const component = mount(
      <main>
        <FormGroup<InputProps> inputType="input" error label="Form Label">
          {({ error, ...rest }) => <input {...rest} />}
        </FormGroup>
      </main>,
    );
    const html = component.html();

    expect(await axe(html)).toHaveNoViolations();
    component.unmount();
  });
});
