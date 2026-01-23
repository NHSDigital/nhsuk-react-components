import classNames from 'classnames';
import { forwardRef, type ReactElement } from 'react';

import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface BackLinkProps extends AsElementLink<HTMLAnchorElement> {
  reverse?: boolean;
  visuallyHiddenText?: string | ReactElement;
}

export const BackLink = forwardRef<HTMLAnchorElement, BackLinkProps>((props, forwardedRef) => {
  const {
    children = 'Back',
    className,
    reverse,
    visuallyHiddenText,
    asElement: Element = 'a',
    ...rest
  } = props;

  return (
    <Element
      className={classNames('nhsuk-back-link', { 'nhsuk-back-link--reverse': reverse }, className)}
      ref={forwardedRef}
      {...rest}
    >
      {visuallyHiddenText ? (
        <>
          <span className="nhsuk-u-visually-hidden">
            {typeof visuallyHiddenText === 'string' ? (
              `${visuallyHiddenText} `
            ) : (
              <>{visuallyHiddenText} </>
            )}
          </span>
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </Element>
  );
});

BackLink.displayName = 'BackLink';
