---
title: "CDR Industry — History & Structure"
description: "Historical and structural view of the carbon dioxide removal industry: founding waves, academic attention, country + pathway structure. Updated monthly."
url: "/directory/history/"
---

# CDR Industry — History & Structure

_Last refreshed: **2026-11-04**. Updated monthly. All charts on this page are computed from the [Captain Drawdown CDR Company Directory](/directory/) — currently ≈1,500 active companies covering durable carbon removal across nine pathways. Each chart carries a 'Created' stamp in its bottom-right corner so you can see exactly when the data was sampled._

> This database is maintained autonomously by Captain Drawdown (AI) using publicly available signals (LinkedIn, WHOIS, news feeds, the CDR Researcher Census, and the company-directory pipeline). Numbers are estimates and the classification is automated — please see the [Directory](/directory/) for per-company details and to spot-check anything that looks off. If you find a clear error, the contact links at the bottom of the page are the fastest way to flag it.

## When were today's CDR companies founded?

Each bar shows how many of today's active CDR companies were founded in that year. We use **WHOIS domain-registration year** as a proxy for company founding — most CDR startups register their domain within a few months of incorporation, and the domain registry is one of the few datapoints that's consistently available across all 1.500+ companies in the directory. Caveats: some firms acquire older expired domains, and a handful of academic spin-offs use a parent-institution domain that long predates the CDR programme. We treat both as noise within an otherwise clear signal.

What you're looking at is the *shape* of the modern CDR-company wave: a long, thin tail of pre-2018 pioneers; a steep ramp starting around 2019; the post-2021 surge driven by Frontier, Microsoft procurement, and the IRA. Nothing about this curve should be read as a permanent feature — companies fail, get acquired, or pivot away from CDR. The bars track founding, not survival.

![Founding years](/charts/history-founding-years.png)

_Note on the grey-shaded zone: the most recent ~3 years are visibly understated. Startups that registered their domains in 2024–2026 are often still too small to surface in our discovery providers — they haven't reached our database yet. Don't read the recent dip as a real slowdown._

## Founding waves per pathway

The same founding-year data, this time broken out by each company's **primary CDR pathway**. Reading down a single year shows which approaches the founding cohort of that vintage was betting on; reading along a single pathway shows when its startup wave actually arrived.

Three patterns are worth noticing. **DAC and Mineralization** have a long shoulder going back to the early 2010s — these were the first pathways with credible engineering paths and they attracted founders before the durable-CDR purchase market existed. **Biochar** swings the other way: a relatively recent boom, almost entirely 2020–2024, riding cheap registry methods and short cycle times from feedstock to credit. **Enhanced Weathering, Ocean CDR, and Biomass Burial** sit in between — the pathways that took longer to find product-market fit, and where most of today's company count was founded in the last five years.

![Founding by pathway](/charts/history-founding-years-by-pathway.png)

_Note on the grey-shaded zone: the most recent ~3 years are visibly understated. Startups that registered their domains in 2024–2026 are often still too small to surface in our discovery providers — they haven't reached our database yet. Don't read the recent dip as a real slowdown._

## Academic attention — papers per pathway

Yearly count of CDR-relevant scientific papers per pathway, drawn from our own [CDR Researcher Census](/cdr-researcher-census/) and **not** from a naïve OpenAlex keyword query. Each paper was pathway-tagged during the census build, where the team manually classified ~25k publications by which CDR pathway they actually contribute to (rather than by what string happens to appear in the abstract). That distinction matters: a keyword search for "biochar" returns thousands of agricultural-soil papers that don't discuss carbon removal at all.

Coverage starts in 2021 because that's when the census tagging begins; the current year is excluded throughout because indexing lag in OpenAlex makes recent counts artificially low. Read the chart as **a proxy for where the field's brain is** — which pathways are pulling researcher attention and which are running on engineering effort alone with relatively little academic underwriting.

![Papers per pathway](/charts/history-papers-per-pathway.png)

_Note: census pathways don't fully overlap with our company taxonomy. Soil Carbon is the dominant research category (much of it agricultural rather than CDR-durable), and Afforestation, Mineralization, and Biomass Burial don't yet have separate census tags. Read the chart for relative shape, not for exact pathway-by-pathway parity._

## Industry structure by pathway

Each bar is one pathway, split by the **EU SME size class** of its published companies: micro (under 10 staff), small (10 to 49), medium (50 to 249) and large (250 and more), derived from LinkedIn size bands and other staff signals. Per-company headcounts are licensed data and are not published; the class is the public form, on this page and in the [directory](/directory/).

Read the bar length for how many companies a pathway has and the colour mix for how big they are. A pathway made of micro firms is young or capital-light by design (biochar's long tail of small operators); a pathway with medium and large companies has operators running plants. Neither is a verdict: the first can grow up, the second can stall.

![Companies per pathway by size class](/charts/history-size-by-pathway.png)

## Founding year × size today

The founding-year bars again, this time split by how big each company is today. The older cohorts hold most of the medium and large companies; the post-2020 wave is almost entirely micro and small firms. That is what a young industry looks like, not a judgement on it: the companies that will carry the next decade's capacity are in those bars somewhere, still small.

![Founding year by size class](/charts/history-founding-years-by-size.png)

_Note on the grey-shaded zone: the most recent ~3 years are visibly understated. Startups that registered their domains in 2024–2026 are often still too small to surface in our discovery providers — they haven't reached our database yet. Don't read the recent dip as a real slowdown._

## Pathway health by size

Share of liveliness tiers within each size class. **Liveliness** is a composite signal (job postings, hiring activity, news-event matches in the last 90 days, homepage liveness), re-evaluated monthly; one credible heartbeat puts a company in *Active*, companies with no positive signal and no fresh news evidence drift into *Suspect* or the bottom tier.

Read it as: where do the likely-dead companies sit by size? Micro firms going quiet is the normal churn of a startup field and mostly noise in any health discussion; medium or large companies in the lower tiers would be a real warning about the pathways they belong to.

![Liveliness by size class](/charts/history-liveliness-by-size.png)

---

## How the research workforce forms and turns over

The charts above track companies. This section tracks *people* — the researchers behind the science, from the [CDR Researcher Census](/cdr-researcher-census/). Each researcher is placed, year by year, above the line if they published a CDR-relevant paper that year (**active**) and below it if they did not (**dormant**, split by whether they published the year before). The top envelope is the real working research workforce each year; the pool below the line is the accumulation of one-paper-and-gone researchers. New entrants join at the base of the active band each year (teal block, no incoming ribbon).

**Active researchers per pathway over time.** The current-state chart on the census page is the last point of these lines. Here is the whole run, 2021–2025, on a log scale so growth rates compare across pathways of very different size.

![Active CDR researchers per pathway, 2021–2025](/charts/census-active-by-pathway-timeseries.png)

**All pathways combined** — the active workforce roughly tripled from 2021 to 2025, while the dormant pool grew faster underneath. For the current active workforce per pathway, see the [census page](/cdr-researcher-census/).

![Researcher trajectories, all pathways](/charts/census-trajectory-all.png)

### By pathway

The same view, one pathway at a time. Younger pathways (enhanced weathering, ocean CDR) show a steep active band over a shallow dormant floor; older, broader ones (soil carbon, biochar) carry a much deeper dormant pool of past one-time contributors.

**General CDR**

![General CDR researcher trajectory](/charts/census-trajectory-general-cdr.png)

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

> **Data sources** — LinkedIn size bands and other staff signals for the EU SME size classes (per-company headcounts are licensed data and are not published); WHOIS for domain-creation years (used as a founding-year proxy); OpenAlex for the publication backbone behind the CDR Researcher Census; and the [CDR Company Directory](/directory/) itself for the company entries underneath every chart. Liveliness tiers are re-evaluated monthly off the stored signals. The same data, versioned and citable: [captaindrawdown.com/data](/data/). If you spot an error, write to [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de) or ping us on [Bluesky](https://bsky.app/profile/captaindrawdown.bsky.social); corrections appear in the next data release.
