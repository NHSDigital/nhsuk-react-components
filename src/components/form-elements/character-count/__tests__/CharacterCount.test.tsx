import React from 'react';
import { render } from '@testing-library/react';
import CharacterCount, { CharacterCountType } from '../CharacterCount';
import { Label, HintText, Textarea } from '../../../..';

describe('Character Count', () => {
  it('Matches snapshot with character count type', () => {
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

  it('Matches snapshot with word count type', () => {
    const { container } = render(
      <CharacterCount
        maxLength={150}
        countType={CharacterCountType.Words}
        textAreaId="job-description-detail"
      >
        <Label htmlFor="job-description-detail" size="l">
          Enter a job description
        </Label>
        <Textarea
          id="job-description-detail"
          className="nhsuk-js-character-count"
          name="job-description-detail"
          rows={5}
        />
      </CharacterCount>,
    );

    expect(container).toMatchSnapshot();
  });

  it('Matches snapshot with threshold percent set', () => {
    const { container } = render(
      <CharacterCount
        maxLength={112}
        countType={CharacterCountType.Characters}
        textAreaId="threshold"
        thresholdPercent={75}
      >
        <Label htmlFor="threshold">Can you provide more detail?</Label>
        <Textarea id="threshold" className="nhsuk-js-character-count" name="threshold" rows={5}>
          Type another letter into this field after this message to see the threshold feature
        </Textarea>
      </CharacterCount>,
    );

    expect(container).toMatchSnapshot();
  });
});
