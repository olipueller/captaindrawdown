---
title: "Carbon balance, not carbon ratio: how to read CDR efficiency claims"
date: 2026-05-06T14:00:00+02:00
slug: "cdr-net-efficiency-balance-not-ratio"
draft: false
tags: ["cdr", "lca", "mrv", "buyer-guide"]
categories: ["essay"]
content_type: "type5_handwritten"
hand_written: true
cover:
  image: "/images/posts/cdr-net-efficiency-balance-not-ratio.png"
  alt: "Carbon balance, not carbon ratio"
  hidden: false
---

Most CDR efficiency claims are framed as a ratio. They should be
framed as a balance. A ratio of 1.1 — 100 tonnes emitted across
the lifecycle to capture 110 tonnes — is a vanity metric.
The number that matters is the *net balance*: gross capture
minus embodied plus operational emissions.

That is what we mean when we say a pathway is "85% net." For every
100 tonnes of CO2 pulled out of the air or fixed in stable form,
85 tonnes survive after you subtract everything the project emitted
to make those 100 tonnes happen. The 15 tonnes you are losing went
into making steel, running compressors, trucking rock dust, or
heating a sorbent. That is what credible buyers should pay for: the
85, not the 100. The credible registries already refuse to issue
credits for anything else.

## What net removal efficiency actually measures

A proper lifecycle assessment counts every carbon-relevant flow
across the project's life:

- **Embodied emissions** in the equipment: steel and concrete in a
  direct air capture (DAC) plant, the grinder fleet for enhanced
  rock weathering, the pyrolysis kiln for biochar, the ship for
  ocean alkalinity delivery.
- **Operational energy**: electricity for fans, pumps, and
  compressors; heat for the sorbent regeneration step in DAC;
  diesel for crushing and trucking rock.
- **Feedstock supply chain**: where the biomass came from for biochar
  and bioenergy with carbon capture and storage (BECCS), including
  any indirect land-use change.
- **Storage and transport**: pipelines, injection wells, the long
  trip from a DAC outlet to a permanent geological reservoir.
- **End-of-life**: decommissioning, sorbent disposal.

Subtract those tonnes from the gross capture and divide back into
gross capture. That is your net efficiency. Anything that ignores
parts of the chain is closer to a marketing brochure than an LCA.
The single biggest variable across pathways is the electricity mix
the project actually runs on, not the hardware.

## What the literature shows, pathway by pathway

The numbers below are typical ranges across peer-reviewed lifecycle
assessments and the methodologies that operating registries use
today. Real projects move inside the range based mostly on their
electricity mix and feedstock provenance.

**Direct air capture.** On dedicated low-carbon power with nearby
storage — the canonical example is Climeworks plus CarbFix in
Iceland, on geothermal — the literature converges on roughly 85-95%
net efficiency: of every 100 tonnes captured, 85-95 stay banked once
the LCA is done. On hub-tier US grids the same hardware drops to
about 70-85%. On coal-heavy grids the same machine can be net
positive: more carbon emitted to drive the fans and the heat than
it pulls from the air. [Madhu and colleagues' 2021 LCA in Nature
Energy](https://www.nature.com/articles/s41560-021-00922-6) made
this case crisply, and [Terlouw and colleagues' 2021 critical review
in Energy & Environmental Science](https://pubs.rsc.org/en/content/articlelanding/2021/ee/d0ee03757e)
catalogued the same pattern across European grid scenarios. The
point is not that DAC is bad; it is that you cannot evaluate DAC
without specifying the energy source.

**Enhanced rock weathering (ERW).** Basalt spread on cropland — the
dominant deployment shape today — typically lands between 60% and
85% net. The variance comes mostly from grinding energy and trucking
radius: a project quarrying 50 km from the field is in a different
regime than one trucking from 500 km. [Beerling and colleagues' 2020
Nature paper](https://www.nature.com/articles/s41586-020-2448-9)
laid out the economics under different transport assumptions; UNDO
and Lithos publish per-deployment LCAs that sit inside this band,
with [Lithos' methodology document on Frontier's Stripe page](https://frontierclimate.com/projects/lithos)
showing the boundary choices explicitly.

**Biochar.** Pyrolysis of biomass to fixed carbon typically recovers
30-40% of the input carbon as durable char, with operational
emissions adding around 5-10%. Net efficiency lands at roughly 60-85%
when the feedstock is a waste residue that would otherwise have
decomposed. The [Puro.earth biochar methodology](https://puro.earth/methodology-for-biochar/)
requires the LCA to start from the residue's counterfactual, which
is what keeps biochar honest versus pulling forest material on
purpose.

**BECCS.** The widest spread in the field. With genuine waste-stream
feedstock (sawmill residues, agricultural residues that would
otherwise rot or burn) net efficiency can reach 80-85%. With
dedicated energy crops on land that was previously forest or
peatland, indirect land-use change can push the net negative —
some lifecycle scenarios in [the IPCC AR6 WG3 chapter 12 on
CDR](https://www.ipcc.ch/report/ar6/wg3/chapter/chapter-12/) put
it at -20%, meaning the project emits more than it captures. BECCS
deserves project-by-project scrutiny more than any other pathway.

**Mineralization.** CarbFix-style basalt injection delivers 80-95%
net, with most of the operational footprint already on the gas-supply
side. [Gunnarsson and colleagues' 2018 paper on CarbFix2](https://doi.org/10.1016/j.ijggc.2018.08.014)
showed mineralization completing within two years underground — the
durability boundary is short and verifiable. Industrial mineralization
on slag tailings (Arca, Heirloom, Neustark, CarbonCure) sits in a
similar 70-90% band depending on whether the tailings are produced
explicitly for sequestration or already exist as a waste stream.

**Ocean alkalinity enhancement (OAE).** Still maturing. Land-side
preparation (olivine grinding) plus ship distribution adds roughly
10-30% to lifecycle emissions; net efficiency in the published
modelling sits at 50-80%. The MRV layer here is not yet defensible
enough to price confidently — that was the substance of [Hoffmann
and colleagues' marine CDR verification paper from earlier this
month](https://bsky.app/profile/jpgattuso.bsky.social/post/3mkz7quf4j222).

**Permanent biomass burial.** Charm Industrial, Vaulted Deep, and
Graphyte report supplier-side numbers that cluster around 70-85%
net, with the durability boundary set at the methanogenesis risk:
anaerobic shallow burial of cellulose can degrade to methane, which
unwinds part of the climate benefit. Bumping the durability claim
up the geological ladder — deep injection of bio-oil instead of
shallow wrap-and-bury — protects the number.

## The MRV standards do this work already

Every credible registry — [Puro.earth](https://puro.earth),
[Isometric](https://registry.isometric.com), the [IC-VCM Core Carbon
Principles](https://icvcm.org/core-carbon-principles/), the European
CRCF when it lands — requires full upstream and operational lifecycle
accounting before issuing credits. A "ton" sold on these standards
is the net ton, with the boundaries disclosed. A 100-tonne-in,
110-tonne-out project would not clear their thresholds, and the
credit would not exist.

Where the system still leaks: not every supplier is on a credible
standard yet, and an LCA is only as honest as its boundary choices.
Variances between registries on what counts as "embodied" or
"indirect land-use change" mean two suppliers can publish very
different net efficiencies for the same hardware on the same grid.

## What buyers should ask for

Three questions cut through almost all the noise:

1. What is the lifecycle electricity mix assumed in your LCA, and
   does it match the grid you actually run on?
2. What is the boundary on embodied emissions — does it include
   manufacturing, transport, and end-of-life?
3. Which standard issues the credit, and have you published the
   methodology document?

If a supplier cannot answer those three quickly, the project is
operating outside the credible MRV layer and the net number on the
brochure is whatever marketing chose. If they can, the answer is
specific and falsifiable, and the conversation moves from "what is
the ratio" to "is the assumed grid mix realistic over the contract
period." That second conversation is where the actual carbon balance
lives.
