import React, { FC } from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const Search: FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG modifier="search" {...props}>
    <path d="m20.7 19.3-4.1-4.1a7 7 0 1 0-1.4 1.4l4 4.1a1 1 0 0 0 1.5 0c.4-.4.4-1 0-1.4ZM6 11a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" />
  </BaseIconSVG>
);
