import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';
import { type NHSUKSize } from '#util/types/NHSUKTypes.js';

export interface LegendProps
  extends ComponentPropsWithoutRef<'legend'>, Pick<HeadingLevelProps, 'headingLevel'> {
  isPageHeading?: boolean;
  size?: Exclude<NHSUKSize, 'xxs' | 'xs'>;
}

export const Legend: FC<LegendProps> = (props) => {
  const { className, children, isPageHeading, headingLevel = 'h1', size, ...rest } = props;

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
      {isPageHeading || props.headingLevel ? (
        <HeadingLevel className="nhsuk-fieldset__heading" headingLevel={headingLevel}>
          {children}
        </HeadingLevel>
      ) : (
        children
      )}
    </legend>
  );
};

Legend.displayName = 'Legend';
