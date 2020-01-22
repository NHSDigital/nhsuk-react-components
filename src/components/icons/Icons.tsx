import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface BaseIconSVGProps extends HTMLProps<SVGSVGElement> {
  iconType?: string;
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
}

export const BaseIconSVG: React.FC<BaseIconSVGProps> = ({
  className,
  children,
  height,
  width,
  iconType,
  ...rest
}) => (
  <svg
    className={classNames('nhsuk-icon', iconType, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
    height={height || 32}
    width={width || 32}
    {...rest}
  >
    {children}
  </svg>
);

export const ArrowLeft: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__arrow-left" {...props}>
    <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z" />
  </BaseIconSVG>
);

export const ArrowRight: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__arrow-right" {...props}>
    <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" />
  </BaseIconSVG>
);

export const ArrowRightCircle: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__arrow-right-circle" {...props}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" />
  </BaseIconSVG>
);

export const ChevronLeft: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__chevron-left" {...props}>
    <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" />
  </BaseIconSVG>
);

export const ChevronRight: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__chevron-right" {...props}>
    <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
  </BaseIconSVG>
);

export const Close: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__close" {...props}>
    <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
  </BaseIconSVG>
);

export const Cross: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__cross" {...props}>
    <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" />
    <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" />
  </BaseIconSVG>
);

export const SmallEmdash: React.FC<BaseIconSVGProps> = ({ height, width, ...rest }) => (
  <BaseIconSVG iconType="nhsuk-icon__emdash" height={height || 1} width={width || 16} {...rest}>
    <path d="M0 0h16v1H0z" />
  </BaseIconSVG>
);

export const Emdash: React.FC<BaseIconSVGProps> = ({ className, height, width, ...rest }) => (
  <BaseIconSVG iconType="nhsuk-icon__emdash" height={height || 1} width={width || 19} {...rest}>
    <path d="M0 0h19v1H0z" />
  </BaseIconSVG>
);

export const Minus: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__minus" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M8 12h8"
    />
  </BaseIconSVG>
);

export const Plus: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__minus" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M12 8v8M8 12h8"
    />
  </BaseIconSVG>
);

export const Search: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__search" {...props}>
    <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" />
  </BaseIconSVG>
);

export const Tick: React.FC<BaseIconSVGProps> = props => (
  <BaseIconSVG iconType="nhsuk-icon__tick" {...props}>
    <path
      strokeWidth="4"
      strokeLinecap="round"
      stroke="#007f3b"
      fill="none"
      d="M18.4 7.8l-8.5 8.4L5.6 12"
    ></path>
  </BaseIconSVG>
);
