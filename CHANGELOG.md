# NHS.UK React components

## Unreleased

:wrench: **Fixes**

* Add js shims for buttons. PR #231, Fixes #218
* Fix errors not being linked to inputs. PR #230, Fixes #227
* Fix inputs incorrectly using `aria-labelledby`. PR #230, Fixes #212
* Update Storybook docs for several components.

:new: **New features**

* Added a CHANGELOG to keep track of changes between releases. [Keep a changelog](https://keepachangelog.com)
* Added support for `preventDoubleClick` debouncing on buttons. PR #231
* Error summaries now automatically set role, tabindex, and aria-labelledby. PR #229, Fixes #228
* Storybook link in readme now points to latest version. PR #226

## 4.0.2 - 21 May 2024

:wrench: **Fixes**

*-* Fix error message role by @edwardhorsford in #219

## 4.0.1 - 20 May 2024

:wrench: **Fixes**

* Fix issue with the footer copyright not being rendered in the correct location if there are multiple link columns by @jakeb-nhs in #223

## 4.0.0 - 15 May 2024

This version updates nhsuk-frontend to version 8.

For a full list of changes in this release please refer to the [migration doc](https://github.com/NHSDigital/nhsuk-react-components/blob/feature/nhsuk-frontend-v8/docs/upgrade-to-4.0.md).

* Migrate enzyme to react-testing-library by @JoshuaBates-NHS in #198
* Allow support for module directives in build process by @JoshuaBates-NHS in #199
* Update modified components since NHS UK frontend v5 by @jakeb-nhs in #197
* Add new components since NHS UK frontend v5 by @jakeb-nhs in #202
* Migrate some patterns to components, rework removed components from frontend v8 by @jakeb-nhs in #203
* Improve unit test coverage by @jakeb-nhs in #204
