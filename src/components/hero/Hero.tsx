import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { Container, Row, Col } from '../layout';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';

interface HeroContentProps extends HTMLProps<HTMLDivElement> {
  hasImage: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ children, hasImage }) => {
  if (!children) {
    return null;
  }
  return (
    <Container className={classNames({ 'nhsuk-hero--border': hasImage })}>
      <Row>
        <Col width="two-thirds">
          {hasImage ? (
            <div className="nhsuk-hero-content">
              {children}
              <span className="nhsuk-hero__arrow" aria-hidden="true" />
            </div>
          ) : (
            <div className="nhsuk-hero__wrapper">{children}</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

interface HeroHeadingProps extends HTMLProps<HTMLHeadingElement> {
  headingLevel: HeadingLevelType;
}

const HeroHeading: React.FC<HeroHeadingProps> = ({ className, headingLevel = 'h1', ...rest }) => (
  <HeadingLevel className={classNames('nhsuk-u-margin-bottom-3', className)} headingLevel={headingLevel} {...rest} />
);

const HeroText: React.FC<HTMLProps<HTMLParagraphElement>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-body-l nhsuk-u-margin-bottom-0', className)} {...rest} />
);

interface HeroProps extends HTMLProps<HTMLDivElement> {
  imageSrc?: string;
}

interface Hero extends React.FC<HeroProps> {
  Heading: React.FC<HeroHeadingProps>;
  Text: React.FC<HTMLProps<HTMLParagraphElement>>;
}

const Hero: Hero = ({
  className, children, imageSrc, ...rest
}) => (
  <section
    className={classNames(
      'nhsuk-hero',
      { 'nhsuk-hero--image': imageSrc },
      { 'nhsuk-hero--image-description': imageSrc && children },
      className,
    )}
    style={imageSrc ? { backgroundImage: `url('${imageSrc}')` } : undefined}
    {...rest}
  >
    {imageSrc ? (
      <div className="nhsuk-hero__overlay">
        <HeroContent hasImage={Boolean(imageSrc)}>{children}</HeroContent>
      </div>
    ) : (
      <HeroContent hasImage={Boolean(imageSrc)}>{children}</HeroContent>
    )}
  </section>
);

Hero.Heading = HeroHeading;
Hero.Text = HeroText;

export default Hero;
