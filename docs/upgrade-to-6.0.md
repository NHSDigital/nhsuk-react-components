# Upgrading to 6.0

There are some breaking changes you'll need to be aware of when upgrading to v6.

[NHS.UK frontend v10.0.0](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v10.0.0) introduces some breaking changes to file paths, full width buttons on mobile, the header component and others. It also stops Internet Explorer 11 and other older browsers from running NHS.UK frontend JavaScript.

You must read and apply these updates carefully to make sure your service does not break.

## New features

### New header component with account section

The updated [header](https://service-manual.nhs.uk/design-system/components/header) component from NHS.UK frontend v10.x has been added, including support for account information and links. As part of this work we’ve also made some other improvements to the header:

- show currently active section or page in the navigation
- align navigation items to the left by default
- update navigation label from ’Primary navigation’ to ‘Menu’, and remove superfluous `role` and `id` attributes
- update NHS logo in the header to have higher contrast when focused
- refactor CSS classes and BEM naming, use hidden attributes instead of modifier classes, use generic search element

#### New file upload component

We've added a new [file upload](https://service-manual.nhs.uk/design-system/components/file-upload) component from NHS.UK frontend v10.3 which:

- makes the file inputs easier to use for drag and drop
- allows the text of the component to be translated
- fixes accessibility issues for users of Dragon, a speech recognition software

#### New password input component to help users accessibly enter passwords

The [password input](https://service-manual.nhs.uk/design-system/components/password-input) component from NHS.UK frontend v10.2 allows users to choose:

- whether their passwords are visible or not
- to enter their passwords in plain text

This helps users use longer and more complex passwords without needing to remember what they've already typed.

#### Smaller versions of radio buttons and checkboxes

You can now use smaller versions of the [radios](https://service-manual.nhs.uk/design-system/components/radios) and [checkboxes](https://service-manual.nhs.uk/design-system/components/checkboxes) components by adding the `small` prop.

#### Smaller versions of buttons

You can now use smaller versions of [buttons](https://service-manual.nhs.uk/design-system/components/buttons) by adding the `small` prop.

#### Secondary buttons with solid white background

By default, the secondary button is transparent and has no colour.

You can now make the [button](https://service-manual.nhs.uk/design-system/components/button) component white when you use it on darker backgrounds by adding the `secondarySolid` prop.

#### Add inline buttons to text inputs and select menus

You can now add inline buttons to text inputs and select menus using the `formGroupProps.afterInput` prop.

```jsx
<TextInput
  formGroupProps={{
    afterInput: () => (
      <Button secondary small>
        Search
      </Button>
    ),
  }},
/>
```

#### Add a 'code' prop for text inputs that accept codes and sequences

We've added a new `code` prop for the [text input](https://service-manual.nhs.uk/design-system/components/text-input) component. This improves readability of text inputs that receive codes and sequences (like NHS numbers, security codes or booking references).

```patch
  <TextInput
    label="What is your NHS number?"
    labelProps={{ isPageHeading: true, size: 'l' }}
    inputMode="numeric"
    spellCheck="false"
    width="10"
+   code
  />
```

#### Add a 'divider' between select options

Newer browsers support [using `<hr>` (horizontal rule) elements inside a `<select>` element](https://developer.chrome.com/blog/hr-in-select/) to help visually break up options for better readability.

We've added a new `<Select.Divider />` child component for select menus to support this feature. For example:

```patch
  <Select>
    <Select.Option value="first-name-ascending">First name (A to Z)</Select.Option>
    <Select.Option value="first-name-descending">First name (Z to A)</Select.Option>
+   <Select.Divider />
    <Select.Option value="last-name-ascending">Last name (A to Z)</Select.Option>
    <Select.Option value="last-name-descending">Last name (Z to A)</Select.Option>
  </Select>
```

#### Use cards to visually separate multiple summary lists on a single page

You can now wrap a [card](https://service-manual.nhs.uk/design-system/components/cards) around [summary lists](https://service-manual.nhs.uk/design-system/components/summary-list) to help you:

- design and build pages with multiple summary lists
- show visual dividers between summary lists
- allow users to apply actions to entire lists

### Reverse links

To align with NHS.UK frontend, we've updated the [action link](https://service-manual.nhs.uk/design-system/components/action-link), [back link](https://service-manual.nhs.uk/design-system/components/back-link) and [breadcrumbs](https://service-manual.nhs.uk/design-system/components/breadcrumbs) components to support the `reverse` prop for dark backgrounds.

### Numbered pagination component

The [pagination](https://service-manual.nhs.uk/design-system/components/pagination) component from NHS.UK frontend v10.1 has been updated to support numbered pagination:

```jsx
<Pagination>
  <Pagination.Link href="/results?page=1" previous />
  <Pagination.Item href="/results?page=1" number={1} />
  <Pagination.Item href="/results?page=2" number={2} current />
  <Pagination.Item href="/results?page=3" number={3} />
  <Pagination.Link href="/results?page=3" next />
</Pagination>
```

### Notification banner component

The [notification banner](https://service-manual.nhs.uk/design-system/components/notification-banners) component from NHS.UK frontend v10 has been added:

```jsx
<NotificationBanner>
  <NotificationBanner.Heading>Upcoming maintenance</NotificationBanner.Heading>
  <p>The service will be unavailable from 8pm to 9pm on Thursday 1 January 2025.</p>
</NotificationBanner>
```

### Panel component

The [panel](https://service-manual.nhs.uk/design-system/components/panel) component from NHS.UK frontend v9.3.0, and the [interruption panel variant](https://service-manual.nhs.uk/design-system/components/panel#interruption-panel) from NHS.UK frontend v10.3.0, have been added:

```jsx
<Panel>
  <Panel.Title>Booking complete</Panel.Title>
  We have sent you a confirmation email
</Panel>
```

This replaces the [list panel component](#list-panel) which was removed in NHS.UK frontend v6.0.0.

### Summary list rows and actions

The [summary list](https://service-manual.nhs.uk/design-system/components/summary-list) component now includes improvements from NHS.UK frontend v9.6.2:

- new prop `noBorder` supported at `<SummaryList.Row>` level
- new child component `<SummaryList.Action>` for row actions
- removed unnecessary child component `<SummaryList.Actions>`

```patch
  <SummaryList>
-   <SummaryList.Row>
+   <SummaryList.Row noBorder>
      <SummaryList.Key>Name</SummaryList.Key>
      <SummaryList.Value>Karen Francis</SummaryList.Value>
-     <SummaryList.Actions>
-       <a href="#">
-         Change<span className="nhsuk-u-visually-hidden"> name</span>
-       </a>
+     <SummaryList.Action href="#" visuallyHiddenText="name">
+       Change
+     </SummaryList.Action>
-     </SummaryList.Actions>
    </SummaryList.Row>
  </SummaryList>
```

### Support for component language localisation

The [character count](https://service-manual.nhs.uk/design-system/components/character-count), [file upload](https://service-manual.nhs.uk/design-system/components/file-upload) and [password input](https://service-manual.nhs.uk/design-system/components/password-input) components now support the `i18n` prop for [NHS.UK frontend localisation](https://github.com/nhsuk/nhsuk-frontend/blob/main/docs/configuration/localisation.md).

### Support for React Server Components (RSC)

All components have been tested as React Server Components (RSC) but due to [multipart namespace component limitations](https://ivicabatinic.from.hr/posts/multipart-namespace-components-addressing-rsc-and-dot-notation-issues) an alternative syntax (without dot notation) can be used as a workaround:

```patch
  <Breadcrumb>
-   <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
-   <Breadcrumb.Item href="#">NHS services</Breadcrumb.Item>
-   <Breadcrumb.Item href="#">Hospitals</Breadcrumb.Item>
+   <BreadcrumbItem href="#">Home</BreadcrumbItem>
+   <BreadcrumbItem href="#">NHS services</BreadcrumbItem>
+   <BreadcrumbItem href="#">Hospitals</BreadcrumbItem>
  </Breadcrumb>
```

## Breaking changes

### Update the JavaScript supported script snippet

You must now use the NHS.UK frontend v10.x feature detection snippet to check for `<script type="module">`. This change enables styling for JavaScript features in [supported browsers]() only:

```patch
- <body class="js-enabled">
+ <body suppressHydrationWarning>
+   <script>document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' nhsuk-frontend-supported' : '');</script>
```

### Update fieldset legend and label size, font weight

To align with NHS.UK frontend, the fieldset legend and label components no longer default to size "XL" when `isPageHeading: true` is set and the `bold` prop has been removed.

You must make the following changes to `labelProps` and `<Label>` components:

- for every `isPageHeading: true` append `size: 'xl'`
- replace `bold: true` with `size: 's'`

```patch
  <TextInput
    label="Address line 1"
-   labelProps={{ isPageHeading: true }}
+   labelProps={{ isPageHeading: true, size: 'xl' }}
    autoComplete="address-line1"
  />
  <TextInput
    label="Address line 2"
-   labelProps={{ bold: true }}
+   labelProps={{ size: 's' }}
    autoComplete="address-line2"
  />
```

You must make the following changes to `<Fieldset.Legend>` components:

- for every `isPageHeading` append `size="xl"`

```patch
  <Fieldset>
-   <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
+   <Fieldset.Legend isPageHeading size="xl">What is your address?</Fieldset.Legend>
    <!-- // ... -->
  </Fieldset>
```

### Make sure error message text is added

For accessibility reasons and to align with NHS.UK frontend, the boolean `error: true` prop must be replaced with an error message string:

```patch
  <TextInput
    label="What is your NHS number?"
    labelProps={{ isPageHeading: true, size: 'l' }}
-   error
+   error="Enter NHS number"
  />
```

Read about [our guidance on error messages](https://service-manual.nhs.uk/design-system/components/error-message) on the design system in the NHS digital service manual.

### Make sure heading levels are lowercase

If you are using the `headingLevel` prop you will need to update any uppercase values to lowercase:

```patch
- <Card.Heading headingLevel="H3">Example heading</Card.Heading>
+ <Card.Heading headingLevel="h3">Example heading</Card.Heading>
```

### Rename the heading level component

If you are using the `HeadingLevel` component you must rename it to `Heading` where the `size` and `visuallyHiddenText` props now supported:

```patch
- <HeadingLevel className="nhsuk-heading-m">
+ <Heading size="m">
    Example heading
- </HeadingLevel>
+ </Heading>
```

### Restore visually hidden text for accessibility

For accessibility reasons, it's no longer possible to pass `visuallyHiddenText: false` or override other hidden text for the following:

- [**Breadcrumbs** back link prefix](https://service-manual.nhs.uk/design-system/components/breadcrumbs)
- [**Care card** urgency level](https://service-manual.nhs.uk/design-system/patterns/help-users-decide-when-and-where-to-get-care)
- [**Contents list** links heading](https://service-manual.nhs.uk/design-system/components/contents-list)
- [**Inset text** prefix](https://service-manual.nhs.uk/design-system/components/inset-text)
- [**Warning callout** prefix](https://service-manual.nhs.uk/design-system/components/warning-callout)

Read about other [changes to meet WCAG 2.2](https://service-manual.nhs.uk/design-system/changes-to-design-system-wcag-2-2) on the design system in the NHS digital service manual.

### Check components that conditionally reveal content still work

Previously, conditionally revealing content ([radios](https://service-manual.nhs.uk/design-system/components/radios#conditionally-revealing-content), [checkboxes](https://service-manual.nhs.uk/design-system/components/checkboxes#conditionally-revealing-content)) would not be rendered until their related input was checked.

To align with NHS.UK frontend, conditionally revealing content is now always rendered but remains hidden until revealed. Accessibility issues with missing `aria-controls`, `aria-describedby` or `aria-expanded` are now fixed.

You must check all form components, form validation and error handling that may not expect hidden conditionally revealing content in the HTML.

### Remove unsupported icons

To align with NHS.UK frontend, icons unused by components have been removed:

- `ChevronLeftIcon`
- `ChevronRightIcon`
- `ChevronDownIcon`
- `CloseIcon`
- `EmdashIcon` and `SmallEmdashIcon`
- `MinusIcon`
- `PlusIcon`

### Back link

To align with NHS.UK frontend, we've added an underline to the [back link component](https://service-manual.nhs.uk/design-system/components/back-link). We've also changed the default text from "Go back" to "Back" in all examples.

### Button

To align with NHS.UK frontend, we've updated the [button component](https://service-manual.nhs.uk/design-system/components/buttons) to remove any references to the `nhsuk-button--disabled` class.

Use the [`disabled` HTML boolean attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled) to mark `<button>` elements as being disabled instead.

You must also make the following changes:

- replace `<DefaultButton>` with `<Button>` to render HTML `<button>` elements
- replace `<LinkButton>` with `<Button href="/example">` to render HTML `<a>` elements
- remove the `debounceTimeout` prop when preventing double clicks

### Cards

To align with NHS.UK frontend, we've updated the [card component](https://service-manual.nhs.uk/design-system/components/card) to use boolean props for all supported card types. The existing `cardType` prop can now only be used to set care card variants.

```patch
- <Card cardType="clickable">
+ <Card clickable>
```

```patch
- <Card cardType="feature">
+ <Card feature>
```

```patch
- <Card cardType="primary">
+ <Card primary>
```

```patch
- <Card cardType="secondary">
+ <Card secondary>
```

### Character count

To align with NHS.UK frontend, the character count component automatically renders its own children (label, hint, error message etc) and associated ARIA attributes. We have removed `enum CharacterCountType` and you must make the following changes:

- use the `maxLength` prop for maximum characters only
- use the `maxWords` prop for maximum words only
- rename the `textareaId` prop to `id`
- rename the `thresholdPercent` prop to `threshold`
- remove the `countType` prop

To count maximum characters:

```patch
- <CharacterCount maxLength={350} countType={CharacterCountType.Characters}>
+ <CharacterCount maxLength={350}>
```

To count maximum words:

```patch
- <CharacterCount maxLength={20} countType={CharacterCountType.Words}>
+ <CharacterCount maxWords={20}>
```

Making sure to remove all unnecessary child components:

```patch
  <CharacterCount
+   label="Can you provide more detail?"
+   hint="Do not include personal information like your name, date of birth or NHS number"
-   textareaId="example"
+   id="example"
+   name="example"
+   maxLength={350}
+   rows={5}
- >
+ />
-   <Label htmlFor="example">Can you provide more detail?</Label>
-   <HintText id="example-hint">
-     Do not include personal information like your name, date of birth or NHS number
-   </HintText>
-   <Textarea
-     id="example"
-     className="nhsuk-js-character-count"
-     name="example"
-     aria-describedby="example-hint"
-     rows={5}
-   />
- </CharacterCount>
```

### Contents list

To align with NHS.UK frontend, the contents list component automatically adds ARIA attributes for the current item. You must make the following changes:

- remove the `ContentsList` component `aria-label` attribute
- remove the `ContentsList.Item` component `aria-current` attribute

```patch
- <ContentsList aria-label="Pages in this guide">
+ <ContentsList>
-   <ContentsList.Item current aria-current="page">Example page 1</ContentsList.Item>
+   <ContentsList.Item current>Example page 1</ContentsList.Item>
    <ContentsList.Item>Example page 2</ContentsList.Item>
    <ContentsList.Item>Example page 3</ContentsList.Item>
  </ContentsList>
```

### Date input

To align with NHS.UK frontend, the date input component automatically renders its own fieldset, legend and associated ARIA attributes. The custom `autoSelectNext` prop is no longer supported:

```patch
  <DateInput
-   label="What is your date of birth?"
+   legend="What is your date of birth?"
    hint="For example, 15 3 1984"
-   autoSelectNext={true}
    value={value}
  />
```

The custom `autoSelectNext` prop is no longer supported.

### Header

The updated header component from NHS.UK frontend v10.x has been added. You will need to make the following changes:

- move `Header.Logo` props to `<Header logo={{ href: '/' }}>`
- move `Header.ServiceName` props to `<Header service={{ text: "Manage patients" }}>`
- remove the wrapping `Header.Container` component
- remove the wrapping `Header.Content` component
- remove the automatically created `Header.Logo` component
- remove the automatically created `Header.ServiceName` component
- remove the automatically created `Header.NavDropdownMenu` component
- rename the `Header.Nav` component to `Header.Navigation`
- rename the `Header.NavItem` component to `Header.NavigationItem`

```patch
- <Header>
+ <Header service={{ text: "Manage patients", href: '/' }}>
-   <Header.Container>
-     <Header.Logo href="/" />
-     <Header.ServiceName href="/">Manage patients</Header.ServiceName>
-     <Header.Content>
-       <Header.Search />
-     </Header.Content>
-   </Header.Container>
+   <Header.Search />
-   <Header.Nav>
-     <Header.NavItem href="#">Example 1</Header.NavItem>
-     <Header.NavItem href="#">Example 2</Header.NavItem>
-     <Header.NavItem href="#">Example 3</Header.NavItem>
-     <Header.NavItem href="#">Example 4</Header.NavItem>
-     <Header.NavDropdownMenu />
-   </Header.Nav>
+   <Header.Navigation>
+     <Header.NavigationItem href="#">Example 1</Header.NavigationItem>
+     <Header.NavigationItem href="#">Example 2</Header.NavigationItem>
+     <Header.NavigationItem href="#">Example 3</Header.NavigationItem>
+     <Header.NavigationItem href="#">Example 4</Header.NavigationItem>
+   </Header.Navigation>
  </Header>
```

### Footer

The updated footer component from NHS.UK frontend v10.x has been added. You will need to make the following changes:

- replace `<Footer.List className="nhsuk-footer__meta">` with `<Header.Meta>`
- nest the `Footer.Copyright` component into `Header.Meta` component

```patch
  <Footer>
    <Footer.List>
      <Footer.ListItem href="#">Item 1</Footer.ListItem>
      <Footer.ListItem href="#">Item 2</Footer.ListItem>
      <Footer.ListItem href="#">Item 3</Footer.ListItem>
    </Footer.List>

-   <Footer.List className="nhsuk-footer__meta">
+   <Footer.Meta>
      <Footer.ListItem href="#">Meta 1</Footer.ListItem>
      <Footer.ListItem href="#">Meta 2</Footer.ListItem>
      <Footer.ListItem href="#">Meta 3</Footer.ListItem>
+
+     <Footer.Copyright />
-   </Footer.List>
+   </Footer.Meta>
-   <Footer.Copyright />
  </Footer>
```

### List panel

The list panel component was removed in NHS.UK frontend v6.0.0 and must be replaced with a feature card and nested list:

Before:

```jsx
<Panel label="C" labelProps={{ id: 'C' }} backToTop backToTopLink="#nhsuk-nav-a-z">
  <Panel.LinkItem href="/conditions/chest-pain/">Chest pain</Panel.LinkItem>
  <Panel.LinkItem href="/conditions/cold-sores/">Cold sore</Panel.LinkItem>
</Panel>
```

After:

```jsx
<Card feature>
  <Card.Heading id="C">C</Card.Heading>
  <ul className="nhsuk-list nhsuk-list--border">
    <li><a href="/conditions/chest-pain/">Chest pain</a></li>
    <li><a href="/conditions/cold-sores/">Cold sore</a></li>
  </ul>
</Card>

<div className="nhsuk-back-to-top">
  <a className="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
    Back to top
  </a>
</div>
```

### Radios

To align with NHS.UK frontend, the radios component automatically renders its own fieldset, legend and associated ARIA attributes. You must also rename the `Radios.Radio` component to `Radios.Item` as shown:

```patch
- <Fieldset disableErrorLine="false">
-   <Fieldset.Legend>Have you changed your name?</Fieldset.Legend>
-   <Radios>
+   <Radios legend="Have you changed your name?">
-     <Radios.Radio value="yes">Yes</Radios.Radio>
-     <Radios.Radio value="no">No</Radios.Radio>
+     <Radios.Item value="yes">Yes</Radios.Item>
+     <Radios.Item value="no">No</Radios.Item>
    </Radios>
- </Fieldset>
```

The prop `disableErrorLine` is no longer necessary.

### Checkboxes

To align with NHS.UK frontend, the checkboxes component automatically renders its own fieldset, legend and associated ARIA attributes. You must also rename the `Checkboxes.Box` component to `Checkboxes.Item` as shown:

```patch
- <Fieldset disableErrorLine="false">
-   <Fieldset.Legend>What is your nationality?</Fieldset.Legend>
-   <Checkboxes>
+   <Checkboxes legend="What is your nationality?">
-     <Checkboxes.Box value="british">British</Checkboxes.Box>
-     <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
-     <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
+     <Checkboxes.Item value="british">British</Checkboxes.Item>
+     <Checkboxes.Item value="irish">Irish</Checkboxes.Item>
+     <Checkboxes.Item value="other">Citizen of another country</Checkboxes.Item>
    </Checkboxes>
- </Fieldset>
```

You must also rename the `Checkboxes.Item` prop `inputRef` to `ref` for consistency with other components:

```patch
- <Checkboxes.Item inputRef={ref}>Example</Checkboxes.Item>
+ <Checkboxes.Item ref={ref}>Example</Checkboxes.Item>
```

The prop `disableErrorLine` is no longer necessary.

### Error summary

To align with NHS.UK frontend, the error summary component is automatically alerted to screen readers by focusing itself on render. You will need to make the following changes:

- remove the nested `ErrorSummary.Body` component wrapper
- rename the `ErrorSummary.Item` component to `ErrorSummary.ListItem`

```patch
- </Fieldset>
  <ErrorSummary>
    <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
-   <ErrorSummary.Body>
      <ErrorSummary.List>
-       <ErrorSummary.Item href="#example-error-1">
+       <ErrorSummary.ListItem href="#example-error-1">
          Date of birth must be in the past
-       </ErrorSummary.Item>
+       </ErrorSummary.ListItem>
      </ErrorSummary.List>
-   </ErrorSummary.Body>
  </ErrorSummary>
```

### Pagination

To align with NHS.UK frontend, the pagination link component automatically renders its own "Previous page" or "Next page" text, with "page" being visually hidden. You will need to make the following changes:

- rename the `Pagination.Link` component to `Pagination.Item`
- move text content (or the `children` prop) to the `labelText` prop

```patch
  <Pagination>
-   <Pagination.Link href="/section/treatments" previous>
-     Treatments
-   </Pagination.Link>
-   <Pagination.Link href="/section/symptoms" next>
-     Symptoms
-   </Pagination.Link>
+   <Pagination.Item labelText="Treatments" href="/section/treatments" previous />
+   <Pagination.Item labelText="Symptoms" href="/section/symptoms" next />
  </Pagination>
```

### Select

You must rename the `Select` prop `selectRef` to `ref` for consistency with other components:

```patch
- <Select selectRef={ref} />
+ <Select ref={ref} />
```

### Skip link

To align with NHS.UK frontend, the skip link component focuses the main content rather than the first heading on the page:

```html
<main class="nhsuk-main-wrapper" id="maincontent">
  <!-- // ... -->
</main>
```

For accessibility reasons, you must make the following changes:

- remove the `disableDefaultBehaviour` prop
- remove the `disableHeadingFocus` prop
- remove custom `onClick` handlers

### Tables

To align with NHS.UK frontend, you must make the following changes:

- rename the `Table` prop `isResponsive` to `responsive`
- rename the `Table.Cell` prop `isNumeric` to `format="numeric"`
- remove unnecessary role attributes from tables, sections, rows and cells

```patch
- <Table caption="Number of cases" isResponsive>
+ <Table caption="Number of cases" responsive>
-   <Table.Head role="rowgroup">
+   <Table.Head>
-     <Table.Row role="row">
+     <Table.Row>
        <Table.Cell>Location</Table.Cell>
        <Table.Cell>Number of cases</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
-     <Table.Row role="row">
+     <Table.Row>
        <Table.Cell>England</Table.Cell>
-       <Table.Cell isNumeric>4,000</Table.Cell>
+       <Table.Cell format="numeric">4,000</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
```

If you are using the `Table.Panel` child component, you must migrate to the feature card:

```patch
- <Table.Panel heading="Other conditions like impetigo">
+ <Card feature>
+   <Card.Heading>Other conditions like impetigo</Card.Heading>
```

### Textarea

You must rename the `Textarea` prop `textareaRef` to `ref` for consistency with other components:

```patch
- <Textarea textareaRef={ref} />
+ <Textarea ref={ref} />
```

### Text input

You must rename the `TextInput` prop `inputRef` to `ref` for consistency with other components:

```patch
- <TextInput inputRef={ref} />
+ <TextInput ref={ref} />
```

### Warning callout

To align with NHS.UK frontend, the warning callout `WarningCallout.Label` component has been renamed to `WarningCallout.Heading` as shown:

```patch
  <WarningCallout>
-   <WarningCallout.Label>School, nursery or work</WarningCallout.Label>
+   <WarningCallout.Heading>School, nursery or work</WarningCallout.Heading>
    <p>
      Stay away from school, nursery or work until all the spots have crusted over. This is
      usually 5 days after the spots first appeared.
    </p>
  </WarningCallout>
```

## Fixes

- [#52: Expose header navigation open/close state (with setter)](https://github.com/NHSDigital/nhsuk-react-components/issues/52)
- [#69: Unable to use ref attribute on some components](https://github.com/NHSDigital/nhsuk-react-components/issues/69)
- [#71: Expose FormGroup component to consumers](https://github.com/NHSDigital/nhsuk-react-components/issues/71)
- [#105: getHeadingsFromChildren forces use of string as table cell child](https://github.com/NHSDigital/nhsuk-react-components/issues/105)
- [#166: SkipLink double jumps to first heading then #maincontent if disableDefaultBehaviour is not set](https://github.com/NHSDigital/nhsuk-react-components/issues/166)
- [#174: Responsive tables and validation errors](https://github.com/NHSDigital/nhsuk-react-components/issues/174)
- [#214: Hints and errors are not semantically associated with fieldsets](https://github.com/NHSDigital/nhsuk-react-components/issues/214)
- [#215: Suggestion: remove all 'boolean' examples from storybook](https://github.com/NHSDigital/nhsuk-react-components/issues/215)
- [#243: Use correct NHS.UK frontend JavaScript when rendered client-side](https://github.com/NHSDigital/nhsuk-react-components/issues/243)
- [#244: Breaking change: remove default legend and label sizes or else change to l](https://github.com/NHSDigital/nhsuk-react-components/issues/244)
- [#245: Fieldset incorrectly gets set in error when a child input is in error](https://github.com/NHSDigital/nhsuk-react-components/issues/245)
- [#247: Date component uses label rather than fieldset with legend](https://github.com/NHSDigital/nhsuk-react-components/issues/247)
- [#256: SkipLink does not work if intended target header is rerendered](https://github.com/NHSDigital/nhsuk-react-components/issues/256)
- [#259: Remove pattern="[0-9]\*" from date inputs](https://github.com/NHSDigital/nhsuk-react-components/issues/259)
- [#260: Allow custom component for button links](https://github.com/NHSDigital/nhsuk-react-components/issues/260)
- [#265: Header logo is not labeled correctly when organisation info is provided](https://github.com/NHSDigital/nhsuk-react-components/issues/265)
