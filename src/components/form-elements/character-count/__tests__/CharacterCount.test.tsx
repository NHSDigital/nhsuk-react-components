import React from 'react';
import { render } from '@testing-library/react';
import CharacterCount, { CharacterCountType } from '../CharacterCount';
import { Label, HintText, Textarea } from '../../../..';

describe('Character Count', () => {
  it('Matches snapshot', () => {
    const { container } = render(
      <CharacterCount
        maxLength={200}
        countType={CharacterCountType.Characters}
        textAreaId="more-detail"
      >
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
      </CharacterCount>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Sets the data-maxlength attribute when counting characters', () => {
    const { container } = render(
      <CharacterCount
        maxLength={200}
        countType={CharacterCountType.Characters}
        textAreaId="more-detail"
      >
        <div />
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
      <CharacterCount maxLength={200} countType={CharacterCountType.Words} textAreaId="more-detail">
        <div />
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
      <CharacterCount
        maxLength={200}
        countType={CharacterCountType.Characters}
        thresholdPercent={50}
        textAreaId="more-detail"
      >
        <div />
      </CharacterCount>,
    );

    expect(container.querySelector('.nhsuk-character-count')?.getAttribute('data-threshold')).toBe(
      '50',
    );
  });
});
