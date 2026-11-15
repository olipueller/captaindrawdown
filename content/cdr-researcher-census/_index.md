---
title: "CDR Researcher Census"
description: "57,175 researchers who published on carbon dioxide removal since 2021, mapped by pathway, country and sector; top 100 per pathway with profiles. Release 2026-11."
url: "/cdr-researcher-census/"
---

**Who is working on carbon dioxide removal?** The census lists every researcher with at least one CDR-relevant paper or preprint since 2021 on one of 6 pathways, built from [OpenAlex](https://openalex.org/) and [ORCID](https://orcid.org/) (both CC0). Release **2026-11** (data as of 2026-11-15): **57,175 researchers listed**, calibrated estimate of the real population **53,199**, from 16,488 papers, 10,017 institutions and 161 countries; 11,191 are based in Europe. The database was last refreshed on 2026-11-11 (1,827 new papers, 1,631 new researchers in the database); it refreshes on the 11th of every month and the data release follows around the 15th.

<p style="font-size:.9rem;color:var(--secondary)">Names, ORCID iDs, institutions and publication counts come from OpenAlex and ORCID. Person-level data is published only for the researchers in the top lists (1,016 people); everyone else is counted in aggregates. If you are listed and want your entry corrected or removed, write to <a href="mailto:info@carbon-drawdown.de?subject=Census%20removal%20request">info@carbon-drawdown.de</a>; it is done within five working days. Details in the <a href="/privacy/">privacy notice</a>.</p>

## Where to look

- **[Top 100 per pathway](/data/researchers/)**: the most active and the most cited researchers since 2021 worldwide and the top 50 in Europe, with profile pages, every counted paper linked, and the lists as CSV and JSON.
- **[Researcher lookup](/cdr-researcher-census/lookup/)**: search the top-list researchers by name.
- **[Collaboration atlas](/cdr-researcher-census/collaboration/)**: who publishes with whom, across pathways and countries.
- **[Data](/data/researchers/)** and **[API](/api/)**: aggregates by country, pathway and sector, papers per year, the top lists, versioned and citable.

## Pathways

Primary pathway = the pathway with the most CDR papers per researcher. A paper tagged with two pathways counts for both top lists.

| Pathway | Researchers | Share | Top lists |
|---|---:|---:|---|
| <span class="cd-pwchip"><span class="cd-pw cd-pw--biochar" aria-hidden="true"></span>Biochar</span> | 27,474 | 48.0 % | [Most active](/data/researchers/biochar/) · [Most cited](/data/researchers/biochar/#most-cited-worldwide-top-100) · [Europe](/data/researchers/biochar/#most-active-europe-top-50) |
| <span class="cd-pwchip"><span class="cd-pw cd-pw--cross-cutting-cdr" aria-hidden="true"></span>Cross-cutting CDR</span> | 11,120 | 19.4 % | [Most active](/data/researchers/cross-cutting-cdr/) · [Most cited](/data/researchers/cross-cutting-cdr/#most-cited-worldwide-top-100) · [Europe](/data/researchers/cross-cutting-cdr/#most-active-europe-top-50) |
| <span class="cd-pwchip"><span class="cd-pw cd-pw--dac" aria-hidden="true"></span>DAC</span> | 5,784 | 10.1 % | [Most active](/data/researchers/dac/) · [Most cited](/data/researchers/dac/#most-cited-worldwide-top-100) · [Europe](/data/researchers/dac/#most-active-europe-top-50) |
| <span class="cd-pwchip"><span class="cd-pw cd-pw--ocean-cdr" aria-hidden="true"></span>Ocean CDR</span> | 4,895 | 8.6 % | [Most active](/data/researchers/ocean-cdr/) · [Most cited](/data/researchers/ocean-cdr/#most-cited-worldwide-top-100) · [Europe](/data/researchers/ocean-cdr/#most-active-europe-top-50) |
| <span class="cd-pwchip"><span class="cd-pw cd-pw--enhanced-weathering" aria-hidden="true"></span>Enhanced Weathering</span> | 4,470 | 7.8 % | [Most active](/data/researchers/enhanced-weathering/) · [Most cited](/data/researchers/enhanced-weathering/#most-cited-worldwide-top-100) · [Europe](/data/researchers/enhanced-weathering/#most-active-europe-top-50) |
| <span class="cd-pwchip"><span class="cd-pw cd-pw--beccs" aria-hidden="true"></span>BECCS</span> | 3,432 | 6.0 % | [Most active](/data/researchers/beccs/) · [Most cited](/data/researchers/beccs/#most-cited-worldwide-top-100) · [Europe](/data/researchers/beccs/#most-active-europe-top-50) |

The counts above are cumulative: everyone who has published in a pathway since 2021, including the many who wrote one paper and moved on. The chart shows the current working workforce, researchers who published in each pathway in the last complete year, and the share of that pathway's members they represent; direct air capture keeps the smallest share of its members active, enhanced weathering and ocean removal the largest. Year by year: [history](/directory/history/).

![Active CDR researchers per pathway in the last complete year](/charts/census-active-by-pathway.png)

## Countries

Listed count and the calibrated estimate per country. The calibration scales the listed count by the precision and recall measured in a March 2026 sample: OpenAlex over-assigns some countries and misses others, so the estimate is the better figure for comparisons.

| Country | Researchers | Share | Calibrated estimate |
|---|---:|---:|---:|
| China | 16,940 | 29.6 % | 15,033 |
| United States | 6,317 | 11.1 % | 6,013 |
| India | 4,033 | 7.0 % | 3,586 |
| United Kingdom | 1,872 | 3.3 % | 1,824 |
| Germany | 1,729 | 3.0 % | 1,680 |
| Brazil | 1,210 | 2.1 % | 1,150 |
| Australia | 1,092 | 1.9 % | 1,159 |
| Italy | 999 | 1.8 % | 1,016 |
| South Korea | 965 | 1.7 % | 913 |
| Canada | 960 | 1.7 % | 912 |
| Japan | 852 | 1.5 % | 824 |
| Spain | 814 | 1.4 % | 838 |
| France | 797 | 1.4 % | 727 |
| Malaysia | 621 | 1.1 % | 610 |
| Pakistan | 587 | 1.0 % | 504 |

All 161 countries: [researchers_by_country](/data/v1/2026-11/researchers_by_country.csv).

## Sectors

| Sector | Researchers |
|---|---:|
| Academic | 39,756 |
| Unknown | 5,906 |
| Government | 4,504 |
| Research Institute | 4,051 |
| Corporate | 1,038 |
| NGO | 996 |
| Healthcare | 576 |
| Other | 348 |

## Papers per year

CDR-relevant papers and preprints in the census by publication year. The last two years are incomplete because of indexing lag.

| Year | Papers |
|---|---:|
| 2021 | 1,347 |
| 2022 | 1,758 |
| 2023 | 2,182 |
| 2024 | 2,954 |
| 2025 | 4,046 |
| 2026 | 4,197 |

## Method

1. **Discovery.** Pathway-specific queries against OpenAlex find candidate papers; a language model classifies every paper by title and abstract as CDR-relevant or not and assigns pathways. Datasets, supplements, peer-review comments and errata do not count.
2. **Researchers.** Every author of a relevant paper since 2021 becomes a census member. Author records are deduplicated (same ORCID; same name with shared co-authors or institution, with common-name and ORCID-conflict guards).
3. **Institution.** The institution that appears most often on the researcher's own papers 2024–2026 (from the OpenAlex authorships, or from the affiliation text when OpenAlex has no match), else the ORCID employment, else the OpenAlex author profile. The top lists say which source applies (`institution_source`).
4. **Ranking.** Top lists count CDR papers and preprints 2021–2026 per pathway; the citation rank orders the same people by citations to those papers. Both ranks are in every list.
5. **Calibration.** A March 2026 sample measured per-country precision and recall of the OpenAlex attribution; the calibrated estimate scales the listed counts accordingly.
6. **Refresh.** The database refreshes on the 11th of every month; the release around the 15th publishes the files on [GitHub](https://github.com/dirkpaessler/cdr-databases) and under `/data/v1/<version>/`.

## Known limitations

- Author disambiguation relies on OpenAlex; name collisions occur, above all for common names.
- A preprint and its journal version count twice when OpenAlex lists both; this inflates paper counts for prolific preprinting groups.
- Institutions for a small share of top-list researchers still come from the OpenAlex author profile (marked † on the list pages), which mixes in mis-attributed papers.
- 2025 and 2026 are incomplete because of indexing lag.
- Nature-based removal (afforestation, blue carbon) is not covered; the pathways are BECCS, Biochar, Cross-cutting CDR, DAC, Enhanced Weathering, Ocean CDR.

For scale: [Lück et al. (2025)](https://doi.org/10.1038/s41467-025-56166-9) map about 53,000 CDR papers across 13 methods, including nature-based ones, with a topic model and without author profiling; this census covers 16,488 papers on 6 technological pathways with per-paper classification, author profiles and monthly updates.

## Reading

1. [I Counted Every CDR Researcher on Earth](/posts/cdr-researcher-census/)
2. [The CDR Brain Map](/posts/cdr-census-geography/)
3. [The Top Minds in CDR](/posts/cdr-census-top-researchers/)
4. [The Dabbler Problem](/posts/cdr-census-dabbler-problem/)
5. [CDR Science as Early Signal](/posts/cdr-census-early-signal/)

## Versions

The version history of the census (v1 in March 2026 to v3.4 in July 2026, the monthly refreshes and every data release since 2026-11.4) is kept in one place: the [data changelog](/data/changelog/).

---

*Built by [Captain Drawdown](/about/), part of the [Carbon Drawdown Initiative](https://www.carbon-drawdown.de/). Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Cite as: Captain Drawdown and Dirk Paessler (2026). CDR Researcher Census, version 2026-11. Carbon Drawdown Initiative. https://captaindrawdown.com/data/researchers/ (CC licence, see page). https://doi.org/10.5281/zenodo.23957367*

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
