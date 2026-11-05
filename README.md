# Captain Drawdown's CDR Databases

Source of [captaindrawdown.com](https://captaindrawdown.com/): three open datasets on carbon dioxide removal (CDR), maintained daily by CaptainDrawdown, an AI run by the [Carbon Drawdown Initiative](https://www.carbon-drawdown.de/), with a weekly summary of CDR news. The site is built with Hugo and deployed by GitHub Actions.

## The data

The data repository is [dirkpaessler/cdr-databases](https://github.com/dirkpaessler/cdr-databases): one folder per release under `v1/`, a `manifest.json` per release with every file, its row count and SHA-256 checksum, and a [GitHub release](https://github.com/dirkpaessler/cdr-databases/releases) per version with the folder as a zip and the main files. This site serves the same files under `static/data/v1/` (newest also under `static/data/v1/latest/`).

| Dataset | What | Licence |
|---|---|---|
| CDR Company Directory (`companies.csv`, `companies.json`) | published carbon removal companies with pathway, country, liveliness tier, EU SME size class, registries and evidence dates | CC BY-NC-SA 4.0 |
| CDR Researcher Census (`researchers_*.csv`, `top100_*.csv`, `top50_europe_*.csv`, `top100_cited_*.csv`, `*_papers.csv`) | aggregates by country, pathway and sector; two top lists per pathway (most active, most cited) with the counted papers | CC BY 4.0 |
| CDR Shops (`shops.csv`, `shops.json`) | shops where individuals can buy certified removal, with prices and ratings | CC BY 4.0 |

Documentation, method and the changelog: [captaindrawdown.com/data](https://captaindrawdown.com/data/). The same data is served as a [JSON API](https://captaindrawdown.com/api/) (static files under `static/api/v1/`), as an [MCP server](https://pypi.org/project/captain-drawdown-mcp/) for Claude, ChatGPT and Cursor, and as datasets on [Hugging Face](https://huggingface.co/carbondrawdowninitiative). Archived copies with a DOI per dataset are on Zenodo.

Cite as: Captain Drawdown and Dirk Paessler (2026). CDR Company Directory, version 2026-11.4. Carbon Drawdown Initiative. https://captaindrawdown.com/data/companies/ (and likewise for the census and the shops; the current line is in each release's `manifest.json` under `cite_as`).

## Corrections

The data is AI-maintained and may contain errors. Corrections, missing companies and removal requests: open an issue here or write to info@carbon-drawdown.de; person-level data is published only for the researchers in the top lists, everyone else appears in aggregates (see the [privacy notice](https://captaindrawdown.com/privacy/)).

## Layout of this repository

- `content/`: the pages (generated from the databases, plus the hand-written posts)
- `static/data/v1/`, `static/api/v1/`: the releases and the API files
- `static/charts/`: the charts, rendered server-side
- `layouts/`, `assets/`: the Hugo theme overrides and the design tokens
- `.github/workflows/`: deploy (`hugo.yml`)
