import React from 'react';
import { CharacterCount, CharacterCountType, HintText, Label, Textarea } from '../../src';
import { Meta, StoryObj } from '@storybook/react';

/**
 * Help users know how much text they can enter when there is a limit on the number of characters.
 *
 * This component can be found in the `nhsuk-frontend` repository <a href="https://github.com/nhsuk/nhsuk-frontend/tree/main/packages/components/character-count" target="_blank" rel="noopener noreferrer">here</a>.
 *
 * Further information about this component can be found in the <a href='https://service-manual.nhs.uk/design-system/components/character-count'>NHS digital service manual.</a>
 */

const meta: Meta<typeof CharacterCount> = {
  title: 'Form Elements/CharacterCount',
  component: CharacterCount,
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

export const Standard: Story = {
  render: () => (
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
    </CharacterCount>
  ),
};

/**
 * Sometimes, rather than counting the number of characters, it is useful to count the number of words instead.
 *
 * Use the `countType` prop to vary this behaviour.
 */
export const WordCountLimit: Story = {
  render: () => (
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
    </CharacterCount>
  ),
};

/**
 * If the limit is much higher than most users are likely to reach, you can choose to only display the message after a user has entered a certain amount.
 *
 * Use the `thresholdPercent` prop to only show the count message when users have reached that percentage of the limit.
 */
export const MessageThresholdPercentage: Story = {
  render: () => (
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
    </CharacterCount>
  ),
};
