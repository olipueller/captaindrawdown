---
draft: false
title: "Find Yourself in the CDR Census — 122,674 Researchers, Searchable"
date: 2026-03-23T21:35:00+01:00
slug: "cdr-census-lookup-tool"
aliases: ["/s/120"]
description: "Search 122,674 researchers in CDR-related literature by name. See your pathway, commitment level, trajectory, and how you compare. Built on OpenAlex + ORCID open data."
tags: ["CDR", "carbon removal", "research", "census", "lookup", "tool"]
cover:
  image: "/images/posts/census-lookup-20260325.png"
  alt: "CDR Researcher Lookup Tool"
---

If you've published anything related to carbon dioxide removal, you're probably in here.

The [CDR Researcher Lookup](/cdr-researcher-census/lookup/) lets you search 122,674 researchers by name. Each profile shows:

- **Your CDR pathway** — which removal method your work maps to
- **Commitment level** — dabbler, part-time, focused, or dedicated
- **Trajectory** — is your CDR output growing, stable, or declining?
- **Career stage** — early career through eminent, based on h-index and career span
- **Institution and country** — verified via ORCID where available
- **Your CDR papers** — the specific publications that put you in this dataset

## Why This Exists

When [Lück et al. (2025)](https://doi.org/10.1038/s41467-025-56166-9) mapped 53,000 CDR papers in *Nature Communications*, they answered "how much CDR research exists?" I wanted to answer the next question: **who are the people doing it?**

The result is the first researcher-centric census of the CDR field. Now in v2: 24,749 CDR papers, 122,674 authors, 80,382 with meaningful CDR work. Not just paper counts — actual profiles of every author, their career trajectories, and how deeply they're engaged with carbon removal.

## What's New in v2

v2 fixes the misclassification mess. Every paper got re-classified individually by LLM (title + abstract), so we yanked 12,384 false positives that snuck through v1. Result: stronger signal, fewer "is this really CDR?" false alarms.

Real improvements:
- LLM-per-paper classification (not just keyword soup)
- 12,384 non-CDR papers removed
- Cleaner researcher profiles
- Better pathway accuracy

## It's v2 — Help Me Fix It (It's Better)

This data comes from [OpenAlex](https://openalex.org/) and [ORCID](https://orcid.org/). It's still imperfect:

- Some researchers may be misclassified by pathway
- Institution data is wrong for ~17% of authors without ORCID
- Name disambiguation is hard (especially for common names)
- 2025-2026 papers are still being indexed

**If your profile is wrong, tell me.** Every correction improves the dataset for everyone. The census updates monthly.

📣 Reach out: [Bluesky](https://bsky.app/profile/captaindrawdown.bsky.social) · [X](https://x.com/CaptainDrawdown)

👉 **[Search the CDR Researcher Census →](/cdr-researcher-census/lookup/)**

---

*Built by [CaptainDrawdown](https://www.captaindrawdown.com/about/) · Data from [OpenAlex](https://openalex.org/) (CC0) + [ORCID](https://orcid.org/) · Updated monthly*

---

### 🔗 Related Reading

- [I Counted Every CDR Researcher on Earth. Here's What I Found.](/posts/cdr-researcher-census/)
- [The CDR Brain Map — Where the Researchers Are (and Aren't)](/posts/cdr-census-geography/)
- [The Dabbler Problem — Is CDR Research a Side Hustle?](/posts/cdr-census-dabbler-problem/)
- [CDR Science as Early Signal — Is the Research Explosion Fast Enough?](/posts/cdr-census-early-signal/)
