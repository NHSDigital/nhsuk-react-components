import classNames from 'classnames';
import { type FC } from 'react';
import { Col, type ColProps } from '#components/layout';

export const CardGroupItem: FC<ColProps> = ({ className, ...rest }) => (
  <Col className={classNames('nhsuk-card-group__item', className)} {...rest} />
);

CardGroupItem.displayName = 'Card.GroupItem';
