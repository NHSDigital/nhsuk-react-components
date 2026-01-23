import classNames from 'classnames';
import { Children, forwardRef, type FC } from 'react';

import { Heading, type HeadingProps } from '#components/typography/Heading.js';
import { childIsOfComponentType, type CareCardType } from '#util/types/index.js';

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

export interface CardHeadingProps extends HeadingProps {
  cardType?: CareCardType;
}

export const CardHeadingContainer = forwardRef<HTMLDivElement, CardHeadingProps>(
  (props, forwardedRef) => {
    const { children, cardType, ...rest } = props;
    const items = Children.toArray(children);

    // Allow single heading
    const headingItem = items.find((child) => childIsOfComponentType(child, CardHeading));

    // Only actions remain
    const actionsItem = items.filter((child) => child !== headingItem);

    return (
      <div className="nhsuk-card__heading-container" ref={forwardedRef} {...rest}>
        {headingItem ? <CardHeading cardType={cardType} {...headingItem.props} /> : null}
        {actionsItem}
        {cardType ? <span className="nhsuk-card--care__arrow" aria-hidden="true"></span> : null}
      </div>
    );
  },
);

export const CardHeading: FC<CardHeadingProps> = ({
  className,
  cardType,
  headingLevel = 'h2',
  visuallyHiddenText = genHiddenText(cardType),
  ...rest
}) => (
  <Heading
    className={classNames('nhsuk-card__heading', className)}
    headingLevel={headingLevel}
    visuallyHiddenText={visuallyHiddenText}
    {...rest}
  />
);

CardHeading.displayName = 'Card.Heading';
CardHeadingContainer.displayName = 'Card.HeadingContainer';
