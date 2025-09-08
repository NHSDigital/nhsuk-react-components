import React from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '@util/types/NHSUKTypes';
import HeadingLevel, { HeadingLevelType } from '@components/utils/HeadingLevel';
import FormGroup from '@components/utils/FormGroup';

import type * as ReactTypes from 'react';
export type MutableRefObject<T> = ReactTypes.RefObject<T>;

interface LegendProps extends Omit<React.HTMLProps<HTMLLegendElement>, 'size'> {
  isPageHeading?: boolean;
  headingLevel?: HeadingLevelType;
  size?: NHSUKSize;
}

const Legend: React.FC<LegendProps> = ({
  className,
  children,
  isPageHeading,
  headingLevel = 'h1',
  size,
  ...rest
}) => (
  <legend
    className={classNames(
      'nhsuk-fieldset__legend',
      {
        'nhsuk-fieldset__legend--xl': isPageHeading && !size,
      },
      { [`nhsuk-fieldset__legend--${size}`]: size },
      className,
    )}
    {...rest}
  >
    {isPageHeading ? (
      <HeadingLevel className="nhsuk-fieldset__heading" headingLevel={headingLevel}>
        {children}
      </HeadingLevel>
    ) : (
      children
    )}
  </legend>
);

interface FieldsetProps extends React.HTMLProps<HTMLFieldSetElement> {
  fieldsetRef?: MutableRefObject<HTMLFieldSetElement | null>;
  disableErrorLine?: boolean;
}

const FieldSet = ({ className, fieldsetRef, disableErrorLine, ...rest }: FieldsetProps) => {
  return (
    <FormGroup enableErrorLine={!disableErrorLine}>
      <fieldset className={classNames('nhsuk-fieldset', className)} ref={fieldsetRef} {...rest} />
    </FormGroup>
  );
};

FieldSet.Legend = Legend;

export default FieldSet;
