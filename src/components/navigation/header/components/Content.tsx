'use client';
import React from 'react';
import classNames from 'classnames';

const Content: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => {
  return <div className={classNames('nhsuk-header__content', className)} {...rest} />;
};
export default Content;
