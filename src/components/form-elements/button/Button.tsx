import React, { ComponentPropsWithoutRef, FC, useRef, useEffect, useState } from 'react';
import { Button } from 'nhsuk-frontend';
import classNames from 'classnames';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  href?: never;
  secondary?: boolean;
  reverse?: boolean;
  warning?: boolean;
  as?: 'button';
  preventDoubleClick?: boolean;
}

export interface ButtonLinkProps extends ComponentPropsWithoutRef<'a'> {
  href: string;
  type?: never;
  secondary?: boolean;
  reverse?: boolean;
  warning?: boolean;
  as?: 'a';
  preventDoubleClick?: boolean;
}

export const ButtonComponent: FC<ButtonProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  warning,
  type = 'submit',
  preventDoubleClick,
  onClick,
  ...rest
}) => {
  const moduleRef = useRef<HTMLButtonElement>(null);
  const [instance, setInstance] = useState<Button>();

  useEffect(() => {
    if (!moduleRef.current || instance) {
      return;
    }

    setInstance(new Button(moduleRef.current));
  }, [moduleRef, instance]);

  return (
    <button
      className={classNames(
        'nhsuk-button',
        { 'nhsuk-button--secondary': secondary },
        { 'nhsuk-button--reverse': reverse },
        { 'nhsuk-button--warning': warning },
        className,
      )}
      data-module="nhsuk-button"
      data-prevent-double-click={preventDoubleClick === true ? 'true' : undefined}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : undefined}
      type={type}
      onClick={(event) => {
        if (event.nativeEvent.defaultPrevented) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
      ref={moduleRef}
      {...rest}
    />
  );
};

export const ButtonLinkComponent: FC<ButtonLinkProps> = ({
  className,
  children,
  secondary,
  reverse,
  warning,
  href,
  preventDoubleClick,
  onClick,
  ...rest
}) => {
  const moduleRef = useRef<HTMLAnchorElement>(null);
  const [instance, setInstance] = useState<Button>();

  useEffect(() => {
    if (!moduleRef.current || instance) {
      return;
    }

    setInstance(new Button(moduleRef.current));
  }, [moduleRef, instance]);

  return (
    <a
      href={href}
      className={classNames(
        'nhsuk-button',
        { 'nhsuk-button--secondary': secondary },
        { 'nhsuk-button--reverse': reverse },
        { 'nhsuk-button--warning': warning },
        className,
      )}
      data-module="nhsuk-button"
      data-prevent-double-click={preventDoubleClick === true ? 'true' : undefined}
      role="button"
      draggable="false"
      onClick={(event) => {
        if (event.nativeEvent.defaultPrevented) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
      ref={moduleRef}
      {...rest}
    >
      {children}
    </a>
  );
};

const ButtonWrapper: FC<ButtonLinkProps | ButtonProps> = (props) => {
  return props.as === 'a' || ('href' in props && typeof props.href === 'string') ? (
    <ButtonLinkComponent {...props} />
  ) : (
    <ButtonComponent {...props} />
  );
};

ButtonLinkComponent.displayName = 'Button.Link';
ButtonComponent.displayName = 'Button';
ButtonWrapper.displayName = 'Button';

export default ButtonWrapper;
