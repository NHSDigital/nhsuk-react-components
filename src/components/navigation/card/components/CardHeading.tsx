'use client';
import React, { FC, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '@components/utils/HeadingLevel';
import CardContext from '../CardContext';
import { CareCardType } from '../../../../util/types/NHSUKTypes';
import { cardTypeIsCareCard } from '@util/types/TypeGuards';

export interface CardHeadingProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
}

const genHiddenText = (cardType: CareCardType): string => {
  switch (cardType) {
    case 'emergency':
      return 'Immediate action required: ';
    case 'urgent':
      return 'Urgent advice: ';
    default:
      return 'Non-urgent advice: ';
  }
};

const CareHeading: FC<CardHeadingProps & { careType: CareCardType }> = ({
  className,
  children,
  careType,
  headingLevel = 'h2',
  role = 'text',
  ...rest
}) => {
  return (
    <div className="nhsuk-card--care__heading-container">
      <HeadingLevel
        className={classNames('nhsuk-card--care__heading', className)}
        headingLevel={headingLevel}
        {...rest}
      >
        <span role={role}>
          <span className="nhsuk-u-visually-hidden">{genHiddenText(careType)}</span>
          {children}
        </span>
      </HeadingLevel>
      <span className="nhsuk-card--care__arrow" aria-hidden="true"></span>
    </div>
  );
};

const CardHeading: FC<CardHeadingProps> = (props) => {
  const { cardType } = useContext(CardContext);

  if (cardTypeIsCareCard(cardType)) {
    return <CareHeading {...props} careType={cardType} />;
  }

  const { className, headingLevel = 'h2', ...rest } = props;

  return (
    <HeadingLevel
      className={classNames(
        'nhsuk-card__heading',
        { 'nhsuk-card__heading--feature': cardType === 'feature' },
        className,
      )}
      headingLevel={headingLevel}
      {...rest}
    />
  );
};

export default CardHeading;
