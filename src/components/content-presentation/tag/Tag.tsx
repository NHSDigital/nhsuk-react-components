import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

interface TagProps extends HTMLProps<HTMLSpanElement> {
  color?:
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
}

const TagComponent: FC<TagProps> = ({ className, color, ...rest }) => (
  <strong
    className={classNames('nhsuk-tag', { [`nhsuk-tag--${color}`]: color }, className)}
    {...rest}
  />
);

export default TagComponent;
