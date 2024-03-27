'use client';
import React, { HTMLProps } from 'react';
import classNames from 'classnames';

const Content: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  return <div className={classNames('nhsuk-header__content', className)} {...rest} />;
};
export default Content;
