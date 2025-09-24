import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import { User as UserIcon } from '@components/content-presentation/icons';

export interface AccountItemProps
  extends Pick<ComponentPropsWithoutRef<'a'>, 'href' | 'children' | 'className'>,
    Pick<ComponentPropsWithoutRef<'form'>, 'action' | 'method'> {
  icon?: boolean;
}

const AccountItem: FC<AccountItemProps> = ({ icon, children }) => (
  <>
    {icon ? <UserIcon /> : null}
    {children}
  </>
);

const AccountItemWrapper: FC<AccountItemProps> = ({ className, ...rest }) => {
  const InnerElement: FC<AccountItemProps> = ({ method = 'post', href, action, children }) => {
    if (href) {
      return (
        <a href={href} className="nhsuk-header__account-link">
          <AccountItem {...rest}>{children}</AccountItem>
        </a>
      );
    } else if (action) {
      return (
        <form className="nhsuk-header__account-form" action={action} method={method}>
          <button className="nhsuk-header__account-button">
            <AccountItem {...rest}>{children}</AccountItem>
          </button>
        </form>
      );
    }

    return <AccountItem {...rest}>{children}</AccountItem>;
  };

  return (
    <li className={classNames('nhsuk-header__account-item', className)}>
      <InnerElement {...rest} />
    </li>
  );
};

AccountItemWrapper.displayName = 'Header.AccountItem';

export default AccountItemWrapper;
