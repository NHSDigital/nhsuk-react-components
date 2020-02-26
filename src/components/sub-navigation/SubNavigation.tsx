import React, { HTMLProps } from 'react';

interface SubNavigationItemProps extends HTMLProps<HTMLLIElement> {
  text: string,
  active?: boolean,
  target: string
}

interface SubNavigationPanel extends React.FC<HTMLProps<HTMLDivElement>> {
  SubNavigationItem: React.FC<SubNavigationItemProps>
}

const SubNavigation: SubNavigationPanel = ({
  children,
  ...rest
}) => (
  <nav className="nhsuk-sub-navigation" {...rest}>
    <ul className="nhsuk-sub-navigation__list">
      {children}
    </ul>
  </nav>
);

const SubNavigationItem: React.FC<SubNavigationItemProps> = ({
  text,
  active,
  target,
  ...rest
}) => (
  <li className="nhsuk-sub-navigation__item" {...rest}>
    <a
      href={target}
      className="nhsuk-sub-navigation__link"
      aria-current={active ? 'page' : undefined}
    >
      {text}
    </a>
  </li>
);

SubNavigation.SubNavigationItem = SubNavigationItem;

export default SubNavigation;
