import React, { FC } from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const Tick: FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG modifier="tick" {...props}>
    <path d="M11.4 18.8a2 2 0 0 1-2.7.1h-.1L4 14.1a1.5 1.5 0 0 1 2.1-2L10 16l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z" />
  </BaseIconSVG>
);
