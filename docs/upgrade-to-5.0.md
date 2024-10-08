# Upgrading to 5.0

There are some breaking changes you'll need to be aware of when upgrading to v5. These are mostly related to us upgrading our dependency on [nhsuk-frontend to v9](https://github.com/nhsuk/nhsuk-frontend/blob/main/CHANGELOG.md#901---9-october-2024) which also includes breaking changes.

## Breaking changes

### Breadcrumbs

The `Breadcrumbs` component no longer contains its own `<Container>` container component.

Instead, `Breadcrumbs` should be moved inside the existing `<Container>` or `<div class="nhsuk-width-container">` for your overall page, but before the `<main>` tag.

This means that instead of this:

```
<Breadcrumb>
    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
</Breadcrumb>
<Container>
  <main class="nhsuk-main-wrapper" id="maincontent" role="main">
    ...
  </main>
</Container>
```

You should have this:

```
<Container>
    <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
    </Breadcrumb>
    <main class="nhsuk-main-wrapper" id="maincontent" role="main">
        ...
    </main>
</Container>
```

### Back link

Although no changes were needed in this library, nhsuk-frontend library has a breaking change for consumers of the `BackLink` component. See the [Changelog](https://github.com/nhsuk/nhsuk-frontend/blob/main/CHANGELOG.md#updated-back-link-and-breadcrumbs-pr-1002)

## New Features

### Warning Button

A new Warning Button variant has been added to the `Button` component. To use this, set the `warning` prop on `Button`, e.g.

```
<Button warning>Delete</Button>
```

### FormGroup

In order to provide consumers of this library more control over when to render fieldsets, some behaviour of the previous `Fieldset` component has been extracted into a new `FormGroup` component. This makes `FormGroup` responsible for rendering the error decorator line for groups of inputs, and `Fieldset` is now a simpler component which makes use of this component.

No changes are required for existing usages of `Fieldset`. For examples of the usage of `FormGroup`, please see storybook.

For example, this:

```
    <Fieldset>
        <Fieldset.Legend>What is your address?</Fieldset.Legend>
        <TextInput id="address-1" />
        <TextInput id="address-2" />
    </Fieldset>
```

Would become this:

```
    <InputGroup>
        <Fieldset>
            <Fieldset.Legend>What is your address?</Fieldset.Legend>
            <TextInput id="address-1" />
            <TextInput id="address-2" />
        </Fieldset>
    </InputGroup>
```

Which also allows consumers to omit the `Fieldset` if rendering a single input:

```
    <InputGroup>
        <HeadingLevel headingLevel="h3">What is your address?</HeadingLevel>
        <TextInput id="address-1" />
    </InputGroup>
```
