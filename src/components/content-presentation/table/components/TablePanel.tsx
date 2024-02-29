import React, { ComponentProps, HTMLProps } from 'react';
import classNames from 'classnames';
import HeadingLevel from '../../../../util/HeadingLevel';

export interface TablePanelProps extends HTMLProps<HTMLDivElement> {
  heading?: string;
  headingProps?: ComponentProps<typeof HeadingLevel>;
}

const TablePanel: React.FC<TablePanelProps> = ({
  className,
  heading,
  headingProps,
  children,
  ...rest
}) => (
  <div className={classNames('nhsuk-table__panel-with-heading-tab', className)} {...rest}>
    {heading && (
      <HeadingLevel
        headingLevel="h3"
        {...headingProps}
        className={classNames('nhsuk-table__heading-tab', headingProps?.className)}
      >
        {heading}
      </HeadingLevel>
    )}
    {children}
  </div>
);

export default TablePanel;
