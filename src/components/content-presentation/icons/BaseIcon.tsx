import React from 'react';
import classNames from 'classnames';

export interface BaseIconSVGProps extends React.HTMLProps<SVGSVGElement> {
  iconType?: string;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
}

export const BaseIconSVG: React.FC<BaseIconSVGProps> = ({
  className,
  children,
  height = 34,
  width = 34,
  iconType,
  ...rest
}) => (
  <svg
    className={classNames('nhsuk-icon', iconType, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    height={height}
    width={width}
    {...rest}
  >
    {children}
  </svg>
);
