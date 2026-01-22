'use client';

import classNames from 'classnames';
import { forwardRef, useContext } from 'react';

import { CardContext } from '../CardContext.js';

import { HeadingLevel } from '#components/utils/HeadingLevel.js';
import { type HeadingLevelProps } from '#components/utils/HeadingLevel.js';
import { cardTypeIsCareCard, type CareCardType } from '#util/types/index.js';

const genHiddenText = (cardType?: CareCardType) => {
  switch (cardType) {
    case 'emergency':
      return 'Immediate action required';
    case 'urgent':
      return 'Urgent advice';
    default:
      return 'Non-urgent advice';
  }
};

const CareHeading = forwardRef<HTMLHeadingElement, HeadingLevelProps & { careType: CareCardType }>(
  ({ children, className, careType, ...rest }, forwardedRef) => (
    <div className="nhsuk-card__heading-container">
      <HeadingLevel
        className={classNames('nhsuk-card__heading', className)}
        headingLevel="h2"
        visuallyHiddenText={genHiddenText(careType)}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </HeadingLevel>
      <span className="nhsuk-card--care__arrow" aria-hidden="true"></span>
    </div>
  ),
);

export const CardHeading = forwardRef<HTMLHeadingElement, HeadingLevelProps>(
  (props, forwardedRef) => {
    const { cardType } = useContext(CardContext);

    if (cardTypeIsCareCard(cardType)) {
      return <CareHeading {...props} careType={cardType} />;
    }

    const { className, ...rest } = props;

    return (
      <HeadingLevel
        className={classNames('nhsuk-card__heading', className)}
        headingLevel="h2"
        ref={forwardedRef}
        {...rest}
      />
    );
  },
);

CareHeading.displayName = 'Card.CareHeading';
CardHeading.displayName = 'Card.Heading';
