import React, { FC } from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const Plus: FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG iconType="nhsuk-icon__minus" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="2"
      d="M12 8v8M8 12h8"
    />
  </BaseIconSVG>
);
