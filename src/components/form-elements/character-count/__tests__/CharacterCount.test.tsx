import React, { createRef } from 'react';
import { CharacterCount } from '..';
import { renderClient, renderServer } from '#util/components';

describe('Character Count', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <CharacterCount
        label="Can you provide more detail?"
        labelProps={{ isPageHeading: true, size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
        name="more-detail"
        maxLength={200}
        rows={5}
      />,
      { moduleName: 'nhsuk-character-count' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <CharacterCount
        label="Can you provide more detail?"
        labelProps={{ isPageHeading: true, size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
        name="more-detail"
        maxLength={200}
        rows={5}
      />,
      { moduleName: 'nhsuk-character-count' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      moduleName: 'nhsuk-character-count',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('forwards refs', async () => {
    const groupRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLTextAreaElement>();

    const { container } = await renderClient(
      <CharacterCount formGroupProps={{ ref: groupRef }} ref={fieldRef} />,
      { moduleName: 'nhsuk-character-count' },
    );

    const groupEl = container.querySelector('div');
    const textareaEl = container.querySelector('textarea');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group', 'nhsuk-character-count');

    expect(fieldRef.current).toBe(textareaEl);
    expect(fieldRef.current).toHaveClass('nhsuk-textarea');
  });

  it('sets data-maxlength attribute when counting characters', async () => {
    const { modules } = await renderClient(
      <CharacterCount
        label="Can you provide more detail?"
        labelProps={{ isPageHeading: true, size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
        name="more-detail"
        maxLength={200}
        rows={5}
      />,
      { moduleName: 'nhsuk-character-count' },
    );

    const [characterCountEl] = modules;

    expect(characterCountEl).toHaveAttribute('data-maxlength', '200');
    expect(characterCountEl).not.toHaveAttribute('data-maxwords');
    expect(characterCountEl).not.toHaveAttribute('data-threshold');
  });

  it('sets data-maxwords attribute when counting words', async () => {
    const { modules } = await renderClient(
      <CharacterCount
        label="Can you provide more detail?"
        labelProps={{ isPageHeading: true, size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
        name="more-detail"
        maxWords={200}
        rows={5}
      />,
      { moduleName: 'nhsuk-character-count' },
    );

    const [characterCountEl] = modules;

    expect(characterCountEl).not.toHaveAttribute('data-maxlength');
    expect(characterCountEl).toHaveAttribute('data-maxwords', '200');
    expect(characterCountEl).not.toHaveAttribute('data-threshold');
  });

  it('sets data-threshold attribute when threshold is specified', async () => {
    const { modules } = await renderClient(
      <CharacterCount
        label="Can you provide more detail?"
        labelProps={{ isPageHeading: true, size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
        name="more-detail"
        maxLength={200}
        threshold={50}
        rows={5}
      />,
      { moduleName: 'nhsuk-character-count' },
    );

    const [characterCountEl] = modules;

    expect(characterCountEl).toHaveAttribute('data-maxlength', '200');
    expect(characterCountEl).not.toHaveAttribute('data-maxwords');
    expect(characterCountEl).toHaveAttribute('data-threshold', '50');
  });
});
