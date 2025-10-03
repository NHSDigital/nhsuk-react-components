import classNames from 'classnames';
import React, { type ComponentPropsWithoutRef, type FC } from 'react';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils';
import { type NHSUKSize } from '#util/types';

export interface LegendProps
  extends ComponentPropsWithoutRef<'legend'>,
    Pick<HeadingLevelProps, 'headingLevel'> {
  isPageHeading?: boolean;
  size?: NHSUKSize;
}

export const Legend: FC<LegendProps> = ({
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

Legend.displayName = 'Fieldset.Legend';
