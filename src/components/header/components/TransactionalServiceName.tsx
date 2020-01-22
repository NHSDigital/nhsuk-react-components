import React, { HTMLProps } from 'react';
import classNames from 'classnames';

export interface TransactionalServiceNameProps extends HTMLProps<HTMLAnchorElement> {
  long?: boolean;
}

const TransactionalServiceName: React.FC<TransactionalServiceNameProps> = ({
  className,
  long,
  ...rest
}) => (
  <div
    className={classNames(
      'nhsuk-header__transactional-service-name',
      { 'nhsuk-header__transactional-service-name--long': long },
      className,
    )}
  >
    <a className="nhsuk-header__transactional-service-name--link" {...rest}></a>
  </div>
);

export default TransactionalServiceName;
