import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import type { AsElementLink } from '../../util/types/LinkTypes';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const processLetters = (
  children: React.ReactNode,
  fullAlphabet: boolean | undefined,
  removedLetters: Array<string> | undefined,
  disabledLetters: Array<string> | undefined,
  letters: Array<string> | undefined,
) => {
  const letterMap = (letter: string) => {
    if (removedLetters && removedLetters.includes(letter)) {
      return null;
    }
    if (disabledLetters && disabledLetters.includes(letter)) {
      return <DisabledItem key={letter}>{letter}</DisabledItem>;
    }
    return (
      <LinkItem key={letter} href={`#${letter}`}>
        {letter}
      </LinkItem>
    );
  };
  if (children) {
    return children;
  }
  if (fullAlphabet) {
    return alphabet.split('').map(letterMap);
  }
  if (letters) {
    return letters.map(letterMap);
  }
  return null;
};

interface NavAZProps extends HTMLProps<HTMLDivElement> {
  fullAlphabet?: boolean;
  removedLetters?: Array<string>;
  disabledLetters?: Array<string>;
  letters?: Array<string>;
}

interface NavAZ extends React.FC<NavAZProps> {
  LinkItem: React.FC<AsElementLink<HTMLAnchorElement>>;
  DisabledItem: React.FC<HTMLProps<HTMLSpanElement>>;
}

const NavAZ: NavAZ = ({
  className,
  children,
  fullAlphabet,
  removedLetters,
  disabledLetters,
  letters,
  ...rest
}) => (
  <nav className={classNames('nhsuk-nav-a-z', className)} {...rest}>
    <ol className="nhsuk-nav-a-z__list">
      {processLetters(children, fullAlphabet, removedLetters, disabledLetters, letters)}
    </ol>
  </nav>
);

const LinkItem: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  asElement: Component = 'a',
  ...rest
}) => (
  <li className="nhsuk-nav-a-z__item">
    <Component className={classNames('nhsuk-nav-a-z__link', className)} {...rest} />
  </li>
);

const DisabledItem: React.FC<HTMLProps<HTMLSpanElement>> = ({ className, ...rest }) => (
  <li className="nhsuk-nav-a-z__item">
    <span className={classNames('nhsuk-nav-a-z__link--disabled', className)} {...rest} />
  </li>
);

NavAZ.LinkItem = LinkItem;
NavAZ.DisabledItem = DisabledItem;

export default NavAZ;
