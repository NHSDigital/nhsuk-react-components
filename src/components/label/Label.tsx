import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  bold?: boolean;
  isPageHeading?: boolean;
}

const BaseLabel: React.FC<LabelProps> = ({ className, bold, isPageHeading, ...rest }) => (
  <label
    className={classNames(
      'nhsuk-label',
      { 'nhsuk-label--s': bold },
      { 'nhsuk-label--xl': isPageHeading },
      className,
    )}
    {...rest}
  ></label>
);

const Label: React.FC<LabelProps> = ({ isPageHeading, ...rest }) => {
  if (isPageHeading) {
    return (
      <h1 className="nhsuk-label-wrapper">
        <BaseLabel isPageHeading {...rest}></BaseLabel>
      </h1>
    );
  }
  return <BaseLabel {...rest}></BaseLabel>;
};

export default Label;
