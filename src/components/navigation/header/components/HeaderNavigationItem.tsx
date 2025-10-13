import classNames from 'classnames';
import { type FC } from 'react';
import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface HeaderNavigationItemProps extends AsElementLink<HTMLAnchorElement> {
  active?: boolean;
  current?: boolean;
}

const HeaderNavigationItemInner: FC<HeaderNavigationItemProps> = ({
  active,
  children,
  current,
}) => {
  // Wrap active links in strong element so users who override colours
  // or styles still have some indicator of the current nav item
  return (active ?? current) ? (
    <strong className="nhsuk-header__navigation-item-current-fallback">{children}</strong>
  ) : (
    children
  );
};

export const HeaderNavigationItem: FC<HeaderNavigationItemProps> = ({
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
        <HeaderNavigationItemInner {...rest}>{children}</HeaderNavigationItemInner>
      </Element>
    </li>
  );
};

HeaderNavigationItem.displayName = 'Header.NavigationItem';
