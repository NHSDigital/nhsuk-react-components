import classNames from 'classnames';
import { type FC } from 'react';

import { type FooterContentProps } from './FooterContent.js';

export const FooterList: FC<FooterContentProps> = ({ children, className, width, ...rest }) => (
  <ul className={classNames('nhsuk-footer__list', className)} {...rest}>
    {children}
  </ul>
);

FooterList.displayName = 'Footer.List';
