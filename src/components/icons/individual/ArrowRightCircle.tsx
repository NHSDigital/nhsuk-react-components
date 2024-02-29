import React from "react";
import { BaseIconSVGProps, BaseIconSVG } from "../BaseIcon";

export const ArrowRightCircle: React.FC<BaseIconSVGProps> = (props) => (
    <BaseIconSVG iconType="nhsuk-icon__arrow-right-circle" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" />
    </BaseIconSVG>
  );