import classNames from 'classnames';
import React, { FC, HTMLProps, useContext } from 'react';
import useDevWarning from '@util/hooks/UseDevWarning';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const CellOutsideOfSectionWarning =
  'Table.Cell used outside of a Table.Head or Table.Body component. Unable to determine section type from context.';

export interface TableCellProps extends HTMLProps<HTMLTableCellElement> {
  _responsive?: boolean;
  _responsiveHeading?: string;
  isNumeric?: boolean;
}

const TableCell: FC<TableCellProps> = ({
  className,
  _responsive = false,
  _responsiveHeading = '',
  isNumeric,
  children,
  ...rest
}) => {
  const section = useContext(TableSectionContext);
  useDevWarning(CellOutsideOfSectionWarning, () => section === TableSection.NONE);

  const cellClass = section === TableSection.HEAD ? 'nhsuk-table__header' : 'nhsuk-table__cell';
  const classes = classNames(cellClass, { [`${cellClass}--numeric`]: isNumeric }, className);

  return (
    <>
      {section === TableSection.HEAD ? (
        <th className={classes} scope="col" {...rest}>
          {children}
        </th>
      ) : (
        <td className={classes} role={_responsive ? 'cell' : undefined} {...rest}>
          {_responsive && (
            <span className="nhsuk-table-responsive__heading">{_responsiveHeading}</span>
          )}
          {children}
        </td>
      )}
    </>
  );
};

TableCell.displayName = 'Table.Cell';

export default TableCell;
