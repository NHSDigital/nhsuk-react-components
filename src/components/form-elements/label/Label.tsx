import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';
import { type NHSUKSize } from '#util/types/NHSUKTypes.js';

export interface LabelProps
  extends ComponentPropsWithoutRef<'label'>, Pick<HeadingLevelProps, 'headingLevel'> {
  isPageHeading?: boolean;
  size?: NHSUKSize;
}

const LabelComponent: FC<Omit<LabelProps, 'isPageHeading'>> = ({ className, size, ...rest }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={classNames('nhsuk-label', { [`nhsuk-label--${size}`]: size }, className)}
    {...rest}
  />
);

export const Label: FC<LabelProps> = (props) => {
  const { children, isPageHeading, headingLevel = 'h1', ...rest } = props;

  if (!children) {
    return null;
  }

  if (isPageHeading || props.headingLevel) {
    return (
      <HeadingLevel className="nhsuk-label-wrapper" headingLevel={headingLevel}>
        <LabelComponent {...rest}>{children}</LabelComponent>
      </HeadingLevel>
    );
  }

  return <LabelComponent {...rest}>{children}</LabelComponent>;
};

Label.displayName = 'Label';
