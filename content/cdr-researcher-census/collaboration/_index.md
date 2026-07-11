---
draft: false
hiddenInHomeList: true
title: "CDR Collaboration Atlas"
date: 2026-03-22T13:00:00+00:00
url: "/cdr-researcher-census/collaboration/"
description: "Interactive map of collaboration networks across 148,194+ CDR researchers — who works with whom, which institutions connect, and how CDR methods cross-pollinate."
type: "page"
build:
  render: always
  list: never
  publishResources: true
sitemap:
  _disable: true
---

## What This Page Shows

This **Collaboration Atlas** maps the research networks of **148,194 CDR scientists** using co-authorship data from OpenAlex. The 338,416 co-authored papers reveal how researchers collaborate across disciplines, institutions, and countries — and which scientific communities are bridging the gap between different carbon dioxide removal methods.

### How It Was Built

1. **Co-authorship networks**: Every paper co-authored by CDR researchers creates a connection in the network
2. **Louvain community detection**: Algorithmic clustering identified 135 distinct research communities that frequently publish together
3. **Pathway classification**: Each community's dominant method was determined by OpenAlex classification + LLM filtering
4. **Bridge scoring**: Researchers with high network betweenness centrality — spanning multiple methods and geographies — are flagged as "bridge researchers"

### What the Data Means

- **Communities** = clusters of researchers who co-author papers frequently (strong scientific coupling)
- **Bridges** = individuals whose network position connects otherwise disconnected research areas
- **Cross-method links** = co-authorships between researchers from different CDR pathways
- **Institutions** = research centers where CDR work concentrates

<div style="background:var(--code-bg);border-left:4px solid #f0ad4e;border-radius:4px;padding:1rem 1.2rem;margin:1.5rem 0">
<strong>⚠️ Experimental Analysis</strong>
<p style="margin:0.5rem 0 0">This collaboration analysis is <strong>highly experimental</strong>. Key limitations:</p>
<ul style="margin:0.4rem 0 0;padding-left:1.5rem;font-size:0.92em">
<li>Based on co-authorship data from <strong>OpenAlex</strong>, which has known disambiguation issues</li>
<li>Community detection is <strong>algorithmic</strong> — detected clusters are approximate, not ground truth</li>
<li>"Bridge researcher" scores use <strong>network metrics</strong> (betweenness centrality), not editorial judgment</li>
<li>CDR pathway assignment uses <strong>automated classification</strong> (code-based patterns + LLM filtering)</li>
<li>Data is from the <strong>latest census snapshot</strong> — updated monthly</li>
</ul>
</div>

---

<div class="stats-grid">
<div class="stat-card"><div class="stat-number">84,069</div><div class="stat-label">Connected Researchers</div></div>
<div class="stat-card"><div class="stat-number">338,416</div><div class="stat-label">Co-authorship Links</div></div>
<div class="stat-card"><div class="stat-number">135</div><div class="stat-label">Research Communities</div></div>
<div class="stat-card"><div class="stat-number">3,204</div><div class="stat-label">Cross-Method Bridges</div></div>
</div>

---

## 🔥 How CDR Methods Cross-Pollinate

This matrix shows co-authorship links between researchers from different CDR methods. Higher numbers = more collaboration.

<div style="overflow-x:auto;margin:1.5rem 0">
<table style="border-collapse:collapse;font-size:0.82em;min-width:500px">
<tr><th style="padding:6px 8px"></th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">Soil C.</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">Biochar</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">DAC</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">EW</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">BECCS</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">Ocean</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">General</th>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">Soil C.</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ Soil Carbon: 217,901">218k</td>
<td style="padding:4px;text-align:center;background:rgb(55,75,155);color:#fff;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ Biochar: 10,215">10k</td>
<td style="padding:4px;text-align:center;background:rgb(253,253,254);color:#333;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ DAC: 77">77</td>
<td style="padding:4px;text-align:center;background:rgb(205,210,230);color:#333;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ Enhanced Weathering: 2,537">2.5k</td>
<td style="padding:4px;text-align:center;background:rgb(249,249,252);color:#333;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ BECCS: 298">298</td>
<td style="padding:4px;text-align:center;background:rgb(230,233,242);color:#333;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ Ocean CDR: 1,236">1.2k</td>
<td style="padding:4px;text-align:center;background:rgb(94,110,174);color:#fff;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ General CDR: 8,182">8.2k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">Biochar</td>
<td style="padding:4px;text-align:center;background:rgb(55,75,155);color:#fff;min-width:50px;font-size:0.85em" title="Biochar ↔ Soil Carbon: 10,215">10k</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Biochar ↔ Biochar: 58,189">58k</td>
<td style="padding:4px;text-align:center;background:rgb(252,252,253);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ DAC: 150">150</td>
<td style="padding:4px;text-align:center;background:rgb(250,250,252);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ Enhanced Weathering: 246">246</td>
<td style="padding:4px;text-align:center;background:rgb(249,250,252);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ BECCS: 281">281</td>
<td style="padding:4px;text-align:center;background:rgb(248,249,251);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ Ocean CDR: 318">318</td>
<td style="padding:4px;text-align:center;background:rgb(186,192,220);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ General CDR: 3,524">3.5k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">DAC</td>
<td style="padding:4px;text-align:center;background:rgb(253,253,254);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Soil Carbon: 77">77</td>
<td style="padding:4px;text-align:center;background:rgb(252,252,253);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Biochar: 150">150</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="DAC ↔ DAC: 3,539">3.5k</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Enhanced Weathering: 45">45</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ BECCS: 22">22</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Ocean CDR: 25">25</td>
<td style="padding:4px;text-align:center;background:rgb(235,237,245);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ General CDR: 1,005">1.0k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">EW</td>
<td style="padding:4px;text-align:center;background:rgb(205,210,230);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Soil Carbon: 2,537">2.5k</td>
<td style="padding:4px;text-align:center;background:rgb(250,250,252);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Biochar: 246">246</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ DAC: 45">45</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Enhanced Weathering: 8,137">8.1k</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ BECCS: 12">12</td>
<td style="padding:4px;text-align:center;background:rgb(241,242,248);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Ocean CDR: 689">689</td>
<td style="padding:4px;text-align:center;background:rgb(193,200,224);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ General CDR: 3,116">3.1k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">BECCS</td>
<td style="padding:4px;text-align:center;background:rgb(249,249,252);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Soil Carbon: 298">298</td>
<td style="padding:4px;text-align:center;background:rgb(249,250,252);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Biochar: 281">281</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ DAC: 22">22</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Enhanced Weathering: 12">12</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="BECCS ↔ BECCS: 2,256">2.3k</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Ocean CDR: 35">35</td>
<td style="padding:4px;text-align:center;background:rgb(238,239,246);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ General CDR: 864">864</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">Ocean</td>
<td style="padding:4px;text-align:center;background:rgb(230,233,242);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Soil Carbon: 1,236">1.2k</td>
<td style="padding:4px;text-align:center;background:rgb(248,249,251);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Biochar: 318">318</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ DAC: 25">25</td>
<td style="padding:4px;text-align:center;background:rgb(241,242,248);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Enhanced Weathering: 689">689</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ BECCS: 35">35</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Ocean CDR: 15,767">16k</td>
<td style="padding:4px;text-align:center;background:rgb(213,217,234);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ General CDR: 2,113">2.1k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">General</td>
<td style="padding:4px;text-align:center;background:rgb(94,110,174);color:#fff;min-width:50px;font-size:0.85em" title="General CDR ↔ Soil Carbon: 8,182">8.2k</td>
<td style="padding:4px;text-align:center;background:rgb(186,192,220);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ Biochar: 3,524">3.5k</td>
<td style="padding:4px;text-align:center;background:rgb(235,237,245);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ DAC: 1,005">1.0k</td>
<td style="padding:4px;text-align:center;background:rgb(193,200,224);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ Enhanced Weathering: 3,116">3.1k</td>
<td style="padding:4px;text-align:center;background:rgb(238,239,246);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ BECCS: 864">864</td>
<td style="padding:4px;text-align:center;background:rgb(213,217,234);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ Ocean CDR: 2,113">2.1k</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="General CDR ↔ General CDR: 54,945">55k</td>
</tr>
</table></div>

---

## 🌍 Top Country Collaborations

The strongest international research partnerships in CDR, measured by co-authored papers.

<div style="margin:1.5rem 0">
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ United States</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:100%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">12,888 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">Australia ↔ China</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:30%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">3,844 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ United Kingdom</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:26%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">3,407 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ Germany</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:22%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">2,837 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">United Kingdom ↔ United States</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:17%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">2,171 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ Hong Kong</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:17%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">2,131 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">Canada ↔ China</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:16%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">2,020 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">India ↔ United States</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:14%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,788 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ Spain</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:12%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,549 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ Pakistan</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:12%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,504 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">Germany ↔ United States</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:10%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,271 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">Canada ↔ United States</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:9%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,218 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ Japan</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:9%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,163 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">Australia ↔ United States</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:8%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,014 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ France</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:7%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">964 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">Germany ↔ United Kingdom</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:7%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">910 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ Singapore</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:7%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">892 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ Taiwan</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:7%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">841 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">China ↔ South Korea</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:6%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">808 papers</span></div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em"><span style="width:200px;flex-shrink:0;font-weight:600">South Korea ↔ United States</span><div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:6%;min-width:2px"></div><span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">801 papers</span></div>
</div>

---

## 🔗 Bridge Researchers

These researchers connect the most CDR methods through their co-authorship network — the rare people who span biochar, DAC, ocean CDR, and more. Click names to visit their researcher profile.

<div style="overflow-x:auto;margin:1.5rem 0">
<table style="width:100%;border-collapse:collapse;font-size:0.88em">
<thead><tr>
<th style="text-align:left;padding:0.5rem;border-bottom:2px solid var(--border)">#</th>
<th style="text-align:left;padding:0.5rem;border-bottom:2px solid var(--border)">Researcher</th>
<th style="text-align:center;padding:0.5rem;border-bottom:2px solid var(--border)">Methods</th>
<th style="text-align:center;padding:0.5rem;border-bottom:2px solid var(--border)">Co-authors</th>
<th style="text-align:left;padding:0.5rem;border-bottom:2px solid var(--border)">Primary</th>
<th style="text-align:left;padding:0.5rem;border-bottom:2px solid var(--border)">Institution</th>
<th style="text-align:left;padding:0.5rem;border-bottom:2px solid var(--border)">Country</th>
</tr></thead><tbody>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">1</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yakov-kuzyakov-a5062508/" style="text-decoration:none;color:inherit"><strong>Yakov Kuzyakov</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">546</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Georg-August-Universität Göttingen</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">2</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/pete-smith-a5028843/" style="text-decoration:none;color:inherit"><strong>Pete Smith</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">255</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Scotland's Climate Change Centre of Expertise (…</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">3</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/josep-penuelas-a5016893/" style="text-decoration:none;color:inherit"><strong>Josep Peñuelas</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">298</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Consejo Superior de Investigaciones Científicas</td><td style="padding:0.4rem 0.5rem">Spain</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">4</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/noah-j-planavsky-a5031830/" style="text-decoration:none;color:inherit"><strong>Noah J. Planavsky</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">165</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Planetary Science Institute</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">5</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jordi-sardans-a5061849/" style="text-decoration:none;color:inherit"><strong>Jordi Sardans</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">251</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">CREAF - Centre de Recerca Ecològica i Aplicacio…</td><td style="padding:0.4rem 0.5rem">Spain</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">6</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/mauricio-roberto-cherubin-a5047372/" style="text-decoration:none;color:inherit"><strong>Maurício Roberto Cherubin</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">153</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Universidade de São Paulo - Escola Superior de …</td><td style="padding:0.4rem 0.5rem">Brazil</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">7</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/phil-renforth-a5011758/" style="text-decoration:none;color:inherit"><strong>Phil Renforth</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">7</td><td style="padding:0.4rem 0.5rem;text-align:center">173</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Heriot-Watt University</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">8</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ondrej-masek-a5087096/" style="text-decoration:none;color:inherit"><strong>Ondřej Mašek</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">7</td><td style="padding:0.4rem 0.5rem;text-align:center">147</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#6d4c41;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Edinburgh</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">9</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/david-j-beerling-a5073877/" style="text-decoration:none;color:inherit"><strong>David J. Beerling</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">183</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Leverhulme Trust</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">10</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/rattan-lal-a5049890/" style="text-decoration:none;color:inherit"><strong>Rattan Lal</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">157</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">The Ohio State University</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">11</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/carlos-eduardo-pellegrino-cerri-a5082434/" style="text-decoration:none;color:inherit"><strong>Carlos Eduardo Pellegrino Cerri</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">142</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Sao Paulo</td><td style="padding:0.4rem 0.5rem">Brazil</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">12</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/shaoshan-an-a5109476/" style="text-decoration:none;color:inherit"><strong>Shaoshan An</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">131</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Institute of Soil and Water Conservation</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">13</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/philippe-ciais-a5070378/" style="text-decoration:none;color:inherit"><strong>Philippe Ciais</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">172</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Université Paris-Saclay</td><td style="padding:0.4rem 0.5rem">France</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">14</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/kadambot-h-m-siddique-a5082109/" style="text-decoration:none;color:inherit"><strong>Kadambot H. M. Siddique</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">143</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">The University of Western Australia</td><td style="padding:0.4rem 0.5rem">Australia</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">15</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ji-chen-a5100652/" style="text-decoration:none;color:inherit"><strong>Ji Chen</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">204</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Chinese Academy of Sciences Institute of Earth …</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">16</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/andreas-oschlies-a5063745/" style="text-decoration:none;color:inherit"><strong>Andreas Oschlies</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">127</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">GEOMAR Helmholtz Centre for Ocean Research Kiel</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">17</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yi-wang-a5108047/" style="text-decoration:none;color:inherit"><strong>Yì Wáng</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">138</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#6d4c41;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Chinese University of Hong Kong</td><td style="padding:0.4rem 0.5rem">Hong Kong</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">18</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ulf-riebesell-a5005675/" style="text-decoration:none;color:inherit"><strong>Ulf Riebesell</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">109</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">GEOMAR Helmholtz-Zentrum für Ozeanforschung Kiel</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">19</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/axel-don-a5040614/" style="text-decoration:none;color:inherit"><strong>Axel Don</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">95</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Thünen-Institute of Climate-Smart Agriculture</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">20</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/lennart-t-bach-a5044360/" style="text-decoration:none;color:inherit"><strong>Lennart T. Bach</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">79</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Tasmania</td><td style="padding:0.4rem 0.5rem">Australia</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">21</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/sara-vicca-a5006929/" style="text-decoration:none;color:inherit"><strong>Sara Vicca</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">120</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Antwerp</td><td style="padding:0.4rem 0.5rem">Belgium</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">22</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jens-hartmann-a5019869/" style="text-decoration:none;color:inherit"><strong>Jens Hartmann</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">145</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Universität Hamburg</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">23</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/roland-bol-a5029408/" style="text-decoration:none;color:inherit"><strong>Roland Bol</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">138</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Forschungszentrum Jülich</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">24</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/chao-liang-a5019539/" style="text-decoration:none;color:inherit"><strong>Chao Liang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">153</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Zhejiang A & F University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">25</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/scott-x-chang-a5086611/" style="text-decoration:none;color:inherit"><strong>Scott X. Chang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">130</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Alberta</td><td style="padding:0.4rem 0.5rem">Canada</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">26</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/daniel-cw-tsang-a5076771/" style="text-decoration:none;color:inherit"><strong>Daniel C.W. Tsang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">73</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#6d4c41;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Hong Kong University of Science and Technology</td><td style="padding:0.4rem 0.5rem">Hong Kong</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">27</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/hailong-wang-a5100367/" style="text-decoration:none;color:inherit"><strong>Hailong Wang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">139</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Foshan University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">28</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/rajan-ghimire-a5049277/" style="text-decoration:none;color:inherit"><strong>Rajan Ghimire</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">65</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">New Mexico State University</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">29</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/zhouping-shangguan-a5071526/" style="text-decoration:none;color:inherit"><strong>Zhouping Shangguan</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">1</td><td style="padding:0.4rem 0.5rem;text-align:center">81</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">中国科学院水利部水土保持研究所</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">30</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/raymond-r-tan-a5016388/" style="text-decoration:none;color:inherit"><strong>Raymond R. Tan</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">54</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Hefei University of Technology</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">31</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yiqi-luo-a5068115/" style="text-decoration:none;color:inherit"><strong>Yiqi Luo</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">153</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Cornell University</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">32</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ram-swaroop-meena-a5080095/" style="text-decoration:none;color:inherit"><strong>Ram Swaroop Meena</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">100</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Banaras Hindu University</td><td style="padding:0.4rem 0.5rem">India</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">33</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/manuel-delgadobaquerizo-a5090300/" style="text-decoration:none;color:inherit"><strong>Manuel Delgado‐Baquerizo</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">148</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Instituto de Recursos Naturales y Agrobiología …</td><td style="padding:0.4rem 0.5rem">Spain</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">34</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/zhaoliang-song-a5087826/" style="text-decoration:none;color:inherit"><strong>Zhaoliang Song</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">138</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Tianjin University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">35</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/philip-ae-pogge-von-strandmann-a5063694/" style="text-decoration:none;color:inherit"><strong>Philip A.E. Pogge von Strandmann</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">116</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Johannes Gutenberg Universität Mainz</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">36</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/weiqi-wang-a5021159/" style="text-decoration:none;color:inherit"><strong>Weiqi Wang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">133</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Fujian Normal University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">37</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/christopher-t-reinhard-a5061963/" style="text-decoration:none;color:inherit"><strong>Christopher T. Reinhard</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">69</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Georgia Institute of Technology</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">38</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/tida-ge-a5076632/" style="text-decoration:none;color:inherit"><strong>Tida Ge</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">1</td><td style="padding:0.4rem 0.5rem;text-align:center">130</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Ningbo University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">39</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/nanthi-bolan-a5007065/" style="text-decoration:none;color:inherit"><strong>Nanthi Bolan</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">124</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">The University of Western Australia</td><td style="padding:0.4rem 0.5rem">Australia</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">40</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jeroen-meersmans-a5024947/" style="text-decoration:none;color:inherit"><strong>Jeroen Meersmans</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">86</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Liège</td><td style="padding:0.4rem 0.5rem">Belgium</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">41</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/cornelia-rumpel-a5011618/" style="text-decoration:none;color:inherit"><strong>Cornélia Rumpel</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">88</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Centre National de la Recherche Scientifique</td><td style="padding:0.4rem 0.5rem">France</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">42</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/han-y-h-chen-a5100734/" style="text-decoration:none;color:inherit"><strong>Han Y. H. Chen</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">95</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Inner Mongolia Agricultural University</td><td style="padding:0.4rem 0.5rem">Canada</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">43</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/david-p-keller-a5068205/" style="text-decoration:none;color:inherit"><strong>David P. Keller</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">97</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Carbon to Sea Initiative</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">44</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/dafeng-hui-a5043570/" style="text-decoration:none;color:inherit"><strong>Dafeng Hui</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">111</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Tennessee State University</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">45</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yunting-fang-a5012369/" style="text-decoration:none;color:inherit"><strong>Yunting Fang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">132</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Shenyang Aerospace University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">46</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/benjamin-k-sovacool-a5088822/" style="text-decoration:none;color:inherit"><strong>Benjamin K. Sovacool</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">40</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Boston University</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">47</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/peng-li-a5100432/" style="text-decoration:none;color:inherit"><strong>Peng Li</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">78</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Hunan Normal University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">48</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jens-leifeld-a5078135/" style="text-decoration:none;color:inherit"><strong>Jens Leifeld</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">86</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Federal Office for Agriculture</td><td style="padding:0.4rem 0.5rem">Switzerland</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">49</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/amit-kumar-a5028945/" style="text-decoration:none;color:inherit"><strong>Amit Kumar</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">85</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Nanjing University of Information Science and T…</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">50</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ian-power-a5058336/" style="text-decoration:none;color:inherit"><strong>Ian Power</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">64</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Trent University</td><td style="padding:0.4rem 0.5rem">Canada</td></tr>
</tbody></table></div>

---

## 🌐 Research Communities by CDR Method

The 50 detected communities, grouped by dominant pathway. Each cluster represents researchers who frequently co-author together, revealing natural research subfields within CDR.


## Soil Carbon

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 18: Soil Carbon (2,334 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span> <strong>85%</strong></span>
<span>🌍 <strong>India</strong> (74%)</span>
<span>🏛️ <strong style="font-size:0.9em">Indian Agricultural Research Institute</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Ram Swaroop Meena, Amit Kumar, Avijit Ghosh, Arun Jyoti Nath, Shiv Vendra Singh</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 8: Soil Carbon (1,173 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span> <strong>92%</strong></span>
<span>🌍 <strong>China</strong> (72%)</span>
<span>🏛️ <strong style="font-size:0.9em">Chinese Academy of Sciences</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Yakov Kuzyakov, Shaoshan An, Chao Liang, Baorong Wang, Jie Zhou</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 9: Soil Carbon (1,028 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span> <strong>64%</strong></span>
<span>🌍 <strong>China</strong> (61%)</span>
<span>🏛️ <strong style="font-size:0.9em">Nanjing Agricultural University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Hailong Wang, Zhaoliang Song, Nanthi Bolan, Lukas Van Zwieten, Rongjun Bian</div>
</div>

## Biochar

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 78: Biochar (571 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#6d4c41;color:#fff">Biochar</span> <strong>43%</strong></span>
<span>🌍 <strong>China</strong> (27%)</span>
<span>🏛️ <strong style="font-size:0.9em">Graz University of Technology</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Ahmed I. Osman, Mahmoud Nasr, Hanping Chen, David W. Rooney, Mika Sillanpää</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 68: Biochar (428 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#6d4c41;color:#fff">Biochar</span> <strong>59%</strong></span>
<span>🌍 <strong>China</strong> (19%)</span>
<span>🏛️ <strong style="font-size:0.9em">Chiang Mai University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Wei‐Hsin Chen, Eilhann E. Kwon, Su Shiung Lam, Kun‐Yi Andrew Lin, Jo‐Shu Chang</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 43: Biochar (427 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#6d4c41;color:#fff">Biochar</span> <strong>62%</strong></span>
<span>🌍 <strong>China</strong> (49%)</span>
<span>🏛️ <strong style="font-size:0.9em">Shanghai Jiao Tong University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Daniel C.W. Tsang, Yong Sik Ok, Chunfei Wu, Xinde Cao, Ling Zhao</div>
</div>

## General CDR

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 2: General CDR (1,759 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span> <strong>68%</strong></span>
<span>🌍 <strong>Germany</strong> (15%)</span>
<span>🏛️ <strong style="font-size:0.9em">ETH Zurich</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Philippe Ciais, Andreas Oschlies, David P. Keller, Benjamin K. Sovacool, Julia Pongratz</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 81: General CDR (627 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span> <strong>74%</strong></span>
<span>🌍 <strong>United States</strong> (46%)</span>
<span>🏛️ <strong style="font-size:0.9em">National Laboratory of the Rockies</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Haewon McJeon, Jay Fuhrman, Corinne D. Scown, Umakant Mishra, Jeffrey Dankwa Ampah</div>
</div>

## Ocean CDR

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 48: Ocean CDR (1,042 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span> <strong>46%</strong></span>
<span>🌍 <strong>Germany</strong> (15%)</span>
<span>🏛️ <strong style="font-size:0.9em">GEOMAR Helmholtz Centre for Ocean Research Kiel</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Phil Renforth, Ulf Riebesell, Lennart T. Bach, Sara Vicca, Jens Hartmann</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 80: Ocean CDR (485 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span> <strong>79%</strong></span>
<span>🌍 <strong>United States</strong> (47%)</span>
<span>🏛️ <strong style="font-size:0.9em">Pacific Northwest National Laboratory</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Wei‐Jun Cai, Chinmayee V. Subban, Matthew D. Eisaman, Jessica Cross, Brendan R. Carter</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 129: Ocean CDR (406 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span> <strong>69%</strong></span>
<span>🌍 <strong>China</strong> (49%)</span>
<span>🏛️ <strong style="font-size:0.9em">Xiamen University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Nianzhi Jiao, Eric P. Achterberg, Minhan Dai, Jihua Liu, Yubin Hu</div>
</div>

## Enhanced Weathering

*No research communities detected for Enhanced Weathering in this dataset.*


## BECCS

*No research communities detected for BECCS in this dataset.*


## DAC

*No research communities detected for DAC in this dataset.*


---

## 🌐 CDR Method Collaboration Chord

How do CDR research methods connect through co-authorship? This chord diagram shows the flow of collaboration between pathways — thicker ribbons mean more co-authored papers linking researchers across methods.

<div id="chord-container" style="max-width:640px;margin:1.5rem auto;position:relative">
<svg id="chord-svg" viewBox="0 0 640 640" style="width:100%;height:auto"></svg>
</div>

<script>
(function(){
  const methods = ["Soil Carbon", "Biochar", "DAC", "EW", "BECCS", "Ocean CDR", "General CDR"];
  const colors = ["#a0d468", "#6d4c41", "#64b5f6", "#bcaaa4", "#ff8a65", "#4dd0e1", "#b39ddb"];
  const matrix = [[0, 10215, 77, 2537, 298, 1236, 8182], [10215, 0, 150, 246, 281, 318, 3524], [77, 150, 0, 45, 22, 25, 1005], [2537, 246, 45, 0, 12, 689, 3116], [298, 281, 22, 12, 0, 35, 864], [1236, 318, 25, 689, 35, 0, 2113], [8182, 3524, 1005, 3116, 864, 2113, 0]];

  const svg = document.getElementById('chord-svg');
  const cx = 320, cy = 320, outerR = 270, innerR = 250, labelR = 295;
  const total = matrix.map(row => row.reduce((a,b)=>a+b,0));
  const grandTotal = total.reduce((a,b)=>a+b,0);
  const gap = 0.02;
  const totalGap = gap * methods.length;
  const available = 2 * Math.PI - totalGap;

  let angles = total.map(t => (t / grandTotal) * available);
  let starts = [];
  let cumAngle = -Math.PI/2;
  for(let i = 0; i < methods.length; i++){
    starts.push(cumAngle);
    cumAngle += angles[i] + gap;
  }

  function polarX(r, a){ return cx + r * Math.cos(a); }
  function polarY(r, a){ return cy + r * Math.sin(a); }

  let html = '';
  for(let i = 0; i < methods.length; i++){
    const s = starts[i], e = starts[i] + angles[i];
    const large = (e - s) > Math.PI ? 1 : 0;
    html += '<path d="M ' + polarX(outerR,s) + ' ' + polarY(outerR,s) + ' A ' + outerR + ' ' + outerR + ' 0 ' + large + ' 1 ' + polarX(outerR,e) + ' ' + polarY(outerR,e) + '" fill="none" stroke="' + colors[i] + '" stroke-width="20" stroke-linecap="round" opacity="0.85"/>';
    const midA = (s + e) / 2;
    const lx = polarX(labelR + 10, midA);
    const ly = polarY(labelR + 10, midA);
    const rot = midA*180/Math.PI + (midA > Math.PI/2 - 0.01 && midA < 3*Math.PI/2 + 0.01 ? 180 : 0);
    html += '<text x="' + lx + '" y="' + ly + '" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="600" fill="currentColor" transform="rotate(' + rot + ', ' + lx + ', ' + ly + ')">' + methods[i] + '</text>';
  }

  const maxVal = Math.max(...matrix.flat());
  for(let i = 0; i < methods.length; i++){
    let subOffset_i = 0;
    for(let j = i+1; j < methods.length; j++){
      if(matrix[i][j] === 0) continue;
      const val = matrix[i][j];
      const w_i = (val / total[i]) * angles[i];
      const w_j = (val / total[j]) * angles[j];

      let subOffset_j = 0;
      for(let k = 0; k < i; k++){
        if(matrix[j][k] > 0) subOffset_j += (matrix[j][k] / total[j]) * angles[j];
      }

      const s_i = starts[i] + subOffset_i;
      const e_i = s_i + w_i;
      const s_j = starts[j] + subOffset_j;
      const e_j = s_j + w_j;
      const opacity = Math.min(0.6, 0.15 + (val / maxVal) * 0.45);

      html += '<path d="M ' + polarX(innerR,s_i) + ' ' + polarY(innerR,s_i) + ' A ' + innerR + ' ' + innerR + ' 0 0 1 ' + polarX(innerR,e_i) + ' ' + polarY(innerR,e_i) + ' Q ' + cx + ' ' + cy + ' ' + polarX(innerR,e_j) + ' ' + polarY(innerR,e_j) + ' A ' + innerR + ' ' + innerR + ' 0 0 1 ' + polarX(innerR,s_j) + ' ' + polarY(innerR,s_j) + ' Q ' + cx + ' ' + cy + ' ' + polarX(innerR,s_i) + ' ' + polarY(innerR,s_i) + ' Z" fill="' + colors[i] + '" opacity="' + opacity.toFixed(2) + '" stroke="' + colors[i] + '" stroke-width="0.5" stroke-opacity="0.3"><title>' + methods[i] + ' ↔ ' + methods[j] + ': ' + val.toLocaleString() + ' co-authored papers</title></path>';

      subOffset_i += w_i;
    }
  }

  svg.innerHTML = html;
})();
</script>

<div style="display:flex;flex-wrap:wrap;gap:0.8rem;justify-content:center;margin:1rem 0;font-size:0.82em">
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#a0d468;display:inline-block"></span> Soil Carbon</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#6d4c41;display:inline-block"></span> Biochar</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#64b5f6;display:inline-block"></span> DAC</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#bcaaa4;display:inline-block"></span> Enhanced Weathering</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#ff8a65;display:inline-block"></span> BECCS</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#4dd0e1;display:inline-block"></span> Ocean CDR</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#b39ddb;display:inline-block"></span> General CDR</span>
</div>

<p style="text-align:center;font-size:0.82em;color:var(--secondary);margin-top:0.5rem">Hover over ribbons to see co-authorship counts. Ribbon thickness is proportional to collaboration volume.</p>
