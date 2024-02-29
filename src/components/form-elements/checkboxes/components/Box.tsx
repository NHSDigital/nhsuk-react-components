import React, {
  HTMLProps,
  useContext,
  ReactNode,
  useEffect,
  useState,
  MutableRefObject,
} from 'react';
import classNames from 'classnames';
import CheckboxContext, { ICheckboxContext } from '../CheckboxContext';
import Label, { LabelProps } from '../../label/Label';
import HintText, { HintTextProps } from '../../hint-text/HintText';

type BoxProps = Omit<HTMLProps<HTMLInputElement>, 'label'> & {
  labelProps?: LabelProps;
  hint?: string;
  hintProps?: HintTextProps;
  conditional?: ReactNode;
  forceShowConditional?: boolean;
  conditionalWrapperProps?: HTMLProps<HTMLDivElement>;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
};

const Box: React.FC<BoxProps> = ({
  id,
  labelProps,
  children,
  hint,
  hintProps,
  conditional,
  defaultChecked,
  checked,
  onChange,
  inputRef,
  forceShowConditional,
  conditionalWrapperProps,
  type = 'checkbox',
  ...rest
}) => {
  const { getBoxId, name, setConditional, unleaseReference, leaseReference } =
    useContext<ICheckboxContext>(CheckboxContext);

  const [boxReference] = useState<string>(leaseReference());
  const [showConditional, setShowConditional] = useState<boolean>(!!(checked || defaultChecked));
  const inputID = id || getBoxId(boxReference);

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
          onChange={(e) => {
            if (checked === undefined) setShowConditional(e.target.checked);
            if (onChange) onChange(e);
          }}
          name={name}
          id={inputID}
          checked={checked}
          defaultChecked={defaultChecked}
          ref={inputRef}
          type={type}
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
          <HintText className={classNames('nhsuk-checkboxes__hint', hintClassName)} {...restHintProps}>
            {hint}
          </HintText>
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

export default Box;
