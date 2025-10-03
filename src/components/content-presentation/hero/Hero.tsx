import classNames from 'classnames';
import { forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';
import { Col, Container, Row } from '#components/layout';
import { HeadingLevel, type HeadingLevelProps } from '#components/utils';

export interface HeroContentProps extends ComponentPropsWithoutRef<'div'> {
  hasImage: boolean;
}

const HeroContent: FC<HeroContentProps> = ({ children, hasImage }) => {
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

const HeroHeading: FC<HeadingLevelProps> = ({ className, headingLevel = 'h1', ...rest }) => (
  <HeadingLevel
    className={classNames('nhsuk-u-margin-bottom-3', className)}
    headingLevel={headingLevel}
    {...rest}
  />
);

const HeroText: FC<ComponentPropsWithoutRef<'p'>> = ({ className, ...rest }) => (
  <p className={classNames('nhsuk-body-l nhsuk-u-margin-bottom-0', className)} {...rest} />
);

export interface HeroProps extends ComponentPropsWithoutRef<'div'> {
  imageSrc?: string;
}

const HeroComponent = forwardRef<HTMLElement, HeroProps>(
  ({ children, className, imageSrc, ...rest }, forwardedRef) => (
    <section
      className={classNames(
        'nhsuk-hero',
        { 'nhsuk-hero--image': imageSrc },
        { 'nhsuk-hero--image-description': imageSrc && children },
        className,
      )}
      style={imageSrc ? { backgroundImage: `url('${imageSrc}')` } : undefined}
      ref={forwardedRef}
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
  ),
);

HeroComponent.displayName = 'Hero';
HeroHeading.displayName = 'Hero.Heading';
HeroText.displayName = 'Hero.Text';

export const Hero = Object.assign(HeroComponent, {
  Heading: HeroHeading,
  Text: HeroText,
});
