import React, { FC } from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const ArrowLeft: FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG modifier="arrow-left" {...props}>
    <path d="M10.7 6.3c.4.4.4 1 0 1.4L7.4 11H19a1 1 0 0 1 0 2H7.4l3.3 3.3c.4.4.4 1 0 1.4a1 1 0 0 1-1.4 0l-5-5A1 1 0 0 1 4 12c0-.3.1-.5.3-.7l5-5a1 1 0 0 1 1.4 0Z" />
  </BaseIconSVG>
);
