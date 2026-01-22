import classNames from 'classnames';
import { Children, type ComponentPropsWithoutRef, type FC } from 'react';

import { SummaryListAction } from './SummaryListAction.js';

import { childIsOfComponentType } from '#util/types/index.js';

export interface SummaryListRowProps extends ComponentPropsWithoutRef<'div'> {
  noBorder?: boolean;
}

export const SummaryListRow: FC<SummaryListRowProps> = ({
  children,
  className,
  noBorder,
  ...rest
}) => {
  const items = Children.toArray(children);

  // Allow multiple actions
  const actionItems = items.filter((child) => childIsOfComponentType(child, SummaryListAction));

  // Only row content items remain
  const contentItems = items.filter((child) => !childIsOfComponentType(child, SummaryListAction));

  // Determine actions item
  const actionsItem = (
    <>
      {actionItems?.length === 1 ? actionItems : null}
      {actionItems?.length > 1 ? (
        <ul className="nhsuk-summary-list__actions-list">
          {actionItems.map(({ key, props }) => (
            <li className="nhsuk-summary-list__actions-list-item" key={key}>
              <SummaryListAction {...props} />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );

  return (
    <div
      className={classNames(
        'nhsuk-summary-list__row',
        { 'nhsuk-summary-list__row--no-actions': !actionItems.length },
        { 'nhsuk-summary-list__row--no-border': noBorder },
        className,
      )}
      {...rest}
    >
      {contentItems}
      {actionItems.length ? <dd className="nhsuk-summary-list__actions">{actionsItem}</dd> : null}
    </div>
  );
};

SummaryListRow.displayName = 'SummaryList.Row';
