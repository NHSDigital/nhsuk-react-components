import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import type { AsElementLink } from 'util/types/LinkTypes';

export type TextLinkProps = HTMLProps<HTMLAnchorElement>;

const TextLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({ 
  children, 
  asElement: Component = 'a', 
  className, 
  ...rest 
}) => (
  <div className="nhsuk-action-link">
    <Component className={classNames('XXXnhsuk-action-link__link', className, 'text-link')} {...rest}>
      <span className="XXXnhsuk-action-link__text">{children}</span>
    </Component>
  </div>
);

export default TextLink;
