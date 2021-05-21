import React, { HTMLProps, createContext, useContext } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';
import isDev from '../../util/IsDev';

enum TableSectionTypes {
  HEAD = 'HEADER',
  BODY = 'BODY',
}

const TableSectionContext = createContext<TableSectionTypes>(TableSectionTypes.HEAD);

const TableHead: React.FC<HTMLProps<HTMLTableSectionElement>> = ({
  className,
  children,
  ...rest
}) => (
  <thead className={classNames('nhsuk-table__head', className)} {...rest}>
    <TableSectionContext.Provider value={TableSectionTypes.HEAD}>
      {children}
    </TableSectionContext.Provider>
  </thead>
);

const TableBody: React.FC<HTMLProps<HTMLTableSectionElement>> = ({
  className,
  children,
  ...rest
}) => (
  <tbody className={classNames('nhsuk-table__body', className)} {...rest}>
    <TableSectionContext.Provider value={TableSectionTypes.BODY}>
      {children}
    </TableSectionContext.Provider>
  </tbody>
);

const TableRow: React.FC<HTMLProps<HTMLTableRowElement>> = ({ className, ...rest }) => (
  <tr className={classNames('nhsuk-table__row', className)} {...rest} />
);

interface TableCellProps extends HTMLProps<HTMLTableCellElement> {
  header?: boolean;
  isNumeric?: boolean;
}

const TableCell: React.FC<TableCellProps> = ({ className, header, isNumeric, ...rest }) => {
  const sectionType = useContext(TableSectionContext);
  const regularHeader = <th className={classNames('nhsuk-table__header', className)} scope="col" {...rest} />;
  const numericHeader = <th className={classNames('nhsuk-table__header', 'nhsuk-table__header--numeric', className)} scope="col" {...rest} />;
  const regularCell = <td className={classNames('nhsuk-table__cell', className)} {...rest} />;
  const numericCell = <td className={classNames('nhsuk-table__cell', 'nhsuk-table__cell--numeric', className)} {...rest} />;

  if (header !== undefined) {
    if (header === true) {
      if (isNumeric) return numericHeader;
      return regularHeader;
    }
    if (isNumeric) {
      return numericCell;
    }
    return regularCell;
  }
  if (sectionType === TableSectionTypes.HEAD) {
    if (isNumeric) return numericHeader;
    return regularHeader;
  }
  if (sectionType === TableSectionTypes.BODY) {
    if (isNumeric) {
      return numericCell;
    }
    return regularCell;
  }
  if (isDev()) {
    console.warn(
      'TableCell used outside of TableHead or TableBody elements. Unable to determine section type from context.',
    );
  }
  return <td className={classNames('nhsuk-table__cell', className)} {...rest} />;
};

interface TablePanelProps extends HTMLProps<HTMLDivElement> {
  heading?: string;
  headingProps?: HTMLProps<HTMLHeadingElement>;
  headingLevel?: HeadingLevelType;
}

const TablePanel: React.FC<TablePanelProps> = ({
  className,
  children,
  heading,
  headingLevel,
  headingProps,
  ...rest
}) => (
  <div className={classNames('nhsuk-table__panel-with-heading-tab', className)} {...rest}>
    {heading ? (
      <HeadingLevel
        className="nhsuk-table__heading-tab"
        {...headingProps}
        headingLevel={headingLevel}
      >
        {heading}
      </HeadingLevel>
    ) : null}
    {children}
  </div>
);

TablePanel.defaultProps = {
  headingLevel: 'h3',
};

interface TableProps extends HTMLProps<HTMLTableElement> {
  caption?: string;
}

interface Table extends React.FC<TableProps> {
  Body: React.FC<HTMLProps<HTMLTableSectionElement>>;
  Head: React.FC<HTMLProps<HTMLTableSectionElement>>;
  Row: React.FC<HTMLProps<HTMLTableRowElement>>;
  Cell: React.FC<TableCellProps>;
  Panel: React.FC<TablePanelProps>;
}

const Table: Table = ({ className, caption, children, ...rest }) => (
  <div className="nhsuk-table-responsive">
    <table className={classNames('nhsuk-table', className)} {...rest}>
      {caption ? <caption className="nhsuk-table__caption">{caption}</caption> : null}
      {children}
    </table>
  </div>
);

Table.Body = TableBody;
Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Panel = TablePanel;

export default Table;
