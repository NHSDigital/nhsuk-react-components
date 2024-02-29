import React from "react";
import { BaseIconSVGProps, BaseIconSVG } from "../BaseIcon";

export const Search: React.FC<BaseIconSVGProps> = (props) => (
    <BaseIconSVG iconType="nhsuk-icon__search" {...props}>
      <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" />
    </BaseIconSVG>
  );