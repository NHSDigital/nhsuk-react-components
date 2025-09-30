import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import { ColWidth } from '@util/types/NHSUKTypes';

export interface ColProps extends ComponentPropsWithoutRef<'div'> {
  width: ColWidth;
}

const Col: FC<ColProps> = ({ className, width, ...rest }) => (
  <div className={classNames(`nhsuk-grid-column-${width}`, className)} {...rest} />
);

export default Col;
