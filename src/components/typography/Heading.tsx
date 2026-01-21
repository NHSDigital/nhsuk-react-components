import classNames from 'classnames';
import { forwardRef, type ElementType, type HTMLAttributes, type ReactElement } from 'react';

import { type NHSUKSize } from '#util/types/NHSUKTypes.js';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
  sizePrefix?: string;
  size?: NHSUKSize;
  visuallyHiddenText?: string | ReactElement;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, forwardedRef) => {
  const {
    children,
    className,
    headingLevel = 'h1',
    sizePrefix = 'nhsuk-heading-',
    size,
    visuallyHiddenText,
    ...rest
  } = props;

  let Element = headingLevel;

  if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(Element.toLowerCase())) {
    console.error(`Heading: Invalid headingLevel prop: ${props.headingLevel}`);
    Element = 'h1';
  }

  return (
    <Element
      className={classNames(className, { [`${sizePrefix}${size}`]: size })}
      ref={forwardedRef}
      {...rest}
    >
      {visuallyHiddenText ? (
        <>
          {/* eslint-disable-next-line jsx-a11y/aria-role */}
          <span role="text">
            <span className="nhsuk-u-visually-hidden">
              {typeof visuallyHiddenText === 'string' ? (
                `${visuallyHiddenText}: `
              ) : (
                <>{visuallyHiddenText}: </>
              )}
            </span>
            {children}
          </span>
        </>
      ) : (
        <>{children}</>
      )}
    </Element>
  );
});

Heading.displayName = 'Heading';
