import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';
import { Row } from '#components/layout';

export const CardGroup: FC<ComponentPropsWithoutRef<'div'>> = ({ className, ...rest }) => (
  <Row className={classNames('nhsuk-card-group', className)} {...rest} />
);

CardGroup.displayName = 'Card.Group';
