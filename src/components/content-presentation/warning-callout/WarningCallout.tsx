import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { Card, CardHeading } from '#components/navigation/card/index.js';
import { type HeadingLevelProps } from '#components/utils/HeadingLevel.js';

export const WarningCalloutHeading = forwardRef<HTMLDivElement, HeadingLevelProps>(
  ({ children, ...rest }, forwardedRef) => (
    <CardHeading
      headingLevel="h3"
      visuallyHiddenText={
        children?.toString().toLowerCase().includes('important') ? undefined : 'Important'
      }
      ref={forwardedRef}
      {...rest}
    >
      {children}
    </CardHeading>
  ),
);

const WarningCalloutComponent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  ({ children, ...rest }, forwardedRef) => (
    <Card warning ref={forwardedRef} {...rest}>
      <Card.Content>{children}</Card.Content>
    </Card>
  ),
);

WarningCalloutComponent.displayName = 'WarningCallout';
WarningCalloutHeading.displayName = 'WarningCallout.Heading';

export const WarningCallout = Object.assign(WarningCalloutComponent, {
  Heading: WarningCalloutHeading,
});
