import React from "react";
import { BaseIconSVGProps, BaseIconSVG } from "../BaseIcon";

export const ChevronLeft: React.FC<BaseIconSVGProps> = (props) => (
    <BaseIconSVG iconType="nhsuk-icon__chevron-left" {...props}>
      <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" />
    </BaseIconSVG>
  );