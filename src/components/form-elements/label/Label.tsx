import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

import { Heading, type HeadingProps } from '#components/typography/Heading.js';
import { type NHSUKSize } from '#util/types/NHSUKTypes.js';

export interface LabelComponentProps extends ComponentPropsWithoutRef<'label'> {
  size?: Exclude<NHSUKSize, 'xxs' | 'xs'>;
}

const LabelComponent: FC<LabelComponentProps> = ({ className, size, ...rest }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label
    className={classNames('nhsuk-label', { [`nhsuk-label--${size}`]: size }, className)}
    {...rest}
  />
);

export interface LabelProps
  extends ComponentPropsWithoutRef<'label'>, Pick<HeadingProps, 'headingLevel'> {
  isPageHeading?: boolean;
  size?: Exclude<NHSUKSize, 'xxs' | 'xs'>;
}

export const Label: FC<LabelProps> = (props) => {
  const { children, isPageHeading, headingLevel = 'h1', ...rest } = props;

  if (!children) {
    return null;
  }

  if (isPageHeading || props.headingLevel) {
    return (
      <Heading className="nhsuk-label-wrapper" headingLevel={headingLevel}>
        <LabelComponent {...rest}>{children}</LabelComponent>
      </Heading>
    );
  }

  return <LabelComponent {...rest}>{children}</LabelComponent>;
};

Label.displayName = 'Label';
