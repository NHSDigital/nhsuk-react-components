import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';

export interface NavigationItemProps extends AsElementLink<HTMLAnchorElement> {
  active?: boolean;
  current?: boolean;
}

const NavigationItem: FC<NavigationItemProps> = ({
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

  // Wrap active links in strong element so users who override colours
  // or styles still have some indicator of the current nav item.
  const InnerElement: FC<HTMLProps<HTMLElement>> = ({ children }) => {
    return ariaCurrent ? (
      <strong className="nhsuk-header__navigation-item-current-fallback">{children}</strong>
    ) : (
      <>{children}</>
    );
  };

  return (
    <li
      className={classNames(
        'nhsuk-header__navigation-item',
        { 'nhsuk-header__navigation-item--current': active || current },
        className,
      )}
    >
      <Element className="nhsuk-header__navigation-link" aria-current={ariaCurrent} {...rest}>
        <InnerElement>{children}</InnerElement>
      </Element>
    </li>
  );
};

NavigationItem.displayName = 'Header.NavigationItem';

export default NavigationItem;
