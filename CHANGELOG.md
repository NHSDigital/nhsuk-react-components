# Unreleased Changes
## New Card Component

The new Card component from `nhsuk-frontend` 4 has been added. Check out the storybook for usage examples!

## WarningCallout

### Removal of WarningCallout "label" prop

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

### Addition of hidden text on the WarningCallout.Label

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
