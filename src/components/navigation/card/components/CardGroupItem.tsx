import React, { FC, ComponentProps } from 'react';
import classNames from 'classnames';
import { Col } from '@components/layout';

const CardGroupItem: FC<ComponentProps<typeof Col>> = ({ className, ...rest }) => (
  <Col className={classNames('nhsuk-card-group__item', className)} {...rest} />
);

CardGroupItem.displayName = 'Card.GroupItem';

export default CardGroupItem;
