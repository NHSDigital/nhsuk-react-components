'use client';

import { useContext, type ComponentPropsWithoutRef, type FC, type ReactNode } from 'react';

import { CrossIcon, TickIcon } from '../../icons/index.js';
import { DoAndDontListContext, type DoAndDontListType } from '../DoAndDontListContext.js';

export interface DoAndDontListItemProps extends ComponentPropsWithoutRef<'li'> {
  listItemType?: DoAndDontListType;
  prefixText?: ReactNode;
}

export const DoAndDontListItem: FC<DoAndDontListItemProps> = ({
  prefixText,
  listItemType,
  children,
  ...rest
}) => {
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

DoAndDontListItem.displayName = 'DoAndDontList.Item';
