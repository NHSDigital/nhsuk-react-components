import { render } from '@testing-library/react';

import { Fieldset } from '..';
import { TextInput } from '../..';

describe('Fieldset', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Fieldset>
        <TextInput id="test-input" />
      </Fieldset>,
    );

    expect(container).toMatchSnapshot('Fieldset');
  });

  it('renders children', () => {
    const { container } = render(<Fieldset>Text</Fieldset>);

    expect(container.textContent).toBe('Text');
  });

  it('renders null with no children', () => {
    const { container } = render(<Fieldset />);

    expect(container.querySelector('fieldset')).toBeNull();
  });
});
