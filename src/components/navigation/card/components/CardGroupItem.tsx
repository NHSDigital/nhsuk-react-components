import React from 'react';
import classNames from 'classnames';
import { Col } from '@components/layout';

const CardGroupItem: typeof Col = ({ className, ...rest }) => (
  <Col className={classNames('nhsuk-card-group__item', className)} {...rest} />
);

CardGroupItem.displayName = 'Card.GroupItem';

export default CardGroupItem;
