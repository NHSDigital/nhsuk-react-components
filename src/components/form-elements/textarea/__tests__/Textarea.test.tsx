import { createRef } from 'react';
import { Textarea } from '..';
import { renderClient, renderServer } from '#util/components';

describe('Textarea', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <Textarea
        label="Can you provide more detail?"
        labelProps={{ size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
      />,
      { className: 'nhsuk-textarea' },
    );

    expect(container).toMatchSnapshot('Textarea');
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Textarea
        label="Can you provide more detail?"
        labelProps={{ size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
      />,
      { className: 'nhsuk-textarea' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-textarea',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const groupRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLTextAreaElement>();

    const { container } = await renderClient(
      <Textarea formGroupProps={{ ref: groupRef }} ref={fieldRef} />,
      { className: 'nhsuk-textarea' },
    );

    const groupEl = container.querySelector('div');
    const textareaEl = container.querySelector('textarea');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group');

    expect(fieldRef.current).toBe(textareaEl);
    expect(fieldRef.current).toHaveClass('nhsuk-textarea');
  });
});
