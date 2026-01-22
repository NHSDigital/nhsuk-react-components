import { Children, type FC, type ReactElement } from 'react';

import { type FooterContentProps } from './FooterContent.js';
import { FooterCopyright } from './FooterCopyright.js';
import { FooterList } from './FooterList.js';
import { FooterListItem } from './FooterListItem.js';

import { childIsOfComponentType } from '#util/types/index.js';

export interface FooterMetaProps extends FooterContentProps {
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
  const metaListItems = items.filter((child) => childIsOfComponentType(child, FooterListItem));

  // Only meta content items remain
  const metaContentItems = items.filter(
    (child) => child !== metaCopyright && !metaListItems.some((listItem) => listItem === child),
  );

  return (
    <div className="nhsuk-footer__meta">
      {metaListItems.length ? (
        <>
          <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
          <FooterList {...rest}>{metaListItems}</FooterList>
        </>
      ) : null}
      {metaContentItems}
      {metaCopyright ? metaCopyright : <FooterCopyright />}
    </div>
  );
};

FooterMeta.displayName = 'Footer.Meta';
