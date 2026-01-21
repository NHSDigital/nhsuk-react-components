'use client';

import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';

import { DoAndDontListContext, type DoAndDontListType } from './DoAndDontListContext.js';
import { DoAndDontListItem } from './components/index.js';

import { Heading, type HeadingProps } from '#components/typography/Heading.js';

export interface DoAndDontListProps
  extends ComponentPropsWithoutRef<'div'>, Pick<HeadingProps, 'headingLevel'> {
  listType: DoAndDontListType;
  heading?: string;
}

const DoAndDontListComponent = forwardRef<HTMLDivElement, DoAndDontListProps>(
  ({ className, listType, children, heading, headingLevel = 'h3', ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-do-dont-list', className)} ref={forwardedRef} {...rest}>
      <Heading className="nhsuk-do-dont-list__label" headingLevel={headingLevel}>
        {heading || (listType === 'do' ? 'Do' : "Don't")}
      </Heading>
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
