import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';

interface LegendProps extends HTMLProps<HTMLLegendElement> {
  isPageHeading?: boolean;
  headingLevel?: HeadingLevelType;
}

const Legend: React.FC<LegendProps> = ({ className, children, isPageHeading, headingLevel }) => (
  <legend
    className={classNames(
      'nhsuk-fieldset__legend',
      {
        'nhsuk-fieldset__legend--xl': isPageHeading,
      },
      className,
    )}
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
  <fieldset className={classNames('nhsuk-fieldset', className)} {...rest}></fieldset>
);

Fieldset.Legend = Legend;

export default Fieldset;
