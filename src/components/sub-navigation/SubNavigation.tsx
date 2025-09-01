/* eslint-disable @typescript-eslint/no-redeclare */
import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import './_SubNavigation.scss';

const SubNavigationItem: React.FC<HTMLProps<HTMLAnchorElement>> = ({
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

interface SubNavigation extends React.FC<HTMLProps<HTMLDivElement>> {
  Item: React.FC<HTMLProps<HTMLAnchorElement>>;
}

const SubNavigation: SubNavigation = ({ children, className, ...rest }) => (
  <nav className={classNames('nhsuk-sub-navigation', className)} {...rest}>
    <ul className="nhsuk-sub-navigation__list">{children}</ul>
  </nav>
);

SubNavigation.Item = SubNavigationItem;

export default SubNavigation;
