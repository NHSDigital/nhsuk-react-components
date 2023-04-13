import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import useDevWarning from '../../util/hooks/UseDevWarning';
import { NHSUKFrontendV5UpgradeWarnings } from '../../deprecated/warnings';

interface ReviewDateProps extends HTMLProps<HTMLDivElement> {
  lastReviewed?: string;
  nextReview?: string;
}

const ReviewDate: React.FC<ReviewDateProps> = ({
  className,
  lastReviewed,
  nextReview,
  ...rest
}) => (
  <p
    className={classNames(
      'nhsuk-body-s nhsuk-u-secondary-text-color nhsuk-u-margin-top-7',
      className,
    )}
    {...rest}
  >
    {lastReviewed ? `Page last reviewed: ${lastReviewed}` : null}
    {lastReviewed && nextReview ? <br /> : null}
    {nextReview ? `Next review due: ${nextReview}` : null}
  </p>
);

export default ReviewDate;
