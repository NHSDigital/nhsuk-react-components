import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonWrapper, { ButtonLink, Button } from '../Button';

describe('Button', () => {
  it('matches snapshot', () => {
    const component = shallow(<Button>Submit</Button>);
    expect(component).toMatchSnapshot('PlainButton');
    expect(component.type()).toEqual('button');
    expect(component.text()).toEqual('Submit');
    component.unmount();
  });

  it('adds correct classes for button types', () => {
    const disabledButton = shallow(<Button disabled>Submit</Button>);
    const secondaryButton = shallow(<Button secondary>Submit</Button>);
    const reverseButton = shallow(<Button reverse>Submit</Button>);

    expect(disabledButton).toMatchSnapshot('DisabledButton');
    expect(secondaryButton).toMatchSnapshot('SecondaryButton');
    expect(reverseButton).toMatchSnapshot('ReverseButton');

    expect(disabledButton.hasClass('nhsuk-button--disabled')).toBeTruthy();
    expect(secondaryButton.hasClass('nhsuk-button--secondary')).toBeTruthy();
    expect(reverseButton.hasClass('nhsuk-button--reverse')).toBeTruthy();

    disabledButton.unmount();
    secondaryButton.unmount();
    reverseButton.unmount();
  });

  it('adds aria props and disabled to disabled button', () => {
    const disabledButton = shallow(<Button disabled>Submit</Button>);
    expect(disabledButton.props()).toEqual({
      'aria-disabled': 'true',
      children: 'Submit',
      className: 'nhsuk-button nhsuk-button--disabled',
      disabled: true,
      type: 'submit',
    });
    disabledButton.unmount();
  });
});

describe('ButtonLink', () => {
  it('matches snapshot', () => {
    const component = shallow(<ButtonLink href="/">Submit</ButtonLink>);
    expect(component).toMatchSnapshot('PlainButton');
    expect(component.type()).toEqual('a');
    expect(component.text()).toEqual('Submit');
    component.unmount();
  });

  it('adds correct classes for button types', () => {
    const disabledButton = shallow(
      <ButtonLink href="/" disabled>
        Submit
      </ButtonLink>,
    );
    const secondaryButton = shallow(
      <ButtonLink href="/" secondary>
        Submit
      </ButtonLink>,
    );
    const reverseButton = shallow(
      <ButtonLink href="/" reverse>
        Submit
      </ButtonLink>,
    );

    expect(disabledButton).toMatchSnapshot('DisabledButton');
    expect(secondaryButton).toMatchSnapshot('SecondaryButton');
    expect(reverseButton).toMatchSnapshot('ReverseButton');

    expect(disabledButton.hasClass('nhsuk-button--disabled')).toBeTruthy();
    expect(secondaryButton.hasClass('nhsuk-button--secondary')).toBeTruthy();
    expect(reverseButton.hasClass('nhsuk-button--reverse')).toBeTruthy();

    disabledButton.unmount();
    secondaryButton.unmount();
    reverseButton.unmount();
  });

  it('adds aria props and disabled to disabled button', () => {
    const disabledButton = shallow(
      <ButtonLink href="/" disabled>
        Submit
      </ButtonLink>,
    );
    expect(disabledButton.props()).toEqual({
      'aria-disabled': 'true',
      children: 'Submit',
      className: 'nhsuk-button nhsuk-button--disabled',
      draggable: false,
      href: '/',
      role: 'button',
    });
    disabledButton.unmount();
  });
});

describe('ButtonWrapper', () => {
  it('renders a button when not given a href', () => {
    const component = mount(<ButtonWrapper>Submit</ButtonWrapper>);
    expect(
      component.containsMatchingElement(<button className="nhsuk-button">Submit</button>),
    ).toBeTruthy();
    component.unmount();
  });

  it('renders an anchor when given a href', () => {
    const component = mount(<ButtonWrapper href="/">Submit</ButtonWrapper>);
    expect(component.containsMatchingElement(<a className="nhsuk-button">Submit</a>)).toBeTruthy();
    component.unmount();
  });
});
