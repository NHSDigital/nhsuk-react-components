import React, { ComponentProps, HTMLProps, ReactNode } from 'react';
import classNames from 'classnames';
import TableBody from './components/TableBody';
import TableCaption from './components/TableCaption';
import TableCell from './components/TableCell';
import TableContainer from './components/TableContainer';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';
import TablePanel from './components/TablePanel';
import TableContext, { ITableContext } from './TableContext';

interface TableProps extends HTMLProps<HTMLTableElement> {
  responsive?: boolean;
  caption?: ReactNode;
  captionProps?: ComponentProps<typeof TableCaption>;
}

interface TableState {
  headings: string[];
}

class Table extends React.PureComponent<TableProps, TableState> {
  static defaultProps = {
    responsive: false,
  };

  static Container = TableContainer;

  static Head = TableHead;

  static Row = TableRow;

  static Cell = TableCell;

  static Body = TableBody;

  static Panel = TablePanel;

  constructor(props: TableProps) {
    super(props);
    this.state = {
      headings: [],
    };
  }

  setHeadings = (headings: string[]): void => {
    const isEqual = headings.reduce(
      (prevValue, heading, index) => prevValue && heading === this.state.headings[index],
      true,
    );

    if (!isEqual) this.setState({ headings });
  };

  render(): JSX.Element {
    const { className, responsive, children, caption, captionProps, ...rest } = this.props;

    const contextValue: ITableContext = {
      isResponsive: Boolean(responsive),
      headings: this.state.headings,
      setHeadings: this.setHeadings,
    };

    return (
      <TableContext.Provider value={contextValue}>
        <table
          className={classNames(
            { 'nhsuk-table': !responsive },
            { 'nhsuk-table-responsive': responsive },
            className,
          )}
          {...rest}
        >
          {caption && <TableCaption {...captionProps}>{caption}</TableCaption>}
          {children}
        </table>
      </TableContext.Provider>
    );
  }
}

export default Table;
