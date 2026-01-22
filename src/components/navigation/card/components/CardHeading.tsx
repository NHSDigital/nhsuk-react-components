'use client';

import classNames from 'classnames';
import { forwardRef, useContext } from 'react';

import { CardContext } from '../CardContext.js';

import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';
import { type CareCardType } from '#util/types/index.js';

const genHiddenText = (cardType?: CareCardType) => {
  if (!cardType) {
    return;
  }

  switch (cardType) {
    case 'emergency':
      return 'Immediate action required';
    case 'urgent':
      return 'Urgent advice';
    default:
      return 'Non-urgent advice';
  }
};

export const CardHeadingContainer = forwardRef<HTMLDivElement, HeadingLevelProps>(
  (props, forwardedRef) => {
    const { children, ...rest } = props;
    const { cardType } = useContext(CardContext);

    return (
      <div className="nhsuk-card__heading-container" ref={forwardedRef} {...rest}>
        {children}
        {cardType ? <span className="nhsuk-card--care__arrow" aria-hidden="true"></span> : null}
      </div>
    );
  },
);

export const CardHeading = forwardRef<HTMLHeadingElement, HeadingLevelProps>(
  (props, forwardedRef) => {
    const { children, className, headingLevel, visuallyHiddenText, ...rest } = props;
    const { cardType } = useContext(CardContext);

    return (
      <HeadingLevel
        className={classNames('nhsuk-card__heading', className)}
        headingLevel={headingLevel ?? 'h2'}
        visuallyHiddenText={visuallyHiddenText ?? genHiddenText(cardType)}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </HeadingLevel>
    );
  },
);

CardHeading.displayName = 'Card.Heading';
CardHeadingContainer.displayName = 'Card.HeadingContainer';
