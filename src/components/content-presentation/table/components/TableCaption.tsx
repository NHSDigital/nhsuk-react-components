import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';

const TableCaption: FC<ComponentPropsWithoutRef<'caption'>> = ({ className, ...rest }) => (
  <caption className={classNames('nhsuk-table__caption', className)} {...rest} />
);

TableCaption.displayName = 'Table.Caption';

export default TableCaption;
