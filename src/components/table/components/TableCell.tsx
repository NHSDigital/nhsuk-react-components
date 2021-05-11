import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import useDevWarning from '../../../util/hooks/UseDevWarning';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const CellOutsideOfSectionWarning =
  'Table.Cell used outside of a Table.Head or Table.Body component. Unable to determine section type from context.';

export interface TableCellProps extends HTMLProps<HTMLTableCellElement> {
  _responsive?: boolean;
  _responsiveHeading?: string;
}

const TableCell: React.FC<TableCellProps> = ({
  className,
  _responsive,
  _responsiveHeading,
  children,
  ...rest
}) => {
  const section = useContext(TableSectionContext);
  useDevWarning(CellOutsideOfSectionWarning, () => section === TableSection.NONE);

  switch (section) {
    case TableSection.HEAD:
      return (
        <th className={classNames('nhsuk-table__header', className)} scope="col" {...rest}>
          {children}
        </th>
      );

    case TableSection.BODY:
    case TableSection.NONE:
    default:
      return (
        <td
          className={classNames('nhsuk-table__cell', className)}
          role={_responsive ? 'cell' : undefined}
          {...rest}
        >
          {_responsive && (
            <span className="nhsuk-table-responsive__heading">{_responsiveHeading}</span>
          )}
          {children}
        </td>
      );
  }
};

TableCell.displayName = 'Table.Cell';
TableCell.defaultProps = {
  _responsive: false,
  _responsiveHeading: '',
};

export default TableCell;
