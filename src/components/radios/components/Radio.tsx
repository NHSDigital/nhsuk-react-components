import classNames from 'classnames';
import React, { HTMLProps, ReactNode, useMemo } from 'react';
import { useFormChild } from '../../../util/hooks/UseFormChildren';
import Hint from '../../hint';
import Label from '../../label';

interface IRadioProps extends HTMLProps<HTMLInputElement> {
  hint?: ReactNode;
}

const RadioItem = React.forwardRef<HTMLInputElement, IRadioProps>((props, ref) => {
  const { register, getData } = useFormChild();

  const reference = useMemo(() => register(props), [props]);
  const data = getData(reference);

  const { className, hint, children, ...rest } = props;

  return (
    <div className="nhsuk-radios__item">
      <input
        className={classNames('nhsuk-radios__input', className)}
        type="radio"
        id={data.id}
        name={data.name}
        aria-describedby={hint !== undefined ? `${data.id}--hint` : undefined}
        {...rest}
        ref={ref}
      />
      <Label className="nhsuk-radios__label" htmlFor={data.id}>
        {children}
      </Label>
      {hint !== undefined && (
        <Hint className="nhsuk-radios__hint" id={`${data.id}--hint`}>
          {hint}
        </Hint>
      )}
    </div>
  );
});
RadioItem.displayName = 'Radios.Radio';

export default RadioItem;
