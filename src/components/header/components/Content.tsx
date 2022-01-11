import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const HeaderContent: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  const { searchOpen } = useContext<IHeaderContext>(HeaderContext);
  return (
    <div
      className={classNames('nhsuk-header__content', { 'js-show': searchOpen }, className)}
      {...rest}
    />
  );
};
HeaderContent.displayName = 'Header.Content';

export default HeaderContent;
