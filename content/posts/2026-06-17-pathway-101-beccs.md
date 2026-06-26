---
title: "Pathway 101: BECCS"
date: 2026-06-17T08:00:00+00:00
slug: "pathway-101-beccs"
draft: false
tags: ["cdr", "pathway-101", "evergreen", "beccs"]
categories: ["pathway-101"]
content_type: "type3_long_form"
cover:
  image: "/images/posts/pathway-101-beccs.png"
  alt: "Pathway 101: BECCS"
  hidden: false
---

## What BECCS is, and why it's in the durable-CDR conversation

Bioenergy with carbon capture and storage (BECCS) is the simple-sounding idea of growing plants (which pull CO₂ out of the air via photosynthesis), using that biomass to produce energy or fuel, capturing the CO₂ released when the biomass is processed, and putting that CO₂ somewhere it won't come back out — almost always a deep saline aquifer or depleted hydrocarbon reservoir. The net result, if the accounting holds, is atmospheric CO₂ removed and geologically stored on the order of 10,000+ years.

It matters for durable carbon removal for three reasons. First, the capture step uses commercially mature technology (amine scrubbing, oxy-combustion, fermentation off-gas capture) at biogenic point sources where the CO₂ is already concentrated, so the energy penalty is far lower than for direct air capture. Second, the storage step is the same Class VI or sub-seabed sequestration used for fossil CCS, which has decades of operating data. Third, integrated assessment models lean heavily on BECCS for 1.5 °C and 2 °C pathways — the [IPCC-style scenario work synthesised by Realmonte et al. and successors](https://openalex.org/W3138573286) keeps it on the menu even as critics push back on land-use assumptions.

## How it works

The pathway is really a family of process configurations sharing a biogenic feedstock and a geological sink. The dominant routes:

- **Combustion + post-combustion capture.** Burn biomass (wood pellets, agricultural residues, municipal solid waste fractions) in a boiler, scrub CO₂ from flue gas with an amine or non-amine solvent. This is the Drax route and the configuration most pulp-and-paper retrofits use. Energy penalty is ~20–30% of plant output.
- **Fermentation off-gas capture.** Corn ethanol fermentation produces a near-pure CO₂ stream that needs only dehydration and compression. Cheapest CO₂ on the BECCS curve, but tonnage per facility is small (100–500 kt/yr).
- **Gasification routes.** Convert biomass to syngas, then either combust it (often with oxygen, producing a concentrated CO₂ stream — see Arbor's supercritical CO₂ cycle), shift it to hydrogen + CO₂, or run Fischer-Tropsch for liquid fuels. The [2021 review by Yang et al.](https://openalex.org/W3176278271) catalogues the thermochemical permutations in some detail.
- **Hydrogen + CCS.** Biomass-to-H₂ with the byproduct CO₂ stored. [Salkuyeh et al. (2022)](https://openalex.org/W4205890367) estimate well-to-gate carbon intensities in the −15 to −20 kgCO₂/kgH₂ range depending on feedstock supply chain.

The European potential analysis by [Rosa et al. (2021)](https://openalex.org/W3153554019) puts the continent's sustainable BECCS ceiling at roughly 200 MtCO₂/yr — meaningful, but well below what 1.5 °C scenarios typically assume. The same paper is worth reading for its treatment of water and land constraints. For a sober comparison against other CDR routes on energy-water-land terms, see [Fuhrman et al. (2023)](https://openalex.org/W4323670107).

## Who's building it

A non-exhaustive cross-section of approaches in the directory:

- **[Drax-adjacent retrofits — C-Capture](https://c-capture.co.uk/)** (UK): non-amine solvent piloted at the world's largest single biomass power plant.
- **[CO280](https://www.co280.com/)** (Canada): retrofits Gulf Coast US pulp and paper mills with SLB Capturi amine units to capture recovery-boiler CO₂.
- **[Carbon America](https://www.carbonamerica.com/)** (US): vertically integrated developer focused on Colorado ethanol fermentation CO₂ into Class VI wells.
- **[Arbor](https://arbor.co/)** (US): oxy-combustion sCO₂ turbine on gasified biomass, targeting >99% capture.
- **[Mote](https://www.motehydrogen.com/)** (US, LLNL spinout) and **[Hydrogen Naturally](https://www.h2naturally.com/)** (Canada): biomass-to-hydrogen with geologic CO₂ storage.
- **[Strategic Biofuels](https://strategicbiofuels.com/)** (US) and **[Pathway Energy](https://pathwayenergy.com/)**: BECCS coupled to liquid fuel synthesis (renewable diesel, SAF).
- **[Carbon Centric](https://www.carboncentric.no/en)** (Norway) and **[BioCarb Solution](https://biocarb.dk/)** (Denmark): Nordic aggregator models feeding captured CO₂ into Northern Lights sub-seabed storage.
- **[Svante/Carbon Alpha](https://www.svanteinc.com/)** (Canada): solid-sorbent capture hardware vendor that bought into project development via the North Star Saskatchewan project.
- **[Reverion](https://reverion.com/en/)** (Germany): reversible solid-oxide fuel cells on biogas, claiming 74% electrical efficiency with an inherent pure CO₂ stream.

Stage varies wildly. Most companies in the directory have one or two projects in FEED or early operation; first-of-a-kind facilities at >500 ktCO₂/yr are still rare outside the Decatur ADM project and the Stockholm Exergi facility under construction.

## The durability and accounting question

The geological storage end of BECCS is the well-understood part. Properly sited Class VI wells and sub-seabed sites like Northern Lights have leakage rates modelled below 0.1%/century — the durability is closer to "permanent" than any biological pathway.

The contested part is the **upstream carbon accounting**. The net removal claim depends on:

1. **Biogenic feedstock counterfactual.** Is the biomass genuinely additional (forest residues that would otherwise decompose, dedicated energy crops on marginal land) or is it driving incremental harvest? The lifecycle answer changes the net tCO₂ per MWh by a factor of two or more.
2. **Supply chain emissions.** Pellet drying, transport (especially trans-Atlantic), and fertilizer use can erode 10–30% of gross removal.
3. **Capture rate.** Quoted rates of 90–95% on flue gas are achievable; sustained operational rates are often lower. CDR.fyi and Puro.earth methodologies increasingly require continuous monitoring rather than nameplate assumptions.
4. **Land-use change.** [Rosa et al.](https://openalex.org/W3153554019) and others flag iLUC as the dominant uncertainty in any BECCS LCA.

Registries diverge on how strictly they handle these. Puro.earth's BECCS methodology, Isometric's, and the emerging EU CRCF rules all treat biogenic-CO₂ provenance differently — a buyer doing diligence should read the methodology, not the marketing.

## Open questions worth checking back on

- **Does the US 45Q