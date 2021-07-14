import React, { HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import { FormElementProps } from '../../util/types/FormTypes';
import useFormGroup from '../../util/hooks/UseFormGroup';

//  SelectProps = HTMLProps<HTMLSelectElement> & FormElementProps;
interface ISelectProps extends HTMLProps<HTMLSelectElement>, FormElementProps {
  selectRef?: MutableRefObject<HTMLSelectElement | null>;
}

interface ISelect extends React.FC<ISelectProps> {
  Option: React.FC<HTMLProps<HTMLOptionElement>>;
}

const Select: ISelect = (props) => {
  const { FormGroupWrapper, LabelBlock, wrapperProps, renderProps } = useFormGroup<ISelectProps>(
    'select',
    props,
  );
  const { className, error, selectRef, ...rest } = renderProps;

  return (
    <FormGroupWrapper {...wrapperProps}>
      {LabelBlock}
      <select
        className={classNames('nhsuk-select', { 'nhsuk-select--error': error }, className)}
        ref={selectRef}
        {...rest}
      />
    </FormGroupWrapper>
  );
};

const Option: React.FC<HTMLProps<HTMLOptionElement>> = (props) => <option {...props} />;

Select.Option = Option;

export default Select;
