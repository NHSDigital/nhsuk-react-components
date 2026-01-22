import classNames from 'classnames';
import { Children, forwardRef, type ComponentPropsWithoutRef } from 'react';

import { PanelTitle } from './components/index.js';

import { childIsOfComponentType } from '#util/types/TypeGuards.js';

export interface PanelProps extends ComponentPropsWithoutRef<'div'> {
  interruption?: boolean;
}

const PanelComponent = forwardRef<HTMLDivElement, PanelProps>(
  ({ children, className, interruption, ...rest }, forwardedRef) => {
    const items = Children.toArray(children);
    const title = items.find((child) => childIsOfComponentType(child, PanelTitle));
    const bodyItems = items.filter((child) => child !== title);

    return (
      <div
        className={classNames(
          'nhsuk-panel',
          { 'nhsuk-panel--interruption': interruption },
          className,
        )}
        ref={forwardedRef}
        {...rest}
      >
        {title}
        {bodyItems ? <div className="nhsuk-panel__body">{bodyItems}</div> : null}
      </div>
    );
  },
);

PanelComponent.displayName = 'Panel';

export const Panel = Object.assign(PanelComponent, {
  Title: PanelTitle,
});
