---
title: "CDR Shops — Data"
description: "14 shops where individuals can buy certified carbon removal, with prices and ratings. CC BY 4.0."
url: "/data/shops/"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "CDR Shops",
  "description": "Shops where individuals can buy certified carbon dioxide removal, with prices, methods, certifiers and delivery times.",
  "url": "https://captaindrawdown.com/data/shops/",
  "license": "https://creativecommons.org/licenses/by/4.0/",
  "isAccessibleForFree": true,
  "creator": {
    "@type": "Organization",
    "name": "Captain Drawdown (Carbon Drawdown Initiative)",
    "url": "https://captaindrawdown.com"
  },
  "version": "2026-11",
  "dateModified": "2026-11-04",
  "keywords": [
    "carbon dioxide removal",
    "shops",
    "prices",
    "biochar",
    "direct air capture"
  ],
  "distribution": [
    {
      "@type": "DataDownload",
      "encodingFormat": "text/csv",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11/shops.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "application/json",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11/shops.json"
    }
  ]
}
</script>

**14 shops** in release 2026-11 (data as of 2026-11-04): every shop we know of where a person can buy certified carbon removal with a live credit-card checkout, listed on [cdr-shops.com](https://www.cdr-shops.com/carbon-removal/) with price, method, certifier, delivery time and our ratings for MRV, certification and delivery.

## Download

| File | Rows | Size | Format |
|---|---|---|---|
| shops | 14 | 2 KB | [CSV](/data/v1/2026-11/shops.csv) · [JSON](/data/v1/2026-11/shops.json) |

## Fields

- **name, url, listing_url**: the shop and our listing.
- **method_group, method, purchase, price, price_unit, delivery_time, certifier**: what you buy, for how much, when it is delivered and who certifies it.
- **rating_mrv, rating_certification, rating_delivery**: our A to D ratings, explained on the listing page.

## Method

Shops are added only when a live checkout exists and the removal is third-party certified; self-certification and registries without issuance are not accepted. Prices are checked monthly by an automated run and corrected by hand.

## Versions

This page describes release **2026-11** (data as of 2026-11-04). Every release is frozen under `/data/v1/2026-11/`; the newest release is also mirrored under [`/data/v1/latest/`](/data/v1/latest/). The [manifest](/data/v1/2026-11/manifest.json) lists every file with row counts and SHA-256 checksums. Releases appear monthly, around the 15th; corrections between releases are listed in the [changelog](/data/changelog/).

## Licence and citation

Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Cite as:

> Captain Drawdown / Carbon Drawdown Initiative (2026). CDR Shops, version 2026-11. https://captaindrawdown.com/data/shops/ (CC licence, see page).

## Corrections and removal

Found an error, or want an entry about you or your company corrected or removed? Write to [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de?subject=Captain%20Drawdown%20data%20correction) with the row and the correction. We answer within five working days and list the change in the next release. How we handle personal data is explained in the [privacy notice](/privacy/).
