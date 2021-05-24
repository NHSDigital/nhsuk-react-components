/* eslint-disable jsx-a11y/anchor-is-valid */
import { mount } from 'enzyme';
import React from 'react';
import Card from '../Card';

describe('Card', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <Card>
        <Card.Image src="imageSrc" alt="imageAlt" />
        <Card.Content>
          <Card.Heading>If you need help now but it&apos;s not an emergency</Card.Heading>
          <Card.Description>
            Go to
            {' '}
            <a href="#">111.nhs.uk</a>
            {' '}
            or
            {' '}
            <a href="#">call 111</a>
          </Card.Description>
        </Card.Content>
      </Card>,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  it('can render Card.Link as different elements', () => {
    const wrapper = mount(
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
    expect(
      wrapper.find(Card.Link).containsMatchingElement(
        <button type="button" className="nhsuk-card__link">
          Click me!
        </button>,
      ),
    ).toBeTruthy();
  });

  it('adds clickable classes', () => {
    const wrapper = mount(
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

    expect(wrapper.find('div.nhsuk-card').props().className).toBe(
      'nhsuk-card nhsuk-card--clickable',
    );

    wrapper.unmount();
  });

  it('adds feature classes to all elements', () => {
    const wrapper = mount(
      <Card feature>
        <Card.Content>
          <Card.Heading>Feature card heading</Card.Heading>
          <Card.Description>Feature card description</Card.Description>
        </Card.Content>
      </Card>,
    );

    expect(wrapper.find('div.nhsuk-card').props().className).toBe('nhsuk-card nhsuk-card--feature');
    expect(wrapper.find('div.nhsuk-card__content').props().className).toBe(
      'nhsuk-card__content nhsuk-card__content--feature',
    );
    expect(wrapper.find('h2.nhsuk-card__heading').props().className).toBe(
      'nhsuk-card__heading nhsuk-card__heading--feature',
    );

    wrapper.unmount();
  });

  describe('Card.Group', () => {
    it('matches snapshot', () => {
      const wrapper = mount(
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

      expect(wrapper).toMatchSnapshot();

      wrapper.unmount();
    });
  });
});
