import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import Textarea from '../';

describe('Textarea', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Textarea
        label="Can you provide more detail?"
        labelProps={{ size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
      />,
    );

    expect(container).toMatchSnapshot('Textarea');
  });

  it('forwards refs', () => {
    const groupRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLTextAreaElement>();

    const { container } = render(<Textarea formGroupProps={{ ref: groupRef }} ref={fieldRef} />);

    const groupEl = container.querySelector('div');
    const textareaEl = container.querySelector('textarea');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(fieldRef.current).toBe(textareaEl);
    expect(fieldRef.current).toHaveClass('nhsuk-textarea');
  });
});
