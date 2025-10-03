import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { type NHSUKSize } from '#util/types';

export interface TableCaptionProps extends ComponentPropsWithoutRef<'caption'> {
  size?: NHSUKSize;
}

export const TableCaption: FC<TableCaptionProps> = ({ className, size, ...rest }) => (
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
