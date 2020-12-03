import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import { Container } from '../../layout';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const NavContainer: React.FC<HTMLProps<HTMLDivElement>> = ({
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
      <Container>
        {children}
      </Container>
    </nav>
  );
};

export default NavContainer;
