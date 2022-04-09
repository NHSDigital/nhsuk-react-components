import classNames from 'classnames';
import React, { HTMLProps, useContext } from 'react';
import { NHSUKSize } from '../../util/types/NHSUKTypes';
import FormGroupContext from '../form-group/FormGroupContext';

interface LabelProps extends Omit<HTMLProps<HTMLLabelElement>, 'size'> {
  bold?: boolean;
  isPageHeading?: boolean;
  size?: NHSUKSize;
}

const BaseLabel: React.FC<LabelProps> = ({ id, className, bold, size, isPageHeading, ...rest }) => {
  const { inputID, getLabelID } = useContext(FormGroupContext);
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      id={getLabelID(id)}
      htmlFor={inputID}
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
};

const Label: React.FC<LabelProps> = ({ isPageHeading, ...rest }) => {
  if (isPageHeading) {
    return (
      <h1 className="nhsuk-label-wrapper">
        <BaseLabel isPageHeading {...rest} />
      </h1>
    );
  }
  return <BaseLabel {...rest} />;
};

export default Label;
