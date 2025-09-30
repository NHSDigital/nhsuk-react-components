import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

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

const TagComponent: FC<TagProps> = ({ className, color, modifier = color, ...rest }) => (
  <strong
    className={classNames('nhsuk-tag', { [`nhsuk-tag--${modifier}`]: modifier }, className)}
    {...rest}
  />
);

TagComponent.displayName = 'Tag';

export default TagComponent;
