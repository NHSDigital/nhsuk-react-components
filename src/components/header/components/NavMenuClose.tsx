import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import { Close as CloseIcon } from '../../icons';
import VisuallyHidden from '../../visually-hidden';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const NavMenuClose: React.FC<HTMLProps<HTMLButtonElement>> = ({ className, ...rest }) => {
  const { toggleMenu } = useContext<IHeaderContext>(HeaderContext);

  return (
    <button
      className={classNames('nhsuk-header__navigation-close', className)}
      {...rest}
      type="button"
      onClick={toggleMenu}
    >
      <CloseIcon />
      <VisuallyHidden>Close menu</VisuallyHidden>
    </button>
  );
};

export default NavMenuClose;
