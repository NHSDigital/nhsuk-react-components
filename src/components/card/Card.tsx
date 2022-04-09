import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import CardContext from './CardContext';
import CardContent from './components/CardContent';
import CardDescription from './components/CardDescription';
import CardGroup from './components/CardGroup';
import CardGroupItem from './components/CardGroupItem';
import CardHeading from './components/CardHeading';
import CardImage from './components/CardImage';
import CardLink from './components/CardLink';

interface CardProps extends HTMLProps<HTMLDivElement> {
  clickable?: boolean;
  feature?: boolean;
}

type CardChildComponents = {
  Content: typeof CardContent;
  Description: typeof CardDescription;
  Image: typeof CardImage;
  Link: typeof CardLink;
  Heading: typeof CardHeading;
  Group: typeof CardGroup;
  GroupItem: typeof CardGroupItem;
};

const Card: React.FC<CardProps> & CardChildComponents = ({
  className,
  clickable,
  children,
  feature,
  ...rest
}) => (
  <div
    className={classNames(
      'nhsuk-card',
      { 'nhsuk-card--clickable': clickable },
      { 'nhsuk-card--feature': feature },
      className,
    )}
    {...rest}
  >
    <CardContext.Provider value={{ feature: Boolean(feature) }}>{children}</CardContext.Provider>
  </div>
);

Card.defaultProps = {
  feature: false,
};

Card.Heading = CardHeading;
Card.Description = CardDescription;
Card.Image = CardImage;
Card.Link = CardLink;
Card.Content = CardContent;
Card.Group = CardGroup;
Card.GroupItem = CardGroupItem;

export default Card;
