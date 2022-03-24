# Upgrading to 2.0

There are some breaking changes you'll need to be aware of when upgrading to v2.  These are mostly related to us upgrading our dependency on [nhsuk-frontend to v4](https://github.com/nhsuk/nhsuk-frontend/blob/master/CHANGELOG.md#400---26-october-2020) which also includes some breaking changes.

## New Card Component

The new Card component from `nhsuk-frontend` 4 has been added. Check out the storybook for usage examples!

## Warning Callout

### Removal of Warning Callout `label` prop

The WarningCallout `label` prop has been removed, and replaced with `WarningCallout.Label`.

Existing usages of the WarningCallout will need to be replaced with the new syntax, or will no longer render properly.

```jsx
// Old Syntax
<WarningCallout label="School, nursery or work">
  <p>
    Stay away from school, nursery or work until all the spots have crusted over.
    This is usually 5 days after the spots first appeared.
  </p>
</WarningCallout>

// New Syntax
<WarningCallout>
  <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
  <p>
    Stay away from school, nursery or work until all the spots have crusted over.
    This is usually 5 days after the spots first appeared.
  </p>
</WarningCallout>
```

### Addition of hidden text on the Warning Callout Label

The `WarningCallout.Label` now has the hidden text `Important: ` before the label content. If this causes an issue in your application, and you would like to change or disable this hidden text you are able to do via the `visuallyHiddenText` prop.

```jsx
// Custom Visually Hidden Text
<WarningCallout.Label visuallyHiddenText="This is very, very important: ">
  Something Quite Important
</WarningCallout.Label>

// Disabled Visually Hidden Text
<WarningCallout.Label visuallyHiddenText={false}>
  Something Much Less Important
</WarningCallout.Label>
```

## Hint component renders as div

The `Hint` component now renders as a `div` element rather than a `span`.

## Deprecation of Panel & Promo Components

The `Panel` and `Promo` components have been removed from `nhsuk-frontend` since version 4.0.0. As a result, we have deprecated these components. These components work exactly as they did before, with the only difference being a slightly different import.

```jsx
// Old Imports
import { Button, Panel, Promo } from "nhsuk-react-components";

// New Imports
import { Button } from "nhsuk-react-components";
import { Panel, Promo } from "nhsuk-react-components/dist/deprecated";
```

A warning is printed to the console in dev environments when using these components, as they are set to be removed in the next major release.

## Date component input type has changed

In line with the upstream nhsuk-frontend, NHS Design Kit and GDS recommendations, we now render the input boxes in the date component as follows:

```html
<input type="text" inputType="numeric" pattern="[0-9]*">
```

There is more on this change here:

- [NHSDigital/nhsuk-react-components#108](https://github.com/NHSDigital/nhsuk-react-components/pull/108)
- [nhsuk/nhsuk-frontend#666](https://github.com/nhsuk/nhsuk-frontend/pull/666)
- https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/
