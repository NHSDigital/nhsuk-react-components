import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '@util/types/NHSUKTypes';

export interface TableCaptionProps extends ComponentPropsWithoutRef<'caption'> {
  size?: NHSUKSize;
}

const TableCaption: FC<TableCaptionProps> = ({ className, size, ...rest }) => (
  <caption
    className={classNames(
      'nhsuk-table__caption',
      { [`nhsuk-table__caption--${size}`]: size },
      className,
    )}
    {...rest}
  />
);

TableCaption.displayName = 'Table.Caption';

export default TableCaption;
