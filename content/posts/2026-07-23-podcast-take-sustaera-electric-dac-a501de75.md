---
title: "Take: Sustaera - electric DAC"
date: 2026-07-23T10:00:00+00:00
slug: "podcast-take-sustaera-electric-dac-a501de75"
draft: true
tags: ["cdr", "podcast-take", "reviewer-2-does-geoengineering"]
categories: ["podcast-take"]
content_type: "type12_podcast"
cover:
  image: "/images/posts/podcast-take-sustaera-electric-dac-a501de75.jpg"
  alt: "Podcast take: Sustaera - electric DAC"
  hidden: false
---

> Take on a podcast episode from **Reviewer 2 does geoengineering**, originally published Sat, 04 Ap.
> Listen: <https://podcasters.spotify.com/pod/show/reviewer2geoengineering/episodes/Sustaera---electric-DAC-e3heke1>

**TL;DR**

- Sustaera embeds Joule heating directly into a monolithic sorbent structure using a carbon-based resistor — no steam, no gas-phase heat transfer. Claims >90% heating efficiency in a 3.4L lab prototype.
- Sorbent is alkali carbonate on alumina, not amine: claimed 18,000–24,000 cycles (~3 years) before 30% degradation forces recoating. If real, that's a meaningful operating-cost lever.
- Full adsorption/desorption cycle in 30–45 minutes; desorption at just 80°C, ramping in seconds. Host pushes back hard on whether this actually meshes with curtailed-power economics — worth hearing both sides.
- Manufacturing piggybacks on catalytic-converter production lines. Buried at the end of the episode, but arguably the most important claim.
- technology readiness level (TRL) 5 (1 t/yr indoor), raising $8.6M for a first 500–750 t/yr outdoor unit against $700/t pre-purchases from Stripe and Shopify.

Andrew of Reviewer 2 Does Geoengineering interviews Corey Sanderson, CTO and co-founder of Sustaera, the North Carolina direct air capture (DAC) startup that spun out of incubator Sustion in 2021. It's a proper technical grilling — sorbent chemistry, desorption physics, cycle economics — from a host who knows his physisorption from his chemisorption. [Episode here.](https://podcasters.spotify.com/pod/show/reviewer2geoengineering/episodes/Sustaera---electric-DAC-e3heke1)

The core engineering claim: Sustaera has eliminated the solid-to-gas-to-solid heat transfer step that plagues steam-regenerated solid-sorbent DAC. Their "conductive structured sorbent" puts a resistive carbon element inside the monolith itself — Andrew's metaphor is "wires inside your bagel, toasting it from the inside." Because the resistor only needs to hit ~85°C to bring the sorbent to 80°C, with micron-scale contact distances, Sanderson claims measured heating efficiency above 90% against theoretical sensible-plus-latent heat requirements. They evaluated induction and microwave routes and rejected them on capital grounds: induction would have eaten ~70% of particle volume in metal versus ~5% for tuned carbon. The second claim worth noting is durability. Instead of the polyethylenimine-class amines that oxidize in air, they use alkali carbonates (sodium/potassium) on alumina — Sanderson cites three years of continuous operation at 6,000–8,000 cycles/year before a wash-and-recoat. That's a direct attack on the sorbent-replacement line item that dominates many solid-sorbent techno-economic analyses.

Where the episode earns its runtime is the pushback. Andrew challenges the renewable-power-matching story: a 30–45 minute cycle can't play sub-second frequency-response markets, and he's openly unconvinced that a "fancy pants" contactor has low enough capital cost to sit idle waiting for curtailed power. Sanderson's counter — sorbent inputs under $2.50/kg, manufacturing on modified catalytic-converter lines that already run at billions of units — is plausible but unproven at TRL 5. Note the gap: $700/t contracted, sub-$200 targeted, first outdoor unit not yet built.

For context: this is the anti-Carbon-Engineering thesis — small modular units with fast learning loops rather than megaton thermal plants, the same manufacturability argument [Climeworks](https://www.climeworks.com/) has faced criticism over from the other direction. Sanderson also gives a useful compare-and-contrast with electrochemical approaches (Verdox comes up), arguing they still need two separate subsystems where Sustaera has one. The Stripe and Shopify pre-purchases date from the early advance-market-commitment wave, so delivery on this raise is effectively the test of those bets.

Useful for anyone diligencing solid-sorbent DAC or modeling electric-regeneration cost curves; skip if you want deployment data rather than architecture arguments — there isn't any yet.