import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

export interface BaseIconSVGProps extends ComponentPropsWithoutRef<'svg'> {
  title?: string;
  modifier?:
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-right-circle'
    | 'chevron-right-circle'
    | 'cross'
    | 'search'
    | 'tick'
    | 'user';

  /**
   * @deprecated Use `modifier` instead.
   */
  iconType?: BaseIconSVGProps['modifier'];
}

export const BaseIconSVG: FC<BaseIconSVGProps> = ({
  className,
  children,
  iconType,
  modifier = iconType
    ?.replace('nhsuk-icon__', '') // NHS.UK Frontend v9.x
    .replace('nhsuk-icon--', ''), // NHS.UK Frontend v10.x
  title,
  ...rest
}) => (
  <svg
    className={classNames('nhsuk-icon', { [`nhsuk-icon--${modifier}`]: modifier }, className)}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    focusable="false"
    role={title ? 'img' : undefined}
    aria-label={title}
    aria-hidden={title ? undefined : true}
    {...rest}
  >
    {children}
  </svg>
);
