import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export const FooterCopyright: FC<ComponentPropsWithoutRef<'p'>> = ({
  children = '© NHS England',
  className,
  ...rest
}) => (
  <p className={classNames('nhsuk-body-s', className)} {...rest}>
    {children}
  </p>
);

FooterCopyright.displayName = 'Footer.Copyright';
