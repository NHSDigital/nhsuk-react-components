import { Children, type FC, type ReactElement } from 'react';

import { FooterCopyright } from './FooterCopyright.js';
import { FooterList, type FooterListProps } from './FooterList.js';
import { FooterListItem } from './FooterListItem.js';

import { childIsOfComponentType } from '#util/types/index.js';

export interface FooterMetaProps extends FooterListProps {
  visuallyHiddenText?: string | ReactElement;
}

export const FooterMeta: FC<FooterMetaProps> = ({
  children,
  visuallyHiddenText = 'Support links',
  ...rest
}) => {
  const items = Children.toArray(children);

  // Allow custom copyright
  const metaCopyright = items.find((child) => childIsOfComponentType(child, FooterCopyright));

  // Allow meta list item
  const metaItems = items.filter((child) => childIsOfComponentType(child, FooterListItem));

  return (
    <div className="nhsuk-footer__meta">
      {metaItems.length ? (
        <>
          <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
          <FooterList {...rest}>{metaItems}</FooterList>
        </>
      ) : null}
      {metaCopyright ? metaCopyright : <FooterCopyright />}
    </div>
  );
};

FooterMeta.displayName = 'Footer.Meta';
