import { render } from '@testing-library/react';
import { Legend } from '..';
import { type NHSUKSize } from '#util/types/NHSUKTypes';

describe('Legend', () => {
  it('matches snapshot', () => {
    const { container } = render(<Legend>Text</Legend>);

    expect(container).toMatchSnapshot('Legend');
  });

  it('renders as page heading', () => {
    const { container } = render(<Legend isPageHeading>Text</Legend>);

    const legendEl = container.querySelector('.nhsuk-fieldset__legend');
    const headingEl = legendEl?.querySelector('.nhsuk-fieldset__heading');

    expect(legendEl).toHaveTextContent('Text');
    expect(legendEl).not.toHaveClass('nhsuk-fieldset__legend--xl');
    expect(headingEl?.tagName).toBe('H1');
  });

  it.each<NHSUKSize>(['s', 'm', 'l', 'xl'])(
    'renders as page heading with custom size %s',
    (size) => {
      const { container } = render(
        <Legend isPageHeading size={size}>
          Text
        </Legend>,
      );

      const legendEl = container.querySelector('.nhsuk-fieldset__legend');
      const headingEl = legendEl?.querySelector('.nhsuk-fieldset__heading');

      expect(legendEl).toHaveTextContent('Text');
      expect(legendEl).toHaveClass(`nhsuk-fieldset__legend--${size}`);
      expect(headingEl?.tagName).toBe('H1');
    },
  );

  it('renders null with no children', () => {
    const { container } = render(<Legend />);

    expect(container.querySelector('legend')).toBeNull();
  });

 it('renders with HTML', () => {
   const { container } = render(<Legend>Text<span>and text within HTML</span></Legend>);
  
      expect(container.querySelector('legend')?.innerHTML).toMatch('Text<span>and text within HTML</span>')
      
    });
});
