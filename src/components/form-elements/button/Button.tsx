import classNames from 'classnames';
import { type Button as ButtonModule } from 'nhsuk-frontend';
import React, {
  createRef,
  forwardRef,
  useEffect,
  useState,
  type ForwardedRef,
  type MouseEvent,
} from 'react';
import { type AsElementLink } from '#util/types';

export interface ButtonProps extends AsElementLink<HTMLButtonElement> {
  href?: never;
  secondary?: boolean;
  reverse?: boolean;
  warning?: boolean;
  as?: 'button';
  preventDoubleClick?: boolean;
}

export interface ButtonLinkProps extends AsElementLink<HTMLAnchorElement> {
  href: string;
  type?: never;
  secondary?: boolean;
  reverse?: boolean;
  warning?: boolean;
  as?: 'a';
  preventDoubleClick?: boolean;
}

const ButtonComponent = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const {
    className,
    asElement: Element = 'button',
    disabled,
    secondary,
    reverse,
    warning,
    type = 'submit',
    preventDoubleClick,
    onClick,
    ...rest
  } = props;

  const [moduleRef] = useState(() => forwardedRef || createRef<HTMLButtonElement>());
  const [instance, setInstance] = useState<ButtonModule>();

  useEffect(() => {
    if (!('current' in moduleRef) || !moduleRef.current || instance) {
      return;
    }

    const { current: $root } = moduleRef;

    import('nhsuk-frontend').then(({ Button }) => {
      setInstance(new Button($root));
    });
  }, [moduleRef, instance]);

  return (
    <Element
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
      reverse,
      warning,
      preventDoubleClick,
      onClick,
      ...rest
    } = props;

    const [moduleRef] = useState(() => forwardedRef || createRef<HTMLAnchorElement>());
    const [instance, setInstance] = useState<ButtonModule>();

    useEffect(() => {
      if (!('current' in moduleRef) || !moduleRef.current || instance) {
        return;
      }

      const { current: $root } = moduleRef;

      import('nhsuk-frontend').then(({ Button }) => {
        setInstance(new Button($root));
      });
    }, [moduleRef, instance]);

    return (
      <Element
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
