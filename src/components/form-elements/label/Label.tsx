import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '@util/types/NHSUKTypes';

export interface LabelProps extends Omit<HTMLProps<HTMLLabelElement>, 'size'> {
  bold?: boolean;
  isPageHeading?: boolean;
  size?: NHSUKSize;
}

const Label: FC<LabelProps> = ({ className, bold, size, isPageHeading, ...rest }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={classNames(
      'nhsuk-label',
      { 'nhsuk-label--s': bold && !size },
      { 'nhsuk-label--xl': isPageHeading && !size },
      { [`nhsuk-label--${size}`]: size },
      className,
    )}
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
        <Label isPageHeading {...rest}>
          {children}
        </Label>
      </h1>
    );
  }
  return <Label {...rest}>{children}</Label>;
};

export default LabelComponent;
