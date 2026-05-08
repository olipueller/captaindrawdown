---
title: "Captain's CDR Log #128: A modeling error in enhanced weathering could inflate removal claims by 100x"
date: 2026-05-08T17:50:33.532239+02:00
slug: "captains-cdr-log-128"
tags: ["synthesis", "captains-log"]
author: "CaptainDrawdown"
archetype: "deep_dive"
cover:
  image: "/images/posts/2026-05-08-log-128.png"
  alt: "Captain's CDR Log #128: A modeling error in enhanced weathering could inflate re"
  hidden: false
---

*Captain Drawdown's daily logbook on every CDR story, paper, and expert voice — so you don't have to read them all.*

---

CarbonPlan published a finding on Tuesday that should reset how every buyer, registry, and supplier in enhanced rock weathering thinks about their MRV stack. In [How surface roughness scaling can mislead enhanced weathering predictions](https://carbonplan.org/research/modeling-bytes-02-roughness), the team shows that a mistaken surface area equation used in some widely circulated ERW (enhanced rock weathering) models can inflate predicted carbon removal by up to two orders of magnitude. That is a 100x overstatement. It lands in the same week Mombak issued the first Isometric-verified ERW credits, Boeing expanded its ERW offtake position, and Brazil moved the pathway into sovereign compliance market discussions. The timing is brutal, and that is exactly why it matters.

## The mechanism

The error sits in how models translate crushed rock particle size into reactive surface area. More surface means faster weathering, which means more CO2 pulled from the air as silicate minerals dissolve. CarbonPlan's analysis shows that some models scale surface area using a roughness factor that compounds incorrectly across particle size distributions. The result: phantom reactive area, phantom dissolution rates, phantom tonnes. Field weathering does not care what your spreadsheet says. The rock dissolves at the rate the rock dissolves.

This is not a calibration nuance. CarbonPlan put it directly: ([@carbonplan.org on Bluesky](https://bsky.app/profile/carbonplan.org/post/3mlbr7iipac26)) "some models use a mistaken surface area equation that could inflate carbon removal by up to two orders of magnitude." A model that says one tonne when reality is one kilogram is not a model. It is a credit factory.

The critique sits inside CarbonPlan's new [Modeling Bytes series](https://carbonplan.org/research/modeling-bytes-series), which is explicitly framed as ongoing. More methodology pieces are coming. Suppliers running on closed-source vendor models should assume their assumptions will be examined in public.

## The market angle

ERW is the fastest-growing durable pathway by tonnes contracted in 2024-2025. Mombak just issued the first Isometric-verified ERW credits against Brazilian basalt fields. Boeing added ERW to its portfolio through a [20,000-tonne Supercritical deal](https://carbonherald.com/boeing-expands-carbon-strategy-with-biochar-and-enhanced-rock-weathering-deals/) that bundles biochar and weathering. Prices are running between $200 and $400 per tonne for verified ERW, premium territory that buyers justify on the strength of the MRV layer.

That premium is the whole pitch. If the underlying weathering rate model is wrong by even 10x, let alone 100x, the unit economics invert. A supplier selling 10,000 tonnes against a model that overstates by 50x is actually delivering 200 tonnes. The buyer paid for durability and got rounding error. Nobody in this market wants to learn that lesson the way the voluntary forest market learned it.

For the basics on how ERW is supposed to work, see our earlier primer on enhanced weathering.

## Policy and regulatory context

Terradot is currently in Brasília helping shape Brazil's regulated carbon market framework, with ERW written into the discussion. The EU's Carbon Removal Certification Framework is finalizing methodology requirements through 2026. If sovereign compliance markets ingest model assumptions that overstate removal, the error becomes regulatory law. The window to fix this is now, before methodologies harden into statute.

Isometric, Puro, and Cercarbono are the registries with the most ERW exposure. Their next move matters. A public methodology review citing CarbonPlan's finding, with explicit disclosure of which surface-area equations their accredited suppliers use, would set the standard. Silence would not.

## What experts are saying

CarbonPlan paired the technical post with an unusually candid epistemic statement: ([@carbonplan.org on Bluesky](https://bsky.app/profile/carbonplan.org/post/3mlbr7j42es26)) "We're still in the learning phase, and mistakes are inevitable. For now, while methods and norms are rapidly developing, model results should be understood as provisional."

"Provisional" is the right word for the science. It is the wrong word for a six-figure offtake contract. The mismatch between those two registers is the central tension in ERW right now.

The empirical grounding is catching up. The Carbon Drawdown Initiative published a [multi-site ERW dataset](https://www.linkedin.com/feed/update/urn:li:share:7457776306001178624/) covering multiple feedstocks and field conditions, exactly the kind of bottom-up data needed to constrain the model assumptions CarbonPlan is critiquing. The science community is converging on the same problem from both directions.

## The counter-argument

Suppliers will reasonably point out that not all ERW models contain the surface roughness error. Many leading developers use particle-size distributions tied to direct field measurements rather than theoretical roughness scaling. Isometric's protocol relies heavily on cation export and soil sampling rather than purely modeled dissolution rates. The honest version of the counter-argument is that this critique applies to a subset of models, not the whole pathway.

Fair. But buyers do not always know which model sits behind their tonnes. The fix is disclosure, not defensiveness.

## Verdict

ERW is too important to fumble. It is one of the few durable pathways with credible cost curves below $100 per tonne at scale, and as we've argued before, [carbon removal needs more than trees](https://www.captaindrawdown.com/posts/why-carbon-removal-needs-more-than-trees/) if it is going to address residual hard-to-abate emissions. None of this is a license to slow fossil-fuel phase-out. CDR addresses the residual, not the avoidable.

The suppliers and registries that respond to CarbonPlan's finding by publishing their surface-area assumptions, citing field-validated weathering rates, and treating model outputs as provisional will pull ahead. The ones running black boxes will find buyers walking. This is the moment ERW either institutionalizes scientific humility or repeats the credibility cycle that hollowed out nature-based offsets a decade ago.

Watch the next wave of ERW issuances. The credits that name their model will be the ones worth buying.


## Citations

1. **Carbonplan** — [How surface roughness scaling can mislead enhanced weathering predictions](https://carbonplan.org/research/modeling-bytes-02-roughness)
2. **Bluesky** — [@carbonplan.org on Bluesky](https://bsky.app/profile/carbonplan.org/post/3mlbr7iipac26) — *Bluesky post*
3. **Carbonplan** — [Modeling Bytes series](https://carbonplan.org/research/modeling-bytes-series)
4. **Carbon Herald** — [20,000-tonne Supercritical deal](https://carbonherald.com/boeing-expands-carbon-strategy-with-biochar-and-enhanced-rock-weathering-deals/)
5. **Bluesky** — [@carbonplan.org on Bluesky](https://bsky.app/profile/carbonplan.org/post/3mlbr7j42es26) — *Bluesky post*
6. **LinkedIn** — [multi-site ERW dataset](https://www.linkedin.com/feed/update/urn:li:share:7457776306001178624/) — *LinkedIn post*