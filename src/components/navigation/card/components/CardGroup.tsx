import React, { ComponentPropsWithoutRef, FC } from 'react';
import classNames from 'classnames';
import { Row } from '@components/layout';

const CardGroup: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <Row className={classNames('nhsuk-card-group', className)} {...rest} />
);

CardGroup.displayName = 'Card.Group';

export default CardGroup;
