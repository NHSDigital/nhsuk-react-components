'use client';
import React, { FC, HTMLProps, useContext, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import { RadiosContext, IRadiosContext } from '../RadioContext';
import HintText, { HintTextProps } from '../../hint-text/HintText';
import Label, { LabelProps } from '../../label/Label';

export interface RadiosItemProps extends HTMLProps<HTMLInputElement> {
  hint?: string;
  hintProps?: HintTextProps;
  labelProps?: LabelProps;
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalWrapperProps?: HTMLProps<HTMLDivElement>;
  inputRef?: (inputRef: HTMLInputElement | null) => void;
}

const RadiosItem: FC<RadiosItemProps> = ({
  className,
  children,
  id,
  hint,
  hintProps,
  labelProps,
  conditional,
  forceShowConditional,
  conditionalWrapperProps,
  checked,
  defaultChecked,
  onChange,
  inputRef,
  type = 'radio',
  ...rest
}) => {
  const { name, getRadioId, setSelected, selectedRadio, leaseReference, unleaseReference } =
    useContext<IRadiosContext>(RadiosContext);
  const [radioReference] = useState<string>(leaseReference());
  const inputID = id || getRadioId(radioReference);
  const shouldShowConditional = selectedRadio === radioReference && checked !== false;

  useEffect(() => () => unleaseReference(radioReference));

  useEffect(() => {
    if (defaultChecked) setSelected(radioReference);
  }, []);

  useEffect(() => {
    if (checked) setSelected(radioReference);
  }, [checked]);

  return (
    <>
      <div className="nhsuk-radios__item">
        <input
          onChange={(e) => {
            setSelected(radioReference);
            if (onChange) onChange(e);
          }}
          className={classNames('nhsuk-radios__input', className)}
          id={inputID}
          name={name}
          type={type}
          aria-controls={conditional ? `${inputID}--conditional` : undefined}
          aria-describedby={hint ? `${inputID}--hint` : undefined}
          checked={checked}
          defaultChecked={defaultChecked}
          ref={inputRef}
          {...rest}
        />
        <Label
          className="nhsuk-radios__label"
          id={`${inputID}--label`}
          htmlFor={inputID}
          {...labelProps}
        >
          {children}
        </Label>
        <HintText className="nhsuk-radios__hint" id={`${inputID}--hint`} {...hintProps}>
          {hint}
        </HintText>
      </div>
      {conditional && (
        <div
          className={classNames('nhsuk-radios__conditional', {
            'nhsuk-radios__conditional--hidden': !(shouldShowConditional || forceShowConditional),
          })}
          id={`${inputID}--conditional`}
          {...conditionalWrapperProps}
        >
          {conditional}
        </div>
      )}
    </>
  );
};

export default RadiosItem;
