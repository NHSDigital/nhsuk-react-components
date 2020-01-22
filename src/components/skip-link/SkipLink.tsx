import React, { HTMLProps, MouseEvent } from 'react';
import classNames from 'classnames';

interface SkipLinkProps extends HTMLProps<HTMLAnchorElement> {
  focusTargetRef?: React.RefObject<HTMLElement>;
  disableDefaultBehaviour?: boolean;
}

interface SkipLink extends React.Component<SkipLinkProps> {
  firstHeadingElement: HTMLElement | null;
}

class SkipLink extends React.Component<SkipLinkProps> {
  static defaultProps = {
    children: 'Skip to main content',
    href: '#maincontent',
  };

  constructor(props: SkipLinkProps, ...rest: any[]) {
    super(props, ...rest);
    this.firstHeadingElement = null;
  }

  componentDidMount() {
    // The standard NHSUK Frontend behaviour is to listen on the
    // blur event on the first heading element.
    this.firstHeadingElement = this.getFirstHeadingElement();
    if (this.firstHeadingElement) {
      this.firstHeadingElement.addEventListener('blur', this.handleHeadingBlur);
    }
  }

  componentWillUnmount() {
    if (this.firstHeadingElement) {
      this.firstHeadingElement.removeEventListener('blur', this.handleHeadingBlur);
    }
  }

  private handleHeadingBlur = (event: Event) => {
    event.preventDefault();
    if (this.firstHeadingElement) {
      this.unfocusElement(this.firstHeadingElement);
    }
  };

  private getFirstHeadingElement = (): HTMLElement | null => {
    const allHeadings = document.getElementsByTagName('h1');
    if (allHeadings.length > 0) {
      return allHeadings[0];
    }
    return null;
  };

  private focusElement = (element: HTMLElement): void => {
    // Sometimes custom focus code can cause a loop of focus events
    // (especially in IE11), so check for attributes before performing
    // focus actions and DOM manipulation.
    if (!element.hasAttribute('tabIndex')) {
      element.setAttribute('tabIndex', '-1');
    }
    if (document.activeElement !== element) {
      element.focus();
    }
  };

  private unfocusElement = (element: HTMLElement): void => {
    if (element.hasAttribute('tabIndex')) element.removeAttribute('tabIndex');
  };

  private onClick = (event: MouseEvent<HTMLAnchorElement>): void => {
    const { onClick, focusTargetRef, disableDefaultBehaviour } = this.props;
    if (disableDefaultBehaviour) event.preventDefault();
    if (focusTargetRef && focusTargetRef.current) {
      this.focusElement(focusTargetRef.current);
    } else if (!disableDefaultBehaviour) {
      // Follow the default NHSUK Frontend behaviour, but go about it in a safer way.
      // https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/components/skip-link/skip-link.js
      if (this.firstHeadingElement) this.focusElement(this.firstHeadingElement);
    }
    if (onClick) {
      event.persist();
      onClick(event);
    }
  };

  render() {
    const { className, focusTargetRef, ...rest } = this.props;
    return (
      <a className={classNames('nhsuk-skip-link', className)} onClick={this.onClick} {...rest}></a>
    );
  }
}

export default SkipLink;
