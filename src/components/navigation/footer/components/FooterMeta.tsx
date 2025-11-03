import { Children, type FC } from 'react';

import { FooterCopyright } from './FooterCopyright.js';
import { FooterList, type FooterListProps } from './FooterList.js';
import { FooterListItem } from './FooterListItem.js';

import { childIsOfComponentType } from '#util/types/index.js';

export interface FooterMetaProps extends FooterListProps {
  visuallyHiddenText?: string;
}

export const FooterMeta: FC<FooterMetaProps> = ({
  children,
  visuallyHiddenText = 'Support links',
  ...rest
}) => {
  const items = Children.toArray(children);

  const metaItems = items.filter((child) => childIsOfComponentType(child, FooterListItem));
  const metaCopyright = items.filter((child) => childIsOfComponentType(child, FooterCopyright));

  return (
    <div className="nhsuk-footer__meta">
      <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
      <FooterList {...rest}>{metaItems}</FooterList>
      {metaCopyright.length ? metaCopyright : <FooterCopyright />}
    </div>
  );
};

FooterMeta.displayName = 'Footer.Meta';
