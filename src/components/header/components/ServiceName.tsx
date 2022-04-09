import classNames from 'classnames';
import React, { HTMLProps } from 'react';

export interface TransactionalServiceNameProps extends HTMLProps<HTMLAnchorElement> {
  long?: boolean;
}

const HeaderServiceName: React.FC<TransactionalServiceNameProps> = ({
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
    <a className="nhsuk-header__transactional-service-name--link" {...rest} />
  </div>
);
HeaderServiceName.displayName = 'Header.ServiceName';

export default HeaderServiceName;
