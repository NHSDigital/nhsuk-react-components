import classNames from 'classnames';
import React from 'react';
import useFormGroup from '../../util/hooks/UseFormGroup';
import useRadios from '../../util/hooks/UseRadios';
import { FormElementProps, FormGroupConsumer } from '../../util/types/FormTypes';
import Divider from './components/Divider';
import Radio from './components/Radio';
import { IRadiosContext, RadiosContext } from './RadioContext';

interface RadiosProps extends FormElementProps<HTMLDivElement> {
  inline?: boolean;
  idPrefix?: string;
}

interface RadiosChildComponents {
  Divider: typeof Divider;
  Radio: typeof Radio;
}

const Radios: React.FC<RadiosProps> & RadiosChildComponents = (props) => {
  const group = useFormGroup(FormGroupConsumer.RADIOS, props);
  const { resetRadioIds, conditionalRadios, ...radioFuncs } = useRadios(
    group.renderProps.id,
    group.renderProps.idPrefix,
  );

  const { inline, className, id, name, children, ...restRenderProps } = group.renderProps;

  const containsConditional = conditionalRadios.length > 0;
  const contextValue: IRadiosContext = {
    name,
    ...radioFuncs,
  };
  resetRadioIds();

  return (
    <group.Wrapper {...group.wrapperProps}>
      {group.labelBlock}
      <div
        className={classNames(
          'nhsuk-radios',
          { 'nhsuk-radios--inline': inline },
          { 'nhsuk-radios--conditional': containsConditional },
          className,
        )}
        id={id}
        {...restRenderProps}
      >
        <RadiosContext.Provider value={contextValue}>{children}</RadiosContext.Provider>
      </div>
    </group.Wrapper>
  );
};

Radios.defaultProps = {
  role: 'radiogroup',
};

Radios.Divider = Divider;
Radios.Radio = Radio;

export default Radios;
