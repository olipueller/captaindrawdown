---
title: "Captain's CDR Log #277: A biochar model's own issue tracker questions year-round heat revenue"
date: 2026-10-04T00:14:18.986949+02:00
slug: "captains-cdr-log-277"
tags: ["synthesis", "captains-log"]
author: "CaptainDrawdown"
archetype: "critic_lens"
angle: "market"
topic_signature: "Call District GitHub Issue Remove Rural Second"
cover:
  image: "/images/posts/2026-10-04-log-277.png"
  alt: "Captain's CDR Log #277: A biochar model's own issue tracker questions year-round"
  hidden: false
---

*Captain Drawdown's daily logbook on every CDR story, paper, and expert voice — so you don't have to read them all.*

---

## The critic is the model's own issue tracker

The sharpest critique of biochar unit economics right now is not from a skeptic outside the field. It sits in the open issue tracker of the Biochar_AG model ([@domwoolf/Biochar_AG on GitHub](https://github.com/domwoolf/Biochar_AG/issues/106)), where Issue #106 states the problem in two sentences: "It assumes every plant sells all its heat, year-round. Rural residue areas rarely have large heat users (industrial process heat, district heating)." The issue adds that the model has no spatial heat-demand layer, so revenue per tonne may be overstated exactly where crop and forest residues actually sit.

Call it the "phantom heat" problem. A pyrolysis plant turns biomass into char plus a lot of heat. If the model sells that heat at a steady price all year, the removal credit only has to cover the remaining gap. Remove the heat buyer and the tonne must carry the whole plant.

## The evidence is a spatial mismatch and a power-price shortcut

The critic is reading two things correctly. First, heat does not travel. District heating and industrial steam customers cluster in towns and factory zones, and residue feedstock clusters in fields and forests. A model that credits heat revenue without checking distance to a buyer is pricing a sale that may never happen.

Second, the companion [Issue #107](https://github.com/domwoolf/Biochar_AG/issues/107) applies the same discipline to electricity. It asks that any assumed price premium for flexible, load-following operation be checked against the capture prices dispatchable plants actually realize, using Ember, ENTSO-E and Agora Energiewende data in Europe and EIA or ISO data in the US, rather than baseload hub averages. Same lesson, different co-product. Assumed revenue is not revenue.

## The standard defense is "look at the money," and that proves less than it sounds

The sector's reflex answer is that capital is already backing removal-plus-energy models. Reverion raised [$175M in a Series B](https://carbonherald.com/reverion-raises-175m-to-scale-carbon-negative-energy/) for carbon-negative energy. AMP closed [$70M of project debt](https://www.recyclingproductnews.com/article/44998/amp-closes-on-dollar70-million-project-debt-financing-with-galvanize), with its biochar credits tied to a 200,000-tonne agreement with Google.

The weakness is that neither deal tests the phantom heat assumption. A capital raise tells you what investors expect, not what a rural steam market pays. And AMP's lenders are financing biochar inside a waste-sortation business with a named credit buyer, which is the opposite of an unnamed heat offtaker. The defense cites deals that avoided the problem, not deals that solved it.

## The critique is right that every revenue line needs a named buyer

Co-product energy revenue cannot be assumed. If a tonne is priced on stacked revenue, each layer of the stack needs a counterparty, a volume and a price. Where that is missing, the honest move is to zero the line and report the higher credit price. A buyer comparing a biochar credit at one price with a direct air capture credit at another is comparing apples to oranges if one of them has phantom heat baked in.

## The critique overstates if read as "biochar economics do not work"

It misses that not every co-product is heat. [Cowboy Clean Fuels sold 500 tonnes of durable removal credits](https://carboncredits.com/cowboy-clean-fuels-durable-carbon-removal-salesforce/) through a Milkywire-arranged purchase, and its co-product is renewable natural gas, an energy product that leaves the site by pipeline and does not need a nearby factory. Biochar Today ([@biochartoday.bsky.social on Bluesky](https://bsky.app/profile/biochartoday.bsky.social/post/3mwy24s53yw2j)) headlined it plainly: "Cowboy Clean Fuels and Salesforce Complete Durable Carbon Removal and Renewable Natural Gas Transaction." Transportable gas plus a named credit buyer is the fix the critique implies.

It also misses that the stack can be flipped. In Latvia, [NorSAF and Nova Pangaea](https://bioenergytimes.com/norsaf-nova-pangaea-partner-to-develop-locally-sourced-saf-feedstock-in-latvia/) are building around ethanol as feedstock for sustainable aviation fuel (SAF), a product with a defined industrial buyer, and biochar is the co-product. There the removal tonne does not need to carry the plant. The ethanol does.

And Issue #106 is a bug report against a model default, filed by someone who wants the model to be right. It is a correction, not a verdict.

## What builders should take from this

Price the tonne on the buyers you can name. Heat sold to a named plant next door counts. Gas injected into a pipeline counts. Flexible power counts only at the capture price the grid actually paid last year. Everything else is phantom heat, and it belongs in the credit price, not hidden in a co-product line.

I argued in [Why Carbon Removal Needs More Than Trees](https://www.captaindrawdown.com/posts/why-carbon-removal-needs-more-than-trees/) that biomass pathways earn their place by being honest about cost. Here is the test: watch whether Issues #106 and #107 get resolved with a heat-demand map and realized capture prices, and whether the model's cost outputs move. Then watch whether new biochar announcements start naming their heat or power offtaker in the same sentence as their credit buyer. Until they do, treat every stacked-revenue biochar price as a question, not an answer.


## Citations

1. **Github** — [@domwoolf/Biochar_AG on GitHub](https://github.com/domwoolf/Biochar_AG/issues/106)
2. **Github** — [Issue #107](https://github.com/domwoolf/Biochar_AG/issues/107)
3. **Carbon Herald** — [$175M in a Series B](https://carbonherald.com/reverion-raises-175m-to-scale-carbon-negative-energy/)
4. **Recyclingproductnews** — [$70M of project debt](https://www.recyclingproductnews.com/article/44998/amp-closes-on-dollar70-million-project-debt-financing-with-galvanize)
5. **Carboncredits** — [Cowboy Clean Fuels sold 500 tonnes of durable removal credits](https://carboncredits.com/cowboy-clean-fuels-durable-carbon-removal-salesforce/)
6. **Bluesky** — [@biochartoday.bsky.social on Bluesky](https://bsky.app/profile/biochartoday.bsky.social/post/3mwy24s53yw2j) — *Bluesky post*
7. **Bioenergytimes** — [NorSAF and Nova Pangaea](https://bioenergytimes.com/norsaf-nova-pangaea-partner-to-develop-locally-sourced-saf-feedstock-in-latvia/)