import * as React from 'react';
import classNames from 'classnames';
import Bar from './components/Bar';
import { ArrowRightCircleIcon } from 'src';
import './_RibbonLink.scss';

type RibbonFlavours = 'hot' | 'mild' | 'cool';

// Use public, bundler-safe props types
type RibbonProps = React.ComponentPropsWithoutRef<'button'> & {
  flavour: RibbonFlavours;
};

// Static member typed from the actual import to avoid drift
type RibbonLinkComponent = React.FC<RibbonProps> & {
  Bar: typeof Bar;
};

const RibbonLink: RibbonLinkComponent = ({ children, flavour, className, ...rest }) => (
  <button
    className={classNames('nhsuk-ribbon-link', `nhsuk-ribbon-link--${flavour}`, className)}
    type="button"
    {...rest}
  >
    <ArrowRightCircleIcon className="nhsuk-ribbon-link__icon" />
    {children}
  </button>
);

RibbonLink.Bar = Bar;

export default RibbonLink;
