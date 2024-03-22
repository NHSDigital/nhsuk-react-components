import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import type { AsElementLink } from '@util/types/LinkTypes';

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

interface NavAZ extends FC<NavAZProps> {
  LinkItem: FC<AsElementLink<HTMLAnchorElement>>;
  DisabledItem: FC<HTMLProps<HTMLSpanElement>>;
}

const NavAZ: NavAZ = ({
  className,
  children,
  fullAlphabet,
  removedLetters,
  disabledLetters,
  letters,
  'aria-label': ariaLabel = 'A to Z Navigation',
  ...rest
}) => (
  <nav
    className={classNames('nhsuk-u-margin-bottom-4', 'nhsuk-u-margin-top-4', className)}
    aria-label={ariaLabel}
    role="navigation"
    {...rest}
  >
    <ol className="nhsuk-list nhsuk-u-clear nhsuk-u-margin-0">
      {processLetters(children, fullAlphabet, removedLetters, disabledLetters, letters)}
    </ol>
  </nav>
);

const LinkItem: FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  asElement: Component = 'a',
  ...rest
}) => (
  <li className="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
    <Component
      className={classNames(
        'nhsuk-u-font-size-22',
        'nhsuk-u-padding-2',
        'nhsuk-u-display-block',
        className,
      )}
      {...rest}
    />
  </li>
);

const DisabledItem: FC<HTMLProps<HTMLSpanElement>> = ({ className, ...rest }) => (
  <li className="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
    <span
      className={classNames(
        'nhsuk-u-font-size-22',
        'nhsuk-u-padding-2',
        'nhsuk-u-display-block',
        'nhsuk-u-secondary-text-color',
        className,
      )}
      {...rest}
    />
  </li>
);

NavAZ.LinkItem = LinkItem;
NavAZ.DisabledItem = DisabledItem;

export default NavAZ;
