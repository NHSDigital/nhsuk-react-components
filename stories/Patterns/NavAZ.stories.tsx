import { type Meta, type StoryObj } from '@storybook/react-vite';

import { NavAZ } from '#patterns/nav-a-z/index.js';

const meta: Meta<typeof NavAZ> = {
  title: 'Patterns/A to Z navigation',
  component: NavAZ,
  args: {
    fullAlphabet: false,
    removedLetters: [],
    disabledLetters: [],
    letters: [],
  },
};

export default meta;
type Story = StoryObj<typeof NavAZ>;

export const Default: Story = {
  name: 'A to Z navigation default',
  render: (args) => (
    <NavAZ {...args}>
      <NavAZ.LinkItem href="#A">A</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#B">B</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#C">C</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#D">D</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#E">E</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#F">F</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#G">G</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#H">H</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#I">I</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#J">J</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#K">K</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#L">L</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#M">M</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#N">N</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#O">O</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#P">P</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#Q">Q</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#R">R</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#S">S</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#T">T</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#U">U</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#V">V</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#W">W</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#X">X</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#Y">Y</NavAZ.LinkItem>
      <NavAZ.LinkItem href="#Z">Z</NavAZ.LinkItem>
    </NavAZ>
  ),
};

export const UsingFullAlphabetProp: Story = {
  name: 'A to Z navigation using full alphabet',
  args: {
    fullAlphabet: true,
  },
};

export const UsingFullAlphabetPropWithDisabledLetters: Story = {
  name: 'A to Z navigation using full alphabet with disabled letters',
  args: {
    disabledLetters: ['A', 'B', 'C'],
    fullAlphabet: true,
  },
};

export const UsingFullAlphabetPropWithRemovedLetters: Story = {
  name: 'A to Z navigation using full alphabet with removed letters',
  args: {
    removedLetters: ['A', 'B', 'C'],
    fullAlphabet: true,
  },
};

export const UsingIndividualLetters: Story = {
  name: 'A to Z navigation using individual letters',
  args: {
    letters: ['A', 'B', 'C'],
  },
};

export const UsingACombinationOfProps: Story = {
  name: 'A to Z navigation (complex)',
  args: {
    letters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    disabledLetters: 'QWERTY'.split(''),
    removedLetters: 'UIOP'.split(''),
  },
};
