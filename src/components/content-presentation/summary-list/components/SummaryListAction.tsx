import { forwardRef } from 'react';

import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface SummaryListActionProps extends AsElementLink<HTMLAnchorElement> {
  visuallyHiddenText: string;
}

export const SummaryListAction = forwardRef<HTMLAnchorElement, SummaryListActionProps>(
  (props, forwardedRef) => {
    const { children, className, asElement: Element = 'a', visuallyHiddenText, ...rest } = props;

    return (
      <Element ref={forwardedRef} {...rest}>
        {children}
        <span className="nhsuk-u-visually-hidden"> {visuallyHiddenText}</span>
      </Element>
    );
  },
);

SummaryListAction.displayName = 'SummaryList.Action';
