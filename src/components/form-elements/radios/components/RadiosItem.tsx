'use client';

import classNames from 'classnames';
import {
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
import { type FormElementProps } from '#util/types/FormTypes.js';

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

  const { name, getRadioId, leaseReference, unleaseReference } =
    useContext<IRadiosContext>(RadiosContext);

  const [radioReference] = useState<string>(leaseReference());
  const inputID = id || getRadioId(radioReference);

  const isChecked =
    // 1. Radio is checked via props
    !!(checked || defaultChecked) ||
    // 2. Radio should be checked (to show conditional)
    forceShowConditional;

  useEffect(() => () => unleaseReference(radioReference));

  return (
    <>
      <div className="nhsuk-radios__item">
        <input
          onChange={(e) => {
            if (onChange) onChange(e);
          }}
          className={classNames('nhsuk-radios__input', className)}
          id={inputID}
          name={name}
          type="radio"
          checked={checked}
          defaultChecked={defaultChecked ?? (checked === undefined ? isChecked : undefined)}
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
            'nhsuk-radios__conditional--hidden': !isChecked,
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
