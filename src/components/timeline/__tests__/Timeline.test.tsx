import React from 'react';
import Timeline from '../Timeline';
import {render} from '@testing-library/react'
import Event, { EventProps } from '../components/Event';
import Tag from '../../tag/Tag';

const actionLinkText = 'Cancel';
const eventInstigator = 'System';

const testEvents: EventProps[] = [
  {
    title: <>Result sent</>,
    instigator: <>{eventInstigator}</>,
    date: '19 Nov 2019, 7:49:10 pm',
    description: [
      <>Test Result: (39S) Low-grade dyskaryosis, HPV positive, Repeat Advised</>,
      <>Test Date: 19-Oct-2020, 9:00:00 am</>,
    ],
    action: (
      <span className="nhsuk-timeline__action">
        -
        <Tag className="nhsuk-timeline__tag" color="yellow">
          Send to printer
        </Tag>
        <a className="nhsuk-timeline__link" href="/placeholder/">
          Cancel
        </a>
      </span>
    ),
  },
  {
    title: <>Patient deferred</>,
    date: '19 Nov 2019, 4:28:57 pm',
    description: [
      <>Defer Reason: Pregnancy</>,
      <>CRM Case Number: CAS-12345-ABCDE</>,
      <>Comments: Requested via the GP form</>,
    ],
  },
  {
    title: <>Screening invitation sent</>,
    instigator: <>System</>,
    date: '18 Nov 2019, 7:49:10 pm',
    action: (
      <span className="nhsuk-timeline__action">
        -
        <Tag className="nhsuk-timeline__tag" color="grey">
          Sent to patient
        </Tag>
        <a className="nhsuk-timeline__link" href="/placeholder2">
          Resend
        </a>
      </span>
    ),
  },
];

describe('Timeline', () => {
  it('matches snapshot', () => {
    const timeline = render(<Timeline events={testEvents} />);

    expect(timeline).toMatchSnapshot();

  });

  it('should have correct classes applied', () => {
    const timeline = render(<Timeline events={testEvents} />);

    expect(timeline.container.querySelector('.nhsuk-timeline')).toBeTruthy();
  });

  describe('Event', () => {
    it('matches snapshot', () => {
      const event = render(<Event {...testEvents[0]} />);

      expect(event).toMatchSnapshot();

    });

    it('should have correct classes applied', () => {
      const event = render(<Event {...testEvents[0]} />);

      expect(event.container.querySelector('.nhsuk-timeline__event')).toBeTruthy();

    });

    it('should have correct title', () => {
      const event = render(<Event {...testEvents[1]} />);

      expect(event.container.querySelector('.nhsuk-timeline__title')?.textContent).toBe('Patient deferred');

    });

    it('should have correct instigator if instigator data is present', () => {
      const event = render(<Event {...testEvents[0]} />);

     expect(event.container.querySelector('.nhsuk-timeline__by')).toBeTruthy();
      expect(event.container.querySelector('.nhsuk-timeline__by')?.textContent).toBe(` by ${eventInstigator}`);

    });

    it('should not have instigator if instigator data is not present', () => {
      const event = render(<Event {...testEvents[1]} />);

      expect(event.container.querySelector('.nhsuk-timeline__by')).toBeFalsy();

    });

    it('should have correct date', () => {
      const event = render(<Event {...testEvents[0]} />);

      expect(event.container.querySelector('.nhsuk-timeline__date time')?.textContent).toBe(testEvents[0].date);
    });

    it('has correct description items if description data is present', () => {
      const event = render(<Event {...testEvents[0]} />);

      expect(event.container.querySelector('.nhsuk-timeline__description-item')).toBeTruthy();
    });

    it('has no description items if description data is not present', () => {
      const event = render(<Event {...testEvents[2]} />);

      expect(event.container.querySelector('.nhsuk-timeline__description-item')).toBeFalsy();
    });

    it('has correct link text if action data is present', () => {
      const event = render(<Event {...testEvents[0]} />);

      expect(event.container.querySelector('.nhsuk-timeline__link')?.textContent).toBe(actionLinkText);
    });

    it('will show action if action data present', () => {
      const event = render(<Event {...testEvents[0]} />);

      expect(event.container.querySelector('.nhsuk-timeline__action')).toBeTruthy();
    });

    it('will not show action if no action data present', () => {
      const event = render(<Event {...testEvents[1]} />);

      expect(event.container.querySelector('.nhsuk-timeline__action')).toBeFalsy();
    });
  });
});
