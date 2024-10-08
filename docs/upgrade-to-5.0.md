# Upgrading to 5.0

## Breaking changes

## New Features

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
