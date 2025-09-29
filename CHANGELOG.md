# NHS.UK React components

## Unreleased

This version provides support for nhsuk-frontend version 10.

For a full list of changes in this release please refer to the [migration doc](https://github.com/NHSDigital/nhsuk-react-components/blob/main/docs/upgrade-to-6.0.md).

## 5.0.0 - 4 November 2024

This version provides support for nhsuk-frontend version 9.

For a full list of changes in this release please refer to the [migration doc](https://github.com/NHSDigital/nhsuk-react-components/blob/main/docs/upgrade-to-5.0.md).

## 4.1.3 - 23 September 2024

:wrench: **Fixes**

- Remove the unnecessary aria-labelledby tags from radio items. PR [#253](https://github.com/NHSDigital/nhsuk-react-components/pull/253)

## 4.1.2 - 3 September 2024

:wrench: **Fixes**

- Fix issues with SkipLink (always set the href) and bring into line with NHSUK frontend. PR [#248](https://github.com/NHSDigital/nhsuk-react-components/pull/248)

## 4.1.1 - 9 August 2024

:wrench: **Fixes**

- Remove the unnecessary aria-labelledby tags from DateInput fields. PR [#246](https://github.com/NHSDigital/nhsuk-react-components/pull/246)

## 4.1.0 - 11 June 2024

:wrench: **Fixes**

- Add js shims for buttons. PR [#231](https://github.com/NHSDigital/nhsuk-react-components/pull/231), Fixes [#218](https://github.com/NHSDigital/nhsuk-react-components/issues/218)
- Fix errors not being linked to inputs. PR [#230](https://github.com/NHSDigital/nhsuk-react-components/pull/230), Fixes [#227](https://github.com/NHSDigital/nhsuk-react-components/issues/227)
- Fix inputs incorrectly using `aria-labelledby`. PR [#230](https://github.com/NHSDigital/nhsuk-react-components/pull/230), Fixes [#212](https://github.com/NHSDigital/nhsuk-react-components/issues/212)
- Update Storybook docs for several components.

:new: **New features**

- Added a CHANGELOG to keep track of changes between releases. [Keep a changelog](https://keepachangelog.com)
- Added support for `preventDoubleClick` debouncing on buttons. PR [#231](https://github.com/NHSDigital/nhsuk-react-components/pull/231)
- Error summaries now automatically set role, tabindex, and aria-labelledby. PR [#229](https://github.com/NHSDigital/nhsuk-react-components/pull/237), Fixes [#228](https://github.com/NHSDigital/nhsuk-react-components/issues/229)
- Storybook link in readme now points to latest version. PR [#226](https://github.com/NHSDigital/nhsuk-react-components/pull/226)

## 4.0.2 - 21 May 2024

:wrench: **Fixes**

- Fix error message role by @edwardhorsford in [#219](https://github.com/NHSDigital/nhsuk-react-components/pull/219)

## 4.0.1 - 20 May 2024

:wrench: **Fixes**

- Fix issue with the footer copyright not being rendered in the correct location if there are multiple link columns by @jakeb-nhs in [#223](https://github.com/NHSDigital/nhsuk-react-components/pull/223)

## 4.0.0 - 15 May 2024

This version updates nhsuk-frontend to version 8.

For a full list of changes in this release please refer to the [migration doc](https://github.com/NHSDigital/nhsuk-react-components/blob/main/docs/upgrade-to-4.0.md).

- Migrate enzyme to react-testing-library by @JoshuaBates-NHS in [#198](https://github.com/NHSDigital/nhsuk-react-components/pull/198)
- Allow support for module directives in build process by @JoshuaBates-NHS in [#199](https://github.com/NHSDigital/nhsuk-react-components/pull/199)
- Update modified components since NHS UK frontend v5 by @jakeb-nhs in [#197](https://github.com/NHSDigital/nhsuk-react-components/pull/197)
- Add new components since NHS UK frontend v5 by @jakeb-nhs in [#202](https://github.com/NHSDigital/nhsuk-react-components/pull/202)
- Migrate some patterns to components, rework removed components from frontend v8 by @jakeb-nhs in [#203](https://github.com/NHSDigital/nhsuk-react-components/pull/203)
- Improve unit test coverage by @jakeb-nhs in [#204](https://github.com/NHSDigital/nhsuk-react-components/pull/204)
