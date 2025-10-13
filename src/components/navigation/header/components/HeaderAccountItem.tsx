import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithRef, type ForwardedRef, type ReactNode } from 'react';
import { UserIcon } from '#components/content-presentation/index.js';
import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface HeaderAccountItemButtonProps extends AsElementLink<HTMLButtonElement> {
  as?: 'button';
  formProps?: ComponentPropsWithRef<'form'>;
  icon?: boolean;
}

export interface HeaderAccountItemLinkProps extends AsElementLink<HTMLAnchorElement> {
  href: string;
  as?: 'a';
  icon?: boolean;
}

const HeaderAccountItemButton = forwardRef<HTMLButtonElement, HeaderAccountItemButtonProps>(
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

const HeaderAccountItemLink = forwardRef<HTMLAnchorElement, HeaderAccountItemLinkProps>(
  ({ className, as, asElement: Element = as ?? 'a', ...rest }, forwardedRef) => (
    <Element
      className={classNames('nhsuk-header__account-link', className)}
      ref={forwardedRef}
      {...rest}
    />
  ),
);

export const HeaderAccountItem = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  HeaderAccountItemButtonProps | HeaderAccountItemLinkProps
>(({ children, className, icon, ...rest }, forwardedRef) => {
  let element: ReactNode;

  if (rest.as === 'a' || 'href' in rest) {
    element = (
      <HeaderAccountItemLink ref={forwardedRef as ForwardedRef<HTMLAnchorElement>} {...rest}>
        {icon ? <UserIcon /> : null}
        {children}
      </HeaderAccountItemLink>
    );
  } else if (rest.as === 'button' || 'formProps' in rest) {
    element = (
      <HeaderAccountItemButton ref={forwardedRef as ForwardedRef<HTMLButtonElement>} {...rest}>
        {icon ? <UserIcon /> : null}
        {children}
      </HeaderAccountItemButton>
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

HeaderAccountItem.displayName = 'Header.AccountItem';
HeaderAccountItemLink.displayName = 'Header.AccountItemLink';
HeaderAccountItemButton.displayName = 'Header.AccountItemButton';
