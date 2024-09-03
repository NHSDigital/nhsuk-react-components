# NHS.UK React components

This repository contains the code for NHS.UK React components - a port of the [NHS.UK Frontend components](https://github.com/nhsuk/nhsuk-frontend).

[![GitHub Actions CI Status](https://github.com/NHSDigital/nhsuk-react-components/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/NHSDigital/nhsuk-react-components/actions?query=workflow%3A%22CI+Build%22+branch%3Amain) [![Bundle Size](https://img.shields.io/bundlephobia/minzip/nhsuk-react-components.svg)](https://bundlephobia.com/result?p=nhsuk-react-components)

## Documentation and examples

[View documentation and examples](https://nhsdigital.github.io/nhsuk-react-components)

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

## Upgrading

* [Upgrading to 1.0](/docs/upgrade-to-1.0.md)
* [Upgrading to 2.0](/docs/upgrade-to-2.0.md)
* [Upgrading to 3.0](/docs/upgrade-to-3.0.md)
* [Upgrading to 4.0](/docs/upgrade-to-4.0.md)

## Maintainers

**We’re currently looking for new maintainers** If you have knowledge of React and would be willing to help maintain this library, you can [email me (Thomas Judd-Cooper)](mailto:thomas.judd-cooper1@nhs.net).

- Thomas Judd-Cooper ([GitHub](https://github.com/tomdango))
- Sam Brown ([GitHub](https://github.com/samueldavidbrown))
- Luke Pearson ([GitHub](https://github.com/lukepearson))
- Kevin Kuszyk ([GitHub](https://github.com/kevinkuszyk))
- Kai Spencer ([GitHub](https://github.com/KaiSpencer))
- Ed Horsford ([GitHub](https://github.com/edwardhorsford))
- Jake Barton ([GitHub](https://github.com/jakeb-nhs))

## Preparing releases

Releases run in CI using github actions.

To prepare a release create a new release TAG in github with your release version.

> `NPM_TOKEN` should be stored in the repositories [secrets in GitHub](https://github.com/NHSDigital/nhsuk-react-components/settings/secrets/actions)

- Create a new release with a tag like `major.minor.patch` against main.
- If the change is a `beta` then select `pre-release` as true, this will make the `tag` point at `beta`. Otherwise the tag will be `latest`.

## Thanks

<a href="https://www.chromatic.com/"><img src="https://user-images.githubusercontent.com/321738/84662277-e3db4f80-af1b-11ea-88f5-91d67a5e59f6.png" width="153" height="30" alt="Chromatic" /></a>

Thanks to [Chromatic](https://www.chromatic.com/) for providing the visual testing platform that helps us review UI changes and catch visual regressions.
