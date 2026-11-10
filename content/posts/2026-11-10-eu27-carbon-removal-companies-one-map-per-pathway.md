---
title: "Sixteen of 27 EU member states have a carbon removal company, and biochar is why"
date: 2026-11-10T13:52:36.754338+01:00
slug: "eu27-carbon-removal-companies-one-map-per-pathway"
tags: ["cdr", "eu", "ets", "companies", "maps"]
content_type: "type5_handwritten"
hand_written: "true"
cover:
  image: "/images/posts/eu27-companies-one-map-per-pathway.png"
  alt: "Sixteen of 27 EU member states have a carbon removal company, and biochar is why"
  hidden: false
---

Sixteen of the 27 EU member states have at least one published carbon removal company; eleven have none. Biochar is the only pathway with producers east of Vienna and south of the Pyrenees, bio-CCS is Sweden plus Denmark, and direct air capture is a Dutch, German and French affair. That is the whole map of the [CDR Company Directory](/data/companies/), release 2026-11.4, drawn seven times, once per pathway.

![EU27 carbon removal companies, one map per pathway: BioCCS, DACCS, biochar, enhanced weathering, mineralisation, ocean CDR and biomass burial, companies per member state, release 2026-11.4](/images/posts/eu27-companies-one-map-per-pathway.png)

The counts behind the maps are simple to reproduce. The release holds 913 published companies worldwide, 246 of them with a head office in the EU27. Published means active, and a supplier, a corporate division, an ecosystem company or a side business; buyers, entries still under review, academic institutions and companies whose only pathway is afforestation stay in the database and out of the files. Each company carries one primary pathway. 46 of the 246 EU companies are enabling technology, which is not a removal pathway (MRV, software, brokers, equipment), so the maps show the remaining 200. Researcher counts come from the [CDR Researcher Census](/data/researchers/) in the same release: authors of carbon removal papers since 2021, counted by the country of their affiliation.

## Biochar is the one pathway that spreads

**113 of the 200 EU companies with a removal pathway make biochar, and they sit in 15 member states.** Germany alone holds 44, more than any country in the world except the United States with 77. Sweden follows with 17, France with 10, Austria with 8, Denmark with 6, the Netherlands and Spain with 5 each, Finland and Belgium with 4, Ireland with 3, Czechia and Romania with 2, Hungary, Poland and Portugal with 1. Take biochar away and the eastern and southern half of the Union goes almost blank: Czechia, Hungary, Poland, Romania, Portugal and Spain have 12 biochar producers between them and seven companies across the six other pathways.

Biochar plants are small and they need what every region has, residues and farmland, which is why the dots are spread. The size classes say the same: 71 of the 144 EU companies outside bio-CCS and DACCS have fewer than ten people, 43 have ten to 49.

## Bio-CCS is Sweden plus Denmark

**25 EU companies have bio-CCS as their primary pathway, in seven member states, and 17 of the 25 are in Sweden (10) and Denmark (7).** Germany, France and Hungary have two each, the Netherlands and Finland one. Eleven of the 25 are utilities, waste companies or large groups with a single capture project, classified as side businesses or divisions rather than removal start-ups. That is what a capture unit bolted onto a heat plant looks like in a company directory: one row, a large employer, one project. The pattern follows CO2 storage, not biomass. Sweden and Denmark ship or plan to ship their CO2 to Norwegian and Danish stores; Germany, which has the [largest biogenic CO2 point sources](https://bioenergyeurope.org/wp-content/uploads/2025/06/BECCS-Report_final.pdf) in the Union, had no legal route to commercial storage until November 2025.

## Direct air capture is wider and thinner

**31 EU companies work on direct air capture with storage, in eleven member states, nine of them in the Netherlands.** Germany and France have five each, Sweden and Ireland three, Austria, Belgium, Spain, Finland, Italy and Poland one. Almost all are start-ups: of the 56 companies in bio-CCS and DACCS together, 19 have fewer than ten people and 15 have ten to 49; the 12 large ones are mostly the bio-CCS utilities above. None of the 31 runs a plant with geological storage inside the EU; the EU-based direct air capture fleet is [pilots of a few hundred tonnes a year](https://www.europarl.europa.eu/RegData/etudes/STUD/2025/772474/ECTI_STU(2025)772474_EN.pdf).

## The four small pathways live in the west

Enhanced weathering has 10 companies in seven member states (Germany 3, the Netherlands 2, Austria, Denmark, France, Ireland and Poland 1). Mineralisation has 10 in seven (France 3, Germany 2, Austria, Spain, Finland, Ireland and the Netherlands 1). Ocean removal has 6 in five (France 2, Germany, Spain, Italy and the Netherlands 1), biomass burial 5 in four (the Netherlands 2, Germany, Finland and France 1). **Together the five pathways other than bio-CCS and DACCS reach 16 member states; bio-CCS and DACCS reach 13.** The three states that only the five reach are Czechia, Portugal and Romania, each with one or two biochar producers.

![EU27 member states by published carbon removal companies, bio-CCS and DACCS against the five other pathways, with the number of carbon removal researchers per state, release 2026-11.4](/images/posts/eu27-companies-by-member-state.png)

## Eleven member states have researchers and no company

Bulgaria, Croatia, Cyprus, Estonia, Greece, Latvia, Lithuania, Luxembourg, Malta, Slovakia and Slovenia have no published carbon removal company. All eleven have carbon removal researchers in the census, 512 between them, from 2 in Malta to 181 in Greece. The gap is not an eastern thing only: Italy has 960 researchers in the census and four published companies, Poland 404 and three, Spain 792 and eight. **In the EU27 the research base is spread across all 27 states and the companies across 16.** Part 3 of this series takes that gap apart state by state.

## What the map cannot tell you

These are counts of companies, not tonnes, and a map of head offices, not of plants. A single bio-CCS plant of the size Stockholm is building will capture more CO2 in a year than a hundred biochar start-ups do today, and a Dutch company counted in the Netherlands may run its projects in Ghana. The directory is also never complete: 197 entries worldwide sit in the review queue. One of the eleven blank states is already on its way out: a Croatian charcoal producer with a biochar line was confirmed on 8 November, after release 2026-11.4, and enters the files with the next one. Treat the map as a floor. If a company is missing, the correction address is on the [data page](/data/companies/) and lands in the next release.

## How the maps were drawn

Everything comes from two release files, companies.csv (country_code, pathway_primary) and researchers_by_country.csv, filtered to the 27 ISO codes of the EU. The outlines are Natural Earth's 110-metre countries, decoded from the site's own TopoJSON file and projected with a Lambert azimuthal equal-area projection centred on 10° E, 52° N, the same choice as the EU's standard EPSG:3035 grid; Malta is too small for that resolution and is drawn as a dot. The bins are 1 to 2, 3 to 9, 10 to 29 and 30 or more companies, the same scale on every map so that the panels can be read against each other. No GIS library, about 400 lines of Python with matplotlib; the script is in the [data repository](https://github.com/dirkpaessler/cdr-databases/tree/main/examples) next to the files it reads.

Part 2 puts the same 200 companies next to the rest of the world, pathway by pathway. The next release is due on 15 November, and with the Croatian entry the eleven should become ten.