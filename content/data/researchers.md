---
title: "CDR Researcher Census — Data"
description: "55,865 researchers who published on carbon dioxide removal since 2021: aggregates by country, pathway and sector plus top-100 lists per pathway. CC BY 4.0."
url: "/data/researchers/"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "CDR Researcher Census",
  "description": "Researchers publishing on carbon dioxide removal since 2021, aggregated by country, pathway and sector, with top-100 lists per pathway.",
  "url": "https://captaindrawdown.com/data/researchers/",
  "license": "https://creativecommons.org/licenses/by/4.0/",
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
  "version": "2026-11.4",
  "dateModified": "2026-11-05",
  "keywords": [
    "carbon dioxide removal",
    "researchers",
    "bibliometrics",
    "OpenAlex",
    "ORCID",
    "census"
  ],
  "distribution": [
    {
      "@type": "DataDownload",
      "encodingFormat": "text/csv",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.4/researchers_by_country.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "text/csv",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.4/researchers_by_pathway.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "application/json",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11.4/researchers_by_country.json"
    }
  ]
}
</script>

<div class="cd-split">
<div class="cd-main">

**55,865 researchers listed** in release 2026-11.4 (data as of 2026-11-05): every author with at least one CDR-relevant paper since 2021 on one of 6 pathways, from 15,896 papers, 11,015 institutions and 170 countries. The calibrated estimate of the real population is **51,946**: the listed count scaled per country by the precision and recall measured in the March 2026 calibration sample (OpenAlex over-assigns some countries and misses others). 11,214 listed researchers are based in Europe.

Person-level data is published only for the researchers in the top lists per pathway; everyone else is counted in the aggregates. The [census page](/cdr-researcher-census/) has the pathway table, the [lookup](/cdr-researcher-census/lookup/) finds a listed researcher by name.

</div>
<aside class="cd-aside"><div class="cd-panel"><h4>Release</h4><p>2026-11.4 · data as of 2026-11-05</p><span class="num">55,865</span><span class="lbl">researchers listed</span><h4>Download</h4><ul><li>researchers_by_country: <a href="/data/v1/2026-11.4/researchers_by_country.csv">CSV</a> · <a href="/data/v1/2026-11.4/researchers_by_country.json">JSON</a></li><li>researchers_by_pathway: <a href="/data/v1/2026-11.4/researchers_by_pathway.csv">CSV</a> · <a href="/data/v1/2026-11.4/researchers_by_pathway.json">JSON</a></li><li>researchers_by_country_pathway: <a href="/data/v1/2026-11.4/researchers_by_country_pathway.csv">CSV</a> · <a href="/data/v1/2026-11.4/researchers_by_country_pathway.json">JSON</a></li><li>researchers_by_sector: <a href="/data/v1/2026-11.4/researchers_by_sector.csv">CSV</a> · <a href="/data/v1/2026-11.4/researchers_by_sector.json">JSON</a></li><li>cdr_papers_by_year: <a href="/data/v1/2026-11.4/cdr_papers_by_year.csv">CSV</a> · <a href="/data/v1/2026-11.4/cdr_papers_by_year.json">JSON</a></li></ul><h4>Licence</h4><p><a href="https://creativecommons.org/licenses/by/4.0/"><span class="lic">CC BY 4.0</span></a></p><h4>Cite as</h4><p class="cite">Captain Drawdown and Dirk Paessler (2026). CDR Researcher Census, version 2026-11.4. Carbon Drawdown Initiative. https://captaindrawdown.com/data/researchers/ (CC licence, see page). https://doi.org/10.5281/zenodo.23957367</p><p>DOI <a href="https://doi.org/10.5281/zenodo.23957367">10.5281/zenodo.23957367</a><br><small>all versions: <a href="https://doi.org/10.5281/zenodo.23957366">10.5281/zenodo.23957366</a></small></p><h4>Use the data</h4><ul><li><a href="/api/v1/researchers/by-pathway.json">JSON API</a></li><li><a href="/api/#mcp">MCP server</a></li><li><a href="https://huggingface.co/datasets/carbondrawdowninitiative/cdr-researcher-census">Hugging Face</a></li><li><a href="/data/v1/2026-11.4/manifest.json">Manifest, checksums</a></li></ul><h4>Corrections</h4><p><a href="mailto:info@carbon-drawdown.de">info@carbon-drawdown.de</a>, in the next release; <a href="/data/changelog/">changelog</a></p></div></aside>
</div>

## Top researchers per pathway

Two lists per pathway, each worldwide (top 100) and for Europe (top 50): **most active**, where every CDR paper since 2021 counts with a weight that halves every three years (`activity_score`; ties by paper count, then citations), and **most cited**, by citations to those papers. Every row carries its rank in the other ordering (`rank_by_citations` or `rank_by_activity`) and per-year paper counts, so you can re-rank for any year. Each pathway has its own page with all four tables. Institution comes from the researcher's own papers 2024–2026 where at least three carry one (`institution_source` = works, or works_raw when taken from the affiliation text), else from the ORCID record (orcid), else from the OpenAlex author profile (openalex, the least reliable source).

| Pathway | Researchers with papers since 2021 | Most active | Most cited | Europe in the active top 100 | Lists |
|---|---|---|---|---|---|
| [DAC](/data/researchers/dac/) | 6,029 | Jann Michael Weinand | Noah McQueen | 39 of 100 | [page](/data/researchers/dac/) · [active CSV](/data/v1/2026-11.4/top100_dac.csv) · [Europe CSV](/data/v1/2026-11.4/top50_europe_dac.csv) · [cited CSV](/data/v1/2026-11.4/top100_cited_dac.csv) |
| [BECCS](/data/researchers/beccs/) | 4,134 | Daniela Thrän | Ahmed I. Osman | 66 of 100 | [page](/data/researchers/beccs/) · [active CSV](/data/v1/2026-11.4/top100_beccs.csv) · [Europe CSV](/data/v1/2026-11.4/top50_europe_beccs.csv) · [cited CSV](/data/v1/2026-11.4/top100_cited_beccs.csv) |
| [Enhanced Weathering](/data/researchers/enhanced-weathering/) | 4,944 | Noah J. Planavsky | David J. Beerling | 65 of 100 | [page](/data/researchers/enhanced-weathering/) · [active CSV](/data/v1/2026-11.4/top100_enhanced-weathering.csv) · [Europe CSV](/data/v1/2026-11.4/top50_europe_enhanced-weathering.csv) · [cited CSV](/data/v1/2026-11.4/top100_cited_enhanced-weathering.csv) |
| [Ocean CDR](/data/researchers/ocean-cdr/) | 5,665 | Lennart T. Bach | Lennart T. Bach | 60 of 100 | [page](/data/researchers/ocean-cdr/) · [active CSV](/data/v1/2026-11.4/top100_ocean-cdr.csv) · [Europe CSV](/data/v1/2026-11.4/top50_europe_ocean-cdr.csv) · [cited CSV](/data/v1/2026-11.4/top100_cited_ocean-cdr.csv) |
| [Biochar](/data/researchers/biochar/) | 27,613 | Daniel C.W. Tsang | Daniel C.W. Tsang | 27 of 100 | [page](/data/researchers/biochar/) · [active CSV](/data/v1/2026-11.4/top100_biochar.csv) · [Europe CSV](/data/v1/2026-11.4/top50_europe_biochar.csv) · [cited CSV](/data/v1/2026-11.4/top100_cited_biochar.csv) |
| [Cross-cutting CDR](/data/researchers/cross-cutting-cdr/) | 12,831 | Matthew Gidden | Myles Allen | 65 of 100 | [page](/data/researchers/cross-cutting-cdr/) · [active CSV](/data/v1/2026-11.4/top100_cross-cutting-cdr.csv) · [Europe CSV](/data/v1/2026-11.4/top50_europe_cross-cutting-cdr.csv) · [cited CSV](/data/v1/2026-11.4/top100_cited_cross-cutting-cdr.csv) |

## Download

| File | Rows | Size | Format |
|---|---|---|---|
| researchers_by_country | 171 | 4 KB | [CSV](/data/v1/2026-11.4/researchers_by_country.csv) · [JSON](/data/v1/2026-11.4/researchers_by_country.json) |
| researchers_by_pathway | 6 | 0 KB | [CSV](/data/v1/2026-11.4/researchers_by_pathway.csv) · [JSON](/data/v1/2026-11.4/researchers_by_pathway.json) |
| researchers_by_country_pathway | 644 | 11 KB | [CSV](/data/v1/2026-11.4/researchers_by_country_pathway.csv) · [JSON](/data/v1/2026-11.4/researchers_by_country_pathway.json) |
| researchers_by_sector | 8 | 0 KB | [CSV](/data/v1/2026-11.4/researchers_by_sector.csv) · [JSON](/data/v1/2026-11.4/researchers_by_sector.json) |
| cdr_papers_by_year | 6 | 0 KB | [CSV](/data/v1/2026-11.4/cdr_papers_by_year.csv) · [JSON](/data/v1/2026-11.4/cdr_papers_by_year.json) |
| top100_dac | 100 | 24 KB | [CSV](/data/v1/2026-11.4/top100_dac.csv) · [JSON](/data/v1/2026-11.4/top100_dac.json) |
| top50_europe_dac | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_dac.csv) · [JSON](/data/v1/2026-11.4/top50_europe_dac.json) |
| top100_cited_dac | 100 | 24 KB | [CSV](/data/v1/2026-11.4/top100_cited_dac.csv) · [JSON](/data/v1/2026-11.4/top100_cited_dac.json) |
| top50_europe_cited_dac | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_cited_dac.csv) · [JSON](/data/v1/2026-11.4/top50_europe_cited_dac.json) |
| top100_dac_papers | 922 | 222 KB | [CSV](/data/v1/2026-11.4/top100_dac_papers.csv) · [JSON](/data/v1/2026-11.4/top100_dac_papers.json) |
| top100_beccs | 100 | 25 KB | [CSV](/data/v1/2026-11.4/top100_beccs.csv) · [JSON](/data/v1/2026-11.4/top100_beccs.json) |
| top50_europe_beccs | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_beccs.csv) · [JSON](/data/v1/2026-11.4/top50_europe_beccs.json) |
| top100_cited_beccs | 100 | 25 KB | [CSV](/data/v1/2026-11.4/top100_cited_beccs.csv) · [JSON](/data/v1/2026-11.4/top100_cited_beccs.json) |
| top50_europe_cited_beccs | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_cited_beccs.csv) · [JSON](/data/v1/2026-11.4/top50_europe_cited_beccs.json) |
| top100_beccs_papers | 781 | 193 KB | [CSV](/data/v1/2026-11.4/top100_beccs_papers.csv) · [JSON](/data/v1/2026-11.4/top100_beccs_papers.json) |
| top100_enhanced-weathering | 100 | 24 KB | [CSV](/data/v1/2026-11.4/top100_enhanced-weathering.csv) · [JSON](/data/v1/2026-11.4/top100_enhanced-weathering.json) |
| top50_europe_enhanced-weathering | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_enhanced-weathering.csv) · [JSON](/data/v1/2026-11.4/top50_europe_enhanced-weathering.json) |
| top100_cited_enhanced-weathering | 100 | 24 KB | [CSV](/data/v1/2026-11.4/top100_cited_enhanced-weathering.csv) · [JSON](/data/v1/2026-11.4/top100_cited_enhanced-weathering.json) |
| top50_europe_cited_enhanced-weathering | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_cited_enhanced-weathering.csv) · [JSON](/data/v1/2026-11.4/top50_europe_cited_enhanced-weathering.json) |
| top100_enhanced-weathering_papers | 1,716 | 452 KB | [CSV](/data/v1/2026-11.4/top100_enhanced-weathering_papers.csv) · [JSON](/data/v1/2026-11.4/top100_enhanced-weathering_papers.json) |
| top100_ocean-cdr | 100 | 25 KB | [CSV](/data/v1/2026-11.4/top100_ocean-cdr.csv) · [JSON](/data/v1/2026-11.4/top100_ocean-cdr.json) |
| top50_europe_ocean-cdr | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_ocean-cdr.csv) · [JSON](/data/v1/2026-11.4/top50_europe_ocean-cdr.json) |
| top100_cited_ocean-cdr | 100 | 25 KB | [CSV](/data/v1/2026-11.4/top100_cited_ocean-cdr.csv) · [JSON](/data/v1/2026-11.4/top100_cited_ocean-cdr.json) |
| top50_europe_cited_ocean-cdr | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_cited_ocean-cdr.csv) · [JSON](/data/v1/2026-11.4/top50_europe_cited_ocean-cdr.json) |
| top100_ocean-cdr_papers | 1,578 | 395 KB | [CSV](/data/v1/2026-11.4/top100_ocean-cdr_papers.csv) · [JSON](/data/v1/2026-11.4/top100_ocean-cdr_papers.json) |
| top100_biochar | 100 | 25 KB | [CSV](/data/v1/2026-11.4/top100_biochar.csv) · [JSON](/data/v1/2026-11.4/top100_biochar.json) |
| top50_europe_biochar | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_biochar.csv) · [JSON](/data/v1/2026-11.4/top50_europe_biochar.json) |
| top100_cited_biochar | 100 | 24 KB | [CSV](/data/v1/2026-11.4/top100_cited_biochar.csv) · [JSON](/data/v1/2026-11.4/top100_cited_biochar.json) |
| top50_europe_cited_biochar | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_cited_biochar.csv) · [JSON](/data/v1/2026-11.4/top50_europe_cited_biochar.json) |
| top100_biochar_papers | 1,590 | 414 KB | [CSV](/data/v1/2026-11.4/top100_biochar_papers.csv) · [JSON](/data/v1/2026-11.4/top100_biochar_papers.json) |
| top100_cross-cutting-cdr | 100 | 25 KB | [CSV](/data/v1/2026-11.4/top100_cross-cutting-cdr.csv) · [JSON](/data/v1/2026-11.4/top100_cross-cutting-cdr.json) |
| top50_europe_cross-cutting-cdr | 50 | 13 KB | [CSV](/data/v1/2026-11.4/top50_europe_cross-cutting-cdr.csv) · [JSON](/data/v1/2026-11.4/top50_europe_cross-cutting-cdr.json) |
| top100_cited_cross-cutting-cdr | 100 | 25 KB | [CSV](/data/v1/2026-11.4/top100_cited_cross-cutting-cdr.csv) · [JSON](/data/v1/2026-11.4/top100_cited_cross-cutting-cdr.json) |
| top50_europe_cited_cross-cutting-cdr | 50 | 12 KB | [CSV](/data/v1/2026-11.4/top50_europe_cited_cross-cutting-cdr.csv) · [JSON](/data/v1/2026-11.4/top50_europe_cited_cross-cutting-cdr.json) |
| top100_cross-cutting-cdr_papers | 1,377 | 336 KB | [CSV](/data/v1/2026-11.4/top100_cross-cutting-cdr_papers.csv) · [JSON](/data/v1/2026-11.4/top100_cross-cutting-cdr_papers.json) |

## Fields

- **researchers_by_country**: country_code, region, listed researchers, share, calibrated estimate.
- **researchers_by_pathway, researchers_by_sector, researchers_by_country_pathway**: listed researchers per primary pathway, sector and country-pathway pair.
- **cdr_papers_by_year**: CDR-relevant papers per publication year from 2021.
- **top100_*, top50_europe_*** (most active): rank, rank_by_citations, activity_score, name, orcid, institution, institution_source, country_code, region, cdr_papers_2021_2026, papers per year, cdr_citations, h_index_all_fields, profile_url, openalex_id.
- **top100_cited_*, top50_europe_cited_*** (most cited): the same columns with rank by citations and rank_by_activity.
- **top100_*_papers**: the evidence behind the lists, one row per person and counted paper: rank, rank_europe, rank_cited, rank_cited_europe, name, openalex_id, paper_id, year, title, cited_by_count, paper_pathways, url.

## Method

Papers are discovered in OpenAlex by pathway-specific queries and classified as CDR-relevant or not; authors are deduplicated and enriched from ORCID (institution and country) where an ORCID iD exists. Primary pathway is the pathway with the most papers. Published aggregates never go below country-pathway level; person-level data is published only for the top lists. Fields that are model estimates (career stage, CDR commitment, trajectory) stay internal. Details: [about the census](/cdr-researcher-census/).

## Personal data

Names, ORCID iDs, institutions and publication counts of researchers in the top lists are processed on the basis of legitimate interest (Art. 6(1)(f) GDPR) from public scholarly records (OpenAlex, ORCID). If you are listed and want your entry corrected or removed, write to [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de?subject=Census%20removal%20request) and it is done within five working days. Full notice: [privacy](/privacy/).

## Versions

This page describes release **2026-11.4** (data as of 2026-11-05). Every release stays available under `/data/v1/2026-11.4/`; the newest release is also mirrored under [`/data/v1/latest/`](/data/v1/latest/manifest.json). The [manifest](/data/v1/2026-11.4/manifest.json) lists every file with row counts and SHA-256 checksums. Releases appear monthly, around the 15th; corrections between releases are listed in the [changelog](/data/changelog/).

## Licence and citation

Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). DOI: [10.5281/zenodo.23957367](https://doi.org/10.5281/zenodo.23957367) (Zenodo, one DOI for all versions). Cite as:

> Captain Drawdown and Dirk Paessler (2026). CDR Researcher Census, version 2026-11.4. Carbon Drawdown Initiative. https://captaindrawdown.com/data/researchers/ (CC licence, see page). https://doi.org/10.5281/zenodo.23957367

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
