import React from 'react';
import { render } from '@testing-library/react';
import Fieldset from '../';
import TextInput from '@components/form-elements/text-input';
import Radios from '@components/form-elements/radios';
import Checkboxes from '@components/form-elements/checkboxes';
import DateInput from '@components/form-elements/date-input';
import Textarea from '@components/form-elements/textarea';
import Select from '@components/form-elements/select';

describe('Fieldset', () => {
  it('matches snapshot', () => {
    const { container } = render(<Fieldset>Text</Fieldset>);

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

  it.each`
    disableFieldsetRenderProp | formElements              | expectFieldset
    ${false}                  | ${[TextInput]}            | ${true}
    ${true}                   | ${[TextInput]}            | ${false}
    ${false}                  | ${[TextInput, TextInput]} | ${true}
    ${true}                   | ${[TextInput, TextInput]} | ${true}
    ${false}                  | ${[Textarea]}             | ${true}
    ${true}                   | ${[Textarea]}             | ${false}
    ${false}                  | ${[Textarea, Textarea]}   | ${true}
    ${true}                   | ${[Textarea, Textarea]}   | ${true}
    ${false}                  | ${[Select]}               | ${true}
    ${true}                   | ${[Select]}               | ${false}
    ${false}                  | ${[Select, Select]}       | ${true}
    ${true}                   | ${[Select, Select]}       | ${true}
    ${false}                  | ${[Radios]}               | ${true}
    ${true}                   | ${[Radios]}               | ${true}
    ${false}                  | ${[Checkboxes]}           | ${true}
    ${true}                   | ${[Checkboxes]}           | ${true}
    ${false}                  | ${[DateInput]}            | ${true}
    ${true}                   | ${[DateInput]}            | ${true}
  `(
    'When the disableFieldsetRender prop is $disableFieldsetRenderProp and form elements rendered are $formElements, then whether to expect the fieldset being rendered is $expectFieldset',
    ({
      disableFieldsetRenderProp,
      formElements,
      expectFieldset,
    }: {
      disableFieldsetRenderProp: boolean;
      formElements: React.FC[];
      expectFieldset: boolean;
    }) => {
      const { container } = render(
        <Fieldset disableFieldsetRenderWithSingleFormElements={disableFieldsetRenderProp}>
          {formElements.map((FormElement, index) => (
            <FormElement key={index} />
          ))}
        </Fieldset>,
      );

      expect(container.firstChild).toHaveClass('nhsuk-form-group');

      if (expectFieldset) {
        expect(container.firstChild?.firstChild).toHaveClass('nhsuk-fieldset');
      } else {
        expect(container.firstChild?.firstChild).not.toHaveClass('nhsuk-fieldset');
      }
    },
  );

  describe('Fieldset.Legend', () => {
    it('matches snapshot', () => {
      const { container } = render(<Fieldset.Legend>Text</Fieldset.Legend>);

      expect(container).toMatchSnapshot('FieldsetLegend');
    });

    it('renders as page heading', () => {
      const { container } = render(<Fieldset.Legend isPageHeading>Text</Fieldset.Legend>);

      expect(container.querySelector('.nhsuk-fieldset__legend--xl')).toBeTruthy();
      expect(container.querySelector('.nhsuk-fieldset__heading')?.textContent).toBe('Text');
    });
  });
});
