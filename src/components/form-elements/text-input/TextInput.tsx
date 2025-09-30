import React, { ComponentPropsWithoutRef, FC, forwardRef } from 'react';
import classNames from 'classnames';
import FormGroup from '@components/utils/FormGroup';
import { InputWidth } from '@util/types/NHSUKTypes';
import { FormElementProps } from '@util/types/FormTypes';

export interface TextInputProps
  extends ComponentPropsWithoutRef<'input'>,
    Omit<FormElementProps, 'fieldsetProps' | 'legend' | 'legendProps'> {
  width?: InputWidth;
  prefix?: string;
  suffix?: string;
}

const TextInputPrefix: FC<Pick<TextInputProps, 'prefix'>> = ({ prefix }) => (
  <div className="nhsuk-input__prefix" aria-hidden="true">
    {prefix}
  </div>
);

const TextInputSuffix: FC<Pick<TextInputProps, 'suffix'>> = ({ suffix }) => (
  <div className="nhsuk-input__suffix" aria-hidden="true">
    {suffix}
  </div>
);

const TextInputComponent = forwardRef<HTMLInputElement, TextInputProps>((props, forwardedRef) => (
  <FormGroup<TextInputProps> {...props} inputType="input">
    {({ width, className, error, type = 'text', prefix, suffix, ...rest }) => {
      const Input = (
        <input
          className={classNames(
            'nhsuk-input',
            { [`nhsuk-input--width-${width}`]: width },
            { 'nhsuk-input--error': error },
            className,
          )}
          ref={forwardedRef}
          type={type}
          {...rest}
        />
      );

      return prefix || suffix ? (
        <div className="nhsuk-input__wrapper">
          {prefix ? <TextInputPrefix prefix={prefix} /> : null}
          {Input}
          {suffix ? <TextInputSuffix suffix={suffix} /> : null}
        </div>
      ) : (
        Input
      );
    }}
  </FormGroup>
));

TextInputComponent.displayName = 'TextInput';

export default TextInputComponent;
