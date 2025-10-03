import React, { type FC } from 'react';
import { Icon, type IconProps } from '..';

export const TickIcon: FC<IconProps> = (props) => (
  <Icon modifier="tick" {...props}>
    <path d="M11.4 18.8a2 2 0 0 1-2.7.1h-.1L4 14.1a1.5 1.5 0 0 1 2.1-2L10 16l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z" />
  </Icon>
);
