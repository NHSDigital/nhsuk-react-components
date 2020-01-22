import React, { HTMLProps, useContext, isValidElement } from 'react';
import classNames from 'classnames';
import PromoContext, { PromoContextType } from './PromoContext';
import { Col, Row } from '../layout';

interface ImageProps extends HTMLProps<HTMLImageElement> {
  crossOrigin?: '' | 'anonymous' | 'use-credentials';
}

interface BasePromoProps extends HTMLProps<HTMLAnchorElement> {
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
  ...rest
}) => {
  let imageClassName = '';
  if (imageProps && imageProps.className) {
    imageClassName = imageProps.className;
    delete imageProps.className;
  }
  return (
    <div className={classNames('nhsuk-promo', { 'nhsuk-promo--small': small }, className)}>
      <a className="nhsuk-promo__link-wrapper" {...rest}>
        {imageSrc ? (
          <img
            className={classNames('nhsuk-promo__img', imageClassName)}
            src={imageSrc}
            {...imageProps}
          ></img>
        ) : null}
        <div className="nhsuk-promo__content">{children}</div>
      </a>
    </div>
  );
};

BasePromo.defaultProps = {
  imageProps: {},
};

const PromoHeading: React.FC<HTMLProps<HTMLHeadingElement>> = ({ className, ...rest }) => (
  <h3 className={classNames('nhsuk-promo__heading', className)} {...rest}></h3>
);

const PromoDescription: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-promo__description', className)} {...rest}></p>
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
        <BasePromo {...props}></BasePromo>
      </Col>
    );
  }
  return <BasePromo {...props}></BasePromo>;
};

Promo.Group = PromoGroup;
Promo.Description = PromoDescription;
Promo.Heading = PromoHeading;

export default Promo;
