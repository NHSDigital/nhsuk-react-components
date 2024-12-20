import React, { HTMLProps, MouseEvent, useEffect } from 'react';
import classNames from 'classnames';

interface SkipLinkProps extends HTMLProps<HTMLAnchorElement> {
  /** The reference to the element to set focus to when the link is clicked */
  focusTargetRef?: React.RefObject<HTMLElement>;
  /** Disables the default anchor click behaviour, avoiding navigation entries being added to the browser history */
  disableDefaultBehaviour?: boolean;
  /** Disables focusing the first h1 level heading when {@link focusTargetRef} is not set */
  disableHeadingFocus?: boolean;
}

const SkipLink = ({
  children = 'Skip to main content',
  className,
  disableDefaultBehaviour,
  disableHeadingFocus,
  focusTargetRef,
  href = '#maincontent',
  tabIndex = 0,
  onClick,
  ...rest
}: SkipLinkProps) => {
  let firstHeadingElement: HTMLElement | null = null;

  const getFirstHeadingElement = (): HTMLElement | null => {
    const allHeadings = document.getElementsByTagName('h1');
    if (allHeadings.length > 0) {
      return allHeadings[0];
    }
    return null;
  };

  const handleHeadingBlur = (event: Event) => {
    event.preventDefault();
    if (firstHeadingElement) {
      unfocusElement(firstHeadingElement);
    }
  };

  useEffect(() => {
    firstHeadingElement = getFirstHeadingElement();
    if (firstHeadingElement) {
      firstHeadingElement.addEventListener('blur', handleHeadingBlur);
    }
    return () => {
      if (firstHeadingElement) {
        firstHeadingElement.removeEventListener('blur', handleHeadingBlur);
      }
    };
  }, []);

  const focusElement = (element: HTMLElement): void => {
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

  const unfocusElement = (element: HTMLElement): void => {
    if (element.hasAttribute('tabIndex')) element.removeAttribute('tabIndex');
  };

  const focusTarget = (event: MouseEvent<HTMLAnchorElement>): void => {
    if (disableDefaultBehaviour) event.preventDefault();
    if (focusTargetRef && focusTargetRef.current) {
      focusElement(focusTargetRef.current);
    } else if (!disableHeadingFocus) {
      // Follow the default NHSUK Frontend behaviour, but go about it in a safer way.
      // https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/components/skip-link/skip-link.js
      if (firstHeadingElement) focusElement(firstHeadingElement);
    }
    if (onClick) {
      event.persist();
      onClick(event);
    }
  };

  return (
    <a
      className={classNames('nhsuk-skip-link', className)}
      onClick={focusTarget}
      href={href}
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </a>
  );
};

export default SkipLink;
