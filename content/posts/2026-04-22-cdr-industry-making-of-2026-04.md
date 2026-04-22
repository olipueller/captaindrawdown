---
title: "Making of the April 2026 CDR Industry Update"
date: 2026-04-22T09:00:00+00:00
slug: "cdr-industry-making-of-2026-04"
draft: true
tags: ["cdr", "making-of", "directory", "methodology"]
categories: ["making-of"]
---

# April 2026: Making-of

*The making-of companion to this month's CDR Industry Update.*

We write these companion posts because the industry update by itself doesn't show its seams. A monthly tally of new CDR companies, pathway shifts, and focus-area drift only means something if you know how the sausage got made: which pipes broke, which we rebuilt, and where the numbers are still soft. This one is for readers who use our directory as a working reference and want to know when to second-guess it.

## What we rebuilt this cycle

**The company database.** We rebuilt the Coresignal-enriched company database from scratch this month (PX-001). The new taxonomy is a 9-pathway by 5-focus grid, currently covering 973 visible companies, refreshed monthly via a cron job and a shell script that runs the full pipeline end-to-end. The directory now has four branded charts on the main page plus a five-chart history view grounded in academic-attention census data. Twenty-eight companies are flagged as CDI (CDR-Distant Industrial, our shorthand for parents whose CDR activity is a minority line). We also switched directory links from numeric IDs to slugs, which quietly fixed 49 broken internal links, and added a mid-month `add-companies.py` so new entrants don't have to wait for the monthly refresh. Carbon Herald citations are now banned in code rather than by convention.

**A CDR-relevance gate on new follows.** Before this month our Bluesky and X follow flows scored candidates on bio keywords only, which let through a lot of climate-generalist accounts who never actually post about CDR. The new gate (PX-003) pulls a candidate's last 20 posts and requires at least 20% to score as CDR-relevant before we follow. It's live on Bluesky now. X is gated by default, because per-account timeline fetches are quota-expensive there and we haven't wired the fetcher yet.

**Data-driven voice list audits.** Related: our list of "voices we track" had been pruned once, by hand, on April 13. That's not a process. PX-009 replaces it with a monthly audit script that scores each voice over a 30-day window and reclassifies them as active, dormant, or off-topic, with a CSV trail. First automated run is May 1.

**Threads as sources.** We now treat substantive X and Bluesky threads as first-class newsroom input (PX-008), detected by length, reply count, or self-chain. They get stitched, relevance-gated, and handed to the Captain's Log synthesis alongside articles and press releases.

**Referral mode for journalism portals.** Instead of paraphrasing paywalled or semi-paywalled journalism, PX-007 builds a short pointer post that links directly to the outlet. Nine portals are on the list, each capped at one referral per day.

**Plumbing fixes worth naming.** The planner had a race condition where two concurrent runs could wipe the queue; it now uses an atomic lockfile with PID and timestamp checks (PX-004). We had cross-day duplicate posts of the same blog URL to LinkedIn and Bluesky; there's now a 7-day per-platform dedup check (PX-005). Captain's Log had a soft citation floor that lived only in the prompt; it's now enforced in code, with a four-external-citation minimum and a policy of skipping the log entirely rather than shipping something thinly sourced (PX-006).

## What the numbers show

The 973-company count is up from last month, but most of the delta is methodology, not industry motion. The Coresignal rebuild re-enriched every record, which means some companies that were previously filed under one pathway moved, and a handful of previously-excluded parents now show up as CDI. Treat pathway-level deltas this month as partially a reclassification artifact. Next month's update will be the first clean month-over-month comparison on the new taxonomy.

Focus-area drift (the 5-focus axis) is also noisier than usual for the same reason. We'd rather flag that now than pretend the numbers are clean.

## What we still don't trust

- **Enabling-Tech parent inflation.** When a large industrial parent has one small CDR subsidiary, our enrichment sometimes pulls the parent's full headcount and revenue into the CDR figure. The CDI flag catches the 28 worst cases, but there are almost certainly more we haven't caught.
- **Side-business headcount.** For companies where CDR is a side bet, "employees" is the total company headcount, not the CDR team. We have no clean way to separate these without manual review.
- **Coverage gaps outside English.** We're still under-indexed on Japanese, Korean, and Portuguese-language CDR news, and weak on francophone Africa. The home-timeline harvester (PX-010) helps with social but doesn't fix the underlying source list.

## Corrections

If we've miscategorised your company, missed a launch, or double-counted headcount, tell us. We're @captaindrawdown on Bluesky and the same on X. Corrections get into the next monthly refresh, and material ones get a note in the following update.