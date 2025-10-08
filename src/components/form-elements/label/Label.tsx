import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { type NHSUKSize } from '#util/types/NHSUKTypes.js';

export interface LabelProps extends ComponentPropsWithoutRef<'label'> {
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

export const Label: FC<LabelProps> = ({ isPageHeading, children, ...rest }) => {
  if (!children) {
    return null;
  }

  if (isPageHeading) {
    return (
      <h1 className="nhsuk-label-wrapper">
        <LabelComponent {...rest}>{children}</LabelComponent>
      </h1>
    );
  }

  return <LabelComponent {...rest}>{children}</LabelComponent>;
};

Label.displayName = 'Label';
