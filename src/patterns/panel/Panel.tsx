import React, { FC, HTMLProps } from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';
import Card from '@components/navigation/card';
import { CardHeadingProps } from '@components/navigation/card/components/CardHeading';

interface PanelProps extends HTMLProps<HTMLDivElement> {
  labelProps?: HTMLProps<HTMLHeadingElement> & CardHeadingProps;
  backToTop?: boolean;
  backToTopButtonText?: string;
  backToTopLink?: string;
}

interface Panel extends FC<PanelProps> {
  LinkItem: FC<HTMLProps<HTMLAnchorElement>>;
  Item: FC<HTMLProps<HTMLLIElement>>;
}

const Panel: Panel = ({
  children,
  label,
  labelProps,
  backToTop,
  backToTopLink,
  backToTopButtonText,
}) => (
  <>
    <Card cardType="feature">
      <Card.Content>
        {label ? <Card.Heading {...labelProps}>{label}</Card.Heading> : null}
        <ul className="nhsuk-list nhsuk-list--border">{children}</ul>
      </Card.Content>
    </Card>

    {backToTop ? (
      <div className="nhsuk-back-to-top">
        <a className="nhsuk-back-to-top__link" href={backToTopLink}>
          {backToTopButtonText || 'Back to top'}
        </a>
      </div>
    ) : null}
  </>
);

const PanelItem: FC<HTMLProps<HTMLLIElement>> = ({ className, ...rest }) => (
  <li className={classNames('nhsuk-list-panel__item', className)} {...rest} />
);

const PanelLinkItem: FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  asElement: Element = 'a',
  ...rest
}) => (
  <PanelItem>
    <Element className={classNames('nhsuk-list-panel__link', className)} {...rest} />
  </PanelItem>
);

Panel.displayName = 'Panel';
PanelLinkItem.displayName = 'Panel.LinkItem';
PanelItem.displayName = 'Panel.Item';

Panel.LinkItem = PanelLinkItem;
Panel.Item = PanelItem;

export default Panel;
