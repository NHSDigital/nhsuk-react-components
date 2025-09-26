'use client';
import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  useContext,
  ReactNode,
  useEffect,
  useState,
  forwardRef,
} from 'react';
import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import { RadiosContext, IRadiosContext } from '../RadioContext';
import HintText from '../../hint-text/HintText';
import Label from '../../label/Label';

export interface RadiosItemProps
  extends ComponentPropsWithoutRef<'input'>,
    Pick<FormElementProps, 'hint' | 'hintProps' | 'labelProps'> {
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalProps?: ComponentPropsWithRef<'div'>;
}

const RadiosItem = forwardRef<HTMLInputElement, RadiosItemProps>((props, forwardedRef) => {
  const {
    className,
    children,
    id,
    hint,
    hintProps,
    labelProps,
    conditional,
    forceShowConditional,
    conditionalProps,
    checked,
    defaultChecked,
    onChange,
    ...rest
  } = props;

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
          type="radio"
          aria-controls={conditional ? `${inputID}--conditional` : undefined}
          aria-describedby={hint ? `${inputID}--hint` : undefined}
          checked={checked}
          defaultChecked={defaultChecked}
          ref={forwardedRef}
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
          {...conditionalProps}
        >
          {conditional}
        </div>
      )}
    </>
  );
});

RadiosItem.displayName = 'Radios.Item';

export default RadiosItem;
