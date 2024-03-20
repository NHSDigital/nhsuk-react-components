import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';

const TransactionalServiceName: FC<HTMLProps<HTMLAnchorElement>> = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-header__transactional-service-name', className)}>
    <a className="nhsuk-header__transactional-service-name--link" {...rest} />
  </div>
);

export default TransactionalServiceName;
