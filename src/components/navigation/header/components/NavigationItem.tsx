import classNames from 'classnames';
import { type FC } from 'react';
import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface NavigationItemProps extends AsElementLink<HTMLAnchorElement> {
  active?: boolean;
  current?: boolean;
}

const NavigationItemInner: FC<NavigationItemProps> = ({ active, children, current }) => {
  // Wrap active links in strong element so users who override colours
  // or styles still have some indicator of the current nav item
  return (active ?? current) ? (
    <strong className="nhsuk-header__navigation-item-current-fallback">{children}</strong>
  ) : (
    children
  );
};

export const NavigationItem: FC<NavigationItemProps> = ({
  className,
  children,
  active,
  current,
  asElement: Element = 'a',
  ...rest
}) => {
  let ariaCurrent: 'page' | 'true' | undefined;

  if (current) {
    ariaCurrent = 'page';
  } else if (active) {
    ariaCurrent = 'true';
  }

  return (
    <li
      className={classNames(
        'nhsuk-header__navigation-item',
        { 'nhsuk-header__navigation-item--current': active || current },
        className,
      )}
    >
      <Element className="nhsuk-header__navigation-link" aria-current={ariaCurrent} {...rest}>
        <NavigationItemInner {...rest}>{children}</NavigationItemInner>
      </Element>
    </li>
  );
};

NavigationItem.displayName = 'Header.NavigationItem';
