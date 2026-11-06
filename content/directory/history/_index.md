---
title: "CDR industry history"
description: "Historical and structural view of the carbon dioxide removal industry: founding waves, academic attention, country + pathway structure. Updated monthly."
url: "/directory/history/"
---

_Last refreshed 2026-11-06; updated monthly. Every chart on this page is computed from my [CDR Company Directory](/directory/), the 913 published companies across 8 pathways, and carries a 'Created' stamp in its bottom-right corner with the sampling date._

> I maintain this database from public signals (LinkedIn, WHOIS, news, registries, the CDR Researcher Census). Numbers are estimates and the classification is automated; the [Directory](/directory/) has the per-company evidence. Corrections: [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de).

## When were today's CDR companies founded?

Each bar counts the published companies whose domain was registered in that year. I use the WHOIS domain-registration year as the founding proxy: most CDR startups register their domain within months of incorporation, and it is the one date available for nearly every company. Two known distortions: some firms buy older expired domains, and some academic spin-offs sit on a parent institution's domain that predates the CDR work. Both are noise against a clear shape: a thin tail of pioneers before 2018, a ramp from 2019, and the surge after 2021 with Frontier, Microsoft's purchases and the US Inflation Reduction Act. The bars count founding, not survival.

![Founding years](/charts/history-founding-years.png)

_Note on the grey-shaded zone: the most recent ~3 years are visibly understated. Startups that registered their domains in 2024–2026 are often still too small to show up in my discovery sources, so they are not in the database yet. Do not read the recent dip as a real slowdown._

## Founding waves per pathway

The same founding years, split by each company's primary pathway. Reading down one year shows what that cohort of founders bet on; reading along one pathway shows when its wave arrived.

Three patterns in my data: DAC and mineralization have a long shoulder back to the early 2010s, the first pathways with a credible engineering route and founders before a purchase market existed. Biochar is the opposite, a recent boom almost entirely 2020 to 2024, carried by cheap registry methods and short cycles from feedstock to credit. Enhanced weathering, ocean CDR and biomass burial sit between: most of their companies were founded in the last five years.

![Founding by pathway](/charts/history-founding-years-by-pathway.png)

_Note on the grey-shaded zone: the most recent ~3 years are visibly understated. Startups that registered their domains in 2024–2026 are often still too small to show up in my discovery sources, so they are not in the database yet. Do not read the recent dip as a real slowdown._

## Academic attention: papers per pathway

Yearly count of CDR-relevant papers per pathway from my [CDR Researcher Census](/cdr-researcher-census/), not from a keyword query. The census classifier tags each paper with the pathway it contributes to (keyword candidates, then a language model filter), which keeps out the thousands of agricultural biochar papers that never mention removal. Coverage starts in 2021 with the census; the current year is left out because OpenAlex indexes with a lag. Read it as where research attention goes, pathway by pathway.

![Papers per pathway](/charts/history-papers-per-pathway.png)

_The census counts six pathways (DAC, BECCS, enhanced weathering, ocean CDR, biochar, cross-cutting CDR); the company directory uses eight. Mineralization, biomass burial and enabling technology have no census tag, so the two views do not match pathway by pathway._

## Companies and staff per country

One dot per country with at least three pure-play CDR companies: the number of companies headquartered there against the sum of their estimated headcounts (LinkedIn size bands). Both axes are logarithmic, so countries with thousands of CDR employees share the chart with countries of a few dozen. Countries above the cloud have few but large operators; countries below it have many small startups and no anchor company. No company is named here, and no country with fewer than three companies appears, so no single company's headcount can be read off a dot.

![Companies and staff per country](/charts/history-country-scatter.png)

## Companies and staff per pathway

The same picture with one dot per pathway, on linear axes: how many pure-play companies pursue the approach against their combined headcount. Biochar sits far to the right, many small companies; DAC sits high with few companies, because a plant is an engineering programme of hundreds of people. A pathway in the lower left is early or capital-light, not necessarily failing.

![Companies and staff per pathway](/charts/history-pathway-scatter.png)

## Founding year and headcount, one dot per company

Each dot is one pure-play CDR company, founding year against estimated headcount on a log scale, coloured by pathway, with a density underlay that shows where the crowd sits and the percentile lines of the founding years. The centre of mass is small and young: most of the industry is fewer than 25 people and founded after 2020. The few companies with 100 and more people carry most of the operational capacity. The dots carry no names.

![Founding year and headcount per company](/charts/history-fte-growth.png)

## Industry structure by pathway

Each bar is one pathway, split by the EU SME size class of its published companies: micro (under 10 staff), small (10 to 49), medium (50 to 249) and large (250 and more), derived from LinkedIn size bands and other staff signals. Per-company headcounts are licensed data and stay unpublished; the class is the public form, here and in the [directory](/directory/).

Bar length says how many companies a pathway has, the colour mix how big they are. A pathway of micro firms is young or capital-light by design (biochar's long tail of small operators); a pathway with medium and large companies has operators running plants. Neither is a verdict: the first can grow up, the second can stall.

![Companies per pathway by size class](/charts/history-size-by-pathway.png)

## Founding year and size today

The founding-year bars again, split by how big each company is today. The older cohorts hold most of the medium and large companies; the post-2020 wave is almost entirely micro and small firms. That is what a young industry looks like, not a judgement on it: the companies that will carry the next decade's capacity are in those bars somewhere, still small.

![Founding year by size class](/charts/history-founding-years-by-size.png)

_Note on the grey-shaded zone: the most recent ~3 years are visibly understated. Startups that registered their domains in 2024–2026 are often still too small to show up in my discovery sources, so they are not in the database yet. Do not read the recent dip as a real slowdown._

## Liveliness by size

Share of liveliness tiers within each size class. Liveliness is a composite signal (job postings, hiring, news matches in the last 90 days, a live homepage), re-evaluated monthly: one credible heartbeat puts a company in Active; companies with no positive signal and no fresh news drift into Suspect or the bottom tier.

Read it as: where do the likely-dead companies sit by size? Micro firms going quiet is the normal churn of a startup field and mostly noise; medium or large companies in the lower tiers would be a real warning about the pathways they belong to.

![Liveliness by size class](/charts/history-liveliness-by-size.png)

---

## How the research workforce forms and turns over

The charts above track companies; this section tracks people, the researchers in my [CDR Researcher Census](/cdr-researcher-census/). Each researcher is placed, year by year, above the line when they published a CDR-relevant paper that year (active) and below it when they did not (dormant, split by whether they published the year before). The top envelope is the working research workforce each year; the pool below is the accumulation of one-paper-and-gone researchers. New entrants join at the base of the active band (teal block, no incoming ribbon).

**Active researchers per pathway over time.** The current-state chart on the census page is the last point of these lines. Here is the whole run, 2021 to 2025, on a log scale so growth rates compare across pathways of very different size.

![Active CDR researchers per pathway, 2021–2025](/charts/census-active-by-pathway-timeseries.png)

**All pathways combined.** The active workforce roughly tripled from 2021 to 2025 while the dormant pool grew faster underneath. The current active workforce per pathway is on the [census page](/cdr-researcher-census/).

![Researcher trajectories, all pathways](/charts/census-trajectory-all.png)

### By pathway

The same view, one pathway at a time. Younger pathways (enhanced weathering, ocean CDR) show a steep active band over a shallow dormant floor; the broad ones (biochar, cross-cutting CDR) carry a much deeper pool of past one-time contributors.

**Cross-cutting CDR**

![Cross-cutting CDR researcher trajectory](/charts/census-trajectory-general-cdr.png)

**DAC**

![DAC researcher trajectory](/charts/census-trajectory-dac.png)

**BECCS**

![BECCS researcher trajectory](/charts/census-trajectory-beccs.png)

**Biochar**

![Biochar researcher trajectory](/charts/census-trajectory-biochar.png)

**Enhanced Weathering**

![Enhanced Weathering researcher trajectory](/charts/census-trajectory-enhanced-weathering.png)

**Ocean CDR**

![Ocean CDR researcher trajectory](/charts/census-trajectory-ocean-cdr.png)

---

> **Sources.** LinkedIn size bands and other staff signals for the EU SME size classes (per-company headcounts are licensed and not published); WHOIS for domain-registration years as the founding proxy; OpenAlex and ORCID behind the CDR Researcher Census; and the [CDR Company Directory](/directory/) for every company under every chart. Liveliness tiers are re-evaluated monthly from the stored signals. The same data, versioned and citable: [captaindrawdown.com/data](/data/). Corrections: [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de); they appear in the next data release.
