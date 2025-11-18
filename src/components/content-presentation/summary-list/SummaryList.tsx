import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import {
  SummaryListActions,
  SummaryListKey,
  SummaryListRow,
  SummaryListValue,
} from './components/index.js';

export interface SummaryListProps extends ComponentPropsWithoutRef<'dl'> {
  noBorder?: boolean;
}

const SummaryListComponent = forwardRef<HTMLDListElement, SummaryListProps>(
  ({ className, noBorder, ...rest }, forwardedRef) => (
    <dl
      className={classNames(
        'nhsuk-summary-list',
        { 'nhsuk-summary-list--no-border': noBorder },
        className,
      )}
      ref={forwardedRef}
      {...rest}
    />
  ),
);

SummaryListComponent.displayName = 'SummaryList';

export const SummaryList = Object.assign(SummaryListComponent, {
  Row: SummaryListRow,
  Key: SummaryListKey,
  Value: SummaryListValue,
  Actions: SummaryListActions,
});
