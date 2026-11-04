---
title: "CDR Researcher Census"
description: "95,329 researchers who published on carbon dioxide removal since 2021, mapped by pathway, country and sector; top 100 per pathway with profiles. Release 2026-11.2."
url: "/cdr-researcher-census/"
---

**Who is working on carbon dioxide removal?** The census lists every researcher with at least one CDR-relevant paper or preprint since 2021 on one of 7 pathways, built from [OpenAlex](https://openalex.org/) and [ORCID](https://orcid.org/) (both CC0). Release **2026-11.2** (data as of 2026-11-04): **95,329 researchers listed**, calibrated estimate of the real population **88,179**, from 27,418 papers, 15,279 institutions and 182 countries; 18,144 are based in Europe. The database was last refreshed on 2026-10-11 (1,779 new papers, 2,669 new researchers, 95,329 in total); it refreshes on the 11th of every month and the data release follows around the 15th.

<p style="font-size:.9rem;color:var(--secondary)">Names, ORCID iDs, institutions and publication counts come from OpenAlex and ORCID. Person-level data is published only for the researchers in the top lists (about 630 people); everyone else is counted in aggregates. If you are listed and want your entry corrected or removed, write to <a href="mailto:info@carbon-drawdown.de?subject=Census%20removal%20request">info@carbon-drawdown.de</a>; it is done within five working days. Details in the <a href="/privacy/">privacy notice</a>.</p>

## Where to look

- **[Top 100 per pathway](/data/researchers/)**: the most productive researchers since 2021 worldwide and the top 50 in Europe, with profile pages, every counted paper linked, and the lists as CSV and JSON.
- **[Researcher lookup](/cdr-researcher-census/lookup/)**: search the top-list researchers by name, country or pathway.
- **[Collaboration atlas](/cdr-researcher-census/collaboration/)**: who publishes with whom, across pathways and countries.
- **[Data](/data/researchers/)** and **[API](/api/)**: aggregates by country, pathway and sector, papers per year, the top lists, versioned and citable.

## Pathways

Primary pathway = the pathway with the most CDR papers per researcher. A paper tagged with two pathways counts for both top lists.

| Pathway | Researchers | Share | Top lists |
|---|---:|---:|---|
| Soil Carbon | 42,912 | 45.0 % | [Top 100](/data/researchers/soil-carbon/) · [Top 50 Europe](/data/researchers/soil-carbon/#europe-top-50) |
| Biochar | 24,513 | 25.7 % | [Top 100](/data/researchers/biochar/) · [Top 50 Europe](/data/researchers/biochar/#europe-top-50) |
| General CDR | 11,576 | 12.1 % | [Top 100](/data/researchers/general-cdr/) · [Top 50 Europe](/data/researchers/general-cdr/#europe-top-50) |
| DAC | 5,026 | 5.3 % | [Top 100](/data/researchers/dac/) · [Top 50 Europe](/data/researchers/dac/#europe-top-50) |
| Ocean CDR | 4,535 | 4.8 % | [Top 100](/data/researchers/ocean-cdr/) · [Top 50 Europe](/data/researchers/ocean-cdr/#europe-top-50) |
| Enhanced Weathering | 3,857 | 4.0 % | [Top 100](/data/researchers/enhanced-weathering/) · [Top 50 Europe](/data/researchers/enhanced-weathering/#europe-top-50) |
| BECCS | 2,910 | 3.0 % | [Top 100](/data/researchers/beccs/) · [Top 50 Europe](/data/researchers/beccs/#europe-top-50) |

The counts above are cumulative: everyone who has published in a pathway since 2021, including the many who wrote one paper and moved on. The chart shows the current working workforce, researchers who published in each pathway in the last complete year, and the share of that pathway's members they represent; direct air capture keeps the smallest share of its members active, enhanced weathering and ocean removal the largest. Year by year: [history](/directory/history/).

![Active CDR researchers per pathway in the last complete year](/charts/census-active-by-pathway.png)

## Countries

Listed count and the calibrated estimate per country. The calibration scales the listed count by the precision and recall measured in a March 2026 sample: OpenAlex over-assigns some countries and misses others, so the estimate is the better figure for comparisons.

| Country | Researchers | Share | Calibrated estimate |
|---|---:|---:|---:|
| China | 31,004 | 32.5 % | 27,514 |
| United States | 10,116 | 10.6 % | 9,629 |
| India | 7,505 | 7.9 % | 6,673 |
| United Kingdom | 2,747 | 2.9 % | 2,677 |
| Germany | 2,676 | 2.8 % | 2,600 |
| Brazil | 2,172 | 2.3 % | 2,065 |
| Australia | 1,688 | 1.8 % | 1,792 |
| Italy | 1,592 | 1.7 % | 1,620 |
| Canada | 1,552 | 1.6 % | 1,475 |
| Spain | 1,355 | 1.4 % | 1,394 |
| France | 1,304 | 1.4 % | 1,190 |
| South Korea | 1,165 | 1.2 % | 1,102 |
| Japan | 1,145 | 1.2 % | 1,108 |
| Pakistan | 945 | 1.0 % | 811 |
| Indonesia | 899 | 0.9 % | 702 |

All 182 countries: [researchers_by_country](/data/v1/2026-11.2/researchers_by_country.csv).

## Sectors

| Sector | Researchers |
|---|---:|
| Academic | 63,301 |
| Research Institute | 8,699 |
| Unknown | 8,452 |
| Government | 7,604 |
| Corporate | 2,400 |
| NGO | 2,116 |
| Healthcare | 1,554 |
| Other | 1,203 |

## Papers per year

CDR-relevant papers and preprints in the census by publication year. The last two years are incomplete because of indexing lag.

| Year | Papers |
|---|---:|
| 2021 | 2,533 |
| 2022 | 3,171 |
| 2023 | 3,869 |
| 2024 | 5,197 |
| 2025 | 7,313 |
| 2026 | 5,331 |

## Method

1. **Discovery.** Pathway-specific queries against OpenAlex find candidate papers; a language model classifies every paper by title and abstract as CDR-relevant or not and assigns pathways. Datasets, supplements, peer-review comments and errata do not count.
2. **Researchers.** Every author of a relevant paper since 2021 becomes a census member. Author records are deduplicated (same ORCID; same name with shared co-authors or institution, with common-name and ORCID-conflict guards).
3. **Institution.** The institution that appears most often on the researcher's own papers 2024–2026 (from the OpenAlex authorships, or from the affiliation text when OpenAlex has no match), else the ORCID employment, else the OpenAlex author profile. The top lists say which source applies (`institution_source`).
4. **Ranking.** Top lists count CDR papers and preprints 2021–2026 per pathway; the citation rank orders the same people by citations to those papers. Both ranks are in every list.
5. **Calibration.** A March 2026 sample measured per-country precision and recall of the OpenAlex attribution; the calibrated estimate scales the listed counts accordingly.
6. **Refresh.** The database refreshes on the 11th of every month; the release around the 15th freezes the files under `/data/v1/<version>/`.

## Known limitations

- Author disambiguation relies on OpenAlex; name collisions occur, above all for common names.
- A preprint and its journal version count twice when OpenAlex lists both; this inflates paper counts for prolific preprinting groups.
- Institutions for a small share of top-list researchers still come from the OpenAlex author profile (marked † on the list pages), which mixes in mis-attributed papers.
- 2025 and 2026 are incomplete because of indexing lag.
- Nature-based removal (afforestation, blue carbon) is not covered; the pathways are BECCS, Biochar, DAC, Enhanced Weathering, General CDR, Ocean CDR, Soil Carbon.

For scale: [Lück et al. (2025)](https://doi.org/10.1038/s41467-025-56166-9) map about 53,000 CDR papers across 13 methods, including nature-based ones, with a topic model and without author profiling; this census covers 27,418 papers on 7 technological pathways with per-paper classification, author profiles and monthly updates.

## Reading

1. [I Counted Every CDR Researcher on Earth](/posts/cdr-researcher-census/)
2. [The CDR Brain Map](/posts/cdr-census-geography/)
3. [The Top Minds in CDR](/posts/cdr-census-top-researchers/)
4. [The Dabbler Problem](/posts/cdr-census-dabbler-problem/)
5. [CDR Science as Early Signal](/posts/cdr-census-early-signal/)

## Versions

The version history of the census (v1 in March 2026 to v3.4 in July 2026, the monthly refreshes and every data release since 2026-11) is kept in one place: the [data changelog](/data/changelog/).

---

*Built by [Captain Drawdown](/about/), part of the [Carbon Drawdown Initiative](https://carbon-drawdown.de). Licence: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Cite as: Captain Drawdown / Carbon Drawdown Initiative (2026). CDR Researcher Census, version 2026-11.2. https://captaindrawdown.com/data/researchers/ (CC licence, see page).*

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
