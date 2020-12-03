import React, { HTMLProps, useContext } from 'react';
import { Close as CloseIcon } from '../../icons';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const NavMenuCollapse: React.FC<HTMLProps<HTMLUListElement>> = () => {
  const { toggleMenu } = useContext<IHeaderContext>(HeaderContext);

  return (
    <button className="nhsuk-header__navigation-close" type="button" onClick={toggleMenu}>
      <CloseIcon />
      <span className="nhsuk-u-visually-hidden">Close menu</span>
    </button>
  );
};

export default NavMenuCollapse;
