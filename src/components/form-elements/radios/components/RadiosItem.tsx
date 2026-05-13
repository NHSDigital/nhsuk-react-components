'use client';

import classNames from 'classnames';
import {
  type ChangeEvent,
  type ComponentPropsWithRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react';

import { HintText } from '#components/form-elements/hint-text/index.js';
import { Label } from '#components/form-elements/label/index.js';
import { type ComponentPropsWithDataAttributes, type FormElementProps } from '#util/types/index.js';

import { type IRadiosContext, RadiosContext } from '../RadiosContext.js';

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
    conditionalProps,
    forceShowConditional,
    checked,
    defaultChecked,
    onChange,
    ...rest
  } = props;

  const {
    name,
    getRadioId,
    leaseReference,
    unleaseReference,
    handleChange: ctxHandleChange,
  } = useContext<IRadiosContext>(RadiosContext);

  const [radioReference] = useState<string>(leaseReference());
  const inputID = id || getRadioId(radioReference);

  const { className: labelClassName, ...restLabelProps } = labelProps || {};
  const { className: hintClassName, ...restHintProps } = hintProps || {};
  const { className: conditionalClassName, ...restConditionalProps } = conditionalProps || {};

  const isChecked =
    // 1. Radio is checked via props
    !!(checked || defaultChecked) ||
    // 2. Radio should be checked (to show conditional)
    forceShowConditional;

  useEffect(() => () => unleaseReference(radioReference));

  const inputProps: ComponentPropsWithDataAttributes<'input'> = rest;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }

    ctxHandleChange(e);
  };

  return (
    <>
      <div className="nhsuk-radios__item">
        <input
          className={classNames('nhsuk-radios__input', className)}
          id={inputID}
          name={name}
          type="radio"
          checked={checked}
          defaultChecked={defaultChecked ?? (checked === undefined ? isChecked : undefined)}
          data-aria-controls={conditional ? `${inputID}--conditional` : undefined}
          aria-describedby={hint ? `${inputID}--hint` : undefined}
          onChange={handleChange}
          ref={forwardedRef}
          {...inputProps}
        />
        <Label
          className={classNames('nhsuk-radios__label', labelClassName)}
          id={`${inputID}--label`}
          htmlFor={inputID}
          {...restLabelProps}
        >
          {children}
        </Label>
        <HintText
          className={classNames('nhsuk-radios__hint', hintClassName)}
          id={`${inputID}--hint`}
          {...restHintProps}
        >
          {hint}
        </HintText>
      </div>
      {conditional && (
        <div
          className={classNames(
            'nhsuk-radios__conditional',
            { 'nhsuk-radios__conditional--hidden': !isChecked },
            conditionalClassName,
          )}
          id={`${inputID}--conditional`}
          {...restConditionalProps}
        >
          {conditional}
        </div>
      )}
    </>
  );
});

RadiosItem.displayName = 'Radios.Item';
