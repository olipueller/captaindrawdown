---
title: "Near-optimal solutions for carbon capture, conversion, storage, and removal strategies"
date: 2026-04-12T08:13:12.620867+02:00
slug: "near-optimal-solutions-for-carbon-capture-conversion-storage"
tags: []
cover:
  image: "/images/posts/2026-04-12-46b1fa23.png"
  alt: "Near-optimal solutions for carbon capture, conversion, storage, and removal strategies"
  hidden: false
---

Europe's energy system can absorb the full deployment, or complete absence, of any single CDR option with only a 5% bump in total system cost. That's the central finding from a new study by Sina Kalweit, Ricardo Fernandes, Alberto Alamia, and Marta Victoria, who modeled the continent's path to carbon neutrality and found that no individual removal method, whether afforestation, biochar, enhanced rock weathering (EW), or perennialization, holds a meaningful cost edge over the others.
## Why it matters
Most energy system models spit out a single "optimal" answer and call it a day. This paper asks a different question: what happens when you look at all the configurations that are *almost* as cheap as the optimum? The answer is striking. The near-optimal zone is enormous, and it contains wildly different mixes of CDR and synthetic fuels. For policymakers and CDR developers, this means the debate over which removal pathway to back may be less about cost efficiency and more about co-benefits, political feasibility, land use, and deployment speed.
## The details
The researchers used PyPSA-Eur, a well-known open-source model of Europe's sector-coupled energy system, clustered to 39 nodes with 750 aggregated time steps. They integrated four land-based CDR options into the model: afforestation, biochar, enhanced rock weathering, and perennialization (converting cropland to perennial grasses that store more carbon in soil).
The key methodological move was applying a technique called Modelling to Generate Alternatives, or MGA. Instead of just finding the cheapest system configuration, MGA systematically explores the full range of near-optimal solutions. It does this by combining minimization, maximization, and random objective vectors, all while constraining total system cost to no more than 5% above the true optimum.
Within that 5% cost envelope, the results are remarkably flexible:
- Any single CDR option can go from zero deployment to maximum deployment.
- Synthetic fuel use can vary widely across different fuel types.
- Greater reliance on CDR does not produce clear cost savings compared to leaning more heavily on synthetic fuels.
That last point deserves emphasis. A common assumption in climate planning is that CDR will be cheaper than producing synthetic hydrocarbons for hard-to-abate sectors. This study suggests the cost difference, at least at the system level, is small enough to vanish within a few percentage points of total expenditure.
The study also highlights that existing literature on European energy systems tends to focus narrowly on point-source carbon capture paired with geological storage. By contrast, this work maps the interactions between carbon capture and utilization, CO2 transport, geological sequestration, and the four CDR pathways. Those interactions matter because they determine how much infrastructure you need, where you need it, and how different carbon management strategies compete for resources.
## Implications
If no single CDR pathway has a decisive cost advantage, then the criteria for choosing between them shift. Land availability, public acceptance, permanence of storage, speed of deployment, and co-benefits like biodiversity or soil health become the deciding factors, not marginal differences in euros per ton.
For CDR companies, this is a double-edged finding. On one hand, it validates that multiple approaches can fit into a net-zero European energy system without blowing up costs. On the other, it means no single technology can claim to be the obvious winner on economics alone. Investors and buyers will need to evaluate CDR portfolios on dimensions beyond price.
For European policymakers designing carbon management strategies, the study offers a clear message: don't over-optimize. Locking in a single pathway based on today's cost projections is unnecessary when the system can accommodate very different configurations at nearly the same price. Building optionality into policy, supporting multiple CDR approaches while letting deployment experience reveal which ones perform best, looks like the smarter bet.
The finding about synthetic fuels is also important. If CDR and synthetic fuel production are roughly interchangeable within the cost envelope, then decisions about how much synthetic kerosene, methanol, or methane to produce become strategic choices, not cost-driven inevitabilities. That has big implications for sectors like aviation and shipping that are counting on synthetic fuels.
## Caveats
A 5% cost increase sounds small in percentage terms, but Europe's energy system costs trillions of euros annually. Five percent of that is a lot of money in absolute terms. The study shows flexibility exists within that budget, but it doesn't tell us whether societies will actually tolerate paying for it.
The model uses 750 aggregated time steps, which is a practical simplification. Real weather variability, grid constraints, and seasonal storage needs might narrow the near-optimal window in ways the aggregation smooths over.
The four CDR options studied are all land-based. Direct air capture and storage (DACCS), ocean alkalinity enhancement (OAE), and direct ocean capture (DOC) are not part of this analysis. Including them could change the picture, particularly if DACCS costs fall faster than projected.
Finally, the study models a carbon-neutral system, not a carbon-negative one. If Europe eventually needs to go beyond net zero to draw down historical emissions, the relative value of different CDR options could shift significantly. The near-optimal flexibility that exists at net zero may not hold when you need to remove far more CO2 than you emit.
None of this diminishes the core insight: Europe has more room to maneuver on CDR strategy than single-optimum models suggest. The cheapest path and the second-cheapest path look very different from each other, and they cost almost the same. That's worth knowing.

---

*Source: [arXiv](https://arxiv.org/abs/2603.23409v1)*

