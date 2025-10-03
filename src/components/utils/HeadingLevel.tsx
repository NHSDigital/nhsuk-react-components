import React, { forwardRef, type ElementType, type HTMLAttributes } from 'react';

export interface HeadingLevelProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel?: Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
}

export const HeadingLevel = forwardRef<HTMLHeadingElement, HeadingLevelProps>(
  (props, forwardedRef) => {
    const { headingLevel = 'h3', children, ...rest } = props;
    let Element = headingLevel;

    if (!['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(Element.toLowerCase())) {
      console.error(`HeadingLevel: Invalid headingLevel prop: ${Element}`);
      Element = 'h3';
    }

    return (
      <Element ref={forwardedRef} {...rest}>
        {children}
      </Element>
    );
  },
);

HeadingLevel.displayName = 'HeadingLevel';
