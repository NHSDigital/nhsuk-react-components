import { forwardRef, type ReactElement } from 'react';

import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface SummaryListActionProps extends AsElementLink<HTMLAnchorElement> {
  visuallyHiddenText?: string | ReactElement;
}

export const SummaryListAction = forwardRef<HTMLAnchorElement, SummaryListActionProps>(
  (props, forwardedRef) => {
    const { children, className, asElement: Element = 'a', visuallyHiddenText, ...rest } = props;

    return (
      <Element ref={forwardedRef} {...rest}>
        {visuallyHiddenText ? (
          <>
            {children}
            <span className="nhsuk-u-visually-hidden">
              {typeof visuallyHiddenText === 'string' ? (
                ` ${visuallyHiddenText}`
              ) : (
                <> {visuallyHiddenText}</>
              )}
            </span>
          </>
        ) : (
          <>{children}</>
        )}
      </Element>
    );
  },
);

SummaryListAction.displayName = 'SummaryList.Action';
