import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  as?: 'button';
}

interface ButtonLinkProps extends HTMLProps<HTMLAnchorElement> {
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  as?: 'a';
}

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  ...rest
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={classNames(
      'nhsuk-button',
      { 'nhsuk-button--disabled': disabled },
      { 'nhsuk-button--secondary': secondary },
      { 'nhsuk-button--reverse': reverse },
      className,
    )}
    disabled={disabled}
    aria-disabled={disabled ? 'true' : 'false'}
    {...rest}
  />
);

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  role,
  draggable,
  children,
  disabled,
  secondary,
  reverse,
  type = 'submit',
  ...rest
}) => (
  <a
    className={classNames(
      'nhsuk-button',
      { 'nhsuk-button--disabled': disabled },
      { 'nhsuk-button--secondary': secondary },
      { 'nhsuk-button--reverse': reverse },
      className,
    )}
    type={type}
    role={role}
    aria-disabled={disabled ? 'true' : 'false'}
    draggable={draggable}
    {...rest}
  >
    {children}
  </a>
);

const ButtonWrapper: React.FC<ButtonLinkProps | ButtonProps> = ({
  href,
  as,
  role = 'button',
  draggable = false,
  ...rest
}) => {
  const buttonProps = { type: 'submit', ...rest } as ButtonProps;
  if (as === 'a') {
    return (
      <ButtonLink role={role} draggable={draggable} href={href} {...(rest as ButtonLinkProps)} />
    );
  }
  if (as === 'button') {
    return <Button {...buttonProps} />;
  }
  if (href) {
    return (
      <ButtonLink role={role} draggable={draggable} href={href} {...(rest as ButtonLinkProps)} />
    );
  }
  return <Button {...buttonProps} />;
};

export default ButtonWrapper;
