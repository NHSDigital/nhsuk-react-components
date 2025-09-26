import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import CharacterCount from '../CharacterCount';

describe('Character Count', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <CharacterCount
        label="Can you provide more detail?"
        labelProps={{ isPageHeading: true, size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
        name="more-detail"
        maxLength={200}
        rows={5}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const groupRef = createRef<HTMLDivElement>();
    const fieldRef = createRef<HTMLTextAreaElement>();

    const { container } = render(
      <CharacterCount formGroupProps={{ ref: groupRef }} ref={fieldRef} />,
    );

    const groupEl = container.querySelector('div');
    const textareaEl = container.querySelector('textarea');

    expect(groupRef.current).toBe(groupEl);
    expect(groupRef.current).toHaveClass('nhsuk-form-group', 'nhsuk-character-count');

    expect(fieldRef.current).toBe(textareaEl);
    expect(fieldRef.current).toHaveClass('nhsuk-textarea');
  });

  it('sets data-maxlength attribute when counting characters', () => {
    const { container } = render(
      <CharacterCount
        label="Can you provide more detail?"
        labelProps={{ isPageHeading: true, size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
        name="more-detail"
        maxLength={200}
        rows={5}
      />,
    );

    const characterCountEl = container.querySelector('.nhsuk-character-count');

    expect(characterCountEl).toHaveAttribute('data-maxlength', '200');
    expect(characterCountEl).not.toHaveAttribute('data-maxwords');
    expect(characterCountEl).not.toHaveAttribute('data-threshold');
  });

  it('sets data-maxwords attribute when counting words', () => {
    const { container } = render(
      <CharacterCount
        label="Can you provide more detail?"
        labelProps={{ isPageHeading: true, size: 'l' }}
        hint="Do not include personal information like your name, date of birth or NHS number"
        id="more-detail"
        name="more-detail"
        maxWords={200}
        rows={5}
      />,
    );

    const characterCountEl = container.querySelector('.nhsuk-character-count');

    expect(characterCountEl).not.toHaveAttribute('data-maxlength');
    expect(characterCountEl).toHaveAttribute('data-maxwords', '200');
    expect(characterCountEl).not.toHaveAttribute('data-threshold');
  });

  it('sets data-threshold attribute when threshold is specified', () => {
    const { container } = render(
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
    );

    const characterCountEl = container.querySelector('.nhsuk-character-count');

    expect(characterCountEl).toHaveAttribute('data-maxlength', '200');
    expect(characterCountEl).not.toHaveAttribute('data-maxwords');
    expect(characterCountEl).toHaveAttribute('data-threshold', '50');
  });
});
