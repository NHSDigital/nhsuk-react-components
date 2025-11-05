import { render } from '@testing-library/react';

import { Label, type LabelProps } from '..';

import { type NHSUKSize } from '#util/types';

describe('Label', () => {
  it('can be defaulted', () => {
    const { container } = render(<Label>Text</Label>);

    expect(container.textContent).toBe('Text');
    expect(container.innerHTML).toBe('<label class="nhsuk-label">Text</label>');
  });

  it.each<NHSUKSize>(['s', 'm', 'l', 'xl'])('renders with custom size %s', (size) => {
    const { container } = render(<Label size={size}>Text</Label>);

    const labelEl = container.querySelector('.nhsuk-label');

    expect(labelEl).toHaveTextContent('Text');
    expect(labelEl).toHaveClass(`nhsuk-label--${size}`);
  });

  it('renders as page heading', () => {
    const { container } = render(<Label isPageHeading>Text</Label>);

    const headingEl = container.querySelector('.nhsuk-label-wrapper');
    const labelEl = headingEl?.querySelector('.nhsuk-label');

    expect(headingEl?.tagName).toBe('H1');
    expect(labelEl).toHaveTextContent('Text');
    expect(labelEl).not.toHaveClass(`nhsuk-label--xl`);
  });

  it.each<NHSUKSize>(['s', 'm', 'l', 'xl'])(
    'renders as page heading with custom size %s',
    (size) => {
      const { container } = render(
        <Label isPageHeading size={size}>
          Text
        </Label>,
      );

      const headingEl = container.querySelector('.nhsuk-label-wrapper');
      const labelEl = headingEl?.querySelector('.nhsuk-label');

      expect(headingEl?.tagName).toBe('H1');
      expect(labelEl).toHaveTextContent('Text');
      expect(labelEl).toHaveClass(`nhsuk-label--${size}`);
    },
  );

  it.each<LabelProps>([
    { headingLevel: 'h1' },
    { headingLevel: 'h2' },
    { headingLevel: 'h3' },
    { headingLevel: 'h4' },
  ])('renders as page heading with custom heading level $headingLevel', (props) => {
    const { container } = render(<Label {...props}>Text</Label>);

    const headingEl = container.querySelector('.nhsuk-label-wrapper');
    const labelEl = headingEl?.querySelector('.nhsuk-label');

    expect(headingEl?.tagName).toBe(props?.headingLevel?.toUpperCase());
    expect(labelEl).toHaveTextContent('Text');
  });

  it('renders null with no children', () => {
    const { container } = render(<Label />);

    expect(container.querySelector('label')).toBeNull();
  });
});
