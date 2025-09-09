import React from 'react';
import { render } from '@testing-library/react';
import Fieldset from '../';
import TextInput from '@components/form-elements/text-input';

describe('Fieldset', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Fieldset>
        <TextInput id="test-input" />
      </Fieldset>,
    );

    expect(container).toMatchSnapshot('Fieldset');
  });

  it('renders children', () => {
    const { container } = render(<Fieldset>Text</Fieldset>);

    expect(container.textContent).toBe('Text');
  });

  it('Wraps children in form group if the fieldset contains form elements', () => {
    const { container } = render(
      <Fieldset>
        <TextInput />
      </Fieldset>,
    );

    expect(container.firstChild).toHaveClass('nhsuk-form-group');
  });
});
