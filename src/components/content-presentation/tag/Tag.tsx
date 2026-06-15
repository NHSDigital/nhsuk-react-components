import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export interface TagProps extends ComponentPropsWithoutRef<'strong'> {
  colour?:
    | 'white'
    | 'grey'
    | 'green'
    | 'aqua-green'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'red'
    | 'orange'
    | 'yellow';

  /**
   * @deprecated Use `colour` instead.
   */
  color?: TagProps['colour'];

  /**
   * @deprecated Use `colour` instead.
   */
  modifier?: TagProps['colour'];
}

export const Tag: FC<TagProps> = ({
  className,
  modifier,
  color,
  colour = color ?? modifier,
  ...rest
}) => (
  <strong
    className={classNames('nhsuk-tag', { [`nhsuk-tag--${colour}`]: colour }, className)}
    {...rest}
  />
);

Tag.displayName = 'Tag';
