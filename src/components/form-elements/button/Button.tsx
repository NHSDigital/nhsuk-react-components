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
  secondary?: boolean;
  reverse?: boolean;
  warning?: boolean;
  as?: 'button';
  preventDoubleClick?: boolean;
  debounceTimeout?: number;
}

export interface ButtonLinkProps extends ComponentProps<'a'> {
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

export const ButtonComponent: FC<ButtonProps> = ({
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
        { 'nhsuk-button--secondary': secondary },
        { 'nhsuk-button--reverse': reverse },
        { 'nhsuk-button--warning': warning },
        className,
      )}
      disabled={disabled}
      aria-disabled={disabled ? 'true' : undefined}
      type={type}
      onClick={preventDoubleClick ? debouncedHandleClick : onClick}
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
        { 'nhsuk-button--secondary': secondary },
        { 'nhsuk-button--reverse': reverse },
        { 'nhsuk-button--warning': warning },
        className,
      )}
      role="button"
      draggable="false"
      onKeyDown={handleKeyDown}
      onClick={preventDoubleClick ? debouncedHandleClick : onClick}
      {...rest}
    >
      {children}
    </a>
  );
};

const ButtonWrapper: FC<ButtonLinkProps | ButtonProps> = ({ as, ...rest }) =>
  'href' in rest || as === 'a' ? (
    <ButtonLinkComponent {...(rest as ButtonLinkProps)} />
  ) : (
    <ButtonComponent {...(rest as ButtonProps)} />
  );

export default ButtonWrapper;
