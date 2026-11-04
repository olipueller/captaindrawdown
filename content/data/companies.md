---
title: "CDR Company Directory — Data"
description: "969 published carbon removal companies as CSV and JSON, versioned monthly, CC BY-NC-SA 4.0."
url: "/data/companies/"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "CDR Company Directory",
  "description": "Carbon dioxide removal companies worldwide with pathway, country, liveliness tier, size class, registries and evidence dates.",
  "url": "https://captaindrawdown.com/data/companies/",
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "isAccessibleForFree": true,
  "creator": {
    "@type": "Organization",
    "name": "Captain Drawdown (Carbon Drawdown Initiative)",
    "url": "https://captaindrawdown.com"
  },
  "version": "2026-11.3",
  "dateModified": "2026-11-04",
  "keywords": [
    "carbon dioxide removal",
    "CDR",
    "companies",
    "directory",
    "direct air capture",
    "biochar",
    "BECCS",
    "enhanced weathering"
  ],
  "distribution": [
    {
      "@type": "DataDownload",
      "encodingFormat": "text/csv",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.3/companies.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "application/json",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.3/companies.json"
    }
  ]
}
</script>

**969 published companies** in release 2026-11.3 (data as of 2026-11-04), out of 1,470 active companies in the database. Published means: active, and a supplier, a corporate division, an ecosystem company (MRV, brokers, software) or a side business. Buyers, entries under review and academic institutions stay in the database but are not published. 427 of the published companies are based in Europe (EU27 plus UK, Switzerland, Norway, Iceland).

| Region | Companies |
|---|---|
| United States | 291 |
| EU27 | 263 |
| Europe (non-EU) | 164 |
| Rest of world | 114 |
| Canada | 57 |
| India | 29 |
| Australia & New Zealand | 26 |
| Japan | 10 |
| China | 9 |
| Unknown | 6 |

| Primary pathway | Companies |
|---|---|
| Biochar | 377 |
| Enabling Tech | 179 |
| DAC | 125 |
| BECCS | 84 |
| Afforestation | 56 |
| Mineralization | 42 |
| Ocean CDR | 42 |
| Enhanced Weathering | 33 |
| Biomass Burial | 31 |

## Download

| File | Rows | Size | Format |
|---|---|---|---|
| companies | 969 | 722 KB | [CSV](/data/v1/2026-11.3/companies.csv) · [JSON](/data/v1/2026-11.3/companies.json) |

## Fields

- **name, slug, profile_url, url, linkedin_url**: identity and links; the profile page lists the evidence behind every assessment.
- **country, country_code, region**: head office; ISO 3166-1 alpha-2; region as used in our EU-versus-world tables.
- **pathway_primary, pathway_secondary, category, cdr_focus**: what the company does; cdr_focus is supplier, division, ecosystem or side_business.
- **liveliness_tier, liveliness_score**: Active, Moderate, Suspect or Likely Dead, with a 0 to 100 score from public signals (news, hiring, registry issuance, website). An estimate, not a verified fact.
- **size_class**: EU SME staff class (micro under 10, small 10 to 49, medium 50 to 249, large 250 and more), derived from the company's LinkedIn size band and headcount signals. Exact headcounts are not published.
- **registries, puro_issued_tco2, offsetsdb_issued_tco2**: registry presence and issued tonnes where we ingest the registry.
- **last_evidence_date, date_added, date_updated**: when we last saw evidence, when the row entered, when it last changed.
- **description, description_source**: a short description; `ai_generated` means it was written by a model from public web pages and may contain errors.

## Method

The directory started from Grant Faber's public list of CDR companies (January 2026, CC BY-NC-SA 4.0) and is extended by daily scanning of CDR news, registries (Puro.earth, OffsetsDB) and LinkedIn company discovery. Each company is classified by pathway and focus, screened for liveliness, and refreshed monthly; readers' corrections are applied nightly. The per-company evidence is on the [directory pages](/directory/). Counts are counts of companies, not tonnes; many entries are early-stage firms.

## Versions

This page describes release **2026-11.3** (data as of 2026-11-04). Every release is frozen under `/data/v1/2026-11.3/`; the newest release is also mirrored under [`/data/v1/latest/`](/data/v1/latest/). The [manifest](/data/v1/2026-11.3/manifest.json) lists every file with row counts and SHA-256 checksums. Releases appear monthly, around the 15th; corrections between releases are listed in the [changelog](/data/changelog/).

## Licence and citation

Licence: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Cite as:

> Captain Drawdown / Carbon Drawdown Initiative (2026). CDR Company Directory, version 2026-11.3. https://captaindrawdown.com/data/companies/ (CC licence, see page).

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
