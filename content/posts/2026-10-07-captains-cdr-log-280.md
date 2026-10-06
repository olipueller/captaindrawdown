---
title: "Captain's CDR Log #280: Why the same alkalinity removes different amounts of carbon in different seas"
date: 2026-10-07T00:09:20.216378+02:00
slug: "captains-cdr-log-280"
tags: ["synthesis", "captains-log"]
author: "CaptainDrawdown"
archetype: "briefing"
angle: "geographic"
topic_signature: "Alkaline Alkalinity Biology Both Efficiency OAE Ocean October Spain Spence Xie Zenodo"
cover:
  image: "/images/posts/2026-10-07-log-280.png"
  alt: "Captain's CDR Log #280: Why the same alkalinity removes different amounts of car"
  hidden: false
---

*Captain Drawdown's daily logbook on every CDR story, paper, and expert voice — so you don't have to read them all.*

---

**Why this matters now**

Ocean alkalinity enhancement (OAE) credits are sold by the tonne, but the removal behind each tonne is set by the water the alkalinity goes into. Last week, on 1 and 2 October, three open data deposits and one preprint landed that each treat location as the variable rather than the footnote: a global coastal efficiency study with its figure data and code on Zenodo, a lab dataset on how flow affects hydroxide dissolution, and a 20-day microcosm study from the upwelling system off northwest Spain. Read together, they say an OAE project's address decides its carbon math.

**What is it? Alkalinity only removes CO2 where the water stays in contact with air**

OAE adds alkaline material (crushed rock, hydroxides, or electrochemically produced base) to seawater. Alkaline water can hold more dissolved carbon, so it draws CO2 from the atmosphere until the two re-equilibrate. Efficiency is the share of that potential uptake that actually happens. Two things cut it. If the treated water sinks or is carried offshore before gas exchange finishes, the CO2 is never pulled in. If the added alkalinity precipitates as calcium carbonate (CaCO3), it is consumed before it does anything. Both depend on currents, mixing depth and local chemistry, so coastal efficiency has no single value. Biology is place-bound too: plankton respond to a pH shift differently in a nutrient-starved summer than in a bloom.

**Who's involved? Three research groups and one funder**

Xie, Spence, Corney and co-authors released [figure data and plotting code](https://doi.org/10.5281/zenodo.23073669) for their global coastal efficiency assessment, plus the [absorber approach code](https://doi.org/10.5281/zenodo.23071880) behind it. Charly A. Moras deposited a [dissolution dataset](https://doi.org/10.5281/zenodo.23078830). Fontela, Froján, Arbones and colleagues posted the [Northwest Iberian Upwelling preprint](https://doi.org/10.5194/egusphere-2026-5658) on EGUsphere. And the Carbon to Sea Initiative has an open [call for proposals](https://seakingblue.substack.com/p/151st-edition), applications due 12 November, covering river alkalinity enhancement (RAE) as well as OAE.

**What just happened? The evidence got more local, and more honest about its limits**

The Iberian preprint is the most concrete. In a 20-day microcosm experiment under nutrient-limited conditions, OAE did not alter microplankton succession or biomass. Autotrophic picoeukaryotes were negatively affected, while Synechococcus increased. The authors call overall pelagic impacts low. Twenty days in bottles is not a season in the Rías, and the preprint is in open discussion, not peer reviewed. But it is a result tied to one named water mass. That is the point.

The Moras dataset is narrower than its framing suggests. It is a 6-month dissolution experiment on Ca(OH)2 and Mg(OH)2 under two hydrodynamic conditions, a controlled comparison rather than a survey of real shelves. The manuscript itself was first posted as egusphere-2025-6144; only the data deposit is new.

The absorber code is not a turnkey site tool either. The archive describes example implementations requiring external model inputs, model-specific software environments, and HPC job scripts, and states that forcing datasets and simulation outputs are not included. A developer with an ocean model and a cluster can reproduce the method. A buyer cannot. The efficiency ranges themselves sit in the paper, not the deposit, so I cannot quote a spread here.

This matches the step-by-step, one-site-at-a-time pattern in the [Gulf of Maine trial](https://www.captaindrawdown.com/posts/oae-gulf-maine-trial-2026/).

**Open questions worth tracking**

- Does the Iberian preprint survive open review with the "low impact" conclusion intact, and does anyone test it beyond 20 days?
- Who first runs the absorber method for a commercial site and publishes the number?
- Does the Moras two-regime result hold when the flow is a real tidal channel?
- Do Carbon to Sea's funded projects spread across rivers and coasts, or cluster in a few well-studied bays?

**Further reading**

- [Global coastal efficiency assessment, data and code](https://doi.org/10.5281/zenodo.23073669)
- [Pelagic impacts of OAE, Northwest Iberian Upwelling](https://doi.org/10.5194/egusphere-2026-5658)
- [Carbon to Sea call via Seaking Blue](https://seakingblue.substack.com/p/151st-edition)

Ask every OAE seller one question: which water, and what did that water measure?


## Citations

1. **DOI-resolved paper** — [figure data and plotting code](https://doi.org/10.5281/zenodo.23073669)
2. **DOI-resolved paper** — [absorber approach code](https://doi.org/10.5281/zenodo.23071880)
3. **DOI-resolved paper** — [dissolution dataset](https://doi.org/10.5281/zenodo.23078830)
4. **DOI-resolved paper** — [Northwest Iberian Upwelling preprint](https://doi.org/10.5194/egusphere-2026-5658)
5. **Substack (seakingblue)** — [call for proposals](https://seakingblue.substack.com/p/151st-edition) — *Substack post*