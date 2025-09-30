import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelProps } from '@components/utils/HeadingLevel';

export interface TablePanelProps extends ComponentPropsWithoutRef<'div'> {
  heading?: string;
  headingProps?: HeadingLevelProps;
}

const TablePanel: FC<TablePanelProps> = ({
  className,
  heading,
  headingProps,
  children,
  ...rest
}) => (
  <div className={classNames('nhsuk-table__panel-with-heading-tab', className)} {...rest}>
    {heading && (
      <HeadingLevel
        {...headingProps}
        className={classNames('nhsuk-table__heading-tab', headingProps?.className)}
      >
        {heading}
      </HeadingLevel>
    )}
    {children}
  </div>
);

TablePanel.displayName = 'Table.Panel';

export default TablePanel;
