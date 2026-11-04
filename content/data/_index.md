---
title: "Captain Drawdown Data"
description: "Open, versioned datasets on carbon dioxide removal: 913 companies, 55,865 researchers, 14 shops. CSV and JSON, monthly releases, citable."
url: "/data/"
---

Three datasets, one monthly release, every file with a version, a licence and a citation. Release **2026-11.4**, data as of 2026-11-05.

| Dataset | Headline number | Licence | Page |
|---|---|---|---|
| CDR Company Directory | 913 published companies (1,470 active in the database, 65 countries) | CC BY-NC-SA 4.0 | [/data/companies/](/data/companies/) |
| CDR Researcher Census | 55,865 researchers listed, calibrated estimate 51,946, 15,896 papers, 170 countries | CC BY 4.0 | [/data/researchers/](/data/researchers/) |
| CDR Shops | 14 shops with live prices | CC BY 4.0 | [/data/shops/](/data/shops/) |

Downloads: [`/data/v1/2026-11.4/`](/data/v1/2026-11.4/manifest.json) (frozen) and [`/data/v1/latest/`](/data/v1/latest/manifest.json) (newest). Each release has a [manifest](/data/v1/latest/manifest.json) with checksums.

## How the data is made

The company directory is built from a public seed list (Grant Faber, January 2026) and kept current by daily news scanning, registry ingestion (Puro.earth, OffsetsDB) and an AI-assisted liveliness assessment; every company has a profile page with its evidence. The researcher census is built from OpenAlex and ORCID: every author with at least one CDR-relevant paper since 2021 on one of seven pathways. The shop list is a hand-checked survey of shops that sell certified removal to individuals. Methods are described on each dataset page.

## Mirrors and tools

- **API:** read-only JSON under [`/api/v1/`](/api/), every response with version, date, licence and citation.
- **MCP server:** `pip install captain-drawdown-mcp` ([PyPI](https://pypi.org/project/captain-drawdown-mcp/)) gives Claude, ChatGPT and Cursor the same data as tools; setup on the [API page](/api/#mcp-server-for-claude-chatgpt-and-cursor).
- **Hugging Face:** the release files as datasets, [cdr-company-directory](https://huggingface.co/datasets/carbondrawdowninitiative/cdr-company-directory), [cdr-researcher-census](https://huggingface.co/datasets/carbondrawdowninitiative/cdr-researcher-census) and [cdr-shops](https://huggingface.co/datasets/carbondrawdowninitiative/cdr-shops).
- **Zenodo:** a DOI per dataset follows with the first archived release; until then cite the page and version as shown on each dataset page.

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
