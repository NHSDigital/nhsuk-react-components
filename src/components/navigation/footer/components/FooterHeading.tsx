import { type FC } from 'react';

import { Heading, type HeadingProps } from '#components/typography/Heading.js';

export type FooterHeadingProps = Omit<HeadingProps, 'headingLevel' | 'size' | 'className'>;

export const FooterHeading: FC<FooterHeadingProps> = (props) => (
  <Heading headingLevel="h2" size="s" className="nhsuk-footer__heading" {...props} />
);

FooterHeading.displayName = 'Footer.Heading';
