---
title: "Data changelog"
description: "Release notes and corrections for the Captain Drawdown datasets."
url: "/data/changelog/"
---

Newest first. Each release is frozen under `/data/v1/<version>/`; corrections between releases are noted here and applied in the next release.

### 2026-11 · 2026-11-04
- Release 2026-11: 969 published companies (1,470 active), 95,329 researchers (calibrated estimate 88,179), 14 shops; 7 pathway top lists.
### 2026-11.1 · 2026-11-04
- Release 2026-11.1: 969 published companies (1,470 active), 95,329 researchers (calibrated estimate 88,179), 14 shops; 7 pathway top lists.
- Patch 2026-11.1: institutions in the researcher top lists and profile pages now come from the papers' own affiliations 2024-2026 (OpenAlex authorships; the affiliation text when OpenAlex has no institution match) instead of the author profile, which mixed in mis-attributed papers. 157 of 631 top-list institutions changed (Planavsky: Yale University, not UC Riverside; Stubbs: University of Glasgow, not Royal Bank of Scotland). The institution_source column says works, works_raw, orcid or openalex. Company and shop files are rebuilt from the same database.
### 2026-11.2 · 2026-11-04
- Release 2026-11.2: 969 published companies (1,470 active), 95,329 researchers (calibrated estimate 88,179), 14 shops; 7 pathway top lists.
- Patch 2026-11.2: new files top100_<pathway>_papers (CSV and JSON), one row per person in the top lists and per paper that counted for the ranking (rank, paper id, year, title, citations, pathway tags, link), so every rank can be checked against the papers. The top-list pages link each paper count to the counted papers on the profile page.
