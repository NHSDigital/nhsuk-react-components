import React, { HTMLProps, PureComponent } from 'react';
import classNames from 'classnames';
import { NHSUKSize } from '../../util/types/NHSUKTypes';
import HeadingLevel, { HeadingLevelType } from '../../util/HeadingLevel';
import FieldsetContext, { IFieldsetContext } from './FieldsetContext';

interface LegendProps extends Omit<HTMLProps<HTMLLegendElement>, 'size'> {
  isPageHeading?: boolean;
  headingLevel?: HeadingLevelType;
  size?: NHSUKSize;
}

const Legend: React.FC<LegendProps> = ({
  className,
  children,
  isPageHeading,
  headingLevel,
  size,
  ...rest
}) => (
  <legend
    className={classNames(
      'nhsuk-fieldset__legend',
      {
        'nhsuk-fieldset__legend--xl': isPageHeading && !size,
      },
      { [`nhsuk-fieldset__legend--${size}`]: size },
      className,
    )}
    {...rest}
  >
    {isPageHeading ? (
      <HeadingLevel className="nhsuk-fieldset__heading" headingLevel={headingLevel}>
        {children}
      </HeadingLevel>
    ) : (
      children
    )}
  </legend>
);

Legend.defaultProps = {
  headingLevel: 'h1',
};

interface FieldsetProps extends HTMLProps<HTMLFieldSetElement> {
  disableErrorLine?: boolean;
}

type FieldsetState = { registeredComponents: Array<string>; erroredComponents: Array<string> };

class Fieldset extends PureComponent<FieldsetProps, FieldsetState> {
  static Legend = Legend;

  constructor(props: FieldsetProps) {
    super(props);
    this.state = {
      registeredComponents: [],
      erroredComponents: [],
    };
  }

  passError = (componentId: string, error: boolean): void => {
    this.setState((state) => {
      const existingError = state.erroredComponents.includes(componentId);
      if (existingError && !error) {
        return {
          ...state,
          erroredComponents: state.erroredComponents.filter((id) => id !== componentId),
        };
      }
      if (!existingError && error) {
        return { ...state, erroredComponents: [...state.erroredComponents, componentId] };
      }
      return state;
    });
  };

  registerComponent = (componentId: string, deregister = false): void => {
    this.setState((state) => {
      if (deregister) {
        return {
          ...state,
          registeredComponents: state.registeredComponents.filter((id) => id !== componentId),
        };
      }
      if (!state.registeredComponents.includes(componentId)) {
        return {
          ...state,
          registeredComponents: [...state.registeredComponents, componentId],
        };
      }
      return state;
    });
  };

  render(): JSX.Element {
    const { className, disableErrorLine, ...rest } = this.props;
    const contextValue: IFieldsetContext = {
      isFieldset: true,
      registerComponent: this.registerComponent,
      passError: this.passError,
    };

    const containsFormElements = this.state.registeredComponents.length > 0;
    const containsError = this.state.erroredComponents.length > 0;

    return (
      <FieldsetContext.Provider value={contextValue}>
        {containsFormElements ? (
          <div
            className={classNames('nhsuk-form-group', {
              'nhsuk-form-group--error': disableErrorLine ? false : containsError,
            })}
          >
            <fieldset className={classNames('nhsuk-fieldset', className)} {...rest} />
          </div>
        ) : (
          <fieldset className={classNames('nhsuk-fieldset', className)} {...rest} />
        )}
      </FieldsetContext.Provider>
    );
  }
}

Fieldset.Legend = Legend;

export default Fieldset;
