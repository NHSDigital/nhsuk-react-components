import { Children, isValidElement, ReactElement, ReactNode } from 'react';
import TableCell, { TableCellProps } from './components/TableCell';

export const isTableCell = (
  child: ReactNode,
): child is ReactElement<TableCellProps, typeof TableCell> => {
  return isValidElement(child) && child.type === TableCell;
};

export const getHeadingsFromChildren = (children?: ReactNode) => {
  const headings: ReactNode[] = [];
  Children.map(children, (child) => {
    if (isTableCell(child) && child.props.children) {
      headings.push(child.props.children);
    }
  });
  return headings;
};
