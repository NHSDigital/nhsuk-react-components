import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

import { type Card as _Card } from '#components/navigation/card/index.js';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';

export interface TablePanelProps extends ComponentPropsWithoutRef<'div'> {
  heading?: string;
  headingProps?: HeadingLevelProps;
}

/**
 * @deprecated Use {@link _Card | `<Card cardType="feature">`} instead.
 */
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
