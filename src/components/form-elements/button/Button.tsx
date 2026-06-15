'use client';

import classNames from 'classnames';
import { type Button as ButtonModule } from 'nhsuk-frontend';
import {
  type ForwardedRef,
  type MouseEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import { type AsElementLink } from '#util/types/LinkTypes.js';

export interface ButtonProps extends ButtonBaseProps, AsElementLink<HTMLButtonElement> {
  href?: never;
  as?: 'button';
}

export interface ButtonLinkProps extends ButtonBaseProps, AsElementLink<HTMLAnchorElement> {
  href: string;
  type?: never;
  as?: 'a';
}

interface ButtonBaseProps {
  small?: boolean;
  variant?: 'brand' | 'login' | 'reverse' | 'secondary' | 'secondary-solid' | 'warning';
  preventDoubleClick?: boolean;

  /**
   * @deprecated Use `variant` instead.
   */
  secondary?: boolean;

  /**
   * @deprecated Use `variant` instead.
   */
  secondarySolid?: boolean;

  /**
   * @deprecated Use `variant` instead.
   */
  reverse?: boolean;

  /**
   * @deprecated Use `variant` instead.
   */
  warning?: boolean;

  /**
   * @deprecated Use `variant` instead.
   */
  login?: boolean;
}

function getButtonClassNames(props: ButtonProps | ButtonLinkProps) {
  return classNames(
    'nhsuk-button',
    {
      'nhsuk-button--secondary': props.variant === 'secondary' || props.secondary,
      'nhsuk-button--secondary-solid': props.variant === 'secondary-solid' || props.secondarySolid,
      'nhsuk-button--reverse': props.variant === 'reverse' || props.reverse,
      'nhsuk-button--warning': props.variant === 'warning' || props.warning,
      'nhsuk-button--login': props.variant === 'login' || props.login,
      'nhsuk-button--brand': props.variant === 'brand',
      'nhsuk-button--small': props.small,
    },
    props.className,
  );
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const {
    className,
    asElement: Element = 'button',
    disabled,
    secondary,
    secondarySolid,
    reverse,
    warning,
    login,
    small,
    variant,
    type = 'submit',
    preventDoubleClick,
    onClick,
    ...rest
  } = props;

  const moduleRef = useRef<HTMLButtonElement>(null);
  const importRef = useRef<Promise<ButtonModule | void>>(null);
  const [instanceError, setInstanceError] = useState<Error>();
  const [instance, setInstance] = useState<ButtonModule>();

  useImperativeHandle(forwardedRef, () => moduleRef.current!, [moduleRef]);

  useEffect(() => {
    if (!moduleRef.current || importRef.current || instance) {
      return;
    }

    importRef.current = import('nhsuk-frontend')
      .then(({ Button }) => setInstance(new Button(moduleRef.current)))
      .catch(setInstanceError);
  }, [moduleRef, importRef, instance]);

  if (instanceError) {
    throw instanceError;
  }

  return (
    <Element
      className={getButtonClassNames(props)}
      data-module="nhsuk-button"
      data-prevent-double-click={preventDoubleClick === true ? 'true' : undefined}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : undefined}
      type={type}
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
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
});

const ButtonLinkComponent = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (props, forwardedRef) => {
    const {
      className,
      asElement: Element = 'a',
      secondary,
      secondarySolid,
      reverse,
      warning,
      login,
      small,
      variant,
      preventDoubleClick,
      onClick,
      ...rest
    } = props;

    const moduleRef = useRef<HTMLAnchorElement>(null);
    const importRef = useRef<Promise<ButtonModule | void>>(null);
    const [instanceError, setInstanceError] = useState<Error>();
    const [instance, setInstance] = useState<ButtonModule>();

    useImperativeHandle(forwardedRef, () => moduleRef.current!, [moduleRef]);

    useEffect(() => {
      if (!moduleRef.current || importRef.current || instance) {
        return;
      }

      importRef.current = import('nhsuk-frontend')
        .then(({ Button }) => setInstance(new Button(moduleRef.current)))
        .catch(setInstanceError);
    }, [moduleRef, importRef, instance]);

    if (instanceError) {
      throw instanceError;
    }

    return (
      <Element
        className={getButtonClassNames(props)}
        data-module="nhsuk-button"
        data-prevent-double-click={preventDoubleClick === true ? 'true' : undefined}
        role="button"
        draggable="false"
        onClick={(event: MouseEvent<HTMLAnchorElement>) => {
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
  },
);

export const Button = forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonLinkProps | ButtonProps
>((props, forwardedRef) => {
  return props.as === 'a' || ('href' in props && typeof props.href === 'string') ? (
    <ButtonLinkComponent ref={forwardedRef as ForwardedRef<HTMLAnchorElement>} {...props} />
  ) : (
    <ButtonComponent ref={forwardedRef as ForwardedRef<HTMLButtonElement>} {...props} />
  );
});

ButtonLinkComponent.displayName = 'Button.Link';
ButtonComponent.displayName = 'Button';
Button.displayName = 'Button';
