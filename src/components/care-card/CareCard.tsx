import classNames from 'classnames';
import React, { createContext, HTMLProps, useContext } from 'react';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';
import { CareCardType } from '../../util/types/NHSUKTypes';
import VisuallyHidden from '../visually-hidden';

interface CareCardProps extends HTMLProps<HTMLDivElement> {
  type: CareCardType;
}

const CareCardContext = createContext<CareCardType>('non-urgent');

const genHiddenText = (cardType: CareCardType): string => {
  switch (cardType) {
    case 'non-urgent':
      return 'Non-urgent advice: ';
    case 'urgent':
      return 'Urgent advice: ';
    case 'immediate':
      return 'Immediate action required: ';
    default:
      return '';
  }
};

const CareCardContent: React.FC<HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-care-card__content', className)} {...rest} />
);

interface CareCardHeadingProps extends HTMLProps<HTMLHeadingElement> {
  visuallyHiddenText?: false | string;
  headingLevel?: HeadingLevelType;
}

const CareCardHeading: React.FC<CareCardHeadingProps> = ({
  className,
  children,
  visuallyHiddenText,
  headingLevel,
  role,
  ...rest
}) => {
  const cardType = useContext(CareCardContext);
  return (
    <div className="nhsuk-care-card__heading-container">
      <HeadingLevel
        className={classNames('nhsuk-care-card__heading', className)}
        headingLevel={headingLevel}
        {...rest}
      >
        <span role={role}>
          {visuallyHiddenText !== false ? (
            <VisuallyHidden>{visuallyHiddenText || genHiddenText(cardType)}</VisuallyHidden>
          ) : null}
          {children}
        </span>
      </HeadingLevel>
      <span className="nhsuk-care-card__arrow" aria-hidden="true" />
    </div>
  );
};

CareCardHeading.defaultProps = {
  role: 'text',
};

interface CareCard extends React.FC<CareCardProps> {
  Content: React.FC<HTMLProps<HTMLDivElement>>;
  Heading: React.FC<CareCardHeadingProps>;
}

const CareCard: CareCard = ({ className, type, children, ...rest }) => (
  <div className={classNames('nhsuk-care-card', `nhsuk-care-card--${type}`, className)} {...rest}>
    <CareCardContext.Provider value={type}>{children}</CareCardContext.Provider>
  </div>
);

CareCard.Content = CareCardContent;
CareCard.Heading = CareCardHeading;

export default CareCard;
