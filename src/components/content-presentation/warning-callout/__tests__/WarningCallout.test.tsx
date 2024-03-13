import React from 'react';
import { render } from '@testing-library/react';
import WarningCallout from '../WarningCallout';

describe('WarningCallout', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(container).toMatchSnapshot();
  });

  it('adds default visually hidden text', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(container.querySelector('.nhsuk-warning-callout__label')?.textContent).toBe(
      'Important: School, nursery or work',
    );
  });

  it('adds custom visually hidden text', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Label visuallyHiddenText="Not Very Important: ">
          School, nursery or work
        </WarningCallout.Label>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(container.querySelector('.nhsuk-warning-callout__label')?.textContent).toBe(
      'Not Very Important: School, nursery or work',
    );
  });

  it('can disable visually hidden text', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Label visuallyHiddenText={false}>
          School, nursery or work
        </WarningCallout.Label>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(container.querySelector('.nhsuk-warning-callout__label')?.textContent).toBe(
      'School, nursery or work',
    );
  });
});
