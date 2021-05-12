import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import CheckboxContext, { ICheckboxContext } from './CheckboxContext';
import { FormElementProps } from '../../util/types/FormTypes';
import useCheckboxes from '../../util/hooks/UseCheckboxes';
import useFormGroup from '../../util/hooks/UseFormGroup';
import Box from './components/Box';

interface CheckboxesProps extends HTMLProps<HTMLDivElement>, FormElementProps {
  idPrefix?: string;
}

interface ICheckboxes extends React.FC<CheckboxesProps> {
  Box: typeof Box;
}

const Checkboxes: ICheckboxes = (props) => {
  const { FormGroupWrapper, LabelBlock, wrapperProps, renderProps } = useFormGroup(
    'checkboxes',
    props,
  );
  const { conditionalBoxes, resetBoxIds, ...checkboxFuncs } = useCheckboxes(
    renderProps.id,
    renderProps.idPrefix,
  );
  const { className, name, id, children, ...rest } = renderProps;

  const containsConditional = conditionalBoxes.length > 0;
  const contextValue: ICheckboxContext = {
    name,
    ...checkboxFuncs,
  };
  resetBoxIds();

  return (
    <FormGroupWrapper {...wrapperProps}>
      {LabelBlock}
      <div
        className={classNames(
          'nhsuk-checkboxes',
          { 'nhsuk-checkboxes--conditional': containsConditional },
          className,
        )}
        id={id}
        {...rest}
      >
        <CheckboxContext.Provider value={contextValue}>{children}</CheckboxContext.Provider>
      </div>
    </FormGroupWrapper>
  );
};
Checkboxes.Box = Box;

export default Checkboxes;
