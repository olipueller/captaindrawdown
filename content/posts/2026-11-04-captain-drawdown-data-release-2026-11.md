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

**How to use it.** Use the data where it lives, not a copy: every way below reads the current release when you ask, and every answer names its version.

- **Hand your assistant the map.** The release manifest, https://captaindrawdown.com/data/v1/latest/manifest.json, lists every file of the newest release with what it holds, its row count, size, licence and checksum: 37 CSV files, each also as JSON, from `companies.csv` (913 rows, 680 KB) and `researchers_by_country.csv` (171 rows) to the top-100 lists per pathway and `shops.csv`. Paste that one address into Claude, ChatGPT or Gemini and ask your question; the assistant picks the file, fetches it and quotes the version. https://captaindrawdown.com/llms.txt is the same front door in plain words.
- **Call the API.** No key, no sign-up, always the newest release. `https://captaindrawdown.com/api/v1/index.json` lists the endpoints; `/api/v1/companies/climeworks.json` returns one company, `/api/v1/researchers/top/dac.json` the DAC top 100 worldwide and top 50 in Europe, `/api/v1/researchers/by-country.json` the census by country, `/api/v1/shops.json` the shops with prices, `/api/v1/stats.json` the headline numbers. Every response carries `version`, `as_of`, `license` and `cite_as`; the OpenAPI description is at `/api/v1/openapi.json`.
- **Connect it as tools.** `pip install captain-drawdown-mcp` (or `uvx captain-drawdown-mcp`), then `claude mcp add captain-drawdown -- captain-drawdown-mcp` in Claude Code, or `{"mcpServers": {"captain-drawdown": {"command": "captain-drawdown-mcp"}}}` in the Cursor or ChatGPT configuration. The server reads the public API when it is asked and keeps nothing older than six hours; its ten tools (`search_companies`, `company`, `top_researchers`, `shops` and others) answer "which enhanced weathering companies are based in Germany" from this month's release, with the version and citation attached.
- **Spreadsheets and code, always current.** The newest release sits behind a fixed address: `https://captaindrawdown.com/data/v1/latest/companies.csv`, the same under `v1/latest/` in the GitHub repository https://github.com/dirkpaessler/cdr-databases. Google Sheets: `=IMPORTDATA("https://captaindrawdown.com/data/v1/latest/companies.csv")` refreshes when the sheet opens. Python: `pandas.read_csv` on that address, `requests.get("https://captaindrawdown.com/api/v1/companies.json").json()`, or `load_dataset("carbondrawdowninitiative/cdr-company-directory")` with the Hugging Face `datasets` library (the census and the shops are mirrored under the same organisation); each run pulls the current release.
- **Pin a version only when a result must not change.** A release folder never changes once published: use `v1/2026-11.4/` on GitHub or under https://captaindrawdown.com/data/v1/2026-11.4/, or the release zip at https://github.com/dirkpaessler/cdr-databases/releases, and cite its DOI. If your assistant cannot read the web, attach the file from `v1/latest/`, note the version, and replace it after the next release.
- **Cite it.** "Captain Drawdown and Dirk Paessler (2026). CDR Company Directory, version 2026-11.4. Carbon Drawdown Initiative. https://captaindrawdown.com/data/companies/"; companies are CC BY-NC-SA 4.0, researchers and shops CC BY 4.0. Each dataset has a Zenodo DOI: 10.5281/zenodo.23957359 (companies), 10.5281/zenodo.23957367 (researchers), 10.5281/zenodo.23957405 (shops).

Releases come monthly around the 15th; patches within a month count up (2026-11.4 is the fourth of November), and the changelog on the Data page lists what changed in each. Corrections: open an issue on GitHub or write to info@carbon-drawdown.de.

Why the Carbon Drawdown Initiative opens the data, and how to use it with Claude, ChatGPT or Gemini, is on its own blog: https://www.carbon-drawdown.de/blog/2026-11-our-carbon-removal-databases-are-now-open-data
