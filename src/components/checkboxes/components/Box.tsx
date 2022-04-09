import classNames from 'classnames';
import React, { ComponentProps, HTMLProps, ReactNode, useEffect, useState } from 'react';
import LabelBlock from '../../../util/LabelBlock';
import Hint from '../../hint';
import Label from '../../label';
import { useCheckboxContext } from '../CheckboxContext';

type CheckboxesBoxProps = Omit<HTMLProps<HTMLInputElement>, 'label'> & {
  labelProps?: ComponentProps<typeof Label>;
  hint?: ReactNode;
  hintProps?: ComponentProps<typeof Hint>;
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalWrapperProps?: HTMLProps<HTMLDivElement>;
};

const CheckboxesBox: React.FC<CheckboxesBoxProps> = React.forwardRef((props, ref) => {
  const boxCtx = useCheckboxContext();
  const [boxReference] = useState<string>(() => boxCtx.leaseReference());
  const [showConditional, setShowConditional] = useState(!!(props.checked || props.defaultChecked));

  const inputID = props.id || boxCtx.getBoxId(boxReference);

  useEffect(() => () => boxCtx.unleaseReference(boxReference), []);

  useEffect(() => {
    if (props.checked !== undefined) setShowConditional(props.checked);
  }, [props.checked]);

  useEffect(() => {
    boxCtx.setConditional(boxReference, Boolean(props.conditional));
    return () => boxCtx.setConditional(boxReference, false);
  }, [props.conditional]);

  const { children, ...inputProps } = props;

  return (
    <>
      <div className="nhsuk-checkboxes__item">
        <input
          {...inputProps}
          className={classNames('nhsuk-checkboxes__input', props.className)}
          onChange={(e) => {
            if (props.checked === undefined) setShowConditional(e.target.checked);
            if (props.onChange) props.onChange(e);
          }}
          id={inputID}
          ref={ref}
          name={inputProps.name || boxCtx.name}
        />
        <LabelBlock
          elementId={inputID}
          label={children}
          labelProps={{
            ...props.labelProps,
            className: classNames('nhsuk-checkboxes__label', props.labelProps?.className),
          }}
          hint={props.hint}
          hintProps={{
            ...props.hintProps,
            className: classNames('nhsuk-checkboxes__hint', props.hintProps?.className),
          }}
        />
      </div>
      {props.conditional && (showConditional || props.forceShowConditional) ? (
        <div
          {...props.conditionalWrapperProps}
          className={classNames(
            'nhsuk-radios__conditional',
            props.conditionalWrapperProps?.className,
          )}
          id={`${inputID}--conditional`}
        >
          {props.conditional}
        </div>
      ) : null}
    </>
  );
});

CheckboxesBox.displayName = 'Checkboxes.Box';
CheckboxesBox.defaultProps = {
  type: 'checkbox',
};

export default CheckboxesBox;
