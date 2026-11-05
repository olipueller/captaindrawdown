---
title: "Data changelog"
description: "Release notes, corrections and the version history of the Captain Drawdown datasets."
url: "/data/changelog/"
---

Newest first. A release covers all three datasets and stays available under `/data/v1/<version>/`; the newest is also under `/data/v1/latest/`. Entries before the first release are the version history of the researcher census (launched 18 March 2026); "Census refresh" rows are the monthly database updates on the 11th, which feed the release around the 15th. Corrections between releases are noted here and applied in the next release.

| Date | Version | Dataset | What changed |
|---|---|---|---|
| 2026-11-05 | 2026-11.4 | All | Release 2026-11.4, the first public release (5 November 2026): 913 published companies (1,470 monitored), 55,865 researchers (calibrated estimate 51,946), 14 shops; six pathway top lists, two lists each (most active, most cited).<br>Scope: high-permanence pathways only. Soil carbon research is not published (it held 42,911 of the 95,329 researchers listed internally in October, mostly agricultural soil science); General CDR counts a paper only when it carries no other pathway tag and is labelled Cross-cutting CDR; companies whose only pathway is afforestation are not published. |
| 2026-11-05 | 2026-11.4 | Companies | First release: 913 published companies from 65 countries; largest pathways Biochar 377, Enabling Tech 179, DAC 125, BECCS 84. |
| 2026-11-05 | 2026-11.4 | Researchers | First release: 55,865 researchers listed (calibrated estimate 51,946) from 15,896 papers; 6 pathway top lists. |
| 2026-11-05 | 2026-11.4 | Shops | First release: 14 shops with a live checkout and third-party certification; prices in per tonne CO₂. |
| 2026-10-11 | Census refresh | Researchers | Monthly database refresh: 1,779 new papers discovered and classified, 2,669 new researchers (92,660 → 95,329); author metrics re-enriched. |
| 2026-09-11 | Census refresh | Researchers | Monthly database refresh: 1,348 new papers discovered and classified, 2,091 new researchers (90,569 → 92,660); author metrics re-enriched. |
| 2026-08-11 | Census refresh | Researchers | Monthly database refresh: 1,758 new papers discovered and classified, 1,861 new researchers (88,708 → 90,569); author metrics re-enriched. |
| 2026-07-11 | Census v3.4 | Researchers | Membership tightened: researchers without a single classified-relevant CDR paper are no longer counted or exported. Researchers 147,377 → 88,691. |
| 2026-07-11 | Census v3.3 | Researchers | Deterministic pathway tie-break: papers tagged with a specific pathway and General CDR assign the specific one. DAC 1,251 → 4,122 researchers; General CDR 18,066 → 11,123. |
| 2026-07-11 | Census v3.2 | Researchers | Tier-2 deduplication: 817 same-person author records merged on identical normalised names plus shared co-authors or institution, with common-name and ORCID-conflict guards. Researchers 148,194 → 147,377. |
| 2026-07-11 | Census v3.1 | Researchers | Deduplication and primary-works scope: 561 ORCID-split author records merged, 1,441 upstream-deleted IDs retired, 6,959 historical merges repaired; datasets, supplements, peer-review comments and errata no longer count as papers (−2,002). Researchers 150,203 → 148,194; papers 27,816 → 25,814. |
| 2026-07-09 | Census v3 | Researchers | Monthly refresh pipeline live. 8,328 new papers discovered since April, 3,067 classified CDR-relevant; all author metrics re-enriched; ORCID enrichment for 10,930 new researchers. Researchers 122,674 → 150,203; relevant papers 24,749 → 27,816. |
| 2026-03-23 | Census v2.1 | Researchers | Direct air capture classifier recalibrated: 1,312 DAC papers recovered (30 → 1,342 papers, 48 → 3,951 authors). |
| 2026-03-23 | Census v2 | Researchers | Every paper reclassified by title and abstract with a language model; 12,384 non-CDR papers removed (39,278 → 24,749). 11,237 authors left without a CDR paper. |
| 2026-03-18 | Census v1 | Researchers | Initial launch of the CDR Researcher Census: 122,674 authors, 39,278 papers, keyword-based pathway classification. |
