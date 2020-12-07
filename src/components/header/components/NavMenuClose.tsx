import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import { Close as CloseIcon } from '../../icons';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const NavMenuClose: React.FC<HTMLProps<HTMLButtonElement>> = ({
  className,
  ...rest
}) => {
  const { toggleMenu } = useContext<IHeaderContext>(HeaderContext);

  return (
    <button
      className={
        classNames(
          'nhsuk-header__navigation-close',
          className,
        )
      }
      {...rest}
      type="button"
      onClick={toggleMenu}
    >
      <CloseIcon />
      <span className="nhsuk-u-visually-hidden">Close menu</span>
    </button>
  );
};

export default NavMenuClose;
