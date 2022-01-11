import classNames from 'classnames';
import React from 'react';
import useCheckboxes from '../../util/hooks/UseCheckboxes';
import useFormGroup from '../../util/hooks/UseFormGroup';
import LabelBlock from '../../util/LabelBlock';
import { FormElementProps, InputType } from '../../util/types/FormTypes';
import CheckboxContext, { ICheckboxContext } from './CheckboxContext';
import Box from './components/Box';

interface CheckboxesProps extends FormElementProps<HTMLDivElement> {
  idPrefix?: string;
}

type CheckboxesChildElements = {
  Box: typeof Box;
};

const Checkboxes: React.FC<CheckboxesProps> & CheckboxesChildElements = (props) => {
  const { FormGroup, renderProps } = useFormGroup(InputType.CHECKBOXES, props);
  const { conditionalBoxes, ...checkboxFuncs } = useCheckboxes(
    renderProps.id,
    renderProps.idPrefix,
  );

  const containsConditional = conditionalBoxes.length > 0;
  const contextValue: ICheckboxContext = { name: renderProps.name, ...checkboxFuncs };

  const { className, children, ...rest } = renderProps;

  return (
    <FormGroup>
      <LabelBlock elementId={renderProps.id} {...renderProps} />
      <div
        className={classNames(
          'nhsuk-checkboxes',
          { 'nhsuk-checkboxes--conditional': containsConditional },
          className,
        )}
        {...rest}
      >
        <CheckboxContext.Provider value={contextValue}>{children}</CheckboxContext.Provider>
      </div>
    </FormGroup>
  );
};

Checkboxes.Box = Box;

export default Checkboxes;
