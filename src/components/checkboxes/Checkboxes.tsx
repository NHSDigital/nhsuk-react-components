import classNames from 'classnames';
import React from 'react';
import useCheckboxes from '../../util/hooks/UseCheckboxes';
import useFormGroup from '../../util/hooks/UseFormGroup';
import { FormElementProps, FormGroupConsumer } from '../../util/types/FormTypes';
import CheckboxContext, { ICheckboxContext } from './CheckboxContext';
import Box from './components/Box';

interface CheckboxesProps extends FormElementProps<HTMLDivElement> {
  idPrefix?: string;
}

type CheckboxesChildElements = {
  Box: typeof Box;
};

const Checkboxes: React.FC<CheckboxesProps> & CheckboxesChildElements = (props) => {
  const group = useFormGroup(FormGroupConsumer.CHECKBOXES, props);
  const { conditionalBoxes, resetBoxIds, ...checkboxFuncs } = useCheckboxes(
    group.renderProps.id,
    group.renderProps.idPrefix,
  );

  // "error" prop is pulled out here so it is not passed to the div element
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { className, name, children, error, ...rest } = group.renderProps;

  const containsConditional = conditionalBoxes.length > 0;
  const contextValue: ICheckboxContext = { name, ...checkboxFuncs };

  resetBoxIds();

  return (
    <group.Wrapper {...group.wrapperProps}>
      {group.LabelBlock}
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
    </group.Wrapper>
  );
};

Checkboxes.Box = Box;

export default Checkboxes;
