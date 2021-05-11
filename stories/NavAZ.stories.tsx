import React from 'react';
import { NavAZ } from '../src';

export const Basic = (): JSX.Element => (
  <NavAZ>
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
);

export const UsingFullAlphabetProp = (): JSX.Element => <NavAZ fullAlphabet />;

export const UsingFullAlphabetPropWithDisabledLetters = (): JSX.Element => (
  <NavAZ fullAlphabet disabledLetters={['A', 'B', 'C']} />
);

export const UsingFullAlphabetPropWithRemovedLetters = (): JSX.Element => (
  <NavAZ fullAlphabet removedLetters={['A', 'B', 'C']} />
);

export const UsingIndividualLetters = (): JSX.Element => <NavAZ letters={['A', 'B', 'C']} />;

export const UsingACombinationOfProps = (): JSX.Element => (
  <NavAZ
    letters={'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')}
    disabledLetters={'QWERTY'.split('')}
    removedLetters={'UIOP'.split('')}
  />
);

export default {
  title: 'Components/NavAZ',
  component: NavAZ,
};
