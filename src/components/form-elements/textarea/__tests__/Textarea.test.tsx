import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import Textarea from '../';

describe('Textarea', () => {
  it('render with a given ref', () => {
    const ref = createRef<HTMLTextAreaElement>();
    const { container } = render(<Textarea textareaRef={ref} />);

    expect(container.querySelectorAll('.nhsuk-textarea')).toHaveLength(1);
    expect(ref.current?.className).toContain('nhsuk-textarea');
  });
});
