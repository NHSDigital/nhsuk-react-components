import classNames from 'classnames';
import React, { HTMLProps } from 'react';

const HeaderNavTitle: React.FC<HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  ...rest
}) => (
  <p className={classNames('nhsuk-header__navigation-title', className)} {...rest}>
    {children}
  </p>
);
HeaderNavTitle.displayName = 'Header.NavTitle';

export default HeaderNavTitle;
