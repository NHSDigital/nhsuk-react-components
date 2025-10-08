import { Children, type ReactElement, type ReactNode } from 'react';
import { TableCell, type TableCellProps } from './components/TableCell.js';
import { childIsOfComponentType } from '#util/types/TypeGuards.js';

export const isTableCell = (
  child: ReactNode,
): child is ReactElement<TableCellProps, typeof TableCell> => {
  return childIsOfComponentType(child, TableCell);
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
