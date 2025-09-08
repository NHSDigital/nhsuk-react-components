import React from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const ChevronRight: React.FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG iconType="nhsuk-icon__chevron-right" {...props}>
    <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" />
  </BaseIconSVG>
);
