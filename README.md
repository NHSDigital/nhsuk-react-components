# NHS.UK React Components

- [NHS.UK React Components](#nhsuk-react-components)
  - [Coming from 0.x?](#coming-from-0x)
  - [Upgrading to 2.0](#upgrading-to-20)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Storybook](#storybook)
  - [Maintainers](#maintainers)
  - [Preparing Releases](#preparing-releases)

NHS.UK Frontend ported to React

[![GitHub Actions CI Status](https://github.com/NHSDigital/nhsuk-react-components/workflows/CI/badge.svg)](https://github.com/NHSDigital/nhsuk-react-components/actions?query=workflow%3A%22CI+Build%22+branch%3Amain) [![Bundle Size](https://img.shields.io/bundlephobia/minzip/nhsuk-react-components.svg)](https://bundlephobia.com/result?p=nhsuk-react-components)

## Coming from 0.x?

If you're coming from versions of the library prior to 1.0.0, please give [this doc](/docs/upgrade-to-1.0.md) a brief read, as there a number of changes between 0.x release and the 1.0 release.

## Upgrading to 2.0

If you're upgrading to 2.0, please be aware we have made some breaking changes.  [This doc](/docs/upgrade-to-2.0.md) has the details.

## Installation

You can install this package using either `yarn` or `npm`.

```bash
npm install --save nhsuk-react-components
# Or
yarn add nhsuk-react-components
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
- Kevin Kuszyk ([GitHub](https://github.com/kevinkuszyk))

## Preparing Releases

Releases run in CI using github actions.

To prepare a release create a new release TAG in github with your release version.

> `NPM_TOKEN` should be stored in the repositories [secrets in GitHub](https://github.com/NHSDigital/nhsuk-react-components/settings/secrets/actions)

- Create a new release with a tag like `major.minor.patch` against main.
- If the change is a `beta` then select `pre-release` as true, this will make the `tag` point at `beta`. Otherwise the tag will be `latest`.
