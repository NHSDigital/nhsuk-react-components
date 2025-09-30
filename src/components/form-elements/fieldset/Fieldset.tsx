import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import Legend from '../legend/Legend';

export type FieldsetProps = ComponentPropsWithoutRef<'fieldset'>;

const FieldsetComponent: FC<FieldsetProps> = ({ children, className, ...rest }) => {
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

export default Object.assign(FieldsetComponent, {
  Legend,
});
