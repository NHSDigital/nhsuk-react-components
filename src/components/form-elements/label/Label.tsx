import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '@util/types/NHSUKTypes';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
  isPageHeading?: boolean;
  size?: NHSUKSize;
}

const Label: FC<Omit<LabelProps, 'isPageHeading'>> = ({ className, size, ...rest }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={classNames('nhsuk-label', { [`nhsuk-label--${size}`]: size }, className)}
    {...rest}
  />
);

const LabelComponent: FC<LabelProps> = ({ isPageHeading, children, ...rest }) => {
  if (!children) {
    return null;
  }

  if (isPageHeading) {
    return (
      <h1 className="nhsuk-label-wrapper">
        <Label {...rest}>{children}</Label>
      </h1>
    );
  }

  return <Label {...rest}>{children}</Label>;
};

LabelComponent.displayName = 'Label';

export default LabelComponent;
