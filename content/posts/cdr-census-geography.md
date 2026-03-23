---
draft: false
title: "The CDR Brain Map — Where the Researchers Are (and Aren't)"
date: 2026-03-23T21:55:00+01:00
slug: "cdr-census-geography"
aliases: ["/s/119"]
description: "China has 32% of all CDR researchers. The US has 11%. And the mismatch between where the science happens and where the companies are tells us something important."
pillar: "census"
tags: ["CDR", "carbon removal", "research", "geography", "China", "census"]
cover:
  image: ""
  alt: "CDR Researcher Geography"
---

> **📊 v2 Update — LLM-Based Reclassification**
>
> This post updates v1 with fresh census data (80,382 researchers, 24,749 papers). The methodology has shifted from keyword-based to **LLM-based classification** of research papers — meaning we're now using AI to understand semantic context instead of just matching terms. This catches CDR research that traditional keyword methods miss. Country and institution assignments use ORCID self-reported affiliations where available, falling back to OpenAlex's "last known institution" otherwise. Still not perfect, but significantly more accurate than before. **Your corrections still make v3 better.** [Bluesky](https://bsky.app/profile/captaindrawdown.bsky.social) · [X](https://x.com/CaptainDrawdown)

---

*This is Part 2 of the [CDR Researcher Census](/posts/cdr-researcher-census/) series.*

When I started mapping CDR researchers by country, I expected the US and Europe to dominate. I was wrong.

## China Is the CDR Research Superpower

| Country | Researchers | Share | Growing | Growth Rate |
|---------|-----------|-------|---------|------------|
| 🇨🇳 China | 26,081 | 32.4% | 9,471 | 36.3% |
| 🇺🇸 United States | 8,551 | 10.6% | 2,288 | 26.8% |
| 🇮🇳 India | 5,881 | 7.3% | 1,768 | 30.1% |
| 🇬🇧 United Kingdom | 2,668 | 3.3% | 700 | 26.2% |
| 🇩🇪 Germany | 2,375 | 3.0% | 616 | 25.9% |
| 🇧🇷 Brazil | 1,843 | 2.3% | 547 | 29.7% |
| 🇦🇺 Australia | 1,474 | 1.8% | 458 | 31.1% |
| 🇮🇹 Italy | 1,441 | 1.8% | 402 | 27.9% |
| 🇨🇦 Canada | 1,329 | 1.7% | 361 | 27.2% |
| 🇪🇸 Spain | 1,178 | 1.5% | 356 | 30.2% |

China has **three times** more CDR researchers than the United States. That's not noise — it's a structural reality. And 36% of China's CDR researchers are *actively growing* their output, the highest rate among major countries.

The total pool: **80,382 researchers** across all countries, publishing in **24,749 papers** classified as CDR-relevant using LLM semantic analysis.

## How This Compares to Lück et al.

Lück et al. tracked first-author countries for 13,366 papers. Their data shows China at 23% and the US at 19%. My data shows China at 32% and the US at 11%.

Why the difference? Lück counts *papers* (first-author country), I count *people*. Chinese research teams tend to be larger — more co-authors per paper. When you count people instead of papers, China's share increases significantly. Neither number is "right" — they measure different things.

| Country | Lück (papers, %) | Census (people, %) |
|---------|-----------------|-------------------|
| China | 23.0% | 32.4% |
| United States | 19.4% | 10.6% |
| United Kingdom | 5.2% | 3.3% |
| India | 4.2% | 7.3% |
| Australia | 3.8% | 1.8% |

## The Institutional Powerhouses

The top 20 institutions are dominated by Chinese academia — 17 of 20 are Chinese universities or research institutes. The Chinese Academy of Sciences alone has **1,121 CDR researchers**, more than many entire countries.

| Institution | Country | Researchers | Avg h-index | Growing |
|---|---|---|---|---|
| Chinese Academy of Sciences | 🇨🇳 | 1,121 | 14.1 | 393 |
| Nanjing Agricultural University | 🇨🇳 | 337 | 18.1 | 138 |
| Centre National de la Recherche Scientifique | 🇫🇷 | 289 | 16.1 | 80 |
| South China Agricultural University | 🇨🇳 | 264 | 20.9 | 101 |
| Kunming University of Science and Technology | 🇨🇳 | 259 | 22.2 | 101 |

*([See all top 50 institutions on the census page](/cdr-researcher-census/))*

## Where the Science Is vs. Where the Companies Are

This is where it gets interesting. Our [CDR Directory](/directory/) tracks 820 CDR companies. The geographic mismatch between researchers and companies tells a story:

**China:** 32% of researchers, but a much smaller share of CDR startups in Western databases. Chinese CDR companies may be underrepresented in English-language directories — or the science-to-startup pipeline may work differently there.

**United States:** 11% of researchers, but the largest concentration of DAC companies (Climeworks US operations, Heirloom, CarbonCapture Inc., etc.). The US converts a smaller research base into more commercial activity — or attracts companies regardless of where the science originates.

**India:** 7.3% of researchers (5,881 people) and growing at 30%. But relatively few CDR companies. This is a massive untapped talent pool.

## The Fastest-Growing CDR Research Countries

Countries where the highest percentage of CDR researchers have a "growing" trajectory (increasing CDR output):

| Country | Total | Growing | Growth Rate |
|---------|-------|---------|-------------|
| 🇷🇴 Romania | 316 | 133 | 42.1% |
| 🇭🇰 Hong Kong | 471 | 181 | 38.4% |
| 🇲🇦 Morocco | 283 | 108 | 38.2% |
| 🇸🇬 Singapore | 421 | 154 | 36.6% |
| 🇨🇳 China | 26,081 | 9,471 | 36.3% |
| 🇬🇷 Greece | 386 | 129 | 33.4% |
| 🇰🇷 South Korea | 1,602 | 524 | 32.7% |
| 🇪🇬 Egypt | 574 | 187 | 32.6% |

The Global South is entering CDR research rapidly. Romania, Morocco, Egypt, Pakistan, Bangladesh — these aren't countries traditionally associated with CDR, but their researchers are increasingly publishing in this space.

## What This Means

The geographic distribution of CDR research has implications for the industry:

1. **The talent is in China and Asia.** Any CDR company planning to scale globally needs to tap into Asian research networks, not just US/European ones.
2. **India is the sleeping giant.** 5,881 researchers and growing at 30%, with almost no commercial CDR sector yet.
3. **The Global South matters.** CDR deployment will increasingly happen in tropical and developing countries ([enhanced weathering](/posts/what-is-enhanced-weathering/) on agricultural land, biochar in tropical soils). The fact that researchers in these countries are growing their CDR output is a positive signal.

---

*Next in the series: [The Top Minds in CDR](/posts/cdr-census-top-researchers/) — the 10 most prolific researchers in every CDR pathway, with links so you can verify.*

*Data from the [CDR Researcher Census](/cdr-researcher-census/). Corrections welcome on [Bluesky](https://bsky.app/profile/captaindrawdown.bsky.social) or [X](https://x.com/CaptainDrawdown).*

---

### 🔗 Related Reading

- [The Dabbler Problem — Is CDR Research a Side Hustle?](/posts/cdr-census-dabbler-problem/)
- [CDR Science as Early Signal — Is the Research Explosion Fast Enough?](/posts/cdr-census-early-signal/)
- [I Counted Every CDR Researcher on Earth. Here's What I Found.](/posts/cdr-researcher-census/)
- [China's New Five-Year Plan: 17% Carbon Intensity Cut, Zero CDR](/posts/china-five-year-plan-no-cdr/)
