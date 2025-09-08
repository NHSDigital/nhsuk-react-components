import React, { ReactNode, useState, MouseEvent, useEffect } from 'react';
import classNames from 'classnames';

export interface SectionProps extends React.HTMLProps<HTMLDetailsElement> {
  heading: ReactNode;
  defaultOpen?: boolean;
}

const ToggleIcon: React.FC<{ open: boolean }> = ({ open }) => (
  <svg
    className="nhsuk-accordion-menu__icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={32}
    height={32}
    aria-hidden="true"
  >
    <circle cx="16" cy="16" r="16" fill="#ffffff" />
    <path
      fill="none"
      stroke="#003087"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="4"
      d={open ? 'M8,16 h16' : 'M16 8v16M8 16h16'}
    />
  </svg>
);

const Section: React.FC<SectionProps> = ({
  children,
  className,
  heading,
  open,
  defaultOpen,
  tabIndex,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(open === undefined ? Boolean(defaultOpen) : open);

  const onSummaryClick = (event: MouseEvent<HTMLDetailsElement>) => {
    event.preventDefault();
    if (open === undefined) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (open !== undefined && isOpen !== open) {
      setIsOpen(open);
    }
  }, [isOpen, open]);

  return (
    <details
      className={classNames('nhsuk-accordion-menu__section', className)}
      open={isOpen}
      {...rest}
    >
      <summary
        className="nhsuk-accordion-menu__section-summary"
        role="tab"
        tabIndex={tabIndex || 1}
        onClick={onSummaryClick}
      >
        <span className="nhsuk-accordion-menu__section-summary-text">{heading}</span>
        <ToggleIcon open={isOpen} />
      </summary>
      {children}
    </details>
  );
};

export default Section;
