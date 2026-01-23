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

import { CheckboxesContext, type ICheckboxesContext } from '../CheckboxesContext.js';

import { HintText } from '#components/form-elements/hint-text/index.js';
import { Label } from '#components/form-elements/label/index.js';
import { type ComponentPropsWithDataAttributes, type FormElementProps } from '#util/types/index.js';

export interface CheckboxesItemElementProps extends ComponentPropsWithoutRef<'input'> {
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalProps?: ComponentPropsWithRef<'div'>;
  exclusive?: true;
  exclusiveGroup?: string;
}

export type CheckboxesItemProps = CheckboxesItemElementProps &
  Omit<FormElementProps, 'fieldsetProps' | 'label' | 'legend' | 'legendProps'>;

export const CheckboxesItem = forwardRef<HTMLInputElement, CheckboxesItemProps>(
  (props, forwardedRef) => {
    const {
      id,
      labelProps,
      children,
      hint,
      hintProps,
      conditional,
      defaultChecked,
      checked,
      forceShowConditional,
      conditionalProps,
      exclusive,
      exclusiveGroup,
      ...rest
    } = props;

    const { getBoxId, name, leaseReference, unleaseReference } =
      useContext<ICheckboxesContext>(CheckboxesContext);

    const [checkboxReference] = useState<string>(leaseReference());
    const inputID = id || getBoxId(checkboxReference);
    const shouldShowConditional = !!(checked || defaultChecked);

    const { className: labelClassName, ...restLabelProps } = labelProps || {};
    const { className: hintClassName, ...restHintProps } = hintProps || {};
    const { className: conditionalClassName, ...restConditionalProps } = conditionalProps || {};

    useEffect(() => () => unleaseReference(checkboxReference));

    const inputProps: ComponentPropsWithDataAttributes<'input'> = rest;

    return (
      <>
        <div className="nhsuk-checkboxes__item">
          <input
            className="nhsuk-checkboxes__input"
            id={inputID}
            name={name}
            type="checkbox"
            checked={checked}
            defaultChecked={defaultChecked}
            data-checkbox-exclusive={exclusive}
            data-checkbox-exclusive-group={exclusiveGroup}
            data-aria-controls={conditional ? `${inputID}--conditional` : undefined}
            aria-describedby={hint ? `${inputID}--hint` : undefined}
            ref={forwardedRef}
            {...inputProps}
          />
          <Label
            className={classNames('nhsuk-checkboxes__label', labelClassName)}
            id={`${inputID}--label`}
            htmlFor={inputID}
            {...restLabelProps}
          >
            {children}
          </Label>
          <HintText
            className={classNames('nhsuk-checkboxes__hint', hintClassName)}
            id={`${inputID}--hint`}
            {...restHintProps}
          >
            {hint}
          </HintText>
        </div>
        {conditional && (
          <div
            className={classNames(
              'nhsuk-checkboxes__conditional',
              {
                'nhsuk-checkboxes__conditional--hidden': !(
                  shouldShowConditional || forceShowConditional
                ),
              },
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
  },
);

CheckboxesItem.displayName = 'Checkboxes.Item';
