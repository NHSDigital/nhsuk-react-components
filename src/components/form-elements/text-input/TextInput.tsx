import React, { FC, HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import FormGroup from '@components/utils/FormGroup';
import { InputWidth } from '@util/types/NHSUKTypes';
import { FormElementProps } from '@util/types/FormTypes';

interface TextInputProps extends HTMLProps<HTMLInputElement>, FormElementProps {
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  width?: InputWidth;
  disableErrorLine?: boolean;
  prefix?: string;
  suffix?: string;
}

const TextInputPrefix: FC<{ prefix: string }> = ({ prefix }) => (
  <div className="nhsuk-input__prefix" aria-hidden="true">
    {prefix}
  </div>
);

const TextInputSuffix: FC<{ suffix: string }> = ({ suffix }) => (
  <div className="nhsuk-input__suffix" aria-hidden="true">
    {suffix}
  </div>
);

const TextInputComponent: FC<TextInputProps> = (props) => (
  <FormGroup<TextInputProps> {...props} inputType="input">
    {({ width, className, error, inputRef, type = 'text', prefix, suffix, ...rest }) => {
      const Input = (
        <input
          className={classNames(
            'nhsuk-input',
            { [`nhsuk-input--width-${width}`]: width },
            { 'nhsuk-input--error': error },
            className,
          )}
          ref={inputRef}
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
);

export default TextInputComponent;
