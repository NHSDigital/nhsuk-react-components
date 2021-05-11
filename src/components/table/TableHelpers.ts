import React, { isValidElement, ReactElement, ReactNode } from 'react';
import TableCell from './components/TableCell';

export const isTableCell = (child: ReactNode): child is ReactElement => {
  return isValidElement(child) && child.type === TableCell;
};

export const getHeadingsFromChildren = (children: ReactNode): string[] => {
  const headings = React.Children.map(children, child => {
    if (isTableCell(child)) {
      return child.props.children.toString();
    }
    return null;
  });

  if (!headings) return [];
  return headings.filter(Boolean);
};
