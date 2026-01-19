'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';

import { FormGroup } from '#components/utils/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';
import { type InputWidth } from '#util/types/NHSUKTypes.js';

export interface TextInputElementProps extends ComponentPropsWithoutRef<'input'> {
  width?: InputWidth;
  code?: boolean;
  prefix?: string;
  suffix?: string;
}

export type TextInputProps = TextInputElementProps &
  Omit<
    FormElementProps<TextInputElementProps, 'input'>,
    'fieldsetProps' | 'legend' | 'legendProps'
  >;

const TextInputPrefix: FC<Pick<TextInputProps, 'prefix'>> = ({ prefix }) => (
  <div className="nhsuk-input-wrapper__prefix" aria-hidden="true">
    {prefix}
  </div>
);

const TextInputSuffix: FC<Pick<TextInputProps, 'suffix'>> = ({ suffix }) => (
  <div className="nhsuk-input-wrapper__suffix" aria-hidden="true">
    {suffix}
  </div>
);

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, suffix, formGroupProps, ...props }, forwardedRef) => (
    <FormGroup<TextInputProps, 'input'>
      {...props}
      formGroupProps={{
        ...formGroupProps,
        beforeInput: prefix
          ? // Allow form group 'beforeInput' to override prefix
            () => <TextInputPrefix prefix={prefix} />
          : formGroupProps?.beforeInput,
        afterInput: suffix
          ? // Allow form group 'afterInput' to override suffix
            () => <TextInputSuffix suffix={suffix} />
          : formGroupProps?.afterInput,
      }}
    >
      {({ width, className, code, error, type = 'text', prefix, suffix, ...rest }) => (
        <input
          className={classNames(
            'nhsuk-input',
            { [`nhsuk-input--width-${width}`]: width },
            { 'nhsuk-input--code': code },
            { 'nhsuk-input--error': error },
            className,
          )}
          ref={forwardedRef}
          type={type}
          {...rest}
        />
      )}
    </FormGroup>
  ),
);

TextInput.displayName = 'TextInput';
