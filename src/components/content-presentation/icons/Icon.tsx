import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  title?: string;
  name?:
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-right-circle'
    | 'chevron-right-circle'
    | 'cross'
    | 'search'
    | 'tick'
    | 'user';

  /**
   * @deprecated Use `name` instead.
   */
  iconType?: IconProps['name'];

  /**
   * @deprecated Use `name` instead.
   */
  modifier?: IconProps['name'];
}

export const Icon: FC<IconProps> = ({
  className,
  children,
  name,
  iconType,
  modifier = name ??
    iconType
      ?.replace('nhsuk-icon__', '') // NHS.UK frontend v9.x
      .replace('nhsuk-icon--', ''), // NHS.UK frontend v10.x
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
