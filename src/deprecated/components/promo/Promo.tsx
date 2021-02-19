import React, { HTMLProps, useContext, isValidElement, useEffect } from 'react';
import classNames from 'classnames';
import PromoContext, { PromoContextType } from './PromoContext';
import { Col, Row } from '../../../components/layout';
import type { AsElementLink } from '../../../util/types/LinkTypes';
import isDev from '../../../util/IsDev';

interface ImageProps extends HTMLProps<HTMLImageElement> {
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
}

interface BasePromoProps extends AsElementLink<HTMLAnchorElement> {
  imageSrc?: string;
  small?: boolean;
  imageProps?: ImageProps;
}

const BasePromo: React.FC<BasePromoProps> = ({
  className,
  children,
  imageSrc,
  imageProps,
  small,
  asElement: Component = 'a',
  ...rest
}) => {
  const { className: imageClassName, ...restImageProps } = imageProps || {};

  useEffect(() => {
    if (isDev()) {
      // eslint-disable-next-line no-console
      console.warn(`
        The Promo component is deprecated, and will be removed in the next major version of nhsuk-react-components.
        The Card component is the intended replacement.
      `);
    }
  }, []);

  return (
    <div className={classNames('nhsuk-promo', { 'nhsuk-promo--small': small }, className)}>
      <Component className="nhsuk-promo__link-wrapper" {...rest}>
        {imageSrc ? (
          <img
            className={classNames('nhsuk-promo__img', imageClassName)}
            src={imageSrc}
            {...restImageProps}
          />
        ) : null}
        <div className="nhsuk-promo__content">{children}</div>
      </Component>
    </div>
  );
};

BasePromo.defaultProps = {
  imageProps: {},
};

const PromoHeading: React.FC<HTMLProps<HTMLHeadingElement>> = ({ className, ...rest }) => (
  <h3 className={classNames('nhsuk-promo__heading', className)} {...rest} />
);

const PromoDescription: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-promo__description', className)} {...rest} />
);

const PromoGroup: React.FC<HTMLProps<HTMLDivElement>> = ({ className, children, ...rest }) => {
  let promoCount: number = 0;
  React.Children.forEach(children, child => {
    if (child && isValidElement(child) && child.type === Promo) {
      promoCount += 1;
    }
  });
  return (
    <Row className={classNames('nhsuk-promo-group', className)} {...rest}>
      <PromoContext.Provider value={{ promoCount, isGroup: true }}>
        {children}
      </PromoContext.Provider>
    </Row>
  );
};

interface Promo extends React.FC<BasePromoProps> {
  Group: React.FC<HTMLProps<HTMLDivElement>>;
  Description: React.FC<HTMLProps<HTMLParagraphElement>>;
  Heading: React.FC<HTMLProps<HTMLHeadingElement>>;
}
const Promo: Promo = props => {
  const { isGroup, promoCount } = useContext<PromoContextType>(PromoContext);
  let promoWidth: 'one-half' | 'one-third' | 'one-quarter' | 'full';
  if (isGroup) {
    switch (promoCount) {
      case 2:
        promoWidth = 'one-half';
        break;
      case 3:
        promoWidth = 'one-third';
        break;
      case 4:
        promoWidth = 'one-quarter';
        break;
      default:
        promoWidth = 'full';
        break;
    }
    return (
      <Col className="nhsuk-promo-group__item" width={promoWidth}>
        <BasePromo {...props} />
      </Col>
    );
  }
  return <BasePromo {...props} />;
};

Promo.Group = PromoGroup;
Promo.Description = PromoDescription;
Promo.Heading = PromoHeading;

export default Promo;
