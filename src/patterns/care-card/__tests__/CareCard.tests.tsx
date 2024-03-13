import React from 'react';
import { render } from '@testing-library/react';
import CareCard from '../';

describe('CareCard', () => {
  it('renders content', () => {
    const { container } = render(
      <CareCard type="non-urgent">
        <CareCard.Content>Test Content</CareCard.Content>
      </CareCard>,
    );

    expect(container.querySelector('.nhsuk-care-card__content')?.textContent).toEqual(
      'Test Content',
    );
  });

  describe('urgent', () => {
    it('matches snapshot', () => {
      const { container } = render(<CareCard type="urgent" />);

      expect(container).toMatchSnapshot('BaseCareCardUrgent');
    });

    it('renders with correct classNames', () => {
      const { container } = render(<CareCard type="urgent" />);

      expect(container.querySelector('.nhsuk-care-card--urgent')).toBeTruthy();
    });

    it('generates the correct hidden text', () => {
      const { container } = render(
        <CareCard type="urgent">
          <CareCard.Heading>Heading</CareCard.Heading>
        </CareCard>,
      );

      expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toEqual(
        'Urgent advice: ',
      );
    });
  });

  describe('immediate', () => {
    it('matches snapshot', () => {
      const { container } = render(<CareCard type="immediate" />);

      expect(container).toMatchSnapshot('BaseCareCardImmediate');
    });

    it('renders with correct classNames', () => {
      const { container } = render(<CareCard type="immediate" />);

      expect(container.querySelector('.nhsuk-care-card--immediate')).toBeTruthy();
    });

    it('generates the correct hidden text', () => {
      const { container } = render(
        <CareCard type="immediate">
          <CareCard.Heading>Heading</CareCard.Heading>
        </CareCard>,
      );

      expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toEqual(
        'Immediate action required: ',
      );
    });
  });

  describe('non-urgent', () => {
    it('matches snapshot', () => {
      const { container } = render(<CareCard type="non-urgent" />);

      expect(container).toMatchSnapshot('BaseCareCardNonUrgent');
    });

    it('renders with correct classNames', () => {
      const { container } = render(<CareCard type="non-urgent" />);

      expect(container.querySelector('.nhsuk-care-card--non-urgent')).toBeTruthy();
    });

    it('generates the correct hidden text', () => {
      const { container } = render(
        <CareCard type="non-urgent">
          <CareCard.Heading>Heading</CareCard.Heading>
        </CareCard>,
      );

      expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toEqual(
        'Non-urgent advice: ',
      );
    });
  });

  describe('hidden text', () => {
    it('renders without hidden text', () => {
      const { container } = render(
        <CareCard type="immediate">
          <CareCard.Heading visuallyHiddenText={false}>Heading</CareCard.Heading>
        </CareCard>,
      );

      expect(container.querySelector('.nhsuk-u-visually-hidden')).toBeFalsy();
    });

    it('renders with hidden text', () => {
      const { container } = render(
        <CareCard type="immediate">
          <CareCard.Heading visuallyHiddenText="Custom">Heading</CareCard.Heading>
        </CareCard>,
      );

      expect(container.querySelector('.nhsuk-u-visually-hidden')?.textContent).toEqual('Custom');
    });
  });
});
