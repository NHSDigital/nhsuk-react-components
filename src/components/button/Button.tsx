import classNames from 'classnames';
import React, { ElementType, HTMLProps } from 'react';

interface ButtonProps extends HTMLProps<HTMLButtonElement | HTMLAnchorElement> {
  asElement?: ElementType;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  asElement: Component,
  className,
  disabled,
  secondary,
  reverse,
  ...rest
}) => (
  // eslint-disable-next-line react/button-has-type
  <Component
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

Button.defaultProps = {
  asElement: 'button',
  draggable: false,
  type: 'submit',
  role: 'button',
};

export default Button;
