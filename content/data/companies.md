---
title: "CDR Company Directory — Data"
description: "1,062 published carbon removal companies as CSV and JSON, versioned monthly, CC BY-NC-SA 4.0."
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
  "creator": [
    {
      "@type": "Organization",
      "name": "Captain Drawdown (Carbon Drawdown Initiative)",
      "url": "https://captaindrawdown.com"
    },
    {
      "@type": "Person",
      "name": "Dirk Paessler",
      "@id": "https://orcid.org/0009-0002-6046-0984",
      "affiliation": {
        "@type": "Organization",
        "name": "Carbon Drawdown Initiative"
      }
    }
  ],
  "version": "2026-11.5",
  "dateModified": "2026-11-16",
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
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.5/companies.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "application/json",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.5/companies.json"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "application/zip",
      "contentUrl": "https://github.com/dirkpaessler/cdr-databases/releases/download/release-2026-11.5/captaindrawdown-data-2026-11.5.zip"
    }
  ],
  "sameAs": [
    "https://github.com/dirkpaessler/cdr-databases/tree/main/v1/2026-11.5"
  ]
}
</script>

<div class="cd-split">
<div class="cd-main">

**1,062 published companies** in release 2026-11.5 (data as of 2026-11-16), out of 1,685 active companies in the database. Published means: active, and a supplier, a corporate division, an ecosystem company (MRV, brokers, software) or a side business. Buyers, entries under review, academic institutions, companies whose only pathway is afforestation, and companies whose captured carbon goes back into the atmosphere (CO2 for fuels, greenhouses, beverages or food) stay in the database but are not published. 456 of the published companies are based in Europe (EU27 plus UK, Switzerland, Norway, Iceland).

<div class="cd-tables">

| Region | Companies |
|---|---|
| United States | 319 |
| EU27 | 285 |
| Europe (non-EU) | 171 |
| Rest of world | 125 |
| Canada | 60 |
| India | 40 |
| Australia & New Zealand | 32 |
| China | 10 |
| Unknown | 10 |
| Japan | 10 |

| Primary pathway | Companies |
|---|---|
| Biochar | 453 |
| Enabling Tech | 211 |
| DAC | 132 |
| BECCS | 99 |
| Mineralization | 45 |
| Ocean CDR | 45 |
| Enhanced Weathering | 42 |
| Biomass Burial | 35 |

</div>

</div>
<aside class="cd-aside"><div class="cd-panel"><h4>Release</h4><p>2026-11.5 · data as of 2026-11-16</p><span class="num">1,062</span><span class="lbl">published companies</span><h4>Download</h4><ul><li><a href="https://github.com/dirkpaessler/cdr-databases/tree/main/v1/2026-11.5">GitHub folder</a> · <a href="https://github.com/dirkpaessler/cdr-databases/releases/download/release-2026-11.5/captaindrawdown-data-2026-11.5.zip">zip</a></li><li>companies: <a href="/data/v1/2026-11.5/companies.csv">CSV</a> · <a href="/data/v1/2026-11.5/companies.json">JSON</a></li></ul><h4>Licence</h4><p><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"><span class="lic">CC BY-NC-SA 4.0</span></a></p><h4>Cite as</h4><p class="cite">Captain Drawdown and Dirk Paessler (2026). CDR Company Directory, version 2026-11.5. Carbon Drawdown Initiative. https://captaindrawdown.com/data/companies/ (CC licence, see page). https://doi.org/10.5281/zenodo.23957359</p><p>DOI <a href="https://doi.org/10.5281/zenodo.23957359">10.5281/zenodo.23957359</a><br><small>all versions: <a href="https://doi.org/10.5281/zenodo.23957358">10.5281/zenodo.23957358</a></small></p><h4>Use the data</h4><ul><li><a href="https://github.com/dirkpaessler/cdr-databases">GitHub repository</a></li><li><a href="/api/v1/companies.json">JSON API</a></li><li><a href="/api/#mcp">MCP server</a></li><li><a href="https://huggingface.co/datasets/carbondrawdowninitiative/cdr-company-directory">Hugging Face</a></li><li><a href="/data/v1/2026-11.5/manifest.json">Manifest, checksums</a></li></ul><h4>Corrections</h4><p><a href="mailto:info@carbon-drawdown.de">info@carbon-drawdown.de</a>, in the next release; <a href="/data/changelog/">changelog</a></p></div></aside>
</div>

## Download

All files of release 2026-11.5 on GitHub: [folder `v1/2026-11.5/`](https://github.com/dirkpaessler/cdr-databases/tree/main/v1/2026-11.5) · [one zip](https://github.com/dirkpaessler/cdr-databases/releases/download/release-2026-11.5/captaindrawdown-data-2026-11.5.zip) · [manifest](/data/v1/2026-11.5/manifest.json). The links below are the same files served by this site.

| File | Rows | Size | Format |
|---|---|---|---|
| companies | 1,062 | 769 KB | [CSV](/data/v1/2026-11.5/companies.csv) · [JSON](/data/v1/2026-11.5/companies.json) |

## Fields

- **name, slug, profile_url, url, linkedin_url**: identity and links; the profile page lists the evidence behind every assessment.
- **country, country_code, region**: head office; ISO 3166-1 alpha-2; region as used in our EU-versus-world tables.
- **pathway_primary, pathway_secondary, category, cdr_focus**: what the company does; cdr_focus is supplier, division, ecosystem or side_business.
- **liveliness_tier, liveliness_score**: Active, Moderate, Suspect or Likely Dead, with a 0 to 100 score from public signals (news, hiring, registry issuance, website). An estimate, not a verified fact.
- **size_class**: EU SME staff class (micro under 10, small 10 to 49, medium 50 to 249, large 250 and more), derived from the company's LinkedIn size band and headcount signals.
- **registries, puro_issued_tco2, offsetsdb_issued_tco2**: registry presence and issued tonnes where we ingest the registry.
- **last_evidence_date, date_added, date_updated**: when we last saw evidence, when the row entered, when it last changed.
- **description, description_source**: a short description; `ai_generated` means it was written by a model from public web pages and may contain errors.

## Method

The directory started from Grant Faber's public list of CDR companies (January 2026, CC BY-NC-SA 4.0) and is extended once a month by a search across CDR.fyi's supplier list, the Puro.earth and OffsetsDB registries, the cdrjobs board, CDR news, and web and company-database searches. A company is added when one of these lists names it or two independent sources do, and it is published once its classification confirms a carbon removal business. Between 19 April and 16 November 2026 this search did not run, so the releases up to 2026-11 contain no company found after April. Each company is classified by pathway and focus, screened for liveliness, and refreshed monthly; readers' corrections are applied nightly. The per-company evidence is on the [directory pages](/directory/). Counts are counts of companies, not tonnes; many entries are early-stage firms.

## Versions

This page describes release **2026-11.5** (data as of 2026-11-16). Every release is a folder in the public GitHub repository [dirkpaessler/cdr-databases](https://github.com/dirkpaessler/cdr-databases) ([`v1/2026-11.5/`](https://github.com/dirkpaessler/cdr-databases/tree/main/v1/2026-11.5), the newest also under `v1/latest/`) and a [GitHub release](https://github.com/dirkpaessler/cdr-databases/releases/tag/release-2026-11.5) with everything as one zip; this site serves the same files under `/data/v1/2026-11.5/` and [`/data/v1/latest/`](/data/v1/latest/manifest.json). The [manifest](/data/v1/2026-11.5/manifest.json) lists every file with row counts and SHA-256 checksums. Releases appear monthly, around the 15th; corrections between releases are listed in the [changelog](/data/changelog/), and issues can be opened on GitHub.

## Licence and citation

Licence: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). DOI: [10.5281/zenodo.23957359](https://doi.org/10.5281/zenodo.23957359) (Zenodo, one DOI for all versions). Cite as:

> Captain Drawdown and Dirk Paessler (2026). CDR Company Directory, version 2026-11.5. Carbon Drawdown Initiative. https://captaindrawdown.com/data/companies/ (CC licence, see page). https://doi.org/10.5281/zenodo.23957359

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
