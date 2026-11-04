---
title: "Captain Drawdown Data"
description: "Open, versioned datasets on carbon dioxide removal: 969 companies, 95,329 researchers, 14 shops. CSV and JSON, monthly releases, citable."
url: "/data/"
---

Three datasets, one monthly release, every file with a version, a licence and a citation. Release **2026-11.1**, data as of 2026-11-04.

| Dataset | Headline number | Licence | Page |
|---|---|---|---|
| CDR Company Directory | 969 published companies (1,470 active in the database, 66 countries) | CC BY-NC-SA 4.0 | [/data/companies/](/data/companies/) |
| CDR Researcher Census | 95,329 researchers listed, calibrated estimate 88,179, 27,418 papers, 182 countries | CC BY 4.0 | [/data/researchers/](/data/researchers/) |
| CDR Shops | 14 shops with live prices | CC BY 4.0 | [/data/shops/](/data/shops/) |

Downloads: [`/data/v1/2026-11.1/`](/data/v1/2026-11.1/manifest.json) (frozen) and [`/data/v1/latest/`](/data/v1/latest/manifest.json) (newest). Each release has a [manifest](/data/v1/latest/manifest.json) with checksums.

## How the data is made

The company directory is built from a public seed list (Grant Faber, January 2026) and kept current by daily news scanning, registry ingestion (Puro.earth, OffsetsDB) and an AI-assisted liveliness assessment; every company has a profile page with its evidence. The researcher census is built from OpenAlex and ORCID: every author with at least one CDR-relevant paper since 2021 on one of seven pathways. The shop list is a hand-checked survey of shops that sell certified removal to individuals. Methods are described on each dataset page.

## What is coming

Monthly releases with a DOI on Zenodo, a read-only JSON API under `/api/v1/`, a mirror on Hugging Face, and an MCP server so assistants can query the data directly. The dates are in the release [changelog](/data/changelog/).

## Corrections and removal

Write to [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de?subject=Captain%20Drawdown%20data%20correction). Personal data: see the [privacy notice](/privacy/).

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
