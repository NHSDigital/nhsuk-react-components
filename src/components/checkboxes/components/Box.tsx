import React, { HTMLProps, useContext, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import CheckboxContext, { ICheckboxContext } from '../CheckboxContext';
import Label, { LabelProps } from '../../label/Label';
import Hint, { HintProps } from '../../hint/Hint';

type BoxProps = HTMLProps<HTMLInputElement> & {
  labelProps?: LabelProps;
  hint?: string;
  hintProps?: HintProps;
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalWrapperProps?: HTMLProps<HTMLDivElement>;
  inputRef?: (ref: HTMLInputElement | null) => any;
};

const Box: React.FC<BoxProps> = ({
  id,
  label,
  labelProps,
  children,
  hint,
  hintProps,
  conditional,
  defaultChecked,
  checked,
  onChange,
  forceShowConditional,
  conditionalWrapperProps,
  ...rest
}) => {
  const { getBoxId, name, setConditional, unleaseReference, leaseReference } = useContext<
    ICheckboxContext
  >(CheckboxContext);
  const [boxReference] = useState<string>(leaseReference());
  const [showConditional, setShowConditional] = useState<boolean>(!!(checked || defaultChecked));
  const inputID = id || getBoxId();

  const { className: labelClassName, ...restLabelProps } = labelProps || {};
  const { className: hintClassName, ...restHintProps } = hintProps || {};
  const { className: conditionalClassName, ...restConditionalProps } =
    conditionalWrapperProps || {};

  useEffect(() => () => unleaseReference(boxReference), []);

  useEffect(() => {
    if (checked !== undefined) {
      setShowConditional(checked);
    }
  }, [checked]);

  useEffect(() => {
    setConditional(boxReference, Boolean(conditional));
    return () => setConditional(boxReference, false);
  }, [conditional]);

  return (
    <>
      <div className="nhsuk-checkboxes__item">
        <input
          className="nhsuk-checkboxes__input"
          onChange={e => {
            if (checked === undefined) setShowConditional(e.target.checked);
            if (onChange) onChange(e);
          }}
          name={name}
          id={inputID}
          checked={checked}
          defaultChecked={defaultChecked}
          {...rest}
        />
        {children ? (
          <Label
            className={classNames('nhsuk-checkboxes__label', labelClassName)}
            id={`${inputID}--label`}
            htmlFor={inputID}
            {...restLabelProps}
          >
            {children}
          </Label>
        ) : null}
        {hint ? (
          <Hint className={classNames('nhsuk-checkboxes__hint', hintClassName)} {...restHintProps}>
            {hint}
          </Hint>
        ) : null}
      </div>
      {conditional && (showConditional || forceShowConditional) ? (
        <div
          className={classNames('nhsuk-radios__conditional', conditionalClassName)}
          id={`${inputID}--conditional`}
          {...restConditionalProps}
        >
          {conditional}
        </div>
      ) : null}
    </>
  );
};

Box.defaultProps = {
  type: 'checkbox',
};

export default Box;
