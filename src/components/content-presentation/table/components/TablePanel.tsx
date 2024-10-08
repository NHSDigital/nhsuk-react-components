import React, { FC, ComponentProps, HTMLProps } from 'react';
import classNames from 'classnames';
import HeadingLevel from '@components/utils/HeadingLevel';

export interface TablePanelProps extends HTMLProps<HTMLDivElement> {
  heading?: string;
  headingProps?: ComponentProps<typeof HeadingLevel>;
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
