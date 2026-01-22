import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { Card, CardHeading } from '#components/navigation/card/index.js';
import { type HeadingLevelProps } from '#components/utils/HeadingLevel.js';

export const WarningCalloutHeading = forwardRef<HTMLDivElement, HeadingLevelProps>(
  ({ children, headingLevel, visuallyHiddenText, ...rest }, forwardedRef) => (
    <CardHeading
      headingLevel={headingLevel ?? 'h3'}
      visuallyHiddenText={
        visuallyHiddenText ??
        (children?.toString().toLowerCase().includes('important') ? undefined : 'Important')
      }
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </CardHeading>
  ),
);

const WarningCalloutComponent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  (props, forwardedRef) => <Card warning ref={forwardedRef} {...props} />,
);

WarningCalloutComponent.displayName = 'WarningCallout';
WarningCalloutHeading.displayName = 'WarningCallout.Heading';

export const WarningCallout = Object.assign(WarningCalloutComponent, {
  Heading: WarningCalloutHeading,
});
