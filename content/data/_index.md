---
title: "Data"
description: "Open, versioned datasets on carbon dioxide removal: 913 companies, 55,865 researchers, 14 shops. CSV and JSON, monthly releases, citable."
url: "/data/"
---

Three datasets, one monthly release, every file with a version, a licence and a citation. Release **2026-11.4**, data as of 2026-11-05.

| Dataset | Headline number | Licence | Page |
|---|---|---|---|
| CDR Company Directory | 913 published companies (1,470 active in the database, 65 countries) | CC BY-NC-SA 4.0 | [/data/companies/](/data/companies/) |
| CDR Researcher Census | 55,865 researchers listed, calibrated estimate 51,946, 15,896 papers, 170 countries | CC BY 4.0 | [/data/researchers/](/data/researchers/) |
| CDR Shops | 14 shops with live prices | CC BY 4.0 | [/data/shops/](/data/shops/) |

Downloads: the GitHub repository [dirkpaessler/cdr-databases](https://github.com/dirkpaessler/cdr-databases) holds every release as a folder ([`v1/2026-11.4/`](https://github.com/dirkpaessler/cdr-databases/tree/main/v1/2026-11.4), the newest also under `v1/latest/`) and as a [release](https://github.com/dirkpaessler/cdr-databases/releases/tag/release-2026-11.4) with one zip; the same files are served here under [`/data/v1/2026-11.4/`](/data/v1/2026-11.4/manifest.json) and [`/data/v1/latest/`](/data/v1/latest/manifest.json). Each release has a [manifest](/data/v1/latest/manifest.json) with checksums.

## How the data is made

The company directory is built from a public seed list (Grant Faber, January 2026) and kept current by daily news scanning, registry ingestion (Puro.earth, OffsetsDB) and an AI-assisted liveliness assessment; every company has a profile page with its evidence. The researcher census is built from OpenAlex and ORCID: every author with at least one CDR-relevant paper since 2021 on one of the public pathways (DAC, BECCS, enhanced weathering, ocean CDR, biochar, cross-cutting CDR). The shop list is a hand-checked survey of shops that sell certified removal to individuals. Methods are described on each dataset page.

## Where to get the data

Use the data where it lives, not a copy: `/data/v1/latest/`, the API and the MCP server always serve the newest release at fixed addresses, and every answer names its version. Pin `/data/v1/2026-11.4/` only for a result that must not change, and cite its DOI.

- **The map for assistants:** the [release manifest](/data/v1/latest/manifest.json) lists every file of the newest release with description, row count, size, licence and checksum. Paste that one address into Claude, ChatGPT or Gemini and ask your question; the assistant picks the file, fetches it and quotes the version. [llms.txt](/llms.txt) is the same front door in plain words.
- **GitHub:** [dirkpaessler/cdr-databases](https://github.com/dirkpaessler/cdr-databases), the open-data home of the files: every release as a folder and as a [GitHub release](https://github.com/dirkpaessler/cdr-databases/releases) with one zip; clone it, open a CSV in the browser, or file an issue for a correction. Spreadsheets and code read `https://captaindrawdown.com/data/v1/latest/companies.csv` directly (Google Sheets `IMPORTDATA`, pandas).
- **API:** read-only JSON under [`/api/v1/`](/api/), always the newest release, every response with version, date, licence and citation; [`index.json`](/api/v1/index.json) lists the endpoints with one-line descriptions.
- **MCP server:** `pip install captain-drawdown-mcp` ([PyPI](https://pypi.org/project/captain-drawdown-mcp/)) gives Claude Code, Cursor and ChatGPT the same data as tools, read live from the API; setup on the [API page](/api/#mcp-server-for-claude-chatgpt-and-cursor).
- **Hugging Face:** the release files as datasets, [cdr-company-directory](https://huggingface.co/datasets/carbondrawdowninitiative/cdr-company-directory), [cdr-researcher-census](https://huggingface.co/datasets/carbondrawdowninitiative/cdr-researcher-census) and [cdr-shops](https://huggingface.co/datasets/carbondrawdowninitiative/cdr-shops).
- **Zenodo:** an archived copy of every release with a DOI per dataset ([companies](https://doi.org/10.5281/zenodo.23957359), [researchers](https://doi.org/10.5281/zenodo.23957367), [shops](https://doi.org/10.5281/zenodo.23957405)); the DOI is part of the citation line on each dataset page.

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
