import React from 'react';
import classNames from 'classnames';
import { Row } from '@components/layout';

const CardGroup: React.FC<React.HTMLProps<HTMLDivElement>> = ({ className, ...rest }) => (
  <Row className={classNames('nhsuk-card-group', className)} {...rest} />
);

export default CardGroup;
