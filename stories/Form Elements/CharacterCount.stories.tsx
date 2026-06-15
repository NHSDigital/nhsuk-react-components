import { Markdown } from '@storybook/addon-docs/blocks';
import { type Meta, type StoryObj } from '@storybook/react-vite';

import { CharacterCount } from '#components/form-elements/character-count/index.js';

const meta: Meta<typeof CharacterCount> = {
  title: 'Form Elements/Character count',
  component: CharacterCount,
  parameters: {
    docs: {
      subtitle: (
        <Markdown>
          To learn more about the character count component and when to use it, visit the [design
          system in the NHS digital service
          manual](https://service-manual.nhs.uk/design-system/components/character-count) for
          guidance, examples and options.
        </Markdown>
      ),
    },
  },
  args: {
    label: 'Can you provide more detail?',
    labelProps: { isPageHeading: true, size: 'l' },
    hint: 'Do not include personal information like your name, date of birth or NHS number',
    name: 'example',
    rows: 5,
  },
};

export default meta;
type Story = StoryObj<typeof CharacterCount>;

export const Default: Story = {
  name: 'Character count default',
  args: {
    maxLength: 200,
  },
};

export const WordCountLimit: Story = {
  name: 'Character count with maxwords',
  args: {
    id: 'with-word-count',
    maxWords: 150,
  },
};

export const MessageThreshold: Story = {
  name: 'Character count with threshold',
  args: {
    id: 'with-threshold',
    maxLength: 112,
    threshold: 75,
  },
};

export const WithTranslations: Story = {
  name: 'Character count with translations',
  args: {
    label: 'Allwch chi roi mwy o fanylion?',
    hint: 'Peidiwch â chynnwys gwybodaeth bersonol, fel eich enw, dyddiad geni na rhif y GIG',
    id: 'with-translations',
    maxLength: 200,
    i18n: {
      charactersUnderLimit: {
        one: 'Mae gennych %{count} nod ar ôl',
        two: 'Mae gennych %{count} nod ar ôl',
        few: 'Mae gennych %{count} nod ar ôl',
        many: 'Mae gennych %{count} nod ar ôl',
        other: 'Mae gennych %{count} nod ar ôl',
      },
      charactersAtLimit: 'Mae gennych 0 nod ar ôl',
      charactersOverLimit: {
        one: 'Mae gennych %{count} nod yn ormod',
        two: 'Mae gennych %{count} nod yn ormod',
        few: 'Mae gennych %{count} nod yn ormod',
        many: 'Mae gennych %{count} nod yn ormod',
        other: 'Mae gennych chi %{count} nod yn ormod',
      },
    },
  },
};
