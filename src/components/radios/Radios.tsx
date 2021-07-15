import { IRadiosContext, RadiosContext } from './RadioContext';
import React, { HTMLProps } from 'react';

import Divider from './components/Divider';
import { FormElementProps } from '../../util/types/FormTypes';
import Radio from './components/Radio';
import classNames from 'classnames';
import useRadios from '../../util/hooks/UseRadios';
import useFormGroup from '../../util/hooks/UseFormGroup';

interface RadiosProps extends Omit<HTMLProps<HTMLDivElement>, "label">, FormElementProps {
  inline?: boolean;
  idPrefix?: string;
}
interface IRadios extends React.FC<RadiosProps> {
  Divider: typeof Divider;
  Radio: typeof Radio;
}

const Radios: IRadios = (props) => {
  const { FormGroupWrapper, LabelBlock, wrapperProps, renderProps } = useFormGroup("radios", props);
  const { resetRadioIds, conditionalRadios, ...radioFuncs } = useRadios(
    renderProps.id,
    renderProps.idPrefix
  );

  const { inline, className, id, name, children, ...restRenderProps } = renderProps;

  const containsConditional = conditionalRadios.length > 0;
  const contextValue: IRadiosContext = {
    name,
    ...radioFuncs
  }
  resetRadioIds();

  return (
    <FormGroupWrapper {...wrapperProps}>
      {LabelBlock}
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
        <RadiosContext.Provider value={contextValue}>
          {children}
        </RadiosContext.Provider>
      </div>
    </FormGroupWrapper>
  );
}

Radios.defaultProps = {
  role: "radiogroup"
}

Radios.Divider = Divider;
Radios.Radio = Radio;

export default Radios;
