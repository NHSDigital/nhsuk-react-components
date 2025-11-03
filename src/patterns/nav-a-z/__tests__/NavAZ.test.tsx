import { render, screen } from '@testing-library/react';

import { NavAZ } from '..';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

describe('NavAZ', () => {
  it('matches snapshot', () => {
    const { container } = render(<NavAZ />);

    expect(container).toMatchSnapshot('NavAZ');
  });

  it('renders fullAlphabet', () => {
    render(<NavAZ fullAlphabet />);
    const alphabetAsArr = alphabet.split('');

    alphabetAsArr.forEach((letter) => {
      expect(screen.getByRole('link', { name: letter })).toBeTruthy();
    });
  });

  it('renders fullAlphabet with letters removed', () => {
    render(<NavAZ fullAlphabet removedLetters={['A', 'B']} />);

    expect(screen.queryByText('A')).toBeNull();
    expect(screen.queryByText('B')).toBeNull();
    expect(screen.queryByText('C')).toBeTruthy();
  });

  it('renders fullAlphabet with letters disabled', () => {
    render(<NavAZ fullAlphabet disabledLetters={['A', 'B']} />);

    expect(
      screen.queryByText('A')?.classList.contains('nhsuk-u-secondary-text-colour'),
    ).toBeTruthy();
    expect(
      screen.queryByText('B')?.classList.contains('nhsuk-u-secondary-text-colour'),
    ).toBeTruthy();
    expect(
      screen.queryByText('C')?.classList.contains('nhsuk-u-secondary-text-colour'),
    ).toBeFalsy();
  });

  it('passes through children', () => {
    const { container } = render(
      <NavAZ>
        <p id="child">Child</p>
      </NavAZ>,
    );

    expect(container.querySelector('#child')).toBeTruthy();
  });

  it('renders individual letters', () => {
    const { container } = render(<NavAZ letters={['A', 'B']} />);

    const navAzElements = container.querySelector('ol.nhsuk-list');

    expect(navAzElements?.childNodes.length).toBe(2);
    expect(navAzElements?.childNodes[0].textContent).toBe('A');
    expect(navAzElements?.childNodes[1].textContent).toBe('B');
  });
});
