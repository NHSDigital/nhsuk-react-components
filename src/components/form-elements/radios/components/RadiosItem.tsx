'use client';

import classNames from 'classnames';
import {
  forwardRef,
  useContext,
  useEffect,
  useState,
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from 'react';

import { RadiosContext, type IRadiosContext } from '../RadiosContext.js';

import { HintText } from '#components/form-elements/hint-text/index.js';
import { Label } from '#components/form-elements/label/index.js';
import { type FormElementProps } from '#util/types/FormTypes.js';

export interface RadiosItemElementProps extends ComponentPropsWithoutRef<'input'> {
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalProps?: ComponentPropsWithRef<'div'>;
}

export type RadiosItemProps = RadiosItemElementProps &
  Omit<FormElementProps, 'fieldsetProps' | 'label' | 'legend' | 'legendProps'>;

export const RadiosItem = forwardRef<HTMLInputElement, RadiosItemProps>((props, forwardedRef) => {
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
  }, [defaultChecked, setSelected, radioReference]);

  useEffect(() => {
    if (checked) setSelected(radioReference);
  }, [checked, setSelected, radioReference]);

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
          checked={checked}
          defaultChecked={defaultChecked}
          data-aria-controls={conditional ? `${inputID}--conditional` : undefined}
          aria-describedby={hint ? `${inputID}--hint` : undefined}
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
