import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import type { AsElementLink } from '@util/types/LinkTypes';
import Card from '@components/navigation/card';

interface PanelProps extends HTMLProps<HTMLDivElement> {
  labelProps?: HTMLProps<HTMLHeadingElement>;
  backToTop?: boolean;
  backToTopButtonText?: string;
  backToTopLink?: string;
}

interface Panel extends React.FC<PanelProps> {
  LinkItem: React.FC<HTMLProps<HTMLAnchorElement>>;
  Item: React.FC<HTMLProps<HTMLLIElement>>;
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
        {label ? (
          <Card.Heading
            className={classNames('nhsuk-u-font-size-24', labelProps?.className)}
            {...labelProps}
          >
            {label}
          </Card.Heading>
        ) : null}
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

const PanelItem: React.FC<HTMLProps<HTMLLIElement>> = ({ className, ...rest }) => (
  <li className={classNames('nhsuk-list-panel__item', className)} {...rest} />
);

const PanelLinkItem: React.FC<AsElementLink<HTMLAnchorElement>> = ({
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
