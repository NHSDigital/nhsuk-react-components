import React from 'react';
import classNames from 'classnames';
import { Col } from '@components/layout';

const CardGroupItem: React.FC<React.ComponentProps<typeof Col>> = ({ className, ...rest }) => (
  <Col className={classNames('nhsuk-card-group__item', className)} {...rest} />
);

export default CardGroupItem;
