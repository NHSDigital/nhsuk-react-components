import classNames from 'classnames';
import React, { type ComponentPropsWithoutRef, type FC } from 'react';

export interface TagProps extends ComponentPropsWithoutRef<'strong'> {
  modifier?:
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
   * @deprecated Use `modifier` instead.
   */
  color?: TagProps['modifier'];
}

export const Tag: FC<TagProps> = ({ className, color, modifier = color, ...rest }) => (
  <strong
    className={classNames('nhsuk-tag', { [`nhsuk-tag--${modifier}`]: modifier }, className)}
    {...rest}
  />
);

Tag.displayName = 'Tag';
