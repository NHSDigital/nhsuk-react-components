import { render } from '@testing-library/react';
import React from 'react';
import { TablePanel } from '..';

describe('Table.Panel', () => {
  it('matches snapshot', () => {
    const { container } = render(<TablePanel />);

    expect(container).toMatchSnapshot();
  });

  it('matches snapshot when rendering a h2 heading', () => {
    const { container } = render(
      <TablePanel heading="TestHeading" headingProps={{ headingLevel: 'h2' }} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('adds header when prop added', () => {
    const { container } = render(
      <TablePanel heading="TestHeading" headingProps={{ headingLevel: 'h2' }} />,
    );
    const heading = container.querySelector('h2.nhsuk-table__heading-tab');

    expect(heading).toBeTruthy();
  });
});
