import { type FC } from 'react';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';

export type PanelTitleProps = HeadingLevelProps;

export const PanelTitle: FC<PanelTitleProps> = ({ children, headingLevel = 'h1', ...rest }) => (
  <HeadingLevel className="nhsuk-panel__title" headingLevel={headingLevel} {...rest}>
    {children}
  </HeadingLevel>
);

PanelTitle.displayName = 'Panel.Title';
