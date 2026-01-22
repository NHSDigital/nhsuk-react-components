import { render } from '@testing-library/react';
import { createRef } from 'react';

import { WarningCallout } from '..';

describe('WarningCallout', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Heading>School, nursery or work</WarningCallout.Heading>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot without hidden text', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Heading>Important</WarningCallout.Heading>
        <p>
          For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
          including herbal medicines, vitamins or supplements.
        </p>
      </WarningCallout>,
    );

    expect(container).toMatchSnapshot();
  });

  it('forwards refs', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<WarningCallout ref={ref} />);

    const warningCalloutEl = container.querySelector('div');

    expect(ref.current).toBe(warningCalloutEl);
    expect(ref.current).toHaveClass('nhsuk-card nhsuk-card--warning');
  });

  it('renders the heading with the expected hidden text', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Heading>School, nursery or work</WarningCallout.Heading>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    const headingEl = container.querySelector('h3');

    expect(headingEl).toHaveTextContent('Important: School, nursery or work');
  });

  it('renders the heading with custom visually hidden text', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Heading visuallyHiddenText="Custom">
          School, nursery or work
        </WarningCallout.Heading>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    const headingEl = container.querySelector('h3');

    expect(headingEl).toHaveTextContent('Custom: School, nursery or work');
  });

  it('renders the heading with custom visually hidden HTML', () => {
    const { container } = render(
      <WarningCallout>
        <WarningCallout.Heading
          visuallyHiddenText={
            <>
              Custom <em>with HTML</em>
            </>
          }
        >
          School, nursery or work
        </WarningCallout.Heading>
        <p>
          Stay away from school, nursery or work until all the spots have crusted over. This is
          usually 5 days after the spots first appeared.
        </p>
      </WarningCallout>,
    );

    const headingEl = container.querySelector('h3');

    expect(headingEl).toHaveTextContent('Custom with HTML: School, nursery or work');
    expect(headingEl).toContainHTML('Custom <em>with HTML</em>');
  });
});
