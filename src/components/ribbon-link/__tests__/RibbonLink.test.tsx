import React from 'react';
import {render} from '@testing-library/react'
import RibbonLink from '..';

describe('RibbonLink', () => {
  it('matches snapshot', () => {
    const coolRibbon = render(<RibbonLink flavour="cool">Cool</RibbonLink>);
    const mildRibbon = render(<RibbonLink flavour="mild">Mild</RibbonLink>);
    const hotRibbon = render(<RibbonLink flavour="hot">Hot</RibbonLink>);

    expect(coolRibbon.container.querySelector('button')?.className).toBe('nhsuk-ribbon-link nhsuk-ribbon-link--cool');
    expect(mildRibbon.container.querySelector('button')?.className).toBe('nhsuk-ribbon-link nhsuk-ribbon-link--mild');
    expect(hotRibbon.container.querySelector('button')?.className).toBe('nhsuk-ribbon-link nhsuk-ribbon-link--hot');

    expect(coolRibbon).toMatchSnapshot();
    expect(mildRibbon).toMatchSnapshot();
    expect(hotRibbon).toMatchSnapshot();
  });

  describe('RibbonLink.Bar', () => {
    it('matches snapshot', () => {
      const bar = render(<RibbonLink.Bar />);
      expect(bar).toMatchSnapshot();
    });
  });
});
