import { render } from '@testing-library/react';
import { Label } from '..';
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

  it('renders null with no children', () => {
    const { container } = render(<Label />);

    expect(container.querySelector('label')).toBeNull();
  });

  it('renders with HTML', () => {
    const { container } = render(
      <Label>
        Text<span>and text within HTML</span>
      </Label>,
    );

    expect(container.querySelector('label')?.innerHTML).toMatch(
      'Text<span>and text within HTML</span>',
    );
  });

  it.each<NHSUKSize>(['s', 'm', 'l', 'xl'])(
    'renders with HTML and contains page heading with custom size %s',
    (size) => {
      const { container } = render(
        <Label isPageHeading size={size}>
          Text <span className={`nhsuk-caption-${size}`}>and text within HTML</span>
        </Label>,
      );

      const headingEl = container.querySelector('.nhsuk-label-wrapper');
      const labelEl = headingEl?.querySelector('.nhsuk-label');

      expect(headingEl?.tagName).toBe('H1');
      expect(labelEl).toHaveTextContent('Text and text within HTML');
      expect(labelEl?.innerHTML).toMatch(
        `Text <span class="nhsuk-caption-${size}">and text within HTML</span>`,
      );
      expect(labelEl).toHaveClass(`nhsuk-label--${size}`);
    },
  );
});
