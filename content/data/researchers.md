---
title: "CDR Researcher Census — Data"
description: "95,329 researchers who published on carbon dioxide removal since 2021: aggregates by country, pathway and sector plus top-100 lists per pathway. CC BY 4.0."
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
  "creator": {
    "@type": "Organization",
    "name": "Captain Drawdown (Carbon Drawdown Initiative)",
    "url": "https://captaindrawdown.com"
  },
  "version": "2026-11",
  "dateModified": "2026-11-04",
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
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11/researchers_by_country.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "text/csv",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11/researchers_by_pathway.csv"
    },
    {
      "@type": "DataDownload",
      "encodingFormat": "application/json",
      "contentUrl": "https://captaindrawdown.com/data/v1/2026-11/researchers_by_country.json"
    }
  ]
}
</script>

**95,329 researchers listed** in release 2026-11 (data as of 2026-11-04): every author with at least one CDR-relevant paper since 2021 on one of seven pathways, from 27,418 papers, 15,311 institutions and 182 countries. The calibrated estimate of the real population is **88,179**: the listed count scaled per country by the precision and recall measured in the March 2026 calibration sample (OpenAlex over-assigns some countries and misses others). 18,144 listed researchers are based in Europe.

## Top researchers per pathway

Two rankings in every file: by CDR papers since 2021 (rank) and by citations to those papers (rank_by_citations), with per-year paper counts so you can re-rank for any year. Institution comes from the researcher's ORCID record where one exists, otherwise from OpenAlex (flagged in `institution_source`; OpenAlex affiliations are sometimes stale or wrong).

| Pathway | Researchers with papers since 2021 | Leads by papers | Europe in top 100 | Lists |
|---|---|---|---|---|
| Biochar | 27,556 | Daniel C.W. Tsang | 25 of 100 | [Top 100](/data/v1/2026-11/top100_biochar.csv) · [Top 50 Europe](/data/v1/2026-11/top50_europe_biochar.csv) |
| Soil Carbon | 51,304 | Yakov Kuzyakov | 28 of 100 | [Top 100](/data/v1/2026-11/top100_soil-carbon.csv) · [Top 50 Europe](/data/v1/2026-11/top50_europe_soil-carbon.csv) |
| General CDR | 33,809 | Noah J. Planavsky | 65 of 100 | [Top 100](/data/v1/2026-11/top100_general-cdr.csv) · [Top 50 Europe](/data/v1/2026-11/top50_europe_general-cdr.csv) |
| DAC | 5,950 | Detlef Stolten | 43 of 100 | [Top 100](/data/v1/2026-11/top100_dac.csv) · [Top 50 Europe](/data/v1/2026-11/top50_europe_dac.csv) |
| Ocean CDR | 5,644 | Lennart T. Bach | 58 of 100 | [Top 100](/data/v1/2026-11/top100_ocean-cdr.csv) · [Top 50 Europe](/data/v1/2026-11/top50_europe_ocean-cdr.csv) |
| Enhanced Weathering | 4,920 | Noah J. Planavsky | 66 of 100 | [Top 100](/data/v1/2026-11/top100_enhanced-weathering.csv) · [Top 50 Europe](/data/v1/2026-11/top50_europe_enhanced-weathering.csv) |
| BECCS | 4,126 | Philippe Ciais | 69 of 100 | [Top 100](/data/v1/2026-11/top100_beccs.csv) · [Top 50 Europe](/data/v1/2026-11/top50_europe_beccs.csv) |

## Download

| File | Rows | Size | Format |
|---|---|---|---|
| researchers_by_country | 183 | 4 KB | [CSV](/data/v1/2026-11/researchers_by_country.csv) · [JSON](/data/v1/2026-11/researchers_by_country.json) |
| researchers_by_pathway | 7 | 0 KB | [CSV](/data/v1/2026-11/researchers_by_pathway.csv) · [JSON](/data/v1/2026-11/researchers_by_pathway.json) |
| researchers_by_country_pathway | 788 | 13 KB | [CSV](/data/v1/2026-11/researchers_by_country_pathway.csv) · [JSON](/data/v1/2026-11/researchers_by_country_pathway.json) |
| researchers_by_sector | 8 | 0 KB | [CSV](/data/v1/2026-11/researchers_by_sector.csv) · [JSON](/data/v1/2026-11/researchers_by_sector.json) |
| cdr_papers_by_year | 6 | 0 KB | [CSV](/data/v1/2026-11/cdr_papers_by_year.csv) · [JSON](/data/v1/2026-11/cdr_papers_by_year.json) |
| top100_biochar | 100 | 24 KB | [CSV](/data/v1/2026-11/top100_biochar.csv) · [JSON](/data/v1/2026-11/top100_biochar.json) |
| top50_europe_biochar | 50 | 12 KB | [CSV](/data/v1/2026-11/top50_europe_biochar.csv) · [JSON](/data/v1/2026-11/top50_europe_biochar.json) |
| top100_soil-carbon | 100 | 24 KB | [CSV](/data/v1/2026-11/top100_soil-carbon.csv) · [JSON](/data/v1/2026-11/top100_soil-carbon.json) |
| top50_europe_soil-carbon | 50 | 12 KB | [CSV](/data/v1/2026-11/top50_europe_soil-carbon.csv) · [JSON](/data/v1/2026-11/top50_europe_soil-carbon.json) |
| top100_general-cdr | 100 | 25 KB | [CSV](/data/v1/2026-11/top100_general-cdr.csv) · [JSON](/data/v1/2026-11/top100_general-cdr.json) |
| top50_europe_general-cdr | 50 | 12 KB | [CSV](/data/v1/2026-11/top50_europe_general-cdr.csv) · [JSON](/data/v1/2026-11/top50_europe_general-cdr.json) |
| top100_dac | 100 | 24 KB | [CSV](/data/v1/2026-11/top100_dac.csv) · [JSON](/data/v1/2026-11/top100_dac.json) |
| top50_europe_dac | 50 | 12 KB | [CSV](/data/v1/2026-11/top50_europe_dac.csv) · [JSON](/data/v1/2026-11/top50_europe_dac.json) |
| top100_ocean-cdr | 100 | 24 KB | [CSV](/data/v1/2026-11/top100_ocean-cdr.csv) · [JSON](/data/v1/2026-11/top100_ocean-cdr.json) |
| top50_europe_ocean-cdr | 50 | 12 KB | [CSV](/data/v1/2026-11/top50_europe_ocean-cdr.csv) · [JSON](/data/v1/2026-11/top50_europe_ocean-cdr.json) |
| top100_enhanced-weathering | 100 | 24 KB | [CSV](/data/v1/2026-11/top100_enhanced-weathering.csv) · [JSON](/data/v1/2026-11/top100_enhanced-weathering.json) |
| top50_europe_enhanced-weathering | 50 | 12 KB | [CSV](/data/v1/2026-11/top50_europe_enhanced-weathering.csv) · [JSON](/data/v1/2026-11/top50_europe_enhanced-weathering.json) |
| top100_beccs | 100 | 24 KB | [CSV](/data/v1/2026-11/top100_beccs.csv) · [JSON](/data/v1/2026-11/top100_beccs.json) |
| top50_europe_beccs | 50 | 12 KB | [CSV](/data/v1/2026-11/top50_europe_beccs.csv) · [JSON](/data/v1/2026-11/top50_europe_beccs.json) |

## Fields

- **researchers_by_country**: country_code, region, listed researchers, share, calibrated estimate.
- **researchers_by_pathway, researchers_by_sector, researchers_by_country_pathway**: listed researchers per primary pathway, sector and country-pathway pair.
- **cdr_papers_by_year**: CDR-relevant papers per publication year from 2021.
- **top100_*, top50_europe_***: rank, rank_by_citations, name, orcid, institution, institution_source, country_code, region, cdr_papers_2021_2026, papers per year, cdr_citations, h_index_all_fields, profile_url, openalex_id.

## Method

Papers are discovered in OpenAlex by pathway-specific queries and classified as CDR-relevant or not; authors are deduplicated and enriched from ORCID (institution and country) where an ORCID iD exists. Primary pathway is the pathway with the most papers. Published aggregates never go below country-pathway level; person-level data is published only for the top lists. Fields that are model estimates (career stage, CDR commitment, trajectory) stay internal. Details: [about the census](/cdr-researcher-census/).

## Personal data

Names, ORCID iDs, institutions and publication counts of researchers in the top lists are processed on the basis of legitimate interest (Art. 6(1)(f) GDPR) from public scholarly records (OpenAlex, ORCID). If you are listed and want your entry corrected or removed, write to [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de?subject=Census%20removal%20request) and it is done within five working days. Full notice: [privacy](/privacy/).

## Versions

This page describes release **2026-11** (data as of 2026-11-04). Every release is frozen under `/data/v1/2026-11/`; the newest release is also mirrored under [`/data/v1/latest/`](/data/v1/latest/). The [manifest](/data/v1/2026-11/manifest.json) lists every file with row counts and SHA-256 checksums. Releases appear monthly, around the 15th; corrections between releases are listed in the [changelog](/data/changelog/).

## Licence and citation

Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Cite as:

> Captain Drawdown / Carbon Drawdown Initiative (2026). CDR Researcher Census, version 2026-11. https://captaindrawdown.com/data/researchers/ (CC licence, see page).

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
