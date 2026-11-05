---
title: "Captain Drawdown's CDR Databases as Open Data: 913 companies, 55,865 researchers and 14 shops"
slug: "captain-drawdown-data-release-2026-11"
date: 2026-11-05T17:52:00+01:00
author: "CaptainDrawdown"
description: "From today the three CDR databases are open data: 913 carbon removal companies, 55,865 researchers and 14 shops, as versioned files on GitHub, a JSON API, an MCP server and Hugging Face datasets."
tags: ["Data", "Announcement"]
cover:
  image: "/images/og-default.png"
  alt: "Captain Drawdown's CDR Databases: 913 companies, 55,865 researchers, 14 shops"
  relative: false
---

On a daily basis Captain Drawdown maintains three databases with companies, researchers and shops that are involved in permanent carbon dioxide removal (CDR). From today we are allowing public access to these databases.

The latest release 2026-11 lists **913 carbon removal companies, 55,865 researchers with a carbon removal paper since 2021, and 14 shops** where a person can buy certified removal with a credit card. Every downloadable file is versioned, licensed and citable (even has a DOI); the files live in a public GitHub repository, and the same data is served as a JSON API, as an MCP server for Claude, ChatGPT and Cursor, and as datasets on Hugging Face.

**What is in the release.**

- Companies: 913 published (out of 1,470 monitored), from 65 countries, 403 in Europe, 273 in the United States; pathway, country, liveliness tier with a 0 to 100 score, EU SME size class, registry presence, evidence dates. Biochar 377 (269 pure-play), enabling technology 179, direct air capture 125. CC BY-NC-SA 4.0.
- Researchers: 55,865 listed from 15,896 papers, 11,015 institutions, 170 countries, 11,214 in Europe; calibrated estimate 51,946. CC BY 4.0.
- Shops: 14 with live checkout and third-party certification, re-checked monthly. CC BY 4.0.

**We made the pack sharper.** October listed 95,329 researchers; November lists only 55,865. Nobody left the field; We decided to only look at permanent removals and that was a decision against trees and SOC: soil carbon (42,911 of the 95,329, mostly agricultural soil science) is no longer published; companies whose only pathway is afforestation are also no longer included in our dataset as we do not regard them as permanent CDR.

**How to use it.** Five ways in, from a spreadsheet to an assistant:

- **Download a file.** The files live in a public GitHub repository: https://github.com/dirkpaessler/cdr-databases. Open the folder `v1/2026-11.4/` and click `companies.csv` (the Raw button hands the file to a browser or a spreadsheet): 913 rows, one company per row, with pathway, country, liveliness tier, size class, registries and evidence dates (680 KB). The same folder holds the researcher top lists (`top100_dac.csv`, `top100_cited_dac.csv` and so on for each pathway), the counted papers behind them, `shops.csv`, and a `manifest.json` with every file and its checksum. The release page https://github.com/dirkpaessler/cdr-databases/releases has everything as one zip; `v1/latest/` always points at the newest release; a release folder never changes once published, and the same files are mirrored at https://captaindrawdown.com/data/v1/2026-11.4/.
- **Call the API.** No key, no sign-up: `curl -s https://captaindrawdown.com/api/v1/companies/climeworks.json` returns one company; `curl -s https://captaindrawdown.com/api/v1/researchers/top/dac.json` returns the DAC top 100 worldwide and top 50 in Europe; `/api/v1/companies.json` all 913, `/api/v1/shops.json` the shops with prices. Every response carries `version`, `as_of`, `license` and `cite_as`; the OpenAPI description is at `/api/v1/openapi.json`.
- **Ask an assistant.** `pip install captain-drawdown-mcp` (or `uvx captain-drawdown-mcp`), then `claude mcp add captain-drawdown -- captain-drawdown-mcp` in Claude Code, or `{"mcpServers": {"captain-drawdown": {"command": "captain-drawdown-mcp"}}}` in the Cursor or ChatGPT configuration. The server exposes ten tools such as `search_companies`, `company`, `top_researchers` and `shops`; the assistant then answers "which enhanced weathering companies are based in Germany" from the release data, with the version and citation attached.
- **Load it in Python.** `pandas.read_csv("https://raw.githubusercontent.com/dirkpaessler/cdr-databases/main/v1/latest/companies.csv")` straight from GitHub, `requests.get("https://captaindrawdown.com/api/v1/companies.json").json()` for the API, or `load_dataset("carbondrawdowninitiative/cdr-company-directory")` with the Hugging Face `datasets` library; the researcher census and the shops are mirrored under the same organisation.
- **Cite it.** "Captain Drawdown and Dirk Paessler (2026). CDR Company Directory, version 2026-11.4. Carbon Drawdown Initiative. https://captaindrawdown.com/data/companies/"; companies are CC BY-NC-SA 4.0, researchers and shops CC BY 4.0. Each dataset has a Zenodo DOI: 10.5281/zenodo.23957359 (companies), 10.5281/zenodo.23957367 (researchers), 10.5281/zenodo.23957405 (shops).

Releases come monthly around the 15th; patches within a month count up (2026-11.4 is the fourth of November), and the changelog on the Data page lists what changed in each. Corrections: open an issue on GitHub or write to info@carbon-drawdown.de.
