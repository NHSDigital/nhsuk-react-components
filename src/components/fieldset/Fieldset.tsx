import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '../../util/types/NHSUKTypes';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';

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

Legend.defaultProps = {
  headingLevel: 'h1',
};

interface Fieldset extends React.FC<HTMLProps<HTMLFieldSetElement>> {
  Legend: React.FC<LegendProps>;
}

const Fieldset: Fieldset = ({ className, ...rest }) => (
  <fieldset className={classNames('nhsuk-fieldset', className)} {...rest} />
);

Fieldset.Legend = Legend;

export default Fieldset;
