import classNames from 'classnames';
import React, { useContext, type ComponentPropsWithoutRef, type FC } from 'react';
import { TableContext, TableSection, TableSectionContext, type ITableContext } from '..';
import { useDevWarning } from '#util/hooks';

const CellOutsideOfSectionWarning =
  'Table.Cell used outside of a Table.Head or Table.Body component. Unable to determine section type from context.';

export interface TableCellProps
  extends ComponentPropsWithoutRef<'th'>,
    ComponentPropsWithoutRef<'td'> {
  index?: number;
  format?: 'numeric';
}

export const TableCell: FC<TableCellProps> = ({
  className,
  format,
  children,
  index = -1,
  ...rest
}) => {
  const { firstCellIsHeader, headings, responsive } = useContext<ITableContext>(TableContext);
  const section = useContext<TableSection>(TableSectionContext);

  useDevWarning(CellOutsideOfSectionWarning, () => section === TableSection.NONE);

  const isColHeader = section === TableSection.HEAD;
  const isRowHeader = section === TableSection.BODY && firstCellIsHeader && index === 0;

  return (
    <>
      {isColHeader || isRowHeader ? (
        <th
          className={classNames(
            'nhsuk-table__header',
            { [`nhsuk-table__header--${format}`]: !!format && !isRowHeader },
            className,
          )}
          scope={isRowHeader ? 'row' : 'col'}
          role={isRowHeader ? 'rowheader' : responsive ? 'columnheader' : undefined}
          {...rest}
        >
          {children}
        </th>
      ) : (
        <td
          className={classNames(
            'nhsuk-table__cell',
            { [`nhsuk-table__cell--${format}`]: !!format },
            className,
          )}
          role={responsive ? 'cell' : undefined}
          {...rest}
        >
          {responsive && !!headings[index] && (
            <span className="nhsuk-table-responsive__heading" aria-hidden>
              {headings[index]}{' '}
            </span>
          )}
          {children}
        </td>
      )}
    </>
  );
};

TableCell.displayName = 'Table.Cell';
