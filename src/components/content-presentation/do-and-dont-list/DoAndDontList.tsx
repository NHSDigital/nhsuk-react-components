'use client';

import classNames from 'classnames';
import {
  createContext,
  forwardRef,
  useContext,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from 'react';
import { CrossIcon, TickIcon } from '../icons/index.js';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils/HeadingLevel.js';

type ListType = 'do' | 'dont';

export interface DoAndDontListProps
  extends ComponentPropsWithoutRef<'div'>,
    Pick<HeadingLevelProps, 'headingLevel'> {
  listType: ListType;
  heading?: string;
}

const DoAndDontListContext = createContext<ListType>('do');

const DoAndDontListComponent = forwardRef<HTMLDivElement, DoAndDontListProps>(
  ({ className, listType, children, heading, headingLevel, ...rest }, forwardedRef) => (
    <div className={classNames('nhsuk-do-dont-list', className)} ref={forwardedRef} {...rest}>
      <HeadingLevel className="nhsuk-do-dont-list__label" headingLevel={headingLevel}>
        {heading || (listType === 'do' ? 'Do' : "Don't")}
      </HeadingLevel>
      <ul
        className={classNames(
          'nhsuk-list',
          { 'nhsuk-list--tick': listType === 'do' },
          { 'nhsuk-list--cross': listType === 'dont' },
        )}
      >
        <DoAndDontListContext.Provider value={listType}>{children}</DoAndDontListContext.Provider>
      </ul>
    </div>
  ),
);

export interface DoAndDontItemProps extends ComponentPropsWithoutRef<'li'> {
  listItemType?: ListType;
  prefixText?: ReactNode;
}

const DoAndDontItem: FC<DoAndDontItemProps> = ({ prefixText, listItemType, children, ...rest }) => {
  const listItem = useContext(DoAndDontListContext);
  const defaultPrefix = (listItemType || listItem) === 'do' ? null : 'do not ';
  const actualPrefix = prefixText === undefined ? defaultPrefix : prefixText;
  return (
    <li {...rest}>
      {(listItemType || listItem) === 'do' ? (
        <>
          <TickIcon />
          {actualPrefix}
        </>
      ) : (
        <>
          <CrossIcon />
          {actualPrefix}
        </>
      )}
      {children}
    </li>
  );
};

DoAndDontListComponent.displayName = 'DoAndDontList';
DoAndDontItem.displayName = 'DoAndDontList.Item';

export const DoAndDontList = Object.assign(DoAndDontListComponent, {
  Item: DoAndDontItem,
});
