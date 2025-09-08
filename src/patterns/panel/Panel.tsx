import React from 'react';
import classNames from 'classnames';
import { AsElementLink } from '@util/types/LinkTypes';
import Card from '@components/navigation/card';
import { CardHeadingProps } from '@components/navigation/card/components/CardHeading';

interface PanelProps extends React.HTMLProps<HTMLDivElement> {
  labelProps?: React.HTMLProps<HTMLHeadingElement> & CardHeadingProps;
  backToTop?: boolean;
  backToTopButtonText?: string;
  backToTopLink?: string;
}

interface Panel extends React.FC<PanelProps> {
  LinkItem: React.FC<React.HTMLProps<HTMLAnchorElement>>;
  Item: React.FC<React.HTMLProps<HTMLLIElement>>;
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

const PanelItem: React.FC<React.HTMLProps<HTMLLIElement>> = ({ className, ...rest }) => (
  <li className={classNames('nhsuk-list-panel__item', className)} {...rest} />
);

const PanelLinkItem: React.FC<AsElementLink<React.HTMLAnchorElement>> = ({
  className,
  asElement: Component = 'a',
  ...rest
}) => (
  <PanelItem>
    <Component className={classNames('nhsuk-list-panel__link', className)} {...rest} />
  </PanelItem>
);

Panel.LinkItem = PanelLinkItem;
Panel.Item = PanelItem;

export default Panel;
