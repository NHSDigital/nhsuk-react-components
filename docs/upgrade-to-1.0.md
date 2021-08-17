# Upgrading to 1.0

**NOTE:** There are some key changes between the 0.x.x releases and the 1.0.0 release. This document is designed to show all of the changes, but it may not be comprehensive. It will be a working document, and any issues encountered will be added to this document.

If you are having issues implementing or porting a certain component and need help, feel free to message me (Thomas Judd-Cooper) on the [NHS Service Manual Slack](https://join.slack.com/t/nhs-service-manual/shared_invite/enQtNTIyOTEyNjU3NDkyLTk4NDQ3YzkwYzk1Njk5YjAxYTI5YTVkZmUxMGQ0ZjA3NjMyM2ZkNjBlMWMxODVjZjYzNzg1ZmU4MWY1NmE2YzE), or send message one of the maintainers.

# Styles

Styles are **no longer coupled in this repository**. Including the styles added much more complexity and increased the risk of diverging from the original framework kit.

Because of this, there is no longer a direct dependency on the `nhsuk-frontend` package, and it is now a peer dependency.

## Sass Imports

If you have used sass imports for each component, you can easily switch the imports to use the `nhsuk-frontend` package.

```scss
# 0.x Versions
@import "~nhsuk-react-components/styles/action-link";



# 1.x Versions
# Make sure you've imported the all.scss stylesheet - you only need to do this once.
# @import "~nhsuk-frontend/packages/core/all.scss";

@import "~nhsuk-frontend/packages/components/action-link/action-link";
```

## Components

### ActionLink

The `openInNewWindow` prop has been removed in favour of the standard `target="_blank"` property supplied to anchor elements.

### Breadcrumb

The `ariaLabel` prop has been removed in favour of supplying the `aria-label` prop directly to the `Breadcrumb` element. The `aria-label` property also now has a default value of `"Breadcrumb"`.

#### Breadcrumb.Back

The Breadcrumb element now has a `Back` sub-component, implementing the mobile-only backlink used for smaller viewports in the Breadcrumb element.

### CareCard

The CareCard element has been split into two more components, offering greater control over the individual components within the CareCard. These are `CareCard.Heading` and `CareCard.Content`.

#### CareCard.Heading and CareCard.Content

```jsx
import { CareCard } from 'nhsuk-react-components';

const OldCareCard = () => (
  <CareCard type="non-urgent" heading="CareCard Heading">
    <p>CareCard Content</p>
  </CareCard>
);

const NewCareCard = () => (
  <CareCard type="non-urgent">
    <CareCard.Heading>CareCard Heading</CareCard.Heading>
    <CareCard.Content>
      <p>CareCard Content</p>
    </CareCard.Content>
  </CareCard>
);
```

### Checkboxes

The checkboxes are no longer coupled with the Form component, and can now operate completely independently. As such, direct imports will need to be updated.

```jsx
// Old
import { Checkboxes } from 'nhsuk-react-components/lib/form';

// New
import { Checkboxes } from 'nhsuk-react-components/lib/checkboxes';
```

The `label` and `hint` props have been removed from the `Checkboxes` element. It is recommended to use the `Hint` and `Label` components directly around or inside the component instead, as it grants more control over each element. The previous implementation of the `label` and `hint` worked by doing this behind the scenes.

```jsx
import { Checkboxes, Hint, Label } from 'nhsuk-react-components';

// Old
const OldCheckboxes = () => (
  <Checkboxes label="Checkboxes Label" hint="Checkboxes Hint">
    <Checkboxes.Box>1</Checkboxes.Box>
    <Checkboxes.Box>2</Checkboxes.Box>
    <Checkboxes.Box>3</Checkboxes.Box>
  </Checkboxes>
);

// New
const NewCheckboxes = () => (
  <>
    <Label>Checkboxes Label</Label>
    <Hint>Checkboxes Hint</Hint>
    <Checkboxes>
      <Checkboxes.Box>1</Checkboxes.Box>
      <Checkboxes.Box>2</Checkboxes.Box>
      <Checkboxes.Box>3</Checkboxes.Box>
    </Checkboxes>
  </>
);
```

### Details

The Details component has been split into two components: `Details.Summary` and `Details.Text`. This replaces the `title` prop for something more appropriate (as `<summary>` tags are in use).

```jsx
import { Details } from 'nhsuk-react-components';

const OldDetails = () => (
  <Details title="How do I find a GP?">
    <p>You find a GP by...</p>
  </Details>
);

const NewDetails = () => (
  <Details>
    <Details.Summary>How do I find a GP?</Details.Summary>
    <Details.Text>
      <p>You find a GP by...</p>
    </Details.Text>
  </Details>
);
```

### DoDontList

The `DoDontList.Do` and `DoDontList.Dont` components have been removed in favour of a single `DoDontList.Item` component. The `DoDontList.Item` will automatically infer the type of list from the `DoDontList` component. If you need to directly override the type of a `DoDontList.Item` you can supply a `listItemType` prop to the `DoDontList.Item` component.

```jsx
import { DoDontList } from 'nhsuk-react-components';

const OldDoDontList = () => (
  <>
    <DoDontList type="tick">
      <DoDontList.Do>This</DoDontList.Do>
      <DoDontList.Do>That</DoDontList.Do>
    </DoDontList>
    <DoDontList type="cross">
      <DoDontList.Dont>This</DoDontList.Dont>
      <DoDontList.Dont>That</DoDontList.Dont>
    </DoDontList>
  </>
);

const NewDoDontList = () => (
  <>
    <DoDontList type="do">
      <DoDontList.Item>This</DoDontList.Item>
      <DoDontList.Item>That</DoDontList.Item>
    </DoDontList>
    <DoDontList type="dont">
      <DoDontList.Item>This</DoDontList.Item>
      <DoDontList.Item>That</DoDontList.Item>
    </DoDontList>
  </>
);
```

### ErrorSummary

The ErrorSummary component has been split up into four sub-components: `ErrorSummary.Title`, `ErrorSummary.Body`, `ErrorSummary.List` and `ErrorSummary.Item`. The first two directly replace the `title` and `description` props originally supplied to the `ErrorSummary` component.

```jsx
import { ErrorSummary } from 'nhsuk-react-components';

const OldErrorSummary = () => (
  <ErrorSummary
    title="ErrorSummary Title"
    description="There are a number of errors in the following form. Please correct them before continuing."
  >
    <ErrorSummary.Item>Error 1</ErrorSummary.Item>
    <ErrorSummary.Item>Error 2</ErrorSummary.Item>
  </ErrorSummary>
);

const NewErrorSummary = () => (
  <ErrorSummary>
    <ErrorSummary.Title>ErrorSummary Title</ErrorSummary.Title>
    <ErrorSummary.Body>
      <p>
        There are a number of errors in the following form. Please correct them before continuing.
      </p>
      <ErrorSummary.List>
        <ErrorSummary.Item>Error 1</ErrorSummary.Item>
        <ErrorSummary.Item>Error 2</ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary.Body>
  </ErrorSummary>
);
```

### Fieldset

The `titleSize` prop has been replaced with `headingLevel`. Instead of supplying `xs`, `s`, `m` and so on to `titleSize`, you can instead supply a HTML heading level to the `headingLevel` prop (i.e. `h1`, `h2`, `h3` etc.).

**Note:** The `headingLevel` prop is only applied in the Fieldset when the `isPageHeading` prop is truthy.

### Footer

The Footer is now split into three subcomponents: `Footer.List`, `Footer.ListItem` and `Footer.Copyright`. This is to make the Footer appear semantically correct, as well as offering control over columns within the footer.

**Note:** `Footer.Link` is equivalent to as `Footer.ListItem`.

```jsx
import { Footer } from 'nhsuk-react-components';

const OldFooter = () => (
  <Footer>
    <Footer.Link href="https://www.nhs.uk/Pages/nhs-sites.aspx">NHS sites</Footer.Link>
    <Footer.Link href="https://www.nhs.uk/about-us">About us</Footer.Link>
    <Footer.Link href="https://www.nhs.uk/contact-us/">Contact us</Footer.Link>
    <Footer.Link href="https://www.nhs.uk/about-us/sitemap/">Sitemap</Footer.Link>
    <Footer.Link href="https://www.nhs.uk/our-policies/">Our policies</Footer.Link>
    <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
  </Footer>
);

const NewFooter = () => (
  <Footer>
    <Footer.List>
      <Footer.ListItem href="https://www.nhs.uk/nhs-sites/">NHS sites</Footer.ListItem>
      <Footer.ListItem href="https://www.nhs.uk/about-us/">About us</Footer.ListItem>
      <Footer.ListItem href="https://www.nhs.uk/contact-us/">Contact us</Footer.ListItem>
      <Footer.ListItem href="https://www.nhs.uk/about-us/sitemap/">Sitemap</Footer.ListItem>
      <Footer.ListItem href="https://www.nhs.uk/our-policies/">Our policies</Footer.ListItem>
    </Footer.List>
    <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
  </Footer>
);
```

### Form

The form component no longer has the `onErrorChange` event handler, as form state is no longer controlled centrally in the `Form` element.

**Note:** I acknowledge this can be a big change, as all the forms may require reimplementing. If this a blocker, please let me know, as I am contemplating implementing a `LegacyForm` component that has the same behaviour as the 0.x forms.

### Header

The `Header.Navigation` element has been renamed to `Header.Nav`, and the `Header.Link` element has been renamed to `Header.NavItem`.

### Hero

The `Hero.Content` element has been renamed to `Hero.Text`, as it is a HTML paragraph element and is more semantically accurate.

### Images

The `Image` element has been renamed to `Images` to remain consistent with the `nhsuk-frontend` library.

### ListPanel

The `ListPanel.Item` component has been renamed to `ListPanel.LinkItem` to remain symantically accurate.

### NavAZ

The prop `excludedItems` has been renamed to `removedLetters`. The prop `disabledItems` has been renamed to `disabledLetters`. Both props operate exactly the same.

Instead of using an `items` prop, you can now supply individual `NavAZ.LinkItem` elements as children inside of the `NavAZ` element.

### Pagination

The `Pagination.Previous` and `Pagination.Next` components have been removed in favour of a `Pagination.Link` component. The `Pagination.Link` has a `previous` or `next` prop that can be supplied.

```jsx
import { Pagination } from 'nhsuk-react-components';

const OldPagination = () => (
  <Pagination>
    <Pagination.Previous href="/section/treatments">Treatments</Pagination.Previous>
    <Pagination.Next href="/section/symptoms">Symptoms</Pagination.Next>
  </Pagination>
);

const NewPagination = () => (
  <Pagination>
    <Pagination.Link previous href="/section/treatments">
      Treatments
    </Pagination.Link>
    <Pagination.Link next href="/section/symptoms">
      Symptoms
    </Pagination.Link>
  </Pagination>
);
```

### Promo

The `Promo.Content` element has been renamed to `Promo.Description` in order to more accurately reflect that it is a HTML paragraph element.

### ReviewDate

The `lastReviewDate` prop has been renamed to `lastReviewed` and the `nextReviewDate` prop has been named to `nextReview`.

The `lastReviewText` and `nextReviewText` props have been removed.

### SummaryList

The `SummaryList` component has been split into more subcomponents: `SummaryList.Row`, `SummaryList.Key`, `SummaryList.Value` and `SummaryList.Actions`.

```jsx
import { SummaryList } from 'nhsuk-react-components';

const OldSummaryList = () => (
  <SummaryList>
    <SummaryList.Row
      rowKey="Name"
      action={{
        href: '#',
        text: 'Change',
        visuallyHiddenText: 'name',
      }}
    >
      Sarah Phillips
    </SummaryList.Row>
    <SummaryList.Row
      rowKey="Date of Birth"
      action={{
        href: '#',
        text: 'Change',
        visuallyHiddenText: 'date of birth',
      }}
    >
      5 January 1978
    </SummaryList.Row>
    <SummaryList.Row
      rowKey="Contact information"
      action={{
        href: '#',
        text: 'Change',
        visuallyHiddenText: 'contact details',
      }}
    >
      <p>
        72 Guild Street
        <br />
        London
        <br />
        SE23 6FH
      </p>
    </SummaryList.Row>
    <SummaryList.Row
      rowKey="Contact information"
      action={{
        href: '#',
        text: 'Change',
        visuallyHiddenText: 'contact information',
      }}
    >
      <p>07700 900457</p>
      <p>sarah.phillips@example.com</p>
    </SummaryList.Row>
  </SummaryList>
);

const NewSummaryList = () => (
  <SummaryList>
    <SummaryList.Row>
      <SummaryList.Key>Name</SummaryList.Key>
      <SummaryList.Value>Sarah Philips</SummaryList.Value>
      <SummaryList.Actions>
        <a href="#">Change</a>
      </SummaryList.Actions>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Date of birth</SummaryList.Key>
      <SummaryList.Value>5 January 1978</SummaryList.Value>
      <SummaryList.Actions>
        <a href="#">Change</a>
      </SummaryList.Actions>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Contact information</SummaryList.Key>
      <SummaryList.Value>
        72 Guild Street
        <br />
        London
        <br />
        SE23 6FH
      </SummaryList.Value>
      <SummaryList.Actions>
        <a href="#">Change</a>
      </SummaryList.Actions>
    </SummaryList.Row>
    <SummaryList.Row>
      <SummaryList.Key>Contact details</SummaryList.Key>
      <SummaryList.Value>
        <p>07700 900457</p>
        <p>sarah.phillips@example.com</p>
      </SummaryList.Value>
      <SummaryList.Actions>
        <a href="#">Change</a>
      </SummaryList.Actions>
    </SummaryList.Row>
  </SummaryList>
);
```

### Table

The `<td>` element within the table has been replaced with the `Table.Cell` component.

```jsx
import { Table } from 'nhsuk-react-components';

const OldTable = () => (
  <Table caption="Skin symptoms and possible causes">
    <Table.Header>
      <th>Skin symptoms</th>
      <th>Possible cause</th>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <td>Blisters on lips or around the mouth</td>
        <td>cold sores</td>
      </Table.Row>
      <Table.Row>
        <td>Itchy, dry, cracked, sore</td>
        <td>eczema</td>
      </Table.Row>
      <Table.Row>
        <td>Itchy blisters</td>
        <td>shingles, chickenpox</td>
      </Table.Row>
    </Table.Body>
  </Table>
);

const NewTable = () => (
  <Table caption="Skin symptoms and possible causes">
    <Table.Head>
      <Table.Row>
        <Table.Cell>Skin Symptoms</Table.Cell>
        <Table.Cell>Possible cause</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
        <Table.Cell>cold sores</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
        <Table.Cell>eczema</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Itchy blisters</Table.Cell>
        <Table.Cell>shingles, chickenpox</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);
```

### WarningCallout

The `heading` prop has been renamed to `label`.
