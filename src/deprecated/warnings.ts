export const PromoDeprecationWarning =
  'The Promo component is deprecated, and will be removed in the next major version of nhsuk-react-components. The Card component is the intended replacement.';

export const PanelDeprecationWarning =
  'The Promo component is deprecated, and will be removed in the next major version of nhsuk-react-components. The Card component is the intended replacement.';

export const NHSUKFrontendV5UpgradeWarnings = {
  FooterColumns:
    'The footer columns prop is deprecated and will be removed in the next major release, as this has been removed from the NHS.UK frontend library v5.',
  DoDontListPrefix:
    "Items with a `type` of `dont` will automatically have a 'do not' prefix text added in the next major release to align with the NHS.UK frontend library v5.",
  TransactionalServiceNameLongVariantRemoved:
    'The `long` variant of the `TransactionalServiceName` component will be removed in the next major release to align with the NHS.UK frontend library v5.',
  ReviewDateMovedToPattern:
    'The `ReviewDate` component will be removed in the next major release to align with the NHS.UK frontend library v5. ' +
    'The `ReviewDate` component will exist as a `pattern`. ' +
    'If you use the default import the path will change from `/lib/components/ReviewDate` to `/lib/patterns/ReviewDate`.',
} as const;
