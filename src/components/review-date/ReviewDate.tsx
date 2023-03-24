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
}) => {
  useDevWarning(NHSUKFrontendV5UpgradeWarnings.ReviewDateMovedToPattern);
  return (
    <div className={classNames('nhsuk-review-date', className)} {...rest}>
      <p className="nhsuk-body-s">
        {lastReviewed ? `Page last reviewed: ${lastReviewed}` : null}
        {lastReviewed && nextReview ? <br /> : null}
        {nextReview ? `Next review due: ${nextReview}` : null}
      </p>
    </div>
  );
};

export default ReviewDate;
