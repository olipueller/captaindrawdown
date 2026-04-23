---
title: "Making of the April 2026 CDR Industry Update"
date: 2026-04-22T09:00:00+00:00
slug: "cdr-industry-making-of-2026-04"
draft: false
tags: ["cdr", "making-of", "directory", "methodology"]
categories: ["making-of"]
cover:
  image: "/charts/directory-pathway-focus-alluvial.png"
  alt: "Alluvial diagram showing how the 9 CDR pathways split across pure-play, ecosystem, side-business and division focus types"
  hidden: false
---

# How we built the CDR Company Directory

*A behind-the-scenes companion to this month's CDR Industry Update.*

People sometimes ask how a directory like ours gets built. It is a fair question. "We track every company doing carbon removal" is the kind of claim that sounds simple until you try to do it. The truth is that "doing carbon removal" is a moving target, the companies are scattered across pretty much every continent and language, and most of them are too small to show up in normal industry datasets. This post walks through how we deal with all of that. It does not need any prior knowledge of the field.

## How Captain Drawdown itself works now

One thing changed under the hood this cycle that is worth saying out loud, because it shapes everything below. Captain Drawdown started life as a pure language-model agent inside our OpenClaw framework - we just gave a big model a goal and let it improvise the rest. That is fast to start with and useless for anything you need to repeat exactly the same way next month. So we rebuilt the Captain as a hybrid. The boring, repeatable parts - pulling sources, deduplicating, computing month-over-month deltas, rendering charts, posting on a schedule - are now ordinary Python code that runs the same way every time. The judgement parts - "is this actually a CDR company, given what its website says today" or "what is the most interesting story in this month's data" - still go to a language model, because no fixed rule survives contact with the real world here. The whole thing still runs inside an OpenClaw agent, so a human can talk to it on Telegram and steer it; it just no longer relies on the model for the work that does not need a model.

## How we find companies

The first job is finding them. There is no master list anywhere - no regulator publishes one, and the field is too young for the usual industry associations to be exhaustive. So we run a wide net of sources every month and pull anything that looks like it might be a CDR company.

The biggest sources are job boards aimed at the climate sector, public registries from removal-credit programs, the bibliographies of academic papers about specific pathways, press mentions in climate news, and broad business databases that we filter aggressively for CDR keywords. We also watch announcement feeds from a handful of community-run lists. Each source has its own bias: job boards over-index on companies that are hiring engineers, registries over-index on the ones already selling credits, papers over-index on the ones with academic ties. Pulling from many sources at once is the only way to keep any single bias from skewing the picture.

A new company has to clear a small evidence bar before we add it. We require at least two independent signals - for instance, a working website plus a press mention, or a website plus headcount data, or a website plus inclusion in a removal registry. One signal alone is not enough; the field has too many announcement-only entities that never become real companies. The bar is deliberately low because we would rather catch a company too early and clean up later than miss it.

## How we classify them

Once a company is in, the bigger question is: what kind of CDR company is it? This is where most of the work happens.

We sort everything along two axes. The first is the **pathway** - the technology family the company belongs to. We use nine: DAC, BECCS, Biochar, Enhanced Weathering, Ocean CDR, Mineralization, Afforestation, Biomass Burial, and Enabling Tech (the measurement, software, and broker layer that makes the rest possible). These nine map to how the field actually thinks about itself; they are not a clever schema we invented.

The second axis is the **focus type** we introduced this month, and it is the one that changes how the numbers should be read:

- **Pure-play** means CDR is what the company is for. Climeworks. Charm. Heirloom. Most of what people picture when they say "CDR company".
- **Division** means a unit inside a larger industrial parent does CDR, and we can isolate that unit. Think the carbon-capture business inside an oil major.
- **Side-business** means CDR is a small bet alongside a much larger primary line. We keep these in but flag them, because their headcount is misleading.
- **Ecosystem** means the company does not sell removals itself - it measures, verifies, brokers, finances, or registers them. The plumbing of the market.

Why bother? Because almost every interesting question about the industry breaks down differently across these four. Workforce headcount only makes sense for pure-plays - a side-business with 50,000 employees doing one CDR project should not appear in a "DAC employs X people" chart. Funding announcements skew toward pure-plays and divisions. Verification capacity sits almost entirely in the ecosystem layer. So when you read a chart on the directory, it is usually showing one of these slices, not all of them.

The classification itself is done by a language model that web-searches each candidate, reads the company's site, recent news, and any registry listings, and assigns the pathway and focus. We hold the model to a strict taxonomy (it cannot invent new pathways) and require it to record the URLs it relied on, so a human can audit a decision later. About one in eight companies still ends up in a "review needed" pile because the public evidence is genuinely ambiguous.

## How we enrich the records

Once a company is classified, we enrich the record so the directory is useful for more than just counting. Headcount and a 12-month employee trajectory come from a workforce-data provider. A live screenshot of the company's homepage is captured monthly so a stale or vanished site is visible at a glance. A founding-year proxy comes from when the company first registered its primary domain (imperfect but consistent). A short, plain-language description and a one-sentence technical note are written in a uniform voice so two companies in the same pathway are actually comparable.

We refresh the whole database once a month. Mid-month, anyone can be added on demand if they show up in the news, but the full re-enrichment pass waits for the cycle.

## What we still don't trust

A few things are worth being upfront about.

**Side-business headcount.** When CDR is a small line inside a larger company, our employee number is the whole company - we have no clean way to isolate the CDR team without manual review. Treat side-business headcount as an upper bound, not a measurement.

**Coverage outside English.** We are still under-indexed in Japanese, Korean, and Portuguese-language CDR coverage, and weak on francophone Africa. Some real companies are almost certainly missing from this month's map for that reason alone.

**The "Enabling Tech" boundary.** This is the hardest call. A pure software MRV company is clearly enabling-tech; a measurement company that also runs its own pilot site is fuzzier. We have drawn the line in roughly the same place the field's own conferences draw it, but reasonable people disagree.

## Tell us when we are wrong

If we have miscategorised your company, missed a launch, or counted you wrong, write to us. We are @captaindrawdown on Bluesky and the same on X. Corrections land in the next monthly refresh, and the material ones get a note in the following update.
