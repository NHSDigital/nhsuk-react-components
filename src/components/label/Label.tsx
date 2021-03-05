import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '../../util/types/NHSUKTypes';
import FormGroupContext from '../formgroup/FormGroupContext';

export interface LabelProps extends Omit<HTMLProps<HTMLLabelElement>, 'size'> {
  bold?: boolean;
  isPageHeading?: boolean;
  size?: NHSUKSize;
}

const BaseLabel: React.FC<LabelProps> = props => {
  const { id, className, bold, size, isPageHeading, ...rest } = props;
  const { inputID } = useContext(FormGroupContext);
  const labelId = props.id || `${inputID}--label` || undefined;

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      id={labelId}
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
