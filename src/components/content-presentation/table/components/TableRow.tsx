'use client';
import classNames from 'classnames';
import React, {
  Children,
  ComponentPropsWithoutRef,
  FC,
  cloneElement,
  useContext,
  useEffect,
} from 'react';
import TableContext from '../TableContext';
import { getHeadingsFromChildren, isTableCell } from '../TableHelpers';
import TableSectionContext, { TableSection } from '../TableSectionContext';

const TableRow: FC<ComponentPropsWithoutRef<'tr'>> = ({ children, className, ...rest }) => {
  const section = useContext(TableSectionContext);
  const { isResponsive, headings, setHeadings } = useContext(TableContext);

  useEffect(() => {
    if (isResponsive && section === TableSection.HEAD) {
      setHeadings(getHeadingsFromChildren(children));
    }
  }, [isResponsive, section, children]);

  if (isResponsive && section === TableSection.BODY) {
    const tableCells = Children.map(children, (child, index) => {
      if (isTableCell(child)) {
        return cloneElement(child, {
          _responsive: isResponsive,
          _responsiveHeading: `${headings[index] || ''} `,
        });
      }
      return child;
    });

    return (
      <tr className={classNames('nhsuk-table__row', className)} {...rest}>
        {tableCells}
      </tr>
    );
  }

  return (
    <tr className={classNames('nhsuk-table__row', className)} {...rest}>
      {children}
    </tr>
  );
};

TableRow.displayName = 'Table.Row';

export default TableRow;
