import { forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';

import { Card, CardHeading } from '#components/navigation/card/index.js';
import { type HeadingProps } from '#components/typography/Heading.js';

export const WarningCalloutHeading: FC<HeadingProps> = ({
  children,
  headingLevel = 'h3',
  visuallyHiddenText,
  ...rest
}) => (
  <CardHeading
    headingLevel={headingLevel}
    visuallyHiddenText={
      visuallyHiddenText ??
      (children?.toString().toLowerCase().includes('important') ? undefined : 'Important')
    }
    {...rest}
  >
    {children}
  </CardHeading>
);

const WarningCalloutComponent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>(
  (props, forwardedRef) => <Card warning ref={forwardedRef} {...props} />,
);

WarningCalloutComponent.displayName = 'WarningCallout';
WarningCalloutHeading.displayName = 'WarningCallout.Heading';

export const WarningCallout = Object.assign(WarningCalloutComponent, {
  Heading: WarningCalloutHeading,
});
