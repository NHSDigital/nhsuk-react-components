import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import './_Tag.scss';

type TagColours =
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

export interface TagProps extends HTMLProps<HTMLSpanElement> {
  color?: TagColours;
}

const Tag: React.FC<TagProps> = ({ className, color, ...rest }) => (
  <span
    className={classNames('nhsuk-tag', { [`nhsuk-tag--${color}`]: color }, className)}
    {...rest}
  />
);

export default Tag;
