import React from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const SmallEmdash: React.FC<BaseIconSVGProps> = ({ height = 1, width = 16, ...rest }) => (
  <BaseIconSVG iconType="nhsuk-icon__emdash" height={height} width={width} {...rest}>
    <path d="M0 0h16v1H0z" />
  </BaseIconSVG>
);
