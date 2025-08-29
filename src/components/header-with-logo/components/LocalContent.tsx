import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const Content: FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  return <div className={classNames('nhsuk-header__content', className)} {...rest} />;
};
export default Content;
