import React, { createRef } from 'react';
import { render } from '@testing-library/react';
import WarningCallout from '../WarningCallout';

describe('WarningCallout', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Heading>Important</WarningCallout.Heading>
        <p>
          For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
          including herbal medicines, vitamins or supplements.
        </p>
      </WarningCallout>,
    );

    expect(container).toMatchSnapshot('WarningCallout');
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<WarningCallout ref={ref} />);

    const warningCalloutEl = container.querySelector('div');

    expect(ref.current).toBe(warningCalloutEl);
    expect(ref.current).toHaveClass('nhsuk-warning-callout');
  });

  it('omits visually hidden text when unnecessary', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Heading>Important</WarningCallout.Heading>
        <p>
          For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
          including herbal medicines, vitamins or supplements.
        </p>
      </WarningCallout>,
    );

    expect(container.querySelector('.nhsuk-warning-callout__label')?.textContent).toBe(
      'Important:',
    );
  });

  it('adds visually hidden text when necessary', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Heading>School, nursery or work</WarningCallout.Heading>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(container).toMatchSnapshot('WarningCalloutWithTextRole');

    expect(container.querySelector('.nhsuk-warning-callout__label')?.textContent).toBe(
      'Important: School, nursery or work',
    );
  });
});
