import React, { FC } from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const ArrowRight: FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG iconType="nhsuk-icon__arrow-right" {...props}>
    <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" />
  </BaseIconSVG>
);
