import { forwardRef } from 'react';

import { type AsElementLink } from '#util/types/LinkTypes.js';

type ErrorSummaryListItemProps = AsElementLink<HTMLAnchorElement>;

export const ErrorSummaryListItem = forwardRef<HTMLAnchorElement, ErrorSummaryListItemProps>(
  (props, forwardedRef) => {
    const { children, asElement: Element = 'a', ...rest } = props;

    if (!children) {
      return null;
    }

    return (
      <li>
        {(props.asElement ?? props.href) ? (
          <Element ref={forwardedRef} {...rest}>
            {children}
          </Element>
        ) : (
          <>{children}</>
        )}
      </li>
    );
  },
);

ErrorSummaryListItem.displayName = 'ErrorSummary.ListItem';
