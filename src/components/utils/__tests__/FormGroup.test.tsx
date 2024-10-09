import React from 'react';
import { render } from '@testing-library/react';
import FormGroup from '../FormGroup';
import TextInput from '@components/form-elements/text-input';

describe('FormGroup', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <FormGroup>
        <h3>Heading</h3>
        <TextInput id="test-input" />
      </FormGroup>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(<FormGroup>Text</FormGroup>);

    expect(container.textContent).toBe('Text');
  });

  it('Wraps children in div if the fieldset does not contain form elements', () => {
    const { container } = render(<FormGroup>Text</FormGroup>);

    expect(container.firstChild).not.toHaveClass('nhsuk-form-group');
  });

  it('Wraps children in form group if the fieldset contains form elements', () => {
    const { container } = render(
      <FormGroup>
        <TextInput />
      </FormGroup>,
    );

    expect(container.firstChild).toHaveClass('nhsuk-form-group');
  });

  it('Wraps children in form group error if the fieldset contains form elements in error', () => {
    const { container } = render(
      <FormGroup enableErrorLine>
        <TextInput error />
      </FormGroup>,
    );

    expect(container.firstChild).toHaveClass('nhsuk-form-group');
    expect(container.firstChild).toHaveClass('nhsuk-form-group--error');
  });

  it('Does not wrap children in form group error if the enableErrorLine prop is not passed', () => {
    const { container } = render(
      <FormGroup>
        <TextInput error />
      </FormGroup>,
    );

    expect(container.firstChild).toHaveClass('nhsuk-form-group');
    expect(container.firstChild).not.toHaveClass('nhsuk-form-group--error');
  });
});
