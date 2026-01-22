import { render } from '@testing-library/react';

import { BodyText, type BodyTextProps } from '..';

describe('BodyText', () => {
  it('matches snapshot', () => {
    const { container } = render(<BodyText>Text</BodyText>);

    expect(container).toMatchSnapshot();
  });

  it('renders with text content', () => {
    const { container } = render(<BodyText>Example paragraph</BodyText>);

    const paragraphEl = container.querySelector('p');

    expect(paragraphEl).toHaveTextContent('Example paragraph');
    expect(paragraphEl).toHaveClass('nhsuk-body');

    // No size specific class applied
    expect(paragraphEl).not.toHaveClass('nhsuk-body-s');
    expect(paragraphEl).not.toHaveClass('nhsuk-body-m ');
  });

  it.each<BodyTextProps['size']>(['s', 'm'])('renders with custom size %s', (size) => {
    const { container } = render(<BodyText size={size}>Example paragraph</BodyText>);

    const paragraphEl = container.querySelector('p');

    expect(paragraphEl).toHaveTextContent('Example paragraph');
    expect(paragraphEl).toHaveClass(`nhsuk-body-${size}`);

    // No default class applied
    expect(paragraphEl).not.toHaveClass('nhsuk-body');
  });
});
