import { type FC, type HTMLAttributes } from 'react';

import { HeadingLevel, type HeadingLevelProps } from '#components/typography/Heading.js';
import { type NHSUKSize } from '#util/types/NHSUKTypes.js';

export interface PanelTitleProps
  extends HTMLAttributes<HTMLHeadingElement>, Pick<HeadingLevelProps, 'headingLevel'> {
  size?: Exclude<NHSUKSize, 'xxs' | 'xs' | 's'>;
}

export const PanelTitle: FC<PanelTitleProps> = ({ children, headingLevel = 'h1', ...rest }) => (
  <HeadingLevel
    className="nhsuk-panel__title"
    sizePrefix="nhsuk-panel__title--"
    headingLevel={headingLevel}
    {...rest}
  >
    {children}
  </HeadingLevel>
);

PanelTitle.displayName = 'Panel.Title';
