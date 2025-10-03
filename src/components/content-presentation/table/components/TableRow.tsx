import classNames from 'classnames';
import {
  Children,
  cloneElement,
  useContext,
  useEffect,
  type ComponentPropsWithoutRef,
  type FC,
} from 'react';
import { TableContext, TableSection, TableSectionContext } from '..';
import { getHeadingsFromChildren, isTableCell } from '../TableHelpers';

export const TableRow: FC<ComponentPropsWithoutRef<'tr'>> = ({ children, className, ...rest }) => {
  const section = useContext(TableSectionContext);
  const { responsive, setHeadings } = useContext(TableContext);

  useEffect(() => {
    if (responsive && section === TableSection.HEAD) {
      setHeadings(getHeadingsFromChildren(children));
    }
  }, [responsive, section, children]);

  const tableCells = Children.map(children, (child, index) => {
    return section === TableSection.BODY && isTableCell(child)
      ? cloneElement(child, { index })
      : child;
  });

  return (
    <tr
      className={classNames('nhsuk-table__row', className)}
      role={responsive ? 'row' : undefined}
      {...rest}
    >
      {tableCells}
    </tr>
  );
};

TableRow.displayName = 'Table.Row';
