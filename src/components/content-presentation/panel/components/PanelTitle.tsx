import { type FC, type HTMLAttributes } from 'react';

import { Heading, type HeadingProps } from '#components/typography/Heading.js';
import { type NHSUKSize } from '#util/types/NHSUKTypes.js';

export interface PanelTitleProps
  extends HTMLAttributes<HTMLHeadingElement>, Pick<HeadingProps, 'headingLevel'> {
  size?: Exclude<NHSUKSize, 'xxs' | 'xs' | 's'>;
}

export const PanelTitle: FC<PanelTitleProps> = ({ children, headingLevel = 'h1', ...rest }) => (
  <Heading
    className="nhsuk-panel__title"
    sizePrefix="nhsuk-panel__title--"
    headingLevel={headingLevel}
    {...rest}
  >
    {children}
  </Heading>
);

PanelTitle.displayName = 'Panel.Title';
