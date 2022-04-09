import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import { Container } from '../../layout';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const HeaderNavContainer: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  open,
  ...rest
}) => {
  const { menuOpen } = useContext<IHeaderContext>(HeaderContext);

  return (
    <nav
      className={classNames(
        'nhsuk-header__navigation',
        { 'js-show': open !== undefined ? open : menuOpen },
        className,
      )}
      {...rest}
    >
      <Container>{children}</Container>
    </nav>
  );
};
HeaderNavContainer.displayName = 'Header.NavContainer';

export default HeaderNavContainer;
