import React, {
  EventHandler,
  FC,
  HTMLProps,
  KeyboardEvent,
  SyntheticEvent,
  useCallback,
  useRef,
} from 'react';
import classNames from 'classnames';

// Debounce timeout - default 1 second
export const DefaultButtonDebounceTimeout = 1000;

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  warning?: boolean;
  as?: 'button';
  preventDoubleClick?: boolean;
  debounceTimeout?: number;
}

export interface ButtonLinkProps extends HTMLProps<HTMLAnchorElement> {
  disabled?: boolean;
  secondary?: boolean;
  reverse?: boolean;
  warning?: boolean;
  as?: 'a';
  preventDoubleClick?: boolean;
  debounceTimeout?: number;
}

const useDebounceTimeout = (
  fn?: EventHandler<SyntheticEvent>,
  timeout: number = DefaultButtonDebounceTimeout,
) => {
  const timeoutRef = useRef<number>();

  if (!fn) return undefined;

  const handler: EventHandler<SyntheticEvent> = (event) => {
    event.persist();

    if (timeoutRef.current) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    fn(event);

    timeoutRef.current = window.setTimeout(() => {
      timeoutRef.current = undefined;
    }, timeout);
  };

  return handler;
};

export const Button: FC<ButtonProps> = ({
  className,
  disabled,
  secondary,
  reverse,
  warning,
  type = 'submit',
  preventDoubleClick = false,
  debounceTimeout = DefaultButtonDebounceTimeout,
  onClick,
  ...rest
}) => {
  const debouncedHandleClick = useDebounceTimeout(onClick, debounceTimeout);

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={classNames(
        'nhsuk-button',
        { 'nhsuk-button--disabled': disabled },
        { 'nhsuk-button--secondary': secondary },
        { 'nhsuk-button--reverse': reverse },
        { 'nhsuk-button--warning': warning },
        className,
      )}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : 'false'}
      type={type}
      onClick={preventDoubleClick ? debouncedHandleClick : onClick}
      {...rest}
    />
  );
};
export const ButtonLink: FC<ButtonLinkProps> = ({
  className,
  role = 'button',
  draggable = false,
  children,
  disabled,
  secondary,
  reverse,
  warning,
  preventDoubleClick = false,
  debounceTimeout = DefaultButtonDebounceTimeout,
  onClick,
  ...rest
}) => {
  const debouncedHandleClick = useDebounceTimeout(onClick, debounceTimeout);

  /**
   * Recreate the shim behaviour from NHS.UK/GOV.UK Frontend
   * https://github.com/alphagov/govuk-frontend/blob/main/packages/govuk-frontend/src/govuk/components/button/button.mjs
   * https://github.com/nhsuk/nhsuk-frontend/blob/main/packages/components/button/button.js
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>) => {
      const { currentTarget } = event;

      if (role === 'button' && event.key === ' ') {
        event.preventDefault();
        currentTarget.click();
      }
    },
    [role],
  );

  return (
    <a
      className={classNames(
        'nhsuk-button',
        { 'nhsuk-button--disabled': disabled },
        { 'nhsuk-button--secondary': secondary },
        { 'nhsuk-button--reverse': reverse },
        { 'nhsuk-button--warning': warning },
        className,
      )}
      role={role}
      aria-disabled={disabled ? 'true' : 'false'}
      draggable={draggable}
      onKeyDown={handleKeyDown}
      onClick={preventDoubleClick ? debouncedHandleClick : onClick}
      {...rest}
    >
      {children}
    </a>
  );
};

const ButtonWrapper: FC<ButtonLinkProps | ButtonProps> = ({ href, as, ...rest }) => {
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
