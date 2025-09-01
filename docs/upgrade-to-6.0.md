# Upgrading to 6.0

There are some breaking changes you'll need to be aware of when upgrading to v6.

[NHS.UK frontend v10.0.0](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v10.0.0) introduces some breaking changes to file paths, full width buttons on mobile, the header component and others. It also stops Internet Explorer 11 and other older browsers from running NHS.UK frontend JavaScript.

You must read and apply these updates carefully to make sure your service does not break.

## Breaking changes

### Update the JavaScript supported script snippet

You must now use the NHS.UK frontend v10.x feature detection snippet to check for `<script type="module">`. This change enables styling for JavaScript only features in [supported browsers]() only:

```patch
- <body class="js-enabled">
+ <body>
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

### Character count

To align with NHS.UK frontend, we have removed `enum CharacterCountType` and you must make the following changes:

- use the `maxLength` prop for maximum characters only
- use the `maxWords` prop for maximum words only
- rename the `thresholdPercent` prop to `threshold`
- remove the `countType` prop

To count maximum characters:

```patch
- <CharacterCountComponent maxLength={350} countType={CharacterCountType.Characters} textAreaId="example">
+ <CharacterCountComponent maxLength={350} textAreaId="example">
```

To count maximum words:

```patch
- <CharacterCountComponent maxLength={20} countType={CharacterCountType.Words} textAreaId="example">
+ <CharacterCountComponent maxWords={20} textAreaId="example">
```

### Contents list

To align with NHS.UK frontend, the contents list component automatically adds ARIA attributes for the current item. You must make the following changes:

- remove the `ContentsList` component `aria-label` attribute
- remove the `ContentsList.Item` component `aria-current` attribute

```patch
- <ContentsList aria-label="Pages in this guide">
+ <ContentsList>
-   <ContentsList.Item current aria-current="page">Example page 1</ContentsList.Item>
-   <ContentsList.Item current>Example page 1</ContentsList.Item>
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

### New header component with account section

The updated header component from NHS.UK frontend v10.x has been added. You will need to make the following changes:

- remove the wrapping `Header.Container` component
- remove the wrapping `Header.Content` component
- remove the automatically created `HeaderComponent.ServiceName` component
- remove the automatically created `Header.NavDropdownMenu` component
- rename the `Header.Nav` component to `Header.Navigation`
- rename the `Header.NavItem` component to `Header.NavigationItem`

```patch
  <Header>
-   <Header.Container>
-     <Header.Logo href="/" />
-     <Header.Content>
-       <Header.Search />
-     </Header.Content>
-   </Header.Container>
+   <Header.Logo href="/" />
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
<Card cardType="feature">
  <Card.Content>
    <Card.Heading id="C">C</Card.Heading>
    <ul className="nhsuk-list nhsuk-list--border">
      <li><a href="/conditions/chest-pain/">Chest pain</a></li>
      <li><a href="/conditions/cold-sores/">Cold sore</a></li>
    </ul>
  </Card.Content>
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
- <Fieldset>
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

### Checkboxes

To align with NHS.UK frontend, the checkboxes component automatically renders its own fieldset, legend and associated ARIA attributes. You must also rename the `Checkboxes.Box` component to `Checkboxes.Item` as shown:

```patch
- <Fieldset>
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

### Skip link

To align with NHS.UK frontend, the skip link component focuses the main content rather than the first heading on the page:

```html
<main class="nhsuk-main-wrapper id="maincontent">
  <!-- // ... -->
```

For accessibility reasons, you must make the following changes:

- remove the `disableDefaultBehaviour` prop
- remove the `disableHeadingFocus` prop
- remove custom `onClick` handlers

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
