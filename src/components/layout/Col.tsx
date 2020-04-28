import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { ColWidth } from '../../util/types/NHSUKTypes';

interface ColProps extends HTMLProps<HTMLDivElement> {
  width: ColWidth;
}

const Col: React.FC<ColProps> = ({ className, width, ...rest }) => (
  <div className={classNames(`nhsuk-grid-column-${width}`, className)} {...rest} />
);

export default Col;
