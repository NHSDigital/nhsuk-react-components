import React, { HTMLProps, useState, useContext, ReactNode, Ref, useEffect } from 'react';
import classNames from 'classnames';
import Label from '../label';
import Hint from '../hint';
import CheckboxContext, { ICheckboxContext } from './CheckboxContext';

export interface BoxProps extends HTMLProps<HTMLInputElement> {
  hint?: string;
  inputRef?: Ref<HTMLInputElement>;
  conditional?: ReactNode;
}

const Box: React.FC<BoxProps> = ({
  className,
  children,
  id,
  hint,
  conditional,
  checked,
  onClick,
  name,
  inputRef,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(Boolean(checked));
  const [boxId, setBoxId] = useState<string | undefined>(undefined);
  const context = useContext<ICheckboxContext>(CheckboxContext);

  useEffect(() => {
    if (typeof checked !== 'undefined' && checked !== isChecked) {
      setIsChecked(checked);
    }
  }, [checked, isChecked]);

  useEffect(() => {
    if (id) {
      setBoxId(id);
    } else if (context.isCheckbox) {
      setBoxId(context.getBoxId());
    }
  }, [id]);

  const onBoxChange = () => {
    if (typeof checked === 'undefined') {
      setIsChecked(!isChecked);
    }
  };

  return (
    <div className={classNames('nhsuk-checkboxes__item', className)}>
      <input
        className="nhsuk-checkboxes__input"
        {...rest}
        id={boxId}
        ref={inputRef}
        name={context.isCheckbox ? name || context.name : name}
        checked={Boolean(isChecked || checked)}
        onChange={onBoxChange}
      />
      <Label
        className="nhsuk-checkboxes__label"
        id={id ? `${boxId}--label` : undefined}
        htmlFor={boxId}
      >
        {children}
      </Label>
      {hint ? (
        <Hint className="nhsuk-checkboxes__hint" id={id ? `${id}--hint` : undefined}>
          {hint}
        </Hint>
      ) : null}
      {conditional && isChecked ? (
        <div
          className={classNames('nhsuk-checkboxes__conditional', {
            'nhsuk-checkboxes__conditional--hidden': !isChecked,
          })}
        >
          {conditional}
        </div>
      ) : null}
    </div>
  );
};

Box.defaultProps = {
  type: 'checkbox',
};

export default Box;
