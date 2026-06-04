---
title: "Take: Viridas Pressurised DAC, El-Sayed"
date: 2026-06-04T10:00:00+00:00
slug: "podcast-take-viridas-pressurised-dac-el-sayed-69833513"
draft: true
tags: ["cdr", "podcast-take", "reviewer-2-does-geoengineering"]
categories: ["podcast-take"]
content_type: "type12_podcast"
cover:
  image: "/images/posts/podcast-take-viridas-pressurised-dac-el-sayed-69833513.jpg"
  alt: "Podcast take: Viridas Pressurised DAC, El-Sayed"
  hidden: false
---

> Take on a podcast episode from **Reviewer 2 does geoengineering**, originally published Fri, 15 Ma.
> Listen: <https://podcasters.spotify.com/pod/show/reviewer2geoengineering/episodes/Viridas-Pressurised-DAC--El-Sayed-e3jct2c>

**TL;DR**
- Viridas pitches "pressurized DAC": compress incoming air to ~70 bar so CO2 partial pressure jumps from ~400 ppm to ~2.8%, shrinking contactors ~70x.
- Sorbent is a cheap aqueous ammonia + alkali carbonate mix (carbamate formation + bicarbonate buffer), regenerated thermally at ~90–110°C. Sensible chemistry, nothing exotic.
- Core thesis: solvent R&D is hitting thermodynamic limits; the real lever is CAPEX, attacked by retrofitting gas-turbine turbomachinery as compressor/expander.
- Claimed round-trip efficiency target: ~97–98% (vs ~70% for current compressed-air energy storage). That's the whole ballgame and it's not demonstrated.
- No technoeconomic assessment shared, no pilot, no funding disclosed, Gmail contact address. Treat as concept-stage.

The host of [Reviewer 2 Does Geoengineering](https://podcasters.spotify.com/pod/show/reviewer2geoengineering/episodes/Viridas-Pressurised-DAC--El-Sayed-e3jct2c) interviews Ahmed El-Sayed, co-founder of Viridas Technologies, about a pressurized DAC concept built around retrofitted gas-turbine machinery. The episode is recorded walking through a Cambridge park, which means a non-trivial fraction of the runtime is ice cream and hawthorn commentary — the substantive technical content is maybe 35 minutes.

The pitch in one line: stop optimizing sorbents, start compressing the feed air. At 70 bar, CO2 acts (in partial-pressure terms) like a 2.8% stream rather than 400 ppm, which collapses contactor volume, residence time, and per-cycle solvent loading. Viridas pairs this with a deliberately boring solvent — aqueous ammonia plus sodium/potassium carbonate, doing carbamate capture with a bicarbonate buffer — chosen for oxygen tolerance, gigaton-scale feedstock availability, and a modest ~90–110°C regen. El-Sayed frames it by analogy to reverse osmosis displacing multi-stage flash in desalination: the membrane wasn't initially cheaper, but recovering pressure energy across the system eventually was.

The load-bearing claim is the turbomachinery round-trip efficiency. El-Sayed concedes that compressed-air energy storage today runs ~70% round-trip, and that pressurized DAC only pencils at **"97 to 98% efficiency before you can start considering whether it's comparable."** That is a very large gap to close, and it's where the entire CAPEX-vs-fan-energy argument lives or dies. The host's pushback is the right one: even granting the thermodynamics, you're now coupled to a gas-turbine OEM supply chain that AI hyperscalers have already bid into the 2030s. El-Sayed's answer — partner with Siemens et al. rather than build turbomachinery in-house — is correct but currently aspirational. No pilot data, no TEA, patent process cited as the reason numbers aren't public.

For context on pressure-shifted DAC and adjacent compression-leveraging approaches, this sits in a small cluster with [Mission Zero](https://www.missionzero.tech/) (electrochemical, ambient), RepAir, and the older Carbon Engineering liquid-solvent contactor lineage now inside [Oxy](https://www.oxy.com/). The "stop chasing sorbents, attack the balance of plant" argument echoes critiques from the Realmonte et al. modeling work and earlier APS 2011 DAC assessment that El-Sayed cites. The chemistry — aqueous ammonia plus carbonate buffer — is closer to chilled-ammonia post-combustion capture (GE/Alstom lineage) than to anything Climeworks-shaped, and inherits that family's ammonia slip and water management questions, neither of which the episode addresses.

Worth an hour only if you specifically track pressurized or compression-based DAC architectures