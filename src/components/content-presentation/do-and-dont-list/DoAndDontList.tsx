'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { DoAndDontListContext, type DoAndDontListType } from './DoAndDontListContext.js';
import { DoAndDontListItem } from './components/index.js';

import { HeadingLevel, type HeadingLevelProps } from '#components/typography/Heading.js';

export interface DoAndDontListProps
  extends ComponentPropsWithoutRef<'div'>, Pick<HeadingLevelProps, 'headingLevel'> {
  listType: DoAndDontListType;
  heading?: string;
}

const DoAndDontListComponent = forwardRef<HTMLDivElement, DoAndDontListProps>(
  ({ className, listType, children, heading, headingLevel, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-do-dont-list', className)} ref={forwardedRef} {...rest}>
      <HeadingLevel className="nhsuk-do-dont-list__label" headingLevel={headingLevel}>
        {heading || (listType === 'do' ? 'Do' : "Don't")}
      </HeadingLevel>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul
        className={classNames(
          'nhsuk-list',
          { 'nhsuk-list--tick': listType === 'do' },
          { 'nhsuk-list--cross': listType === 'dont' },
        )}
        role="list"
      >
        <DoAndDontListContext.Provider value={listType}>{children}</DoAndDontListContext.Provider>
      </ul>
    </div>
  ),
);

DoAndDontListComponent.displayName = 'DoAndDontList';

export const DoAndDontList = Object.assign(DoAndDontListComponent, {
  Item: DoAndDontListItem,
});
