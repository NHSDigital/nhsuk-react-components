import React, {HTMLProps, createContext, useContext, ReactNode} from 'react';
import classNames from 'classnames';
import { Tick, Cross } from '../icons';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';

type ListType = 'do' | 'dont';

interface DoDontListProps extends HTMLProps<HTMLDivElement> {
  listType: ListType;
  heading?: string;
  headingLevel?: HeadingLevelType;
}

interface DoDontList extends React.FC<DoDontListProps> {
  Item: React.FC<DoDontItemProps>;
}

const DoDontListContext = createContext<ListType>('do');

const DoDontList: DoDontList = ({
  className,
  listType,
  children,
  heading,
  headingLevel,
  ...rest
}) => (
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
      <DoDontListContext.Provider value={listType}>{children}</DoDontListContext.Provider>
    </ul>
  </div>
);

interface DoDontItemProps extends HTMLProps<HTMLLIElement> {
  listItemType?: ListType;
  prefixText?: ReactNode
}

const DoDontItem: React.FC<DoDontItemProps> = ({prefixText, listItemType,children, ...rest }) => {
  const listItem = useContext(DoDontListContext);
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

DoDontList.Item = DoDontItem;

export default DoDontList;
