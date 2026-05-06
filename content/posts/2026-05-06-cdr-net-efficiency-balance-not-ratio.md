---
title: "Carbon balance, not carbon ratio: how to read CDR efficiency claims"
date: 2026-05-06T14:00:00+02:00
slug: "cdr-net-efficiency-balance-not-ratio"
draft: true
tags: ["cdr", "lca", "mrv", "buyer-guide"]
categories: ["essay"]
content_type: "type5_handwritten"
hand_written: true
cover:
  image: "/images/posts/cdr-net-efficiency-balance-not-ratio.png"
  alt: "Carbon balance, not carbon ratio"
  hidden: false
---

A reader asked the right question under one of our recent posts: how
much carbon is produced to manufacture a CDR system and run it,
versus what it captures, and what is the ratio?

The question contains its own answer once you reframe it. A ratio of
1.1 — 100 tonnes emitted across the lifecycle to capture 110 tonnes —
is a vanity metric. The number that matters is the **net balance**:
gross capture minus embodied plus operational emissions. Buyers should
not pay for the gross figure. The credible registries already refuse
to.

## What net removal efficiency actually measures

A proper lifecycle assessment for a CDR pathway counts every
carbon-relevant flow:

- **Embodied emissions** in the equipment: steel and concrete in a
  DAC plant, the grinder fleet for enhanced rock weathering, the
  pyrolysis kiln for biochar, the ship for ocean alkalinity
  delivery.
- **Operational energy**: electricity for fans, pumps, and
  compressors; heat for the sorbent regeneration step in DAC; diesel
  for crushing and trucking rock.
- **Feedstock supply chain**: where the biomass came from for biochar
  and BECCS, including any indirect land-use change.
- **Storage and transport**: pipelines, injection wells, the long
  trip from a DAC outlet to a permanent geological reservoir.
- **End-of-life**: decommissioning, sorbent disposal.

Divide gross tonnes captured by gross tonnes emitted along that full
chain and you have a defensible net efficiency. Anything that ignores
parts of the chain is closer to a marketing brochure than an LCA.

## What the literature actually shows, pathway by pathway

Numbers below are the typical range across peer-reviewed LCAs and
the methodologies operating registries use today. Real projects move
inside the range based mostly on their electricity mix and feedstock
provenance.

**Direct air capture (DAC).** On dedicated low-carbon power with
nearby storage — Climeworks plus CarbFix in Iceland is the
canonical example — the literature converges on roughly 85-95%
net efficiency. On hub-tier US grids the same hardware drops to
about 70-85%. On coal-heavy grids the same machine can be net
positive: more carbon emitted to drive the fans and the heat than
it pulls from the air. Madhu and colleagues' 2021 LCA in Nature
Energy made this case crisply, and Terlouw and colleagues'
Environmental Science and Technology paper the same year confirmed
it for European grid scenarios. The point is not that DAC is bad;
it is that you cannot evaluate DAC without specifying the energy
source.

**Enhanced rock weathering (ERW).** Basalt on cropland, the dominant
deployment shape today, lands roughly between 60% and 85% net.
Beerling and colleagues' 2020 Nature paper laid out the economics
under different transport-distance assumptions; the variance comes
mostly from the grinding energy and the trucking radius. UNDO and
Lithos publish per-deployment LCAs that sit in this band.

**Biochar.** Pyrolysis of biomass to fixed carbon typically
recovers 30-40% of the input carbon as durable char, with operational
emissions adding around 5-10%. Net efficiency lands at roughly 60-85%
when the feedstock is a waste residue that would otherwise have
decomposed. The Puro.earth methodology requires the LCA to start
from the residue's counterfactual, which is what keeps biochar honest
versus pulling forest material on purpose.

**BECCS.** The widest spread in the field. With genuine waste-stream
feedstock (sawmill residues, agricultural residues that would
otherwise rot or burn) net efficiency can reach 80-85%. With
dedicated energy crops on land that was previously forest or
peatland, indirect land-use change can push the net negative — some
LCAs in the IPCC AR6 cycle put it at -20%. BECCS deserves
project-by-project scrutiny more than any other pathway.

**Mineralization (CarbFix-style basalt injection or industrial
mineralization on slag tailings).** Net efficiency 80-95% in the
peer-reviewed cases. Gunnarsson and colleagues' 2018 paper on
CarbFix showed mineralization completing within two years
underground; the operational footprint is small once the gas is in
the formation.

**Ocean alkalinity enhancement (OAE).** Still maturing. Land-side
preparation (olivine grinding) plus ship distribution adds roughly
10-30% to lifecycle emissions; net efficiency in the published
modelling sits at 50-80%. The MRV layer here is not yet defensible
enough to price confidently — that was the substance of Linn
Hoffmann and Lennart Bach's marine MRV paper from earlier this
month.

**Permanent biomass burial (Charm Industrial, Vaulted Deep,
Graphyte).** Supplier-reported numbers cluster around 70-85% net,
with the durability boundary set at the methanogenesis risk:
anaerobic shallow burial of cellulose can degrade to methane, which
unwinds part of the climate benefit. Bumping the durability claim up
the geological ladder (deep injection wells) protects the number.

## The MRV standards do this work already

Every credible registry — Puro.earth, Isometric, the IC-VCM Core
Carbon Principles, the European CRCF when it lands — requires full
upstream and operational lifecycle accounting before issuing credits.
A "ton" sold on these standards is the net ton, with the boundaries
disclosed. A 100-tonne-in, 110-tonne-out project would not clear
their thresholds, and the credit would not exist.

Where the system still leaks: not every supplier is on a credible
standard, and an LCA is only as honest as its boundary choices.
Variances between registries on what counts as "embodied" or "indirect
land-use change" mean two suppliers can publish very different net
efficiencies for the same hardware on the same grid.

## What buyers should ask for

Three questions cut through almost all the noise:

1. What is the lifecycle electricity mix assumed in your LCA, and
   does it match the grid you actually run on?
2. What is the boundary on embodied emissions — does it include
   manufacturing, transport, end-of-life?
3. Which standard issues the credit, and have you published the
   methodology document?

If a supplier cannot answer those three quickly, the project is
operating outside the credible MRV layer and the net number on the
brochure is whatever marketing chose. If they can, the answer is
specific and falsifiable, and the conversation moves from "what is
the ratio" to "is the assumed grid mix realistic over the contract
period." That second conversation is where the actual carbon balance
lives.
