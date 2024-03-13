import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  as?: 'button';
}

export interface ButtonLinkProps extends HTMLProps<HTMLAnchorElement> {
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
  type = 'submit',
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
    type={type}
    {...rest}
  />
);

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  role = 'button',
  draggable = false,
  children,
  disabled,
  secondary,
  reverse,
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
    role={role}
    aria-disabled={disabled ? 'true' : 'false'}
    draggable={draggable}
    {...rest}
  >
    {children}
  </a>
);

const ButtonWrapper: React.FC<ButtonLinkProps | ButtonProps> = ({ href, as, ...rest }) => {
  if (as === 'a') {
    return <ButtonLink href={href} {...(rest as ButtonLinkProps)} />;
  }
  if (as === 'button') {
    return <Button {...(rest as ButtonProps)} />;
  }
  if (href) {
    return <ButtonLink href={href} {...(rest as ButtonLinkProps)} />;
  }
  return <Button {...(rest as ButtonProps)} />;
};

export default ButtonWrapper;
