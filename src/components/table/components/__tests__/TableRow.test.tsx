import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import TableContext, { ITableContext } from '../../TableContext';
import TableSectionContext, { TableSection } from '../../TableSectionContext';
import TableCell from '../TableCell';
import TableRow from '../TableRow';

const assertCellText = (c: ReactWrapper, cellNumber: number, text: string) => {
  expect(c.find(`[data-test="cell-${cellNumber}"]`).first().text()).toEqual(text);
}

describe('Table.Row', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <table>
        <tbody>
          <TableRow />
        </tbody>
      </table>,
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it('renders headers in the first column if responsive', () => {
    const contextValue: ITableContext = {
      isResponsive: true,
      headings: ['a', 'b', 'c'],
      setHeadings: jest.fn(),
    };
    const wrapper = mount(
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
      </table>
    );
    
    assertCellText(wrapper, 1, 'a 1');
    assertCellText(wrapper, 2, 'b 2');
    assertCellText(wrapper, 3, 'c 3');
    expect(wrapper.find('.nhsuk-table-responsive__heading').length).toBe(3);
  
    wrapper.unmount();
  });

  it('renders row contents without headers in responsive mode if they are not cells', () => {
    const contextValue: ITableContext = {
      isResponsive: true,
      headings: ['a', 'b', 'c'],
      setHeadings: jest.fn(),
    };
    const wrapper = mount(
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
      </table>
    );
    
    assertCellText(wrapper, 1, '1');
    assertCellText(wrapper, 2, '2');
    assertCellText(wrapper, 3, '3');
    expect(wrapper.find('.nhsuk-table-responsive__heading').length).toBe(0);
  
    wrapper.unmount();
  });

  it('renders row contents as headers in head section in responsive mode', () => {
    const setHeadings = jest.fn();
    const contextValue: ITableContext = {
      isResponsive: true,
      headings: ['a', 'b', 'c'],
      setHeadings,
    };
    const wrapper = mount(
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
      </table>
    );
    
    expect(setHeadings).toHaveBeenCalledWith(['1', '2', '3']);

    wrapper.unmount();
  });

  it('sets headers, skipping contents outside of table cells in responsive mode', () => {
    const setHeadings = jest.fn();
    const contextValue: ITableContext = {
      isResponsive: true,
      headings: ['a', 'b', 'c'],
      setHeadings,
    };
    const wrapper = mount(
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
      </table>
    );
    
    expect(setHeadings).toHaveBeenCalledWith(['2']);

    wrapper.unmount();
  });

  it('does not render row contents as headers in head section in normal mode', () => {
    const contextValue: ITableContext = {
      isResponsive: false,
      headings: ['a', 'b', 'c'],
      setHeadings: jest.fn(),
    };
    const wrapper = mount(
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
      </table>
    );
    
    assertCellText(wrapper, 1, '1');
    assertCellText(wrapper, 2, '2');
    assertCellText(wrapper, 3, '3');
    expect(wrapper.find('.nhsuk-table-responsive__heading').length).toBe(0);
  
    wrapper.unmount();
  });
});
