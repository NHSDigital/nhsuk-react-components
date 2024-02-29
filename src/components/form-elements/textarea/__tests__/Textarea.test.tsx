import React, { createRef } from 'react';
import { mount } from 'enzyme';
import Textarea from '..';

describe('Textarea', () => {
  it('render with a given ref', () => {
    const ref = createRef<HTMLTextAreaElement>();
    const wrapper = mount(<Textarea textareaRef={ref} />);
    expect(wrapper.find('.nhsuk-textarea')).toHaveLength(1);
    expect(ref.current?.className).toContain('nhsuk-textarea');
  });
});
