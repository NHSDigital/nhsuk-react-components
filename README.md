# NHS.UK React Components

NHS.UK Frontend ported to React

[![GitHub Actions CI Status](https://github.com/NHSDigital/nhsuk-react-components/workflows/CI/badge.svg)](https://github.com/NHSDigital/nhsuk-react-components/actions?query=workflow%3A%22CI+Build%22+branch%3Amaster) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://github.com/airbnb/javascript) [![Bundle Size](https://img.shields.io/bundlephobia/minzip/nhsuk-react-components.svg)](https://bundlephobia.com/result?p=nhsuk-react-components@1.0.0-rc.1)

## Coming from 0.x?

If you're coming from versions of the library prior to 1.0.0, please give [this wiki page](https://github.com/NHSDigital/nhsuk-react-components/wiki/Porting-Guide-for-0.X-to-1.0) a brief read, as there a number of changes between 0.x release and the 1.0 release.

## Installation

You can install this package using either `yarn` or `npm`.

```bash
npm install --save nhsuk-react-components@next
# Or
yarn add nhsuk-react-components@next
```

## Usage

```jsx
import React, { PureComponent } from 'react';

// You can import components from the global module
import { Button } from 'nhsuk-react-components';

// Or you can import components directly
import Button from 'nhsuk-react-components/lib/components/button';

class GetStartedButton extends PureComponent {
  render() {
    return <Button>Click Me!</Button>;
  }
}
```

### Storybook

A storybook containing all of the components and their usage can be found [here](https://nhsdigital.github.io/nhsuk-react-components).

## Maintainers

**We're currently looking for new maintainers!** If you have knowledge of React and would be willing to help maintain this library, you can email me (Thomas Judd-Cooper) [here](mailto:thomas.judd-cooper1@nhs.net).

- Thomas Judd-Cooper ([GitHub](https://github.com/tomdango))
- Sam Brown ([GitHub](https://github.com/samueldavidbrown))
- Luke Pearson ([GitHub](https://github.com/lukepearson))
