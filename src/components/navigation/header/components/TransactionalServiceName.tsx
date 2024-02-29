import React, { FC, HTMLProps, useContext, useEffect } from 'react';
import classNames from 'classnames';
import HeaderContext, { IHeaderContext } from '../HeaderContext';

const TransactionalServiceName: FC<HTMLProps<HTMLAnchorElement>> = ({ className, ...rest }) => {
  const { setServiceName } = useContext<IHeaderContext>(HeaderContext);
  useEffect(() => {
    setServiceName(true);
    return () => setServiceName(false);
  }, []);

  return (
    <div className={classNames('nhsuk-header__transactional-service-name', className)}>
      <a className="nhsuk-header__transactional-service-name--link" {...rest} />
    </div>
  );
};

export default TransactionalServiceName;
