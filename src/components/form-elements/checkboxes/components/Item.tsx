'use client';

import React, {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ReactNode,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import classNames from 'classnames';
import { FormElementProps } from '@util/types/FormTypes';
import CheckboxContext, { ICheckboxContext } from '../CheckboxContext';
import Label from '../../label/Label';
import HintText from '../../hint-text/HintText';
import { HTMLAttributesWithData } from '@util/types/NHSUKTypes';

export interface CheckboxesItemProps
  extends ComponentPropsWithoutRef<'input'>,
    Pick<FormElementProps, 'hint' | 'hintProps' | 'labelProps'> {
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalProps?: ComponentPropsWithRef<'div'>;
  exclusive?: boolean;
}

const CheckboxesItem = forwardRef<HTMLInputElement, CheckboxesItemProps>((props, forwardedRef) => {
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
    exclusive = false,
    ...rest
  } = props;

  const { getBoxId, name, leaseReference, unleaseReference } =
    useContext<ICheckboxContext>(CheckboxContext);

  const [boxReference] = useState<string>(leaseReference());
  const inputID = id || getBoxId(boxReference);
  const shouldShowConditional = !!(checked || defaultChecked);

  const { className: labelClassName, ...restLabelProps } = labelProps || {};
  const { className: hintClassName, ...restHintProps } = hintProps || {};
  const { className: conditionalClassName, ...restConditionalProps } = conditionalProps || {};

  useEffect(() => () => unleaseReference(boxReference), []);

  const inputProps: HTMLAttributesWithData<HTMLInputElement> = rest;

  if (exclusive) {
    inputProps['data-checkbox-exclusive'] = true;
  }

  return (
    <>
      <div className="nhsuk-checkboxes__item">
        <input
          className="nhsuk-checkboxes__input"
          id={inputID}
          name={name}
          type="checkbox"
          aria-controls={conditional ? `${inputID}--conditional` : undefined}
          aria-describedby={hint ? `${inputID}--hint` : undefined}
          data-checkbox-exclusive-group={name}
          checked={checked}
          defaultChecked={defaultChecked}
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
});

CheckboxesItem.displayName = 'Checkboxes.Item';

export default CheckboxesItem;
