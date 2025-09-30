import React from 'react';
import { render } from '@testing-library/react';
import { NHSUKSize } from '@util/types/NHSUKTypes';
import Table from '../..';
import TableCaption from '../TableCaption';

describe('TableCaption', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Table>
        <TableCaption>Caption</TableCaption>
      </Table>,
    );

    expect(container).toMatchSnapshot();
  });

  it.each<NHSUKSize>(['s', 'm', 'l', 'xl'])('renders with custom size %s', (size) => {
    const { container } = render(
      <Table>
        <TableCaption size={size}>Caption</TableCaption>
      </Table>,
    );

    const captionEl = container.querySelector('caption');

    expect(captionEl).toHaveTextContent('Caption');
    expect(captionEl).toHaveClass(`nhsuk-table__caption--${size}`);

    expect(container).toMatchSnapshot();
  });
});
