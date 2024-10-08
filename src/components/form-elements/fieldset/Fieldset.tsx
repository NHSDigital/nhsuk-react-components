import React, { FC, HTMLProps, MutableRefObject } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '@util/types/NHSUKTypes';
import HeadingLevel, { HeadingLevelType } from '@components/utils/HeadingLevel';
import FormGroup from '@components/utils/FormGroup';

interface LegendProps extends Omit<HTMLProps<HTMLLegendElement>, 'size'> {
  isPageHeading?: boolean;
  headingLevel?: HeadingLevelType;
  size?: NHSUKSize;
}

const Legend: FC<LegendProps> = ({
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

interface FieldsetProps extends HTMLProps<HTMLFieldSetElement> {
  fieldsetRef?: MutableRefObject<HTMLFieldSetElement | null>;
}

const FieldSet = ({ className, fieldsetRef, ...rest }: FieldsetProps) => {
  return (
    <FormGroup enableErrorLine>
      <fieldset className={classNames('nhsuk-fieldset', className)} ref={fieldsetRef} {...rest} />
    </FormGroup>
  );
};

FieldSet.Legend = Legend;

export default FieldSet;
