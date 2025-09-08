import React from 'react';
import classNames from 'classnames';
import SingleInputFormGroup from '@components/utils/SingleInputFormGroup';
import { InputWidth } from '@util/types/NHSUKTypes';
import { FormElementProps } from '@util/types/FormTypes';
import { MutableRefObject } from '../fieldset/Fieldset';

interface TextInputProps extends React.HTMLProps<HTMLInputElement>, FormElementProps {
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  width?: InputWidth;
  disableErrorLine?: boolean;
  prefix?: string;
  suffix?: string;
}

const TextInputPrefix: React.FC<{ prefix: string }> = ({ prefix }) => (
  <div className="nhsuk-input__prefix" aria-hidden="true">
    {prefix}
  </div>
);

const TextInputSuffix: React.FC<{ suffix: string }> = ({ suffix }) => (
  <div className="nhsuk-input__suffix" aria-hidden="true">
    {suffix}
  </div>
);

const TextInput: React.FC<TextInputProps> = (props) => (
  <SingleInputFormGroup<TextInputProps> {...props} inputType="input">
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
  </SingleInputFormGroup>
);

export default TextInput;
