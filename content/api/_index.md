---
title: "CDR Data API"
description: "Read-only JSON API for the Captain Drawdown datasets: companies, researchers, shops. Static files, no keys, OpenAPI description."
url: "/api/"
---

Read-only JSON, served as static files: no key, no sign-up. Every response carries `version`, `as_of`, `license` and `cite_as`. Current release **2026-11.4** (2026-11-05), 928 files.

| Endpoint | What you get |
|---|---|
| [`/api/v1/index.json`](/api/v1/index.json) | endpoints, version, licences, citation |
| [`/api/v1/stats.json`](/api/v1/stats.json) | headline numbers |
| [`/api/v1/companies.json`](/api/v1/companies.json) | all 913 published companies |
| `/api/v1/companies/{slug}.json` | one company, e.g. [`climeworks`](/api/v1/companies/climeworks.json) |
| [`/api/v1/countries.json`](/api/v1/countries.json) · [`/api/v1/pathways.json`](/api/v1/pathways.json) | companies per country and per pathway |
| [`/api/v1/researchers/by-country.json`](/api/v1/researchers/by-country.json) · [`by-pathway.json`](/api/v1/researchers/by-pathway.json) | listed researchers with the calibrated estimate |
| `/api/v1/researchers/top/{pathway}.json` | top 100 worldwide and top 50 in Europe, e.g. [`enhanced-weathering`](/api/v1/researchers/top/enhanced-weathering.json) |
| [`/api/v1/shops.json`](/api/v1/shops.json) | shops with prices |
| [`/api/v1/openapi.json`](/api/v1/openapi.json) | OpenAPI 3.0 description |

## Examples

```bash
curl -s https://captaindrawdown.com/api/v1/companies/climeworks.json
curl -s https://captaindrawdown.com/api/v1/researchers/top/dac.json
```

```python
import requests
r = requests.get("https://captaindrawdown.com/api/v1/companies.json").json()
europe = [c for c in r["data"] if c["region"] in ("EU27", "Europe (non-EU)")]
print(r["version"], len(europe), "European companies")
```

For assistants and agents: fetch `/api/v1/index.json` first, then the endpoint you need; quote `cite_as` and `as_of` from the response. The same data is available as versioned CSV under [/data/](/data/). Licences: companies CC BY-NC-SA 4.0, researchers and shops CC BY 4.0.

## MCP server for Claude, ChatGPT and Cursor

`captain-drawdown-mcp` exposes the same data as ten MCP tools (`search_companies`, `company`, `stats`, `countries`, `pathways`, `researchers_by_country`, `researchers_by_pathway`, `top_researchers`, `shops`, `cite`). It runs locally over stdio, needs Python 3.10 or newer and no key.

```bash
pip install captain-drawdown-mcp            # PyPI; or: uvx captain-drawdown-mcp
# without PyPI access:
# pip install https://captaindrawdown.com/mcp/captain_drawdown_mcp-0.1.1-py3-none-any.whl
claude mcp add captain-drawdown -- captain-drawdown-mcp      # Claude Code
```

Claude Desktop or Cursor configuration:

```json
{"mcpServers": {"captain-drawdown": {"command": "captain-drawdown-mcp"}}}
```

Source distribution: [captain_drawdown_mcp-0.1.1.tar.gz](/mcp/captain_drawdown_mcp-0.1.1.tar.gz). The server code is MIT; the data keeps its licences.

## Corrections

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
