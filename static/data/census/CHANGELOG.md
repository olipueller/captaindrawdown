# CDR Researcher Census — Changelog

## v1.1 (2026-03-22)
**Data Quality Overhaul — Paper Reclassification + Deduplication**

Triggered by researcher feedback (Cara Maesano, RMI) identifying misclassified papers:
an air pollution/COVID paper was tagged as "Enhanced Weathering", and duplicate 
papers inflated author paper counts.

### What Changed (Method)
1. **Fetched OpenAlex topics + abstracts** for all 39,278 papers (102,877 topics, 39,255 keywords, 27,449 abstracts)
2. **Multi-signal reclassification:** Each paper now needs at least 1 real CDR signal from:
   - OpenAlex topic match (CDR-relevant topics like "CO2 Sequestration", "Biochar Application", etc.)
   - Abstract keyword match (exact CDR phrases: "carbon dioxide removal", "enhanced weathering", etc.)
   - OpenAlex keyword match
   - Papers with zero CDR signals marked `cdr_relevant = 0`
3. **Confidence scoring:** HIGH (2+ signals), MEDIUM (1 clear signal), LOW (original search only)
4. **Only HIGH + MEDIUM confidence papers** retained in active pathway classifications
5. **Paper deduplication:** Preprint/published duplicates merged (keep published version)
6. **Author pathway recalculation** from cleaned paper data

### What Changed (Outcome)

| Metric | v1.0 | v1.1 | Change |
|--------|------|------|--------|
| **Total papers** | 39,278 | 21,804 | -17,474 (-44%) |
| **Active CDR authors** | ~75,700 | 71,414 | ~-4,300 |
| **Duplicates removed** | 0 | 1,407 | — |
| **Non-CDR papers removed** | 0 | 17,474 | — |

#### Per-Pathway Paper Changes

| Pathway | v1.0 | v1.1 | Change |
|---------|------|------|--------|
| Soil Carbon | 16,382 | 8,283 | -49% |
| General CDR | 7,381 | 9,079 | +23% |
| Biochar | 5,909 | 3,087 | -48% |
| DAC | 5,527 | 1,978 | -64% |
| Enhanced Weathering | 4,945 | 871 | -82% |
| BECCS | 2,414 | 1,630 | -32% |
| Ocean CDR | 2,357 | 703 | -70% |

#### Author Pathway Changes

| Pathway | v1.0 Authors | v1.1 Authors |
|---------|-------------|-------------|
| General CDR | — | 25,491 |
| Soil Carbon | — | 24,531 |
| Biochar | — | 10,844 |
| DAC | — | 4,552 |
| BECCS | — | 4,175 |
| Enhanced Weathering | — | 1,516 |
| Ocean CDR | — | 305 |

- 1,346 authors changed primary pathway
- 0 authors fully removed (all retained with updated classifications)

### Confidence Distribution
- HIGH: 5,962 papers (topic + abstract/keyword match)
- MEDIUM: 17,136 papers (1 clear signal)
- LOW: 16,180 papers (original search only — excluded from active classifications)

### Validation: Cara Maesano (test case)
- **v1.0:** 10 papers (including air pollution/COVID paper tagged "Enhanced Weathering" + 3 duplicates)
- **v1.1:** 4 unique papers, all correctly classified (EW, DAC, General CDR, Ocean CDR), all HIGH confidence
- COVID paper correctly removed ✅
- Duplicates merged ✅

### Known Issues (v1.1)
- Enhanced Weathering dropped 82% — may be overcorrecting. Some legitimate EW papers may lack CDR-specific abstract language.
- Ocean CDR dropped 70% — same concern. Ocean CDR papers sometimes discuss alkalinity without using exact CDR phrases.
- General CDR grew 23% — papers reclassified from specific pathways to General when abstract mentions CDR broadly but not a specific method.
- LOW confidence papers (16,180) excluded but not deleted — can be reinstated if review shows false negatives.

---

## v1.0 (2026-03-20)
**Initial Release**
- 122,674 authors, 39,278 papers, 186 countries, 7 CDR pathways
- Data source: OpenAlex API (title_and_abstract.search)
- Pathway classification: fuzzy keyword search on title+abstract
- Author enrichment: OpenAlex + ORCID institution/country
- Website: census evergreen page, lookup tool, 5 blog articles
- Known issues:
  - Pathway classification is noisy (fuzzy search matches non-CDR papers)
  - Duplicate papers (~2,400 — preprints + published versions both indexed)
  - OpenAlex institution disambiguation bugs (Oldham Council, East Sussex CC)

### v1.1.1 Hotfix (2026-03-23)
**Title-based pathway classification**

Bug: The v1.1 reclassifier checked topics, abstracts, and keywords — but not paper titles.
Result: 1,004 papers with pathway terms literally in the title were missing that pathway classification.

**Fix:** Added title-based classification (exact phrase matching) as a HIGH confidence signal.

| Impact | Count |
|--------|-------|
| Papers with added pathway | 1,004 |
| Authors with changed primary pathway | 2,701 |

Example: Dirk Paessler had 6 EW papers but was classified "General CDR" because General CDR appeared on all 6 while EW was missing from 2 (supplementary material + data paper without abstract). Now correctly: Enhanced Weathering.

Per-pathway author counts after fix:
| Pathway | v1.1 | v1.1.1 |
|---------|------|--------|
| General CDR | 25,491 | 24,006 |
| Soil Carbon | 24,531 | 23,590 |
| Biochar | 10,844 | 12,128 |
| DAC | 4,552 | 5,387 |
| BECCS | 4,175 | 4,283 |
| Enhanced Weathering | 1,516 | 1,717 |
| Ocean CDR | 305 | 326 |
