import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

export interface BaseIconSVGProps extends HTMLProps<SVGSVGElement> {
  iconType?: string;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
}

export const BaseIconSVG: FC<BaseIconSVGProps> = ({
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
  

export const ChevronDownIcon: FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG iconType="nhsuk-icon__chevron-down" {...props}>
    <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
  </BaseIconSVG>
);
