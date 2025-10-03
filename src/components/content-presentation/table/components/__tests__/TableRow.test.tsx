import { render } from '@testing-library/react';
import React from 'react';
import { TableCell, TableRow } from '..';
import { TableContext, TableSection, TableSectionContext, type ITableContext } from '../..';

const assertCellText = (container: HTMLElement, cellNumber: number, text: string) => {
  expect(container.querySelector(`[data-test="cell-${cellNumber}"]`)).toHaveTextContent(text);
};

describe('Table.Row', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders headers in the first column if responsive', () => {
    const contextValue: ITableContext = {
      firstCellIsHeader: false,
      headings: [
        'A',
        'B',
        <>
          C<span className="nhsuk-u-visually-hidden"> description</span>
        </>,
      ],
      setHeadings: jest.fn(),
      responsive: true,
    };
    const { container } = render(
      <table>
        <TableContext.Provider value={contextValue}>
          <TableSectionContext.Provider value={TableSection.BODY}>
            <tbody>
              <TableRow>
                <TableCell data-test="cell-1">1</TableCell>
                <TableCell data-test="cell-2">2</TableCell>
                <TableCell data-test="cell-3">3</TableCell>
              </TableRow>
            </tbody>
          </TableSectionContext.Provider>
        </TableContext.Provider>
      </table>,
    );

    assertCellText(container, 1, 'A 1');
    assertCellText(container, 2, 'B 2');
    assertCellText(container, 3, 'C description 3');
    expect(container.querySelectorAll('.nhsuk-table-responsive__heading').length).toBe(3);
  });

  it('renders row contents without headers in responsive mode if they are not cells', () => {
    const contextValue: ITableContext = {
      firstCellIsHeader: false,
      headings: ['A', 'B', 'C'],
      setHeadings: jest.fn(),
      responsive: true,
    };
    const { container } = render(
      <table>
        <TableContext.Provider value={contextValue}>
          <TableSectionContext.Provider value={TableSection.BODY}>
            <tbody>
              <TableRow>
                <td data-test="cell-1">1</td>
                <td data-test="cell-2">2</td>
                <td data-test="cell-3">3</td>
              </TableRow>
            </tbody>
          </TableSectionContext.Provider>
        </TableContext.Provider>
      </table>,
    );

    assertCellText(container, 1, '1');
    assertCellText(container, 2, '2');
    assertCellText(container, 3, '3');
    expect(container.querySelectorAll('.nhsuk-table-responsive__heading').length).toBe(0);
  });

  it('renders row contents as headers in head section in responsive mode', () => {
    const setHeadings = jest.fn();
    const contextValue: ITableContext = {
      firstCellIsHeader: false,
      headings: ['A', 'B', 'C'],
      setHeadings,
      responsive: true,
    };
    render(
      <table>
        <TableContext.Provider value={contextValue}>
          <TableSectionContext.Provider value={TableSection.HEAD}>
            <thead>
              <TableRow>
                <TableCell data-test="cell-1">1</TableCell>
                <TableCell data-test="cell-2">2</TableCell>
                <TableCell data-test="cell-3">3</TableCell>
              </TableRow>
            </thead>
          </TableSectionContext.Provider>
        </TableContext.Provider>
      </table>,
    );

    expect(setHeadings).toHaveBeenCalledWith(['1', '2', '3']);
  });

  it('sets headers, skipping contents outside of table cells in responsive mode', () => {
    const setHeadings = jest.fn();
    const contextValue: ITableContext = {
      firstCellIsHeader: false,
      headings: ['A', 'B', 'C'],
      setHeadings,
      responsive: true,
    };
    render(
      <table>
        <TableContext.Provider value={contextValue}>
          <TableSectionContext.Provider value={TableSection.HEAD}>
            <thead>
              <TableRow>
                <td data-test="cell-1">1</td>
                <TableCell data-test="cell-2">2</TableCell>
                <td data-test="cell-3">3</td>
              </TableRow>
            </thead>
          </TableSectionContext.Provider>
        </TableContext.Provider>
      </table>,
    );

    expect(setHeadings).toHaveBeenCalledWith(['2']);
  });

  it('does not render row contents as headers in head section in normal mode', () => {
    const contextValue: ITableContext = {
      firstCellIsHeader: false,
      headings: ['A', 'B', 'C'],
      setHeadings: jest.fn(),
      responsive: false,
    };
    const { container } = render(
      <table>
        <TableContext.Provider value={contextValue}>
          <TableSectionContext.Provider value={TableSection.HEAD}>
            <thead>
              <TableRow>
                <TableCell data-test="cell-1">1</TableCell>
                <TableCell data-test="cell-2">2</TableCell>
                <TableCell data-test="cell-3">3</TableCell>
              </TableRow>
            </thead>
          </TableSectionContext.Provider>
        </TableContext.Provider>
      </table>,
    );

    assertCellText(container, 1, '1');
    assertCellText(container, 2, '2');
    assertCellText(container, 3, '3');
    expect(container.querySelectorAll('.nhsuk-table-responsive__heading').length).toBe(0);
  });
});
