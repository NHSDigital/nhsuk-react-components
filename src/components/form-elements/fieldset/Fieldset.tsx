import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import Legend from '../legend/Legend';

export type FieldsetProps = HTMLProps<HTMLFieldSetElement>;

const FieldsetComponent = ({ children, className, ...rest }: FieldsetProps) => {
  if (!children) {
    return null;
  }

  return (
    <fieldset className={classNames('nhsuk-fieldset', className)} {...rest}>
      {children}
    </fieldset>
  );
};

FieldsetComponent.displayName = 'Fieldset';

FieldsetComponent.Legend = Legend;

export default FieldsetComponent;
