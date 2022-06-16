import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import { Close as CloseIcon } from '../../icons';
import { Container } from '../../layout';
import VisuallyHidden from '../../visually-hidden';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const Nav: React.FC<HTMLProps<HTMLDivElement>> = ({ className, children, open, ...rest }) => {
  const { menuOpen, toggleMenu } = useContext<IHeaderContext>(HeaderContext);

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
        <p className="nhsuk-header__navigation-title">
          <span>Menu</span>
          <button className="nhsuk-header__navigation-close" type="button" onClick={toggleMenu}>
            <CloseIcon />
            <VisuallyHidden>Close menu</VisuallyHidden>
          </button>
        </p>
        <ul className="nhsuk-header__navigation-list">{children}</ul>
      </Container>
    </nav>
  );
};

export default Nav;
