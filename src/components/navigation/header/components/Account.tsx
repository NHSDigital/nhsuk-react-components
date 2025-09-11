import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

export type AccountProps = Pick<HTMLProps<HTMLElement>, 'aria-label' | 'children' | 'className'>;

const Account: FC<AccountProps> = ({
  className,
  children,
  'aria-label': ariaLabel = 'Account',
}) => (
  <nav className={classNames('nhsuk-header__account', className)} aria-label={ariaLabel}>
    <ul className="nhsuk-header__account-list">{children}</ul>
  </nav>
);

Account.displayName = 'Header.Account';

export default Account;
