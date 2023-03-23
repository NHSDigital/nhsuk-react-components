# Upgrading to 3.0

There are some breaking changes you'll need to be aware of when upgrading to v3.  These are mostly related to us upgrading our dependency on [nhsuk-frontend to v5](https://github.com/nhsuk/nhsuk-frontend/blob/main/CHANGELOG.md#500---16-march-2021) which also includes some breaking changes.

## Review Date component is now a pattern

The `ReviewDate` component has been removed from nhsuk-frontend in version 5.0.0. This component is now a `pattern` in the nhsuk-frontend library. 

The only change is that the Default import has a new path.

Instead of importing the component from `nhsuk-react-components/lib/components/review-date`, you will now import it from `nhsuk-react-components/lib/patterns/review-date`.

There are no functional changes to the component, and it works exactly as it did before.

```tsx
// Old Import
import { ReviewDate } from "nhsuk-react-components";
import ReviewDate from "nhsuk-react-components/lib/components/review-date";

// New Import
import { ReviewDate } from "nhsuk-react-components";
import ReviewDate  from "nhsuk-react-components/lib/patterns/review-date";
```


