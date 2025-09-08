/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react';
import classNames from 'classnames';
import './_SubNavigation.scss';

const SubNavigationItem: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  className,
  children,
  ...rest
}) => (
  <li className={classNames('nhsuk-sub-navigation__item', className)}>
    <a className="nhsuk-sub-navigation__link" {...rest}>
      {children}
    </a>
  </li>
);

interface SubNavigation extends React.FC<React.HTMLProps<HTMLDivElement>> {
  Item: React.FC<React.HTMLProps<HTMLAnchorElement>>;
}

const SubNavigation: SubNavigation = ({ children, className, ...rest }) => (
  <nav className={classNames('nhsuk-sub-navigation', className)} {...rest}>
    <ul className="nhsuk-sub-navigation__list">{children}</ul>
  </nav>
);

SubNavigation.Item = SubNavigationItem;

export default SubNavigation;
