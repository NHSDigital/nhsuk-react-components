import React from 'react';
import Pagination from '..';
import { shallow } from 'enzyme';
import { ArrowLeft, ArrowRight } from '../../icons';

describe('Pagination', () => {
  it('matches snapshot', () => {
    const element = shallow(<Pagination></Pagination>);
    expect(element).toMatchSnapshot('Pagination');
    element.unmount();
  });

  describe('Pagination.Link', () => {
    it('matches snapshot', () => {
      const element = shallow(<Pagination.Link></Pagination.Link>);
      expect(element).toMatchSnapshot('Pagination.Link');
      element.unmount();
    });

    it('renders previous elements', () => {
      const element = shallow(<Pagination.Link previous>PreviousText</Pagination.Link>);
      const paginationLink = element.find('.nhsuk-pagination__link');
      expect(element.hasClass('nhsuk-pagination-item--previous')).toBeTruthy();
      expect(element.hasClass('nhsuk-pagination-item--next')).toBeFalsy();
      expect(element.find('.nhsuk-pagination__title').text()).toBe('Previous');
      expect(element.contains(<ArrowLeft />)).toBeTruthy();
      expect(element.contains(<ArrowRight />)).toBeFalsy();
      expect(element.find('.nhsuk-pagination__page').text()).toBe('PreviousText');
      expect(paginationLink.hasClass('nhsuk-pagination__link--prev')).toBeTruthy();
      expect(paginationLink.hasClass('nhsuk-pagination__link--next')).toBeFalsy();
      element.unmount();
    });

    it('renders next elements', () => {
      const element = shallow(<Pagination.Link next>NextText</Pagination.Link>);
      const paginationLink = element.find('.nhsuk-pagination__link');
      expect(element.hasClass('nhsuk-pagination-item--previous')).toBeFalsy();
      expect(element.hasClass('nhsuk-pagination-item--next')).toBeTruthy();
      expect(element.find('.nhsuk-pagination__title').text()).toBe('Next');
      expect(element.contains(<ArrowLeft />)).toBeFalsy();
      expect(element.contains(<ArrowRight />)).toBeTruthy();
      expect(element.find('.nhsuk-pagination__page').text()).toBe('NextText');
      expect(paginationLink.hasClass('nhsuk-pagination__link--prev')).toBeFalsy();
      expect(paginationLink.hasClass('nhsuk-pagination__link--next')).toBeTruthy();
      element.unmount();
    });
  });
});
