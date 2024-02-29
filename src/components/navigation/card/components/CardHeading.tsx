import React, { HTMLProps, useContext } from 'react';
import classNames from 'classnames';
import HeadingLevel, { HeadingLevelType } from '../../../../util/HeadingLevel';
import CardContext from '../CardContext';

interface CardHeadingProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel?: HeadingLevelType;
}

const CardHeading: React.FC<CardHeadingProps> = ({ className, ...rest }) => {
  const { feature } = useContext(CardContext);
  return (
    <HeadingLevel
      className={classNames(
        'nhsuk-card__heading',
        { 'nhsuk-card__heading--feature': feature },
        className,
      )}
      {...rest}
    />
  );
};

CardHeading.defaultProps = {
  headingLevel: 'h2',
};

export default CardHeading;
