import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { Legend } from '#components/form-elements/legend/index.js';

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

export const Fieldset = Object.assign(FieldsetComponent, {
  Legend,
});
