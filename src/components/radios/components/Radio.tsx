import classNames from 'classnames';
import React, { HTMLProps, ReactNode, useContext, useEffect, useMemo } from 'react';
import Hint, { HintProps } from '../../hint/Hint';
import Label, { LabelProps } from '../../label/Label';
import { IRadiosContext, RadiosContext } from '../RadioContext';

export interface RadioProps extends HTMLProps<HTMLInputElement> {
  hint?: string;
  hintProps?: HintProps;
  labelProps?: LabelProps;
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalWrapperProps?: HTMLProps<HTMLDivElement>;
  inputRef?: (inputRef: HTMLInputElement | null) => void;
}

const RadiosRadio: React.FC<RadioProps> = ({
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
  ...rest
}) => {
  const {
    name,
    getRadioId,
    setConditional,
    setSelected,
    selectedRadio,
    leaseReference,
    unleaseReference,
  } = useContext<IRadiosContext>(RadiosContext);

  const radioReference = useMemo(leaseReference, []);
  const inputID = id || getRadioId(radioReference);
  const shouldShowConditional = selectedRadio === radioReference && checked !== false;
  const isChecked = typeof checked === 'boolean' ? checked : selectedRadio === radioReference;

  useEffect(() => {
    if (defaultChecked) setSelected(radioReference);
    return () => unleaseReference(radioReference);
  }, []);

  useEffect(() => {
    if (checked) setSelected(radioReference);
    if (checked === false && selectedRadio === radioReference) {
      setSelected(null);
    }
  }, [checked]);

  useEffect(() => {
    setConditional(radioReference, Boolean(conditional));
    return () => setConditional(radioReference, false);
  }, [conditional]);

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
          aria-labelledby={children ? `${inputID}--label` : undefined}
          aria-describedby={hint ? `${inputID}--hint` : undefined}
          checked={isChecked}
          defaultChecked={defaultChecked}
          ref={inputRef}
          {...rest}
        />
        {children ? (
          <Label
            className="nhsuk-radios__label"
            id={`${inputID}--label`}
            htmlFor={inputID}
            {...labelProps}
          >
            {children}
          </Label>
        ) : null}
        {hint ? (
          <Hint className="nhsuk-radios__hint" id={`${inputID}--hint`} {...hintProps}>
            {hint}
          </Hint>
        ) : null}
      </div>
      {conditional && (shouldShowConditional || forceShowConditional) ? (
        <div
          className="nhsuk-radios__conditional"
          id={`${inputID}--conditional`}
          {...conditionalWrapperProps}
        >
          {conditional}
        </div>
      ) : null}
    </>
  );
};

RadiosRadio.displayName = 'Radios.Radio';
RadiosRadio.defaultProps = {
  type: 'radio',
};

export default RadiosRadio;
