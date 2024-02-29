'use client';
import React, { FC, HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '@util/HeadingLevel';
import CardContext from '../CardContext';
import { CareCardType } from '../../../../util/types/NHSUKTypes';
import { cardTypeIsCareCard } from '@util/types/TypeGuards';

interface CardHeadingProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
  visuallyHiddenText?: false | string;
}

const genHiddenText = (cardType: CareCardType): string => {
  switch (cardType) {
    case 'non-urgent':
      return 'Non-urgent advice: ';
    case 'urgent':
      return 'Urgent advice: ';
    case 'emergency':
      return 'Immediate action required: ';
    default:
      return '';
  }
};

const CareHeading: FC<CardHeadingProps & { careType: CareCardType }> = ({
  className,
  children,
  visuallyHiddenText,
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
          {visuallyHiddenText !== false ? (
            <span className="nhsuk-u-visually-hidden">
              {visuallyHiddenText || genHiddenText(careType)}
            </span>
          ) : null}
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
