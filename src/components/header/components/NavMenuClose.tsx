import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import { Close as CloseIcon } from '../../icons';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const HeaderNavMenuClose: React.FC<HTMLProps<HTMLButtonElement>> = ({ className, ...rest }) => {
  const { toggleMenu } = useContext<IHeaderContext>(HeaderContext);

  return (
    <button
      className={classNames('nhsuk-header__navigation-close', className)}
      {...rest}
      type="button"
      onClick={toggleMenu}
    >
      <CloseIcon />
      <span className="nhsuk-u-visually-hidden">Close menu</span>
    </button>
  );
};
HeaderNavMenuClose.displayName = 'Header.NavMenuClose';

export default HeaderNavMenuClose;
