import React, { FC } from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const Tick: FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG iconType="nhsuk-icon__tick" {...props}>
    <path
      strokeWidth="4"
      strokeLinecap="round"
      stroke="#007f3b"
      fill="none"
      d="M18.4 7.8l-8.5 8.4L5.6 12"
    />
  </BaseIconSVG>
);
