import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

export interface ReviewDateProps extends ComponentPropsWithoutRef<'div'> {
  lastReviewed?: string;
  nextReview?: string;
}

export const ReviewDate: FC<ReviewDateProps> = ({
  className,
  lastReviewed,
  nextReview,
  ...rest
}) => (
  <p
    className={classNames(
      'nhsuk-body-s nhsuk-u-secondary-text-colour nhsuk-u-margin-top-7',
      className,
    )}
    {...rest}
  >
    {lastReviewed ? `Page last reviewed: ${lastReviewed}` : null}
    {lastReviewed && nextReview ? <br /> : null}
    {nextReview ? `Next review due: ${nextReview}` : null}
  </p>
);
