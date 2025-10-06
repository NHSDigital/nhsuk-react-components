import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef, type FC, type ReactNode } from 'react';
import { type AsElementLink } from '#util/types/LinkTypes';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const processLetters = (
  children: ReactNode,
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

export interface NavAZProps extends ComponentPropsWithoutRef<'div'> {
  fullAlphabet?: boolean;
  removedLetters?: Array<string>;
  disabledLetters?: Array<string>;
  letters?: Array<string>;
}

const NavAZComponent = forwardRef<HTMLElement, NavAZProps>((props, forwardedRef) => {
  const {
    className,
    children,
    fullAlphabet,
    removedLetters,
    disabledLetters,
    letters,
    'aria-label': ariaLabel = 'A to Z Navigation',
    ...rest
  } = props;

  return (
    <nav
      className={classNames('nhsuk-u-margin-bottom-4', 'nhsuk-u-margin-top-4', className)}
      aria-label={ariaLabel}
      role="navigation"
      ref={forwardedRef}
      {...rest}
    >
      <ol className="nhsuk-list nhsuk-u-clear nhsuk-u-margin-0">
        {processLetters(children, fullAlphabet, removedLetters, disabledLetters, letters)}
      </ol>
    </nav>
  );
});

const LinkItem: FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  asElement: Element = 'a',
  ...rest
}) => (
  <li className="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
    <Element
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

const DisabledItem: FC<ComponentPropsWithoutRef<'span'>> = ({ className, ...rest }) => (
  <li className="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
    <span
      className={classNames(
        'nhsuk-u-font-size-22',
        'nhsuk-u-padding-2',
        'nhsuk-u-display-block',
        'nhsuk-u-secondary-text-colour',
        className,
      )}
      {...rest}
    />
  </li>
);

NavAZComponent.displayName = 'NavAZ';
LinkItem.displayName = 'NavAZ.LinkItem';
DisabledItem.displayName = 'NavAZ.DisabledItem';

export const NavAZ = Object.assign(NavAZComponent, {
  LinkItem,
  DisabledItem,
});
