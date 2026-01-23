import classNames from 'classnames';
import { type ComponentPropsWithoutRef, type FC } from 'react';

import { type NHSUKSize } from '#util/types/NHSUKTypes.js';

export interface BodyTextProps extends ComponentPropsWithoutRef<'p'> {
  sizePrefix?: string;
  size?: Extract<NHSUKSize, 's' | 'm'>;
}

export const BodyText: FC<BodyTextProps> = ({ className, size, ...rest }) => (
  <p
    className={classNames(
      // Use default class without size
      { 'nhsuk-body': !size },
      // Or switch to size specific class
      { [`nhsuk-body-${size}`]: size },
      className,
    )}
    {...rest}
  />
);
