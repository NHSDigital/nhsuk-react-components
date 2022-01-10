import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';
import { NHSUKSize } from '../../util/types/NHSUKTypes';

interface LegendProps extends Omit<HTMLProps<HTMLLegendElement>, 'size'> {
  isPageHeading?: boolean;
  headingLevel?: HeadingLevelType;
  size?: NHSUKSize;
}

const Legend: React.FC<LegendProps> = ({
  className,
  children,
  isPageHeading,
  headingLevel,
  size,
  ...rest
}) => (
  <legend
    className={classNames(
      'nhsuk-fieldset__legend',
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

Legend.defaultProps = {
  headingLevel: 'h1',
};

interface IFieldset extends React.FC<HTMLProps<HTMLFieldSetElement>> {
  Legend: typeof Legend;
}

const Fieldset: IFieldset = ({ className, ...rest }) => (
  <fieldset className={classNames('nhsuk-fieldset', className)} {...rest} />
);

Fieldset.Legend = Legend;

export default Fieldset;
