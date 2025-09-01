import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import { Container } from '@components/layout';
import MenuToggle from './MenuToggle';

export type NavigationProps = HTMLProps<HTMLDivElement>;

const Navigation: FC<NavigationProps> = ({
  className,
  children,
  'aria-label': ariaLabel = 'Menu',
  ...rest
}) => (
  <nav
    className={classNames('nhsuk-header__navigation', className)}
    aria-label={ariaLabel}
    {...rest}
  >
    <Container className="nhsuk-header__navigation-container">
      <ul className="nhsuk-header__navigation-list">
        {children}
        <MenuToggle />
      </ul>
    </Container>
  </nav>
);

export default Navigation;
