import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ColProps extends HTMLProps<HTMLDivElement> {
  width: 'full' | 'three-quarters' | 'one-half' | 'two-thirds' | 'one-third' | 'one-quarter';
}

const Col: React.FC<ColProps> = ({ className, width, ...rest }) => (
  <div className={classNames(`nhsuk-grid-column-${width}`, className)} {...rest} />
);

export default Col;
