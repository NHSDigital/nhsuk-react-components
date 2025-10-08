import classNames from 'classnames';
import { Children, forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';
import { childIsOfComponentType } from '#util/types/TypeGuards.js';

export type PanelTitleProps = HeadingLevelProps;

const PanelTitle: FC<PanelTitleProps> = ({ children, headingLevel = 'h1', ...rest }) => (
  <HeadingLevel className="nhsuk-panel__title" headingLevel={headingLevel} {...rest}>
    {children}
  </HeadingLevel>
);

export type PanelProps = ComponentPropsWithoutRef<'div'>;

const PanelComponent = forwardRef<HTMLDivElement, PanelProps>(
  ({ children, className, ...rest }, forwardedRef) => {
    const items = Children.toArray(children);
    const title = items.find((child) => childIsOfComponentType(child, PanelTitle));
    const bodyItems = items.filter((child) => !childIsOfComponentType(child, PanelTitle));

    return (
      <div className={classNames('nhsuk-panel', className)} ref={forwardedRef} {...rest}>
        {title}
        {bodyItems ? <div className="nhsuk-panel__body">{bodyItems}</div> : null}
      </div>
    );
  },
);

PanelComponent.displayName = 'Panel';
PanelComponent.displayName = 'Panel.Title';

export const Panel = Object.assign(PanelComponent, {
  Title: PanelTitle,
});
