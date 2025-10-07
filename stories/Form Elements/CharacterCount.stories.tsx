import { type Meta, type StoryObj } from '@storybook/react';
import { CharacterCount } from '#components';

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
      label="Can you provide more detail?"
      labelProps={{ isPageHeading: true, size: 'l' }}
      hint="Do not include personal information like your name, date of birth or NHS number"
      name="example"
      maxLength={200}
      rows={5}
    />
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
      label="Can you provide more detail?"
      labelProps={{ isPageHeading: true, size: 'l' }}
      hint="Do not include personal information like your name, date of birth or NHS number"
      name="example"
      maxWords={150}
      rows={5}
    />
  ),
};

/**
 * If the limit is much higher than most users are likely to reach, you can choose to only display the message after a user has entered a certain amount.
 *
 * Use the `threshold` prop to only show the count message when users have reached that percentage of the limit.
 */
export const MessageThreshold: Story = {
  render: () => (
    <CharacterCount
      label="Can you provide more detail?"
      labelProps={{ isPageHeading: true, size: 'l' }}
      hint="Do not include personal information like your name, date of birth or NHS number"
      name="example"
      maxLength={112}
      threshold={75}
      rows={5}
    />
  ),
};
