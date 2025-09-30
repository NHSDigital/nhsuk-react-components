import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '@util/types/NHSUKTypes';
import HeadingLevel, { HeadingLevelProps } from '@components/utils/HeadingLevel';

export interface LegendProps
  extends ComponentPropsWithoutRef<'legend'>,
    Pick<HeadingLevelProps, 'headingLevel'> {
  isPageHeading?: boolean;
  size?: NHSUKSize;
}

const LegendComponent: FC<LegendProps> = ({
  className,
  children,
  isPageHeading,
  headingLevel = 'h1',
  size,
  ...rest
}) => {
  if (!children) {
    return null;
  }

  return (
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
};

LegendComponent.displayName = 'Fieldset.Legend';

export default LegendComponent;
