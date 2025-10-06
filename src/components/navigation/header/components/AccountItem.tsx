import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithRef, type ForwardedRef, type ReactNode } from 'react';
import { UserIcon } from '#components/content-presentation';
import { type AsElementLink } from '#util/types/LinkTypes';

export interface AccountItemButtonProps extends AsElementLink<HTMLButtonElement> {
  as?: 'button';
  formProps?: ComponentPropsWithRef<'form'>;
  icon?: boolean;
}

export interface AccountItemLinkProps extends AsElementLink<HTMLAnchorElement> {
  href: string;
  as?: 'a';
  icon?: boolean;
}

const AccountItemButton = forwardRef<HTMLButtonElement, AccountItemButtonProps>(
  (props, forwardedRef) => {
    const { className, as, asElement: Element = as ?? 'button', ...rest } = props;
    const { formProps, ...buttonRest } = rest;

    return (
      <form className="nhsuk-header__account-form" {...formProps}>
        <Element
          className={classNames('nhsuk-header__account-button', className)}
          ref={forwardedRef}
          {...buttonRest}
        />
      </form>
    );
  },
);

const AccountItemLink = forwardRef<HTMLAnchorElement, AccountItemLinkProps>(
  ({ className, as, asElement: Element = as ?? 'a', ...rest }, forwardedRef) => (
    <Element
      className={classNames('nhsuk-header__account-link', className)}
      ref={forwardedRef}
      {...rest}
    />
  ),
);

export const AccountItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  AccountItemButtonProps | AccountItemLinkProps
>(({ children, className, icon, ...rest }, forwardedRef) => {
  let element: ReactNode;

  if (rest.as === 'a' || 'href' in rest) {
    element = (
      <AccountItemLink ref={forwardedRef as ForwardedRef<HTMLAnchorElement>} {...rest}>
        {icon ? <UserIcon /> : null}
        {children}
      </AccountItemLink>
    );
  } else if (rest.as === 'button' || 'formProps' in rest) {
    element = (
      <AccountItemButton ref={forwardedRef as ForwardedRef<HTMLButtonElement>} {...rest}>
        {icon ? <UserIcon /> : null}
        {children}
      </AccountItemButton>
    );
  } else {
    element = (
      <>
        {icon ? <UserIcon /> : null}
        {children}
      </>
    );
  }

  return <li className={classNames('nhsuk-header__account-item', className)}>{element}</li>;
});

AccountItem.displayName = 'Header.AccountItem';
AccountItemLink.displayName = 'Header.AccountItemLink';
AccountItemButton.displayName = 'Header.AccountItemButton';
