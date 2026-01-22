import { type ComponentPropsWithoutRef, type FC } from 'react';

import { type ColWidth } from '#util/types/NHSUKTypes.js';

export interface FooterContentProps extends Pick<
  ComponentPropsWithoutRef<'div'>,
  'className' | 'children'
> {
  width?: Extract<ColWidth, 'full' | 'one-half' | 'one-third' | 'one-quarter'>;
}

export const FooterContent: FC<FooterContentProps> = ({ children, className, width, ...rest }) => (
  <div className={`nhsuk-grid-column-${width ?? 'one-quarter'}`} {...rest}>
    {children}
  </div>
);

FooterContent.displayName = 'Footer.Content';
