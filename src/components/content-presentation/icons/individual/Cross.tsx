import React from 'react';
import { BaseIconSVGProps, BaseIconSVG } from '../BaseIcon';

export const Cross: React.FC<BaseIconSVGProps> = (props) => (
  <BaseIconSVG iconType="nhsuk-icon__cross" {...props}>
    <path
      d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z"
      fill="#d5281b"
    />
    <path
      d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"
      fill="#d5281b"
    />
  </BaseIconSVG>
);
