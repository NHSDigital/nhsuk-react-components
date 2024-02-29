import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const Nav: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  id = 'header-navigation',
  ...rest
}) => {
  return (
    <div className="nhsuk-navigation-container">
      <nav
        className={classNames('nhsuk-navigation', className)}
        id={id}
        role="navigation"
        {...rest}
      >
        <ul className="nhsuk-header__navigation-list">{children}</ul>
      </nav>
    </div>
  );
};

export default Nav;
