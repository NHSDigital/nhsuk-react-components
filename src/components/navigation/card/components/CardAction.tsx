import { forwardRef, type ReactElement } from 'react';

import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface CardActionProps extends AsElementLink<HTMLAnchorElement> {
  heading?: string | ReactElement;
  visuallyHiddenText?: string | ReactElement;
}

export const CardAction = forwardRef<HTMLAnchorElement, CardActionProps>((props, forwardedRef) => {
  const {
    children,
    className,
    heading,
    visuallyHiddenText,
    asElement: Element = 'a',
    ...rest
  } = props;

  return (
    <Element ref={forwardedRef} {...rest}>
      {children}
      {heading || visuallyHiddenText ? (
        <span className="nhsuk-u-visually-hidden">
          {visuallyHiddenText ? <> {visuallyHiddenText}</> : null}
          {heading ? <> ({heading})</> : null}
        </span>
      ) : null}
    </Element>
  );
});

CardAction.displayName = 'Card.Action';
