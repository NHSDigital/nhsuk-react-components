import React from 'react';
import { render } from '@testing-library/react';
import CharacterCount from '../CharacterCount';
import Label from '@components/form-elements/label/Label';
import HintText from '@components/form-elements/hint-text/HintText';
import Textarea from '@components/form-elements/textarea/Textarea';

describe('Character Count', () => {
  const children = (
    <>
      <Label htmlFor="more-detail">Can you provide more detail?</Label>
      <HintText id="more-detail-hint">
        Do not include personal information like your name, date of birth or NHS number.
      </HintText>
      <Textarea
        id="more-detail"
        className="nhsuk-js-character-count"
        name="more-detail"
        aria-describedby="more-detail-hint"
        rows={5}
      />
    </>
  );

  it('Matches snapshot', () => {
    const { container } = render(
      <CharacterCount maxLength={200} textAreaId="more-detail">
        {children}
      </CharacterCount>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Sets the data-maxlength attribute when counting characters', () => {
    const { container } = render(
      <CharacterCount maxLength={200} textAreaId="more-detail">
        {children}
      </CharacterCount>,
    );

    expect(container.querySelector('.nhsuk-character-count')?.getAttribute('data-maxlength')).toBe(
      '200',
    );
    expect(
      container.querySelector('.nhsuk-character-count')?.getAttribute('data-maxwords'),
    ).toBeNull();
    expect(
      container.querySelector('.nhsuk-character-count')?.getAttribute('data-threshold'),
    ).toBeNull();
  });

  it('Sets the data-maxwords attribute when counting words', () => {
    const { container } = render(
      <CharacterCount maxWords={200} textAreaId="more-detail">
        {children}
      </CharacterCount>,
    );

    expect(container.querySelector('.nhsuk-character-count')?.getAttribute('data-maxwords')).toBe(
      '200',
    );
    expect(
      container.querySelector('.nhsuk-character-count')?.getAttribute('data-maxlength'),
    ).toBeNull();
    expect(
      container.querySelector('.nhsuk-character-count')?.getAttribute('data-threshold'),
    ).toBeNull();
  });

  it('Sets the data-threshold attribute when threshold is specified', () => {
    const { container } = render(
      <CharacterCount maxLength={200} threshold={50} textAreaId="more-detail">
        {children}
      </CharacterCount>,
    );

    expect(container.querySelector('.nhsuk-character-count')?.getAttribute('data-threshold')).toBe(
      '50',
    );
  });
});
