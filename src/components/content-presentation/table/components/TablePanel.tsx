import classNames from 'classnames';
import React, { type ComponentPropsWithoutRef, type FC } from 'react';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils';

export interface TablePanelProps extends ComponentPropsWithoutRef<'div'> {
  heading?: string;
  headingProps?: HeadingLevelProps;
}

export const TablePanel: FC<TablePanelProps> = ({
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
