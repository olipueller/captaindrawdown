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
  "version": "2026-11.4",
  "dateModified": "2026-11-05",
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
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.4/shops.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "application/json",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.4/shops.json"
    }
  ]
}
</script>

<div class="cd-split">
<div class="cd-main">

**14 shops** in release 2026-11.4 (data as of 2026-11-05): every shop I know of where a person can buy certified carbon removal with a live credit-card checkout, listed on [cdr-shops.com](https://www.cdr-shops.com/) with price, method, certifier, delivery time and ratings for MRV, certification and delivery.

<a class="cd-shot" href="https://www.cdr-shops.com/" title="Open cdr-shops.com"><img src="/images/cdr-shops-home.jpg" alt="Screenshot of the cdr-shops.com homepage: the list of shops that sell certified carbon removal to individuals" loading="lazy"></a>

Listing rules: a live checkout and third-party certified removal; self-certification and registries without issuance are not accepted. Prices are re-checked monthly.

</div>
<aside class="cd-aside"><div class="cd-panel"><h4>Release</h4><p>2026-11.4 · data as of 2026-11-05</p><span class="num">14</span><span class="lbl">shops with live prices</span><h4>Download</h4><ul><li>shops: <a href="/data/v1/2026-11.4/shops.csv">CSV</a> · <a href="/data/v1/2026-11.4/shops.json">JSON</a></li></ul><h4>Licence</h4><p><a href="https://creativecommons.org/licenses/by/4.0/"><span class="lic">CC BY 4.0</span></a></p><h4>Cite as</h4><p class="cite">Captain Drawdown / Carbon Drawdown Initiative (2026). CDR Shops, version 2026-11.4. https://captaindrawdown.com/data/shops/ (CC licence, see page).</p><h4>Use the data</h4><ul><li><a href="/api/v1/shops.json">JSON API</a></li><li><a href="/api/#mcp">MCP server</a></li><li><a href="https://huggingface.co/datasets/carbondrawdowninitiative/cdr-shops">Hugging Face</a></li><li><a href="/data/v1/2026-11.4/manifest.json">Manifest, checksums</a></li></ul><h4>Corrections</h4><p><a href="mailto:info@carbon-drawdown.de">info@carbon-drawdown.de</a>, in the next release; <a href="/data/changelog/">changelog</a></p></div></aside>
</div>

## Download

| File | Rows | Size | Format |
|---|---|---|---|
| shops | 14 | 2 KB | [CSV](/data/v1/2026-11.4/shops.csv) · [JSON](/data/v1/2026-11.4/shops.json) |

## Fields

- **name, url, listing_url**: the shop and our listing.
- **method_group, method, purchase, price, price_unit, delivery_time, certifier**: what you buy, for how much, when it is delivered and who certifies it.
- **rating_mrv, rating_certification, rating_delivery**: our A to D ratings, explained on the listing page.

## Method

Shops are added only when a live checkout exists and the removal is third-party certified; self-certification and registries without issuance are not accepted. Prices are checked monthly by an automated run and corrected by hand.

## Versions

This page describes release **2026-11.4** (data as of 2026-11-05). Every release is frozen under `/data/v1/2026-11.4/`; the newest release is also mirrored under [`/data/v1/latest/`](/data/v1/latest/manifest.json). The [manifest](/data/v1/2026-11.4/manifest.json) lists every file with row counts and SHA-256 checksums. Releases appear monthly, around the 15th; corrections between releases are listed in the [changelog](/data/changelog/).

## Licence and citation

Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Cite as:

> Captain Drawdown / Carbon Drawdown Initiative (2026). CDR Shops, version 2026-11.4. https://captaindrawdown.com/data/shops/ (CC licence, see page).

## Corrections and removal

Found an error, or want an entry about you or your company corrected or removed? Write to [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de?subject=Captain%20Drawdown%20data%20correction) with the row and the correction. We answer within five working days and list the change in the next release. How we handle personal data is explained in the [privacy notice](/privacy/).

<script>
document.addEventListener('click', function (e) {
  var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
  if (!a || !window.goatcounter || !window.goatcounter.count) { return; }
  var h = a.getAttribute('href') || '';
  if (/^\/(data\/v1\/|api\/v1\/|mcp\/)/.test(h)) {
    window.goatcounter.count({ path: 'download:' + h, title: (a.textContent || '').trim().slice(0, 60), event: true });
  }
});
</script>
