# Upgrading to 4.0

There are some breaking changes you'll need to be aware of when upgrading to v4. These are mostly related to us upgrading our dependency on [nhsuk-frontend to v8](https://github.com/nhsuk/nhsuk-frontend/blob/main/CHANGELOG.md#810---11-january-2024) which also includes breaking changes.

## Breaking changes

### Breadcrumbs

The breadcrumbs component has been brought in line with nhsuk-frontend. As part of this, the mobile-only 'back link' which is displayed will now have a hidden 'Back to' aria-label prefix added to it. Please ensure you remove any custom accessibility around this.

I.e., this:

```
    <Breadcrumb.Back href="/level-one/level-two/level-three">Back to Level three</Breadcrumb.Back>
```

Should now become this:

```
    <Breadcrumb.Back href="/level-one/level-two/level-three">Level three</Breadcrumb.Back>
```

### Header

The header implementation has been simplified and a reduced set of components are on offer for this version.

The `Header.NavContainer`, `Header.NavItemList`, and `Header.NavTitle` components have been removed. Instead, the `Header.Nav` component includes the container for rendering items. The nav title has been removed, and customisation of the dropdown manu link text can be done via the `dropdownText` prop on the new `Header.NavDropdownMenu` component.

The `Header.MenuToggle` and `Header.NavMenuClose` components have been removed. Instead, these should be replaced with a usage of `Header.NavDropdownMenu` added as the last child of `Header.NavMenu`.

For example, this:

```
    <Header>
        <Header.Container>
            <Header.Logo href="/" />
            <Header.Content>
                <Header.MenuToggle />
                <Header.Search />
            </Header.Content>
        </Header.Container>
        <Header.NavContainer>
            <Header.NavTitle>
                <span>Menu</span>
                <Header.NavMenuClose />
            </Header.NavTitle>
            <Header.NavItemList>
                <Header.NavItem href="/" mobileOnly>
                    Home
                </Header.NavItem>
                <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
                <Header.NavItem href="/live-well">Live Well</Header.NavItem>
            </Header.NavItemList>
        </Header.NavContainer>
    </Header>
```

Should become this:

```
    <Header>
        <Header.Container>
            <Header.Logo href="/" />
            <Header.Content>
                <Header.Search />
            </Header.Content>
        </Header.Container>
        <Header.Nav>
            <Header.NavItem href="/" mobileOnly>
                Home
            </Header.NavItem>
            <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
            <Header.NavItem href="/live-well">Live Well</Header.NavItem>
            <Header.NavDropdownMenu dropdownText="Menu" />
        </Header.NavContainer>
    </Header>
```

### Adding a `js-enabled` class

It is now required that a `js-enabled` class is added to a parent element if JavaScript is enabled (we suggest using `body`). E.g. `<body class="js-enabled">`.
This is to facilitate a differentiation in styling to the header depending on whether JavaScript is enabled or disabled.

### CareCard is now a variant of Card

`CareCard` has been removed as a standalone component and the `Card` component has been refactored to provide this functionality. This is achieved via the `cardType` prop.

Notice also that the `immediate` type of card is unsupported - this has been replaced with `emergency`.

Before, using the `CareCard`, you may have markup that looks like this:

```
<CareCard type='immediate'>
    <CareCard.Heading>Call 999 if:</CareCard.Heading>
    <CareCard.Content>
        <div>Your care card contents</div>
    </CareCard.Content>
</CareCard>
```

Now, it should look like this:

```
<Card cardType='emergency'>
    <Card.Heading>Call 999 if:</CareCard.Heading>
    <Card.Content>
        <div>Your care card contents</div>
    </Card.Content>
</Card>
```

### NavAZ and ListPanel

Due to these patterns being [removed from the nhsuk-frontend library](https://github.com/nhsuk/nhsuk-frontend/blob/main/CHANGELOG.md#600---29-november-2021), refactoring has taken place to ensure they still adhere to the NHS digital service manual.

The `NavAZ` pattern is still available as a component, however the `ListPanel` pattern component has now been renamed to `Panel`. To combine multiple panels you would simply render them as siblings - there is no need to wrap them in a list.

An additional storybook story has been added to give a full example of an A-Z page, combining both of these pattern components. This helps to bring this library into alignment with the [NHS digital service manual listing](https://service-manual.nhs.uk/design-system/patterns/a-to-z-page) for this pattern.

### Hint

`Hint` has been renamed to `HintText`.

## New features

### Text input prefixes + suffixes

You can now specify prefixes and/or suffixes for your text inputs. These are exposed as new props on the `TextInput` component, e.g.

```
    <TextInput prefix="£" suffix="per item" />
```

### Exclusive option for checkboxes

Added "None of the above" exclusive behaviour to checkboxes - allowing all checkboxes in a group to be automatically unchecked when the "None of the above" option is checked. To use this feature, a new prop is available on `Checkbox.Box` - set the `exclusive` prop to make that option exclusive, e.g.

```
<Checkboxes id="symptoms" name="symptoms" hint="Select all the symptoms you have.">
    <Checkboxes.Box value="sore-throat">Sore throat</Checkboxes.Box>
    <Checkboxes.Box value="runny-nose">Runny nose</Checkboxes.Box>
    <Checkboxes.Box value="muscle-pain">Muscle or joint pain</Checkboxes.Box>
    <Checkboxes.Divider />
    <Checkboxes.Box value="none" exclusive>
        None
    </Checkboxes.Box>
</Checkboxes>
```

### New component - Character Count

See [the Digital Service Manual](https://service-manual.nhs.uk/design-system/components/character-count) for information.
Usage:

```
<CharacterCount
    maxLength={150}
    countType={CharacterCountType.Characters}
    textAreaId="more-details"
>
    <Label htmlFor="more-details">Can you provide more detail?</Label>
    <Textarea id="more-details" className="nhsuk-js-character-count" name="more-details" rows={5} />
</CharacterCount>
```

### New component - Tabs

See [the Digital Service Manual](https://service-manual.nhs.uk/design-system/components/tabs) for information.
Usage:

```
<Tabs>
    <Tabs.Title>Contents</Tabs.Title>
    <Tabs.List>
        <Tabs.ListItem id="past-day">Past day</Tabs.ListItem>
        <Tabs.ListItem id="past-week">Past week</Tabs.ListItem>
        <Tabs.ListItem id="past-month">Past month</Tabs.ListItem>
    </Tabs.List>

    <Tabs.Contents id="past-day">
        <div>Past day contents go here</div>
    </Tabs.Contents>

    <Tabs.Contents id="past-week">
        <div>Past week contents go here</div>
    </Tabs.Contents>

    <Tabs.Contents id="past-month">
        <div>Past month contents go here</div>
    </Tabs.Contents>
</Tabs>
```

### New card variants

Two new card variants have been added - `primary` and `secondary`.

#### Primary

More information can be found in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/card#primary-card-with-chevron)

Usage:

```
<Card clickable cardType='primary'>
    <Card.Content>
        <Card.Heading>
            <Card.Link href="#">Primary card heading</Card.Link>
        </Card.Heading>
        <Card.Description>Primary card description</Card.Description>
        <ChevronRightCircle />
    </Card.Content>
</Card>
```

#### Secondary

More information can be found in the [NHS digital service manual](https://service-manual.nhs.uk/design-system/components/card#secondary-card)

Usage:

```
<Card clickable cardType='secondary'>
    <Card.Content>
        <Card.Heading>
            <Card.Link href="#">Secondary card heading</Card.Link>
        </Card.Heading>
        <Card.Description>Secondary card description</Card.Description>
    </Card.Content>
</Card>
```

## Notes for maintainers

This version switches to using `yarn` 4.x. This can be enabled and used through running the following commands:

```
# Remove yarn
npm -g remove yarn

# Enable corepack
corepack enable

# Set yarn version
yarn set version stable
```
