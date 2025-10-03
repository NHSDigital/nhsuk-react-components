import classNames from 'classnames';
import { forwardRef, useContext } from 'react';
import { CardContext } from '..';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils';
import { cardTypeIsCareCard, type CareCardType } from '#util/types';

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

const CareHeading = forwardRef<HTMLHeadingElement, HeadingLevelProps & { careType: CareCardType }>(
  ({ children, className, careType, headingLevel = 'h2', ...rest }, forwardedRef) => (
    <div className="nhsuk-card--care__heading-container">
      <HeadingLevel
        className={classNames('nhsuk-card--care__heading', className)}
        headingLevel={headingLevel}
        ref={forwardedRef}
        {...rest}
      >
        {/* eslint-disable-next-line jsx-a11y/aria-role */}
        <span role="text">
          <span className="nhsuk-u-visually-hidden">{genHiddenText(careType)}</span>
          {children}
        </span>
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

    const { className, headingLevel = 'h2', ...rest } = props;

    return (
      <HeadingLevel
        className={classNames(
          'nhsuk-card__heading',
          { 'nhsuk-card__heading--feature': cardType === 'feature' },
          className,
        )}
        headingLevel={headingLevel}
        ref={forwardedRef}
        {...rest}
      />
    );
  },
);

CareHeading.displayName = 'Card.CareHeading';
CardHeading.displayName = 'Card.Heading';
