/* eslint-disable jsx-a11y/anchor-is-valid */
import { render } from '@testing-library/react';
import React from 'react';
import { Card } from '..';
import { renderClient, renderServer } from '#util/components';
import { type CardType } from '#util/types';

describe('Card', () => {
  it('matches snapshot', async () => {
    const { container } = await renderClient(
      <Card>
        <Card.Image src="imageSrc" alt="imageAlt" />
        <Card.Content>
          <Card.Heading>If you need help now but it&apos;s not an emergency</Card.Heading>
          <Card.Description>
            Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>
          </Card.Description>
        </Card.Content>
      </Card>,
      { className: 'nhsuk-card' },
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot (via server)', async () => {
    const { container, element } = await renderServer(
      <Card>
        <Card.Image src="imageSrc" alt="imageAlt" />
        <Card.Content>
          <Card.Heading>If you need help now but it&apos;s not an emergency</Card.Heading>
          <Card.Description>
            Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>
          </Card.Description>
        </Card.Content>
      </Card>,
      { className: 'nhsuk-card' },
    );

    expect(container).toMatchSnapshot('server');

    await renderClient(element, {
      className: 'nhsuk-card',
      hydrate: true,
      container,
    });

    expect(container).toMatchSnapshot('client');
  });

  it('can render Card.Link as different elements', () => {
    const { container } = render(
      <Card clickable>
        <Card.Content>
          <Card.Heading>
            <Card.Link asElement="button" type="button">
              Click me!
            </Card.Link>
          </Card.Heading>
        </Card.Content>
      </Card>,
    );

    expect(container.querySelector('button.nhsuk-card__link')?.textContent).toBe('Click me!');
  });

  it('adds clickable classes', () => {
    const { container } = render(
      <Card clickable>
        <Card.Content>
          <Card.Heading className="nhsuk-heading-m">
            <Card.Link href="#">Introduction to care and support</Card.Link>
          </Card.Heading>
          <Card.Description>
            A quick guide for people who have care and support needs and their carers
          </Card.Description>
        </Card.Content>
      </Card>,
    );

    const cardEl = container.querySelector('.nhsuk-card');

    expect(cardEl).toHaveClass('nhsuk-card--clickable');
  });

  it('adds feature classes to all elements', () => {
    const { container } = render(
      <Card cardType="feature">
        <Card.Content>
          <Card.Heading>Feature card heading</Card.Heading>
          <Card.Description>Feature card description</Card.Description>
        </Card.Content>
      </Card>,
    );

    const cardEl = container.querySelector('.nhsuk-card');
    const cardHeadingEl = cardEl?.querySelector('.nhsuk-card__heading');

    expect(cardHeadingEl).toHaveClass('nhsuk-card__heading');
    expect(cardHeadingEl).toHaveClass('nhsuk-card__heading--feature');
    expect(cardHeadingEl?.tagName).toBe('H2');
  });

  it('adds primary class to card contents', () => {
    const { container } = render(
      <Card cardType="primary">
        <Card.Content>
          <Card.Heading>Feature card heading</Card.Heading>
          <Card.Description>Feature card description</Card.Description>
        </Card.Content>
      </Card>,
    );

    const cardEl = container.querySelector('.nhsuk-card');
    const cardContentsEl = cardEl?.querySelector('.nhsuk-card__content');

    expect(cardContentsEl).toHaveClass('nhsuk-card__content--primary');
  });

  it('adds secondary classes to card and contents', () => {
    const { container } = render(
      <Card cardType="secondary">
        <Card.Content>
          <Card.Heading>Feature card heading</Card.Heading>
          <Card.Description>Feature card description</Card.Description>
        </Card.Content>
      </Card>,
    );

    const cardEl = container.querySelector('.nhsuk-card');
    const cardContentsEl = cardEl?.querySelector('.nhsuk-card__content');

    expect(cardEl).toHaveClass('nhsuk-card');
    expect(cardEl).toHaveClass('nhsuk-card--secondary');
    expect(cardContentsEl).toHaveClass('nhsuk-card__content--secondary');
  });

  describe('Care card variant', () => {
    describe.each<{
      heading: string;
      cardType: CardType;
      visuallyHidden: string;
    }>([
      {
        heading: 'Non urgent heading (blue)',
        cardType: 'non-urgent',
        visuallyHidden: 'Non-urgent advice',
      },
      {
        heading: 'Urgent heading (red)',
        cardType: 'urgent',
        visuallyHidden: 'Urgent advice',
      },
      {
        heading: 'Emergency heading (red and black)',
        cardType: 'emergency',
        visuallyHidden: 'Immediate action required',
      },
    ])('$cardType', ({ heading, cardType, visuallyHidden }) => {
      it('matches the snapshot', () => {
        const { container } = render(
          <Card cardType={cardType}>
            <Card.Heading>{heading}</Card.Heading>
          </Card>,
        );

        expect(container).toMatchSnapshot();
      });

      it('adds classes to card', () => {
        const { container } = render(
          <Card cardType={cardType}>
            <Card.Heading>{heading}</Card.Heading>
          </Card>,
        );

        const cardEl = container.querySelector('.nhsuk-card');

        expect(cardEl).toHaveClass('nhsuk-card--care');
        expect(cardEl).toHaveClass(`nhsuk-card--care--${cardType}`);
      });

      it('renders the heading with the expected hidden text', () => {
        const { container } = render(
          <Card cardType={cardType}>
            <Card.Heading>{heading}</Card.Heading>
          </Card>,
        );

        expect(container.querySelector('h2')).toHaveAccessibleName(`${visuallyHidden}: ${heading}`);
      });

      it('renders the heading with custom heading level', () => {
        const { container } = render(
          <Card cardType={cardType}>
            <Card.Heading headingLevel="h3">{heading}</Card.Heading>
          </Card>,
        );

        expect(container.querySelector('h3')).toHaveAccessibleName(`${visuallyHidden}: ${heading}`);
      });
    });
  });

  describe('Card.Group', () => {
    it('matches snapshot', () => {
      const { container } = render(
        <Card.Group>
          <Card.GroupItem width="one-half">
            <Card>
              <Card.Content>
                <Card.Heading>Test Card 1</Card.Heading>
                <Card.Description>Test Card 1 Description</Card.Description>
              </Card.Content>
            </Card>
          </Card.GroupItem>
          <Card.GroupItem width="one-half">
            <Card>
              <Card.Content>
                <Card.Heading>Test Card 2</Card.Heading>
                <Card.Description>Test Card 2 Description</Card.Description>
              </Card.Content>
            </Card>
          </Card.GroupItem>
        </Card.Group>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
