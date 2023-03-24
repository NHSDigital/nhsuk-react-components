import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import useDevWarning from '../../../util/hooks/UseDevWarning';
import { NHSUKFrontendV5UpgradeWarnings } from '../../../deprecated/warnings';

export interface TransactionalServiceNameProps extends HTMLProps<HTMLAnchorElement> {
  long?: boolean;
}

const TransactionalServiceName: React.FC<TransactionalServiceNameProps> = ({
  className,
  long,
  ...rest
}) => {
  useDevWarning(
    NHSUKFrontendV5UpgradeWarnings.TransactionalServiceNameLongVariantRemoved,
    () => long,
  );
  return (
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
};

export default TransactionalServiceName;
