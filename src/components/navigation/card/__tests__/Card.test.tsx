/* eslint-disable jsx-a11y/anchor-is-valid */
import { render } from '@testing-library/react';
import React from 'react';
import Card from '../Card';

describe('Card', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Card>
        <Card.Image src="imageSrc" alt="imageAlt" />
        <Card.Content>
          <Card.Heading>If you need help now but it&apos;s not an emergency</Card.Heading>
          <Card.Description>
            Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>
          </Card.Description>
        </Card.Content>
      </Card>,
    );

    expect(container).toMatchSnapshot();
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

    expect(container.querySelector('div.nhsuk-card.nhsuk-card.nhsuk-card--clickable')).toBeTruthy();
  });

  it('adds feature classes to all elements', () => {
    const { container } = render(
      <Card feature>
        <Card.Content>
          <Card.Heading>Feature card heading</Card.Heading>
          <Card.Description>Feature card description</Card.Description>
        </Card.Content>
      </Card>,
    );

    expect(container.querySelector('div.nhsuk-card.nhsuk-card.nhsuk-card--feature')).toBeTruthy();
    expect(
      container.querySelector(
        'div.nhsuk-card__content.nhsuk-card__content.nhsuk-card__content--feature',
      ),
    ).toBeTruthy();
    expect(
      container.querySelector(
        'h2.nhsuk-card__heading.nhsuk-card__heading.nhsuk-card__heading--feature',
      ),
    ).toBeTruthy();
  });

  it('adds primary class to card contents', () => {
    const { container } = render(
      <Card primary>
        <Card.Content>
          <Card.Heading>Feature card heading</Card.Heading>
          <Card.Description>Feature card description</Card.Description>
        </Card.Content>
      </Card>,
    );

    expect(
      container.querySelector(
        'div.nhsuk-card__content.nhsuk-card__content.nhsuk-card__content--primary',
      ),
    ).toBeTruthy();
  });

  it('adds secondary classes to card and contents', () => {
    const { container } = render(
      <Card secondary>
        <Card.Content>
          <Card.Heading>Feature card heading</Card.Heading>
          <Card.Description>Feature card description</Card.Description>
        </Card.Content>
      </Card>,
    );

    expect(container.querySelector('div.nhsuk-card.nhsuk-card.nhsuk-card--secondary')).toBeTruthy();
    expect(
      container.querySelector(
        'div.nhsuk-card__content.nhsuk-card__content.nhsuk-card__content--secondary',
      ),
    ).toBeTruthy();
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
