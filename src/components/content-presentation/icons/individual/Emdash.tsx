import React from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const Emdash: React.FC<BaseIconSVGProps> = ({ height = 1, width = 19, ...rest }) => (
  <BaseIconSVG iconType="nhsuk-icon__emdash" height={height} width={width} {...rest}>
    <path d="M0 0h19v1H0z" />
  </BaseIconSVG>
);
