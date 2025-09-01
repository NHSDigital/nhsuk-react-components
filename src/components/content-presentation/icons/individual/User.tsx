import React, { FC } from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const User: FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG modifier="user" {...props}>
    <path d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" />
  </BaseIconSVG>
);
