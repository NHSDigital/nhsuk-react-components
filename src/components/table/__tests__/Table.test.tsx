import React from 'react';
import { shallow, mount } from 'enzyme';
import Table from '..';

describe('Table', () => {
  it('matches snapshot', () => {
    const element = shallow(<Table />);
    expect(element).toMatchSnapshot();
    element.unmount();
  });

  it('renders caption', () => {
    const element = shallow(<Table caption="Caption" />);
    expect(element.find('caption').text()).toBe('Caption');
    element.unmount();
  });

  describe('Table.Panel', () => {
    it('matches snapshot', () => {
      const element = shallow(<Table.Panel />);
      expect(element).toMatchSnapshot();
      element.unmount();
    });

    it('renders heading', () => {
      const element = shallow(<Table.Panel heading="Heading" />);
      expect(
        element
          .find('.nhsuk-table__heading-tab')
          .render()
          .text(),
      ).toBe('Heading');
      element.unmount();
    });
  });

  describe('Table.Head', () => {
    it('matches snapshot', () => {
      const element = shallow(<Table.Head />);
      expect(element).toMatchSnapshot();
      element.unmount();
    });

    it('causes Table.Cell to inherit properties', () => {
      const element = mount(
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell />
            </Table.Row>
          </Table.Head>
        </Table>,
      );
      expect(element.find('th').exists()).toBeTruthy();
      expect(element.find('th').hasClass('nhsuk-table__header')).toBeTruthy();
      element.unmount();
    });
  });

  describe('Table.Body', () => {
    it('matches snapshot', () => {
      const element = shallow(<Table.Body />);
      expect(element).toMatchSnapshot();
      element.unmount();
    });

    it('causes Table.Cell to inherit properties', () => {
      const element = mount(
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>,
      );
      expect(element.find('td').exists()).toBeTruthy();
      expect(element.find('td').hasClass('nhsuk-table__cell')).toBeTruthy();
      element.unmount();
    });
  });

  describe('Table.Row', () => {
    it('matches snapshot', () => {
      const element = shallow(<Table.Row />);
      expect(element).toMatchSnapshot();
      element.unmount();
    });
  });

  describe('Table.Cell', () => {
    it('matches snapshot', () => {
      const element = shallow(<Table.Cell>Cell</Table.Cell>);
      expect(element.text()).toBe('Cell');
      expect(element).toMatchSnapshot();
      element.unmount();
    });

    it('renders as header when supplied', () => {
      const element = shallow(<Table.Cell header />);
      expect(element.type()).toBe('th');
      expect(element.hasClass('nhsuk-table__header')).toBeTruthy();
      element.unmount();
    });

    it('renders normally when header is false', () => {
      const element = shallow(<Table.Cell header={false} />);
      expect(element.type()).toBe('td');
      expect(element.hasClass('nhsuk-table__header')).toBeFalsy();
      expect(element.hasClass('nhsuk-table__cell')).toBeTruthy();
      expect(element.hasClass('nhsuk-table__cell--numeric')).toBe(false);
      element.unmount();
    });

    it('renders a numeric cell when isNumeric is true', () => {
      const element = shallow(<Table.Cell header={false} isNumeric />);
      expect(element.hasClass('nhsuk-table__header')).toBe(false);
      expect(element.hasClass('nhsuk-table__cell')).toBe(true);
      expect(element.hasClass('nhsuk-table__cell--numeric')).toBe(true);
      expect(element.hasClass('nhsuk-table__header--numeric')).toBe(false);
      element.unmount();
    });

    it('renders a numeric header when isNumeric is true and header is true', () => {
      const element = shallow(<Table.Cell header isNumeric />);
      expect(element.hasClass('nhsuk-table__header')).toBe(true);
      expect(element.hasClass('nhsuk-table__cell')).toBe(false);
      expect(element.hasClass('nhsuk-table__header--numeric')).toBe(true);
      expect(element.hasClass('nhsuk-table__cell--numeric')).toBe(false);
      element.unmount();
    });
  });
});
