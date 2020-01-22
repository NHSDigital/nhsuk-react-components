# nhsuk-react-components
NHS.UK Frontend ported to React

## Installation

You can install this package using either `yarn` or `npm`.

```bash
npm install --save nhsuk-react-components
# Or
yarn add nhsuk-react-components 
```

## Usage

```jsx
import React, { PureComponent } from "react";

// You can import components from the global module
import { Button } from "nhsuk-react-components";

// Or you can import components directly
import Button from "nhsuk-react-components/lib/components/button";

class GetStartedButton extends PureComponent {
    render() {
        return <Button>Click Me!</Buttons>
    }
};
```

### Storybook

**Coming Soon!**
~~A storybook containing all of the components and their usage can be found [here](https://nhsdigital.github.io/nhsuk-react-components).~~

## Maintainers

**We're currently looking for new maintainers!** If you have knowledge of React and would be willing to help maintain this library, you can email me (Thomas Judd-Cooper) [here](thomas.judd-cooper1@nhs.net).

[Thomas Judd-Cooper](https://github.com/tomdango)
[Sam Brown](https://github.com/samueldavidbrown)
