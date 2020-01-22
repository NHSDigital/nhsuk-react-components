import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const Content: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  const { searchOpen } = useContext<IHeaderContext>(HeaderContext);
  return (
    <div
      className={classNames('nhsuk-header__content', { 'js-show': searchOpen }, className)}
      {...rest}
    ></div>
  );
};
export default Content;
