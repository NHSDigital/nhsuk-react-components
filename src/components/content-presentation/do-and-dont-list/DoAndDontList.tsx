'use client';
import React, { createContext, useContext } from 'react';
import classNames from 'classnames';
import { Tick, Cross } from '@components/content-presentation/icons';
import HeadingLevel, { HeadingLevelType } from '@components/utils/HeadingLevel';

type ListType = 'do' | 'dont';

interface DoAndDontListProps extends React.HTMLProps<HTMLDivElement> {
  listType: ListType;
  heading?: string;
  headingLevel?: HeadingLevelType;
}

interface DoAndDontList extends React.FC<DoAndDontListProps> {
  Item: React.FC<DoAndDontItemProps>;
}

const DoAndDontListContext = createContext<ListType>('do');

const DoAndDontList: DoAndDontList = ({
  className,
  listType,
  children,
  heading,
  headingLevel,
  ...rest
}) => {
  return (
    <div className={classNames('nhsuk-do-dont-list', className)} {...rest}>
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
  );
};

interface DoAndDontItemProps extends React.HTMLProps<HTMLLIElement> {
  listItemType?: ListType;
  prefixText?: React.ReactNode;
}

const DoAndDontItem: React.FC<DoAndDontItemProps> = ({ prefixText, listItemType, children, ...rest }) => {
  const listItem = useContext(DoAndDontListContext);
  const defaultPrefix = (listItemType || listItem) === 'do' ? null : 'do not ';
  const actualPrefix = prefixText === undefined ? defaultPrefix : prefixText;
  return (
    <li {...rest}>
      {(listItemType || listItem) === 'do' ? (
        <>
          <Tick />
          {actualPrefix}
        </>
      ) : (
        <>
          <Cross />
          {actualPrefix}
        </>
      )}
      {children}
    </li>
  );
};

DoAndDontList.Item = DoAndDontItem;

export default DoAndDontList;
