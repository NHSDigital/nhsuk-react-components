import React, { HTMLProps, MutableRefObject, useContext, useEffect } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import FormGroup from '../../util/FormGroup';
import { FormGroupContext } from '../formgroup/FormGroupContext';

//  SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;
interface ISelectProps extends HTMLProps<HTMLSelectElement>, FormElementProps {
  selectRef?: MutableRefObject<HTMLSelectElement | null>;
}

interface ISelect extends React.FC<ISelectProps> {
  Option: React.FC<HTMLProps<HTMLOptionElement>>;
}

const Select: ISelect = (props) => {
  const { isInFormGroup, setInputID } = useContext(FormGroupContext);
  useEffect(() => {
    if (isInFormGroup && props.id) {
      setInputID(props.id);
      return () => {
        setInputID(undefined);
      };
    }
    return () => {};
  }, [isInFormGroup, props.id]);
  const { width, children, className, error, hint, label, ...rest } = props;

  if (isInFormGroup) {
    return (
      <select
        className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
        {...rest}
      >
        {children}
      </select>
    );
  }
  return (
    <FormGroup<ISelectProps> inputType="select" {...rest}>
      {({ selectRef, ...restRenderProps }) => (
        <select
          className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
          ref={selectRef}
          {...restRenderProps}
        >
          {children}
        </select>
      )}
    </FormGroup>
  );
};

const Option: React.FC<HTMLProps<HTMLOptionElement>> = ({ className, ...rest }) => (
  <option {...rest} />
);

Select.Option = Option;

export default Select;
