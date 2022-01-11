import classNames from 'classnames';
import React from 'react';
import useFormGroup from '../../util/hooks/UseFormGroup';
import useRadios from '../../util/hooks/UseRadios';
import LabelBlock from '../../util/LabelBlock';
import { FormElementProps, InputType } from '../../util/types/FormTypes';
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
  const { FormGroup, renderProps } = useFormGroup(InputType.RADIOS, props);
  const { resetRadioIds, conditionalRadios, ...radioFuncs } = useRadios(
    renderProps.id,
    renderProps.idPrefix,
  );

  const { inline, className, id, name, children, ...restRenderProps } = renderProps;

  const containsConditional = conditionalRadios.length > 0;
  const contextValue: IRadiosContext = {
    name,
    ...radioFuncs,
  };
  resetRadioIds();

  return (
    <FormGroup error={Boolean(renderProps.error)}>
      <LabelBlock elementId={renderProps.id} {...renderProps} />
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
    </FormGroup>
  );
};

Radios.defaultProps = {
  role: 'radiogroup',
};

Radios.Divider = Divider;
Radios.Radio = Radio;

export default Radios;
