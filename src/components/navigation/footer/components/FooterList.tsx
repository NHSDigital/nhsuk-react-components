import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export type FooterListProps = ComponentPropsWithoutRef<'ul'>;

export const FooterList: FC<FooterListProps> = ({ children, className, ...rest }) => (
  <ul className={classNames('nhsuk-footer__list', className)} {...rest}>
    {children}
  </ul>
);

FooterList.displayName = 'Footer.List';
