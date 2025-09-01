# Upgrading to 3.0

> v3.0 is an upcoming release, this page is a work in progress.

There are some breaking changes you'll need to be aware of when upgrading to v3. These are mostly related to us upgrading our dependency on [nhsuk-frontend to v5](https://github.com/nhsuk/nhsuk-frontend/blob/main/CHANGELOG.md#500---16-march-2021) which also includes some breaking changes.

## Review Date component is now a pattern

The `ReviewDate` component has been removed from nhsuk-frontend in version 5.0.0. This component is now a `pattern` in the nhsuk-frontend library.

The only change is that the Default import has a new path.

Instead of importing the component from `nhsuk-react-components/lib/components/review-date`, you will now import it from `nhsuk-react-components/lib/patterns/review-date`.

There are no functional changes to the component, and it works exactly as it did before.

```tsx
// Old Import
import { ReviewDate } from 'nhsuk-react-components';
import ReviewDate from 'nhsuk-react-components/lib/components/review-date';

// New Import
import { ReviewDate } from 'nhsuk-react-components';
import ReviewDate from 'nhsuk-react-components/lib/patterns/review-date';
```

## NHS Logo PNG Fallback Removed

The .png fallback for the NHS Logo in the header has been removed. This was to support older versions of Internet Explorer, and is no longer required.

## The "Three Columns" option for the Footer component has been removed

This has been removed due to causing accessibility issues in Safari (see the [upstream issue](https://github.com/nhsuk/nhsuk-frontend/issues/575)).

## The `long` variant of the Transactional Service Name component has been removed

In NHS.UK Frontend v5 and above, the header text now defaults to wrapping underneath the logo without the need for a modifier. It is safe to remove the `long` prop from the `<Header.ServiceName>` component.

## The `prefixText` prop has been added to the `DoDontList.Item` component

You can now add prefixed text to each `DoDontList.Item` component by supplying the `prefixText` prop. Items with a `type` of `dont` will automatically have a 'do not' prefix text added in the next major release to align with the NHS.UK frontend library v5.
