'use client';

import classNames from 'classnames';
import { type PasswordInput as PasswordInputModule } from 'nhsuk-frontend';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ComponentPropsWithRef,
  type FC,
} from 'react';

import { Button } from '#components/form-elements/button/index.js';
import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';
import { type InputWidth } from '#util/types/NHSUKTypes.js';

export interface PasswordInputElementProps extends ComponentPropsWithoutRef<'input'> {
  width?: InputWidth;
  showPasswordText?: string;
  showPasswordAriaLabelText?: string;
  buttonProps?: ComponentPropsWithRef<'button'>;
}

export type PasswordInputProps = PasswordInputElementProps &
  Omit<
    FormElementProps<PasswordInputElementProps, 'input'>,
    'fieldsetProps' | 'legend' | 'legendProps'
  >;

const PasswordInputButton: FC<ComponentPropsWithRef<'button'>> = ({
  children,
  className,
  ...rest
}) => (
  <Button
    className={classNames('nhsuk-password-input__toggle nhsuk-js-password-input-toggle', className)}
    type="button"
    secondary
    small
    hidden
    {...rest}
  >
    {children}
  </Button>
);

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ buttonProps, formGroupProps, ...props }, forwardedRef) => {
    const { showPasswordText, showPasswordAriaLabelText, ...rest } = props;

    const moduleRef = useRef<HTMLDivElement>(null);
    const importRef = useRef<Promise<PasswordInputModule | void>>(null);
    const [instanceError, setInstanceError] = useState<Error>();
    const [instance, setInstance] = useState<PasswordInputModule>();

    useImperativeHandle(formGroupProps?.ref, () => moduleRef.current!, [moduleRef]);

    useEffect(() => {
      if (!moduleRef.current || importRef.current || instance) {
        return;
      }

      importRef.current = import('nhsuk-frontend')
        .then(({ PasswordInput }) => setInstance(new PasswordInput(moduleRef.current)))
        .catch(setInstanceError);
    }, [moduleRef, importRef, instance]);

    if (instanceError) {
      throw instanceError;
    }

    return (
      <FormGroup<PasswordInputProps, 'input'>
        {...rest}
        formGroupProps={{
          ...formGroupProps,
          'className': classNames('nhsuk-password-input', formGroupProps?.className),
          'data-module': 'nhsuk-password-input',
          'afterInput': ({ id }) => (
            <PasswordInputButton
              aria-controls={id}
              aria-label={showPasswordAriaLabelText ?? 'Show password'}
              {...buttonProps}
            >
              {showPasswordText ?? 'Show'}
            </PasswordInputButton>
          ),
          'ref': moduleRef,
        }}
      >
        {({ width, className, error, autoComplete, ...rest }) => (
          <input
            className={classNames(
              'nhsuk-input',
              { [`nhsuk-input--width-${width}`]: width },
              { 'nhsuk-input--error': error },
              'nhsuk-password-input__input nhsuk-js-password-input-input',
              className,
            )}
            ref={forwardedRef}
            type="password"
            spellCheck="false"
            autoCapitalize="none"
            autoComplete={autoComplete ?? 'current-password'}
            {...rest}
          />
        )}
      </FormGroup>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
