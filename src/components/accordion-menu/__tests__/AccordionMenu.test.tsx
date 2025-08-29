import React from 'react';
import {render} from '@testing-library/react'
import AccordionMenu from '..';

describe('AccordionMenu', () => {
  it('matches snapshot', () => {
    const component = render(<AccordionMenu />);
    expect(component.container).toMatchSnapshot();
  });

  describe('Section', () => {
    it('matches snapshot', () => {
      const component = render(<AccordionMenu.Section heading="TestHeading" />);
      expect(component.container).toMatchSnapshot();
    });

    it('passes through text', () => {
      const component = render(<AccordionMenu.Section heading="TestHeading" />);
      expect(component.container.textContent).toBe(
        'TestHeading',
      );
    });

    it('handles defaultOpen', () => {
        const component = render(
          <AccordionMenu.Section id="accordion" heading="Heading" defaultOpen />,
        );


        expect(component.container.querySelector('#accordion')).toHaveProperty('open',true)

        component.getByText("Heading").click()
        expect(component.container.querySelector('#accordion')).toHaveProperty('open',false)

        component.getByText("Heading").click()

        expect(component.container.querySelector('#accordion')).toHaveProperty('open',true)
              });

      it('handles open={true}', () => {
        const component = render(
          <AccordionMenu.Section id="accordion" heading="Heading" open />,
        );

        expect(component.container.querySelector('#accordion')).toHaveProperty('open',true)

        component.getByText("Heading").click()

        expect(component.container.querySelector('#accordion')).toHaveProperty('open',true)
      });

      it('handles open={false}', () => {
        const component = render(
          <AccordionMenu.Section id="accordion" heading="Heading" open={false} />,
        );
        expect(component.container.querySelector('#accordion')).toHaveProperty('open',false)

        component.getByText("Heading").click()

        expect(component.container.querySelector('#accordion')).toHaveProperty('open',false)
      });
  
  });
  describe('Link', () => {
    it('matches snapshot', () => {
      const component = render(<AccordionMenu.Link>Test</AccordionMenu.Link>);
      expect(component.container).toMatchSnapshot();
      expect(component.container.textContent).toBe('Test');
    });
  });
});
