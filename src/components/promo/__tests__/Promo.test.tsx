import React from 'react';
import Promo from '..';
import { mount, shallow } from 'enzyme';

describe('Promo', () => {
  it('matches snapshot', () => {
    const element = mount(<Promo></Promo>);
    expect(element).toMatchSnapshot('Promo');
    element.unmount();
  });

  it('uses imageProps and imageSrc', () => {
    const imageProps = {
      className: 'className',
    };
    const element = mount(<Promo imageProps={imageProps} imageSrc="image.png"></Promo>);
    const renderedElement = element.render();
    expect(renderedElement.find('.nhsuk-promo__img').hasClass('className')).toBeTruthy();
    expect(renderedElement.find('.nhsuk-promo__img').prop('src')).toBe('image.png');

    element.unmount();
  });

  describe('Promo.Heading', () => {
    it('matches snapshot', () => {
      const element = shallow(<Promo.Heading>Heading</Promo.Heading>);
      expect(element).toMatchSnapshot('Promo.Heading');
      expect(element.text()).toBe('Heading');
      element.unmount();
    });
  });

  describe('Promo.Description', () => {
    const element = shallow(<Promo.Description>Description</Promo.Description>);
    expect(element).toMatchSnapshot('Promo.Description');
    expect(element.text()).toBe('Description');
    element.unmount();
  });

  describe('Promo.Group', () => {
    it('assigns correct widths', () => {
      const twoColumns = mount(
        <Promo.Group>
          <Promo />
          <Promo />
        </Promo.Group>,
      );
      expect(twoColumns.find('.nhsuk-grid-column-one-half').length).toBe(2);
      twoColumns.unmount();

      const threeColumns = mount(
        <Promo.Group>
          <Promo />
          <Promo />
          <Promo />
        </Promo.Group>,
      );
      expect(threeColumns.find('.nhsuk-grid-column-one-third').length).toBe(3);
      threeColumns.unmount();

      const fourColumns = mount(
        <Promo.Group>
          <Promo />
          <Promo />
          <Promo />
          <Promo />
        </Promo.Group>,
      );
      expect(fourColumns.find('.nhsuk-grid-column-one-quarter').length).toBe(4);
      fourColumns.unmount();

      const fourColumnsWithOther = mount(
        <Promo.Group>
          <Promo />
          <p>Test</p>
          <Promo />
          <Promo />
          <Promo />
        </Promo.Group>,
      );
      expect(fourColumnsWithOther.find('.nhsuk-grid-column-one-quarter').length).toBe(4);
      expect(fourColumnsWithOther.text()).toBe('Test');
      fourColumnsWithOther.unmount();

      const fiveColumns = mount(
        <Promo.Group>
          <Promo />
          <Promo />
          <Promo />
          <Promo />
          <Promo />
        </Promo.Group>,
      );
      expect(fiveColumns.find('.nhsuk-grid-column-full').length).toBe(5);
      fiveColumns.unmount();
    });
  });
});
