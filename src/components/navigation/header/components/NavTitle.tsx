import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const NavTitle: React.FC<HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  ...rest
}) => (
  <p
    className={classNames(
      'nhsuk-header__navigation-title',
      className,
    )}
    {...rest}
  >
    {children}
  </p>
);

export default NavTitle;
