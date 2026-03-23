---
draft: false
hiddenInHomeList: true
title: "CDR Collaboration Atlas"
date: 2026-03-22T13:00:00+00:00
url: "/cdr-researcher-census/collaboration/"
description: "Interactive map of collaboration networks across 114,000+ CDR researchers — who works with whom, which institutions connect, and how CDR methods cross-pollinate."
type: "page"
_build:
  render: always
  list: never
  publishResources: true
sitemap:
  _disable: true
---

## What This Page Shows

This **Collaboration Atlas** maps the research networks of **122,000+ CDR scientists** using co-authorship data from OpenAlex. The 248,000+ co-authored papers reveal how researchers collaborate across disciplines, institutions, and countries — and which scientific communities are bridging the gap between different carbon dioxide removal methods.

### How It Was Built

1. **Co-authorship networks**: Every paper co-authored by CDR researchers creates a connection in the network
2. **Louvain community detection**: Algorithmic clustering identified 115 distinct research communities that frequently publish together
3. **Pathway classification**: Each community's dominant method was determined by OpenAlex classification + LLM filtering
4. **Bridge scoring**: Researchers with high network betweenness centrality — spanning multiple methods and geographies — are flagged as "bridge researchers"

### What the Data Means

- **Communities** = clusters of researchers who co-author papers frequently (strong scientific coupling)
- **Bridges** = individuals whose network position connects otherwise disconnected research areas
- **Country collaborations** = international co-authorship intensity (a proxy for knowledge flow)
- **Institutions** = research centers where CDR work concentrates

<div style="background:var(--code-bg);border-left:4px solid #f0ad4e;border-radius:4px;padding:1rem 1.2rem;margin:1.5rem 0">
<strong>⚠️ Experimental Analysis</strong>
<p style="margin:0.5rem 0 0">This analysis is **highly experimental** and comes with important caveats:</p>
<ul style="margin:0.5rem 0 0;padding-left:1.2rem">
<li>Based on co-authorship data from <strong>OpenAlex</strong>, which has known coverage gaps (especially in non-English publications)</li>
<li>Community detection is <strong>algorithmic</strong> — detected clusters are approximate, not ground truth</li>
<li>"Bridge researcher" scores use <strong>network metrics</strong> (betweenness centrality), not editorial judgment</li>
<li>CDR pathway assignment uses <strong>automated classification</strong> (code-based + LLM filtering) and may misclassify interdisciplinary work</li>
<li>Data is a <strong>snapshot from March 2026</strong> — older publications underrepresented</li>
</ul>
</div>

---

<div class="stats-grid">
<div class="stat-card"><div class="stat-number">66,717</div><div class="stat-label">Connected Researchers</div></div>
<div class="stat-card"><div class="stat-number">248,947</div><div class="stat-label">Co-authorship Links</div></div>
<div class="stat-card"><div class="stat-number">115</div><div class="stat-label">Research Communities</div></div>
<div class="stat-card"><div class="stat-number">3,827</div><div class="stat-label">Cross-Method Bridges</div></div>
</div>

---

## 🔥 How CDR Methods Cross-Pollinate

This matrix shows co-authorship links between researchers from different CDR methods. Higher numbers = more collaboration between specialties.

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
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ Soil Carbon: 121,323">121.3k</td>
<td style="padding:4px;text-align:center;background:rgb(98,114,176);color:#fff;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ Biochar: 8,396">8.4k</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ DAC: 0">0</td>
<td style="padding:4px;text-align:center;background:rgb(223,226,239);color:#333;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ Enhanced Weathering: 1,708">1.7k</td>
<td style="padding:4px;text-align:center;background:rgb(244,245,249);color:#333;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ BECCS: 558">558</td>
<td style="padding:4px;text-align:center;background:rgb(244,245,249);color:#333;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ Ocean CDR: 541">541</td>
<td style="padding:4px;text-align:center;background:rgb(55,75,155);color:#fff;min-width:50px;font-size:0.85em" title="Soil Carbon ↔ General CDR: 10,748">10.7k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">Biochar</td>
<td style="padding:4px;text-align:center;background:rgb(98,114,176);color:#fff;min-width:50px;font-size:0.85em" title="Biochar ↔ Soil Carbon: 8,396">8.4k</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Biochar ↔ Biochar: 31,206">31.2k</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ DAC: 0">0</td>
<td style="padding:4px;text-align:center;background:rgb(250,250,252);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ Enhanced Weathering: 260">260</td>
<td style="padding:4px;text-align:center;background:rgb(247,248,251);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ BECCS: 406">406</td>
<td style="padding:4px;text-align:center;background:rgb(253,253,254);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ Ocean CDR: 81">81</td>
<td style="padding:4px;text-align:center;background:rgb(221,225,238);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ General CDR: 1,787">1.8k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">DAC</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Soil Carbon: 0">0</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Biochar: 0">0</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="DAC ↔ DAC: 119">119</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Enhanced Weathering: 0">0</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ BECCS: 0">0</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Ocean CDR: 0">0</td>
<td style="padding:4px;text-align:center;background:rgb(253,253,254);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ General CDR: 97">97</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">EW</td>
<td style="padding:4px;text-align:center;background:rgb(223,226,239);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Soil Carbon: 1,708">1.7k</td>
<td style="padding:4px;text-align:center;background:rgb(250,250,252);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Biochar: 260">260</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ DAC: 0">0</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Enhanced Weathering: 8,700">8.7k</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ BECCS: 18">18</td>
<td style="padding:4px;text-align:center;background:rgb(244,245,249);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Ocean CDR: 575">575</td>
<td style="padding:4px;text-align:center;background:rgb(220,224,237);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ General CDR: 1,835">1.8k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">BECCS</td>
<td style="padding:4px;text-align:center;background:rgb(244,245,249);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Soil Carbon: 558">558</td>
<td style="padding:4px;text-align:center;background:rgb(247,248,251);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Biochar: 406">406</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ DAC: 0">0</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Enhanced Weathering: 18">18</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="BECCS ↔ BECCS: 4,033">4.0k</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Ocean CDR: 13">13</td>
<td style="padding:4px;text-align:center;background:rgb(214,218,234);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ General CDR: 2,181">2.2k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">Ocean</td>
<td style="padding:4px;text-align:center;background:rgb(244,245,249);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Soil Carbon: 541">541</td>
<td style="padding:4px;text-align:center;background:rgb(253,253,254);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Biochar: 81">81</td>
<td style="padding:4px;text-align:center;background:rgb(255,255,255);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ DAC: 0">0</td>
<td style="padding:4px;text-align:center;background:rgb(244,245,249);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Enhanced Weathering: 575">575</td>
<td style="padding:4px;text-align:center;background:rgb(254,254,254);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ BECCS: 13">13</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Ocean CDR: 5,786">5.8k</td>
<td style="padding:4px;text-align:center;background:rgb(216,220,235);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ General CDR: 2,060">2.1k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">General</td>
<td style="padding:4px;text-align:center;background:rgb(55,75,155);color:#fff;min-width:50px;font-size:0.85em" title="General CDR ↔ Soil Carbon: 10,748">10.7k</td>
<td style="padding:4px;text-align:center;background:rgb(221,225,238);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ Biochar: 1,787">1.8k</td>
<td style="padding:4px;text-align:center;background:rgb(253,253,254);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ DAC: 97">97</td>
<td style="padding:4px;text-align:center;background:rgb(220,224,237);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ Enhanced Weathering: 1,835">1.8k</td>
<td style="padding:4px;text-align:center;background:rgb(214,218,234);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ BECCS: 2,181">2.2k</td>
<td style="padding:4px;text-align:center;background:rgb(216,220,235);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ Ocean CDR: 2,060">2.1k</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="General CDR ↔ General CDR: 46,453">46.5k</td>
</tr>
</table></div>

---

## 🌍 Top Country Collaborations

The strongest international research partnerships in CDR, measured by co-authored papers.

<div style="margin:1.5rem 0">
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em">
<span style="width:200px;flex-shrink:0;font-weight:600">China ↔ United States</span>
<div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:100%;min-width:2px"></div>
<span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">9,088 papers</span>
</div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em">
<span style="width:200px;flex-shrink:0;font-weight:600">China ↔ United Kingdom</span>
<div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:32%;min-width:2px"></div>
<span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">2,866 papers</span>
</div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em">
<span style="width:200px;flex-shrink:0;font-weight:600">Australia ↔ China</span>
<div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:26%;min-width:2px"></div>
<span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">2,402 papers</span>
</div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em">
<span style="width:200px;flex-shrink:0;font-weight:600">United Kingdom ↔ United States</span>
<div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:21%;min-width:2px"></div>
<span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,939 papers</span>
</div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em">
<span style="width:200px;flex-shrink:0;font-weight:600">China ↔ Germany</span>
<div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:21%;min-width:2px"></div>
<span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,924 papers</span>
</div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em">
<span style="width:200px;flex-shrink:0;font-weight:600">Canada ↔ China</span>
<div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:16%;min-width:2px"></div>
<span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,456 papers</span>
</div>
<div style="display:flex;align-items:center;margin:0.35rem 0;font-size:0.88em">
<span style="width:200px;flex-shrink:0;font-weight:600">India ↔ United States</span>
<div style="height:20px;background:var(--tertiary);border-radius:4px;opacity:0.6;width:14%;min-width:2px"></div>
<span style="margin-left:8px;color:var(--secondary);font-size:0.85em;white-space:nowrap">1,293 papers</span>
</div>
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
</tr></thead>
<tbody>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">1</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yakov-kuzyakov-a5062508/" style="text-decoration:none;color:inherit"><strong>Yakov Kuzyakov</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">482</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Georg-August-Universität Göttingen</td>
<td style="padding:0.4rem 0.5rem">Germany</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">2</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/pete-smith-a5028843/" style="text-decoration:none;color:inherit"><strong>Pete Smith</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">6</td>
<td style="padding:0.4rem 0.5rem;text-align:center">193</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Scotland Clinical Change Centre of Expertise</td>
<td style="padding:0.4rem 0.5rem">United Kingdom</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">3</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/josep-penuelas-a5016893/" style="text-decoration:none;color:inherit"><strong>Josep Peñuelas</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">5</td>
<td style="padding:0.4rem 0.5rem;text-align:center">241</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Consejo Superior de Investigaciones Científicas</td>
<td style="padding:0.4rem 0.5rem">Spain</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">4</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/philippe-ciais-a5070378/" style="text-decoration:none;color:inherit"><strong>Philippe Ciais</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">5</td>
<td style="padding:0.4rem 0.5rem;text-align:center">171</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Université Paris-Saclay</td>
<td style="padding:0.4rem 0.5rem">France</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">5</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/phil-renforth-a5011758/" style="text-decoration:none;color:inherit"><strong>Phil Renforth</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">6</td>
<td style="padding:0.4rem 0.5rem;text-align:center">141</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Heriot-Watt University</td>
<td style="padding:0.4rem 0.5rem">United Kingdom</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">6</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/rattan-lal-a5049890/" style="text-decoration:none;color:inherit"><strong>Rattan Lal</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">5</td>
<td style="padding:0.4rem 0.5rem;text-align:center">153</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">The Ohio State University</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">7</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/mauricio-roberto-cherubin-a5047372/" style="text-decoration:none;color:inherit"><strong>Maurício Roberto Cherubin</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">115</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Universidade de São Paulo - Escola Superior de Agricultura Luiz de Queiroz</td>
<td style="padding:0.4rem 0.5rem">Brazil</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">8</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/carlos-eduardo-pellegrino-cerri-a5082434/" style="text-decoration:none;color:inherit"><strong>Carlos Eduardo Pellegrino Cerri</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">5</td>
<td style="padding:0.4rem 0.5rem;text-align:center">114</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Sao Paulo</td>
<td style="padding:0.4rem 0.5rem">Brazil</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">9</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/noah-j-planavsky-a5031830/" style="text-decoration:none;color:inherit"><strong>Noah J. Planavsky</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">6</td>
<td style="padding:0.4rem 0.5rem;text-align:center">106</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Planetary Science Institute</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">10</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ji-chen-a5100652/" style="text-decoration:none;color:inherit"><strong>Ji Chen</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">167</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Chinese Academy of Sciences Institute of Earth Environment</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">11</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/david-j-beerling-a5073877/" style="text-decoration:none;color:inherit"><strong>David J. Beerling</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">141</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Leverhulme Trust</td>
<td style="padding:0.4rem 0.5rem">United Kingdom</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">12</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/kadambot-h-m-siddique-a5082109/" style="text-decoration:none;color:inherit"><strong>Kadambot H. M. Siddique</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">131</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">The University of Western Australia</td>
<td style="padding:0.4rem 0.5rem">Australia</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">13</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/lennart-t-bach-a5044360/" style="text-decoration:none;color:inherit"><strong>Lennart T. Bach</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">74</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Tasmania</td>
<td style="padding:0.4rem 0.5rem">Australia</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">14</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/chao-liang-a5019539/" style="text-decoration:none;color:inherit"><strong>Chao Liang</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">143</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Central University of Finance and Economics</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">15</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ulf-riebesell-a5005675/" style="text-decoration:none;color:inherit"><strong>Ulf Riebesell</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">98</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">GEOMAR Helmholtz-Zentrum für Ozeanforschung Kiel</td>
<td style="padding:0.4rem 0.5rem">Germany</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">16</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ondrej-masek-a5087096/" style="text-decoration:none;color:inherit"><strong>Ondřej Mašek</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">6</td>
<td style="padding:0.4rem 0.5rem;text-align:center">92</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#8d6e63;color:#3e2723">Biochar</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Edinburgh</td>
<td style="padding:0.4rem 0.5rem">United Kingdom</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">17</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jordi-sardans-a5061849/" style="text-decoration:none;color:inherit"><strong>Jordi Sardans</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">5</td>
<td style="padding:0.4rem 0.5rem;text-align:center">165</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">CREAF - Centre de Recerca Ecològica i Aplicacions Forestals</td>
<td style="padding:0.4rem 0.5rem">Spain</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">18</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/andreas-oschlies-a5063745/" style="text-decoration:none;color:inherit"><strong>Andreas Oschlies</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">101</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">GEOMAR Helmholtz Centre for Ocean Research Kiel</td>
<td style="padding:0.4rem 0.5rem">Germany</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">19</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/rajan-ghimire-a5049277/" style="text-decoration:none;color:inherit"><strong>Rajan Ghimire</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">59</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">New Mexico State University</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">20</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jens-hartmann-a5019869/" style="text-decoration:none;color:inherit"><strong>Jens Hartmann</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">6</td>
<td style="padding:0.4rem 0.5rem;text-align:center">130</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Universität Hamburg</td>
<td style="padding:0.4rem 0.5rem">Germany</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">21</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yiqi-luo-a5068115/" style="text-decoration:none;color:inherit"><strong>Yiqi Luo</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">140</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Cornell University</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">22</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ryan-p-lively-a5021581/" style="text-decoration:none;color:inherit"><strong>Ryan P. Lively</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">67</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Georgia Institute of Technology</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">23</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/christopher-w-jones-a5052807/" style="text-decoration:none;color:inherit"><strong>Christopher W. Jones</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">2</td>
<td style="padding:0.4rem 0.5rem;text-align:center">65</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Georgia Institute of Technology</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">24</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/zhouping-shangguan-a5071526/" style="text-decoration:none;color:inherit"><strong>Zhouping Shangguan</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">72</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">中国科学院水利部水土保持研究所</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">25</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/matthew-j-realff-a5078923/" style="text-decoration:none;color:inherit"><strong>Matthew J. Realff</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">69</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Georgia Institute of Technology</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">26</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/axel-don-a5040614/" style="text-decoration:none;color:inherit"><strong>Axel Don</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">79</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Thünen-Institute of Climate-Smart Agriculture</td>
<td style="padding:0.4rem 0.5rem">Germany</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">27</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/scott-x-chang-a5086611/" style="text-decoration:none;color:inherit"><strong>Scott X. Chang</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">6</td>
<td style="padding:0.4rem 0.5rem;text-align:center">99</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Alberta</td>
<td style="padding:0.4rem 0.5rem">Canada</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">28</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/tida-ge-a5076632/" style="text-decoration:none;color:inherit"><strong>Tida Ge</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">1</td>
<td style="padding:0.4rem 0.5rem;text-align:center">112</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Ningbo University</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">29</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/peng-li-a5100432/" style="text-decoration:none;color:inherit"><strong>Peng Li</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">75</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Nanjing Agricultural University</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">30</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/manuel-delgadobaquerizo-a5090300/" style="text-decoration:none;color:inherit"><strong>Manuel Delgado‐Baquerizo</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">135</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Instituto de Recursos Naturales y Agrobiología de Sevilla</td>
<td style="padding:0.4rem 0.5rem">Spain</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">31</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/christopher-t-reinhard-a5061963/" style="text-decoration:none;color:inherit"><strong>Christopher T. Reinhard</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">62</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Georgia Institute of Technology</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">32</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/han-y-h-chen-a5100734/" style="text-decoration:none;color:inherit"><strong>Han Y. H. Chen</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">89</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Michigan</td>
<td style="padding:0.4rem 0.5rem">Canada</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">33</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/sara-vicca-a5006929/" style="text-decoration:none;color:inherit"><strong>Sara Vicca</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">5</td>
<td style="padding:0.4rem 0.5rem;text-align:center">96</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Antwerp</td>
<td style="padding:0.4rem 0.5rem">Belgium</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">34</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/haishui-yang-a5026336/" style="text-decoration:none;color:inherit"><strong>Haishui Yang</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">92</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Nanjing Agricultural University</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">35</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/roland-bol-a5029408/" style="text-decoration:none;color:inherit"><strong>Roland Bol</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">92</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Forschungszentrum Jülich</td>
<td style="padding:0.4rem 0.5rem">Germany</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">36</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/nanthi-bolan-a5007065/" style="text-decoration:none;color:inherit"><strong>Nanthi Bolan</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">82</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">The University of Western Australia</td>
<td style="padding:0.4rem 0.5rem">Australia</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">37</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/minggang-xu-a5101588/" style="text-decoration:none;color:inherit"><strong>Minggang Xu</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">83</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Shanxi Agricultural University</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">38</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jens-leifeld-a5078135/" style="text-decoration:none;color:inherit"><strong>Jens Leifeld</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">82</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Aarhus University</td>
<td style="padding:0.4rem 0.5rem">Denmark</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">39</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/lukas-van-zwieten-a5021650/" style="text-decoration:none;color:inherit"><strong>Lukas Van Zwieten</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">112</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">NSW Department of Primary Industries</td>
<td style="padding:0.4rem 0.5rem">Australia</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">40</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/davey-l-jones-a5064381/" style="text-decoration:none;color:inherit"><strong>Davey L. Jones</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">86</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">The University of Western Australia</td>
<td style="padding:0.4rem 0.5rem">Australia</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">41</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ian-power-a5058336/" style="text-decoration:none;color:inherit"><strong>Ian Power</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">52</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Trent University</td>
<td style="padding:0.4rem 0.5rem">Canada</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">42</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jay-fuhrman-a5034052/" style="text-decoration:none;color:inherit"><strong>Jay Fuhrman</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">87</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Joint Global Change Research Institute</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">43</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yunting-fang-a5012369/" style="text-decoration:none;color:inherit"><strong>Yunting Fang</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">108</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Chinese Academy of Sciences</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">44</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/qaiser-hussain-a5042485/" style="text-decoration:none;color:inherit"><strong>Qaiser Hussain</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">78</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Pir Mehr Ali Shah Arid Agriculture University</td>
<td style="padding:0.4rem 0.5rem">Pakistan</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">45</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/raymond-r-tan-a5016388/" style="text-decoration:none;color:inherit"><strong>Raymond R. Tan</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">4</td>
<td style="padding:0.4rem 0.5rem;text-align:center">39</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Hubei University Of Economics</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">46</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/radu-custelcean-a5064099/" style="text-decoration:none;color:inherit"><strong>Radu Custelcean</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">2</td>
<td style="padding:0.4rem 0.5rem;text-align:center">51</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Oak Ridge National Laboratory</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">47</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/hailin-zhang-a5040808/" style="text-decoration:none;color:inherit"><strong>Hai‐Lin Zhang</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">2</td>
<td style="padding:0.4rem 0.5rem;text-align:center">56</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">China Agricultural University</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">48</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jinshui-wu-a5103718/" style="text-decoration:none;color:inherit"><strong>Jinshui Wu</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">89</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Chinese Academy of Sciences</td>
<td style="padding:0.4rem 0.5rem">China</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">49</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/david-p-keller-a5068205/" style="text-decoration:none;color:inherit"><strong>David P. Keller</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">83</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Carbon to Sea Initiative</td>
<td style="padding:0.4rem 0.5rem">United States</td>
</tr>
<tr style="border-bottom:1px solid var(--border)">
<td style="padding:0.4rem 0.5rem">50</td>
<td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/haewon-mcjeon-a5062879/" style="text-decoration:none;color:inherit"><strong>Haewon McJeon</strong></a></td>
<td style="padding:0.4rem 0.5rem;text-align:center">3</td>
<td style="padding:0.4rem 0.5rem;text-align:center">101</td>
<td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.78em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span></td>
<td style="padding:0.4rem 0.5rem;font-size:0.9em">Korea Advanced Institute of Science and Technology</td>
<td style="padding:0.4rem 0.5rem">South Korea</td>
</tr>
</tbody></table></div>

---

## 🌐 Research Communities by CDR Method

The 115 detected communities, grouped by dominant pathway. Each cluster represents researchers who frequently co-author together, revealing natural research subfields within CDR.

## Soil Carbon

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 14: Soil Carbon (1,800 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span> <strong>68%</strong></span>
<span>🌍 <strong>IN</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Indian Agricultural Research Institute</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Ram Swaroop Meena, Avijit Ghosh, M.L. Jat, Manoj Kumar Jhariya, Arun Jyoti Nath</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 11: Soil Carbon (1,191 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span> <strong>79%</strong></span>
<span>🌍 <strong>CN</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Chinese Academy of Sciences</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Yakov Kuzyakov, Chao Liang, Tida Ge, Jinshui Wu, Baorong Wang</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 12: Soil Carbon (1,094 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a0d468;color:#2a5e0f">Soil Carbon</span> <strong>66%</strong></span>
<span>🌍 <strong>CN</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Chinese Academy of Sciences</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Josep Peñuelas, Jordi Sardans, Hailong Wang, Zhaoliang Song, Faming Wang</div>
</div>

## Biochar

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 34: Biochar (785 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8d6e63;color:#3e2723">Biochar</span> <strong>72%</strong></span>
<span>🌍 <strong>CN</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Shanghai Jiao Tong University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Daniel C.W. Tsang, Jörg Rinklebe, Yong Sik Ok, Chunfei Wu, Meththika Vithanage</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 53: Biochar (528 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8d6e63;color:#3e2723">Biochar</span> <strong>66%</strong></span>
<span>🌍 <strong>IN</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Chiang Mai University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Wei‐Hsin Chen, Manish Kumar, Eilhann E. Kwon, Huu Hao Ngo, Ashok Pandey</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 72: Biochar (460 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8d6e63;color:#3e2723">Biochar</span> <strong>57%</strong></span>
<span>🌍 <strong>CN</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Huazhong University of Science and Technology</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Bin Li, Hanping Chen, Shu Zhang, Shisuo Fan, Pietro Bartocci</div>
</div>

## General CDR

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 2: General CDR (883 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span> <strong>69%</strong></span>
<span>🌍 <strong>DE</strong></span>
<span>🏛️ <strong style="font-size:0.9em">International Institute for Applied Systems Analysis</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Benjamin K. Sovacool, Detlef P. van Vuuren, Matthew Gidden, Carl‐Friedrich Schleussner, Alexandre Szklo</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 74: General CDR (733 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span> <strong>57%</strong></span>
<span>🌍 <strong>US</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Oak Ridge National Laboratory</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Haewon McJeon, Jay Fuhrman, David T. Ho, Jeffrey Dankwa Ampah, Laurent Bopp</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 1: General CDR (652 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#b39ddb;color:#311b92">General CDR</span> <strong>59%</strong></span>
<span>🌍 <strong>DE</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Dalhousie University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Andreas Oschlies, David P. Keller, Jong‐Seong Kug, Mathias Fridahl, Jörg Schwinger</div>
</div>

## Ocean CDR

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 40: Ocean CDR (808 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span> <strong>29%</strong></span>
<span>🌍 <strong>DE</strong></span>
<span>🏛️ <strong style="font-size:0.9em">University of Antwerp</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Phil Renforth, Lennart T. Bach, Ulf Riebesell, Jens Hartmann, Sara Vicca</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 94: Ocean CDR (390 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span> <strong>53%</strong></span>
<span>🌍 <strong>US</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Pacific Northwest National Laboratory</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Brendan R. Carter, Wei‐Jun Cai, Jessica Cross, Matthew D. Eisaman, Adam V. Subhas</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 91: Ocean CDR (370 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#4dd0e1;color:#004d40">Ocean CDR</span> <strong>37%</strong></span>
<span>🌍 <strong>CN</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Xiamen University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Filip J. R. Meysman, Emily Cox, Eric P. Achterberg, Minhan Dai, Sonja Geilert</div>
</div>

## Enhanced Weathering

<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 6: Enhanced Weathering (543 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span> <strong>37%</strong></span>
<span>🌍 <strong>US</strong></span>
<span>🏛️ <strong style="font-size:0.9em">North Carolina State University</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Noah J. Planavsky, David J. Beerling, Christopher T. Reinhard, William Joe Sagues, Tom Reershemius</div>
</div>
<div style="background:var(--code-bg);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.4rem 0;font-size:0.95em">Community 59: Enhanced Weathering (513 researchers)</h3>
<div style="display:flex;flex-wrap:wrap;gap:1.2rem;font-size:0.88em;color:var(--secondary)">
<span>🔬 <span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#bcaaa4;color:#3e2723">Enhanced Weathering</span> <strong>54%</strong></span>
<span>🌍 <strong>CN</strong></span>
<span>🏛️ <strong style="font-size:0.9em">Chinese Academy of Sciences</strong></span>
</div>
<div style="margin-top:0.4rem;font-size:0.82em;color:var(--secondary)">Top researchers: Philip A.E. Pogge von Strandmann, Wolfram Buss, Eelco J. Rohling, Kang‐Jun Huang, Tangfu Xiao</div>
</div>

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
  // Cross-method collaboration data from pathway matrix (off-diagonal only)
  const methods = ['Soil Carbon','Biochar','DAC','EW','BECCS','Ocean CDR','General CDR'];
  const colors = ['#a0d468','#8d6e63','#64b5f6','#bcaaa4','#ff8a65','#4dd0e1','#b39ddb'];
  // Symmetric matrix: co-authorship links between methods
  const matrix = [
    [0, 8396, 0, 1708, 558, 541, 10748],
    [8396, 0, 0, 260, 406, 81, 1787],
    [0, 0, 0, 0, 0, 0, 97],
    [1708, 260, 0, 0, 18, 575, 1835],
    [558, 406, 0, 18, 0, 13, 2181],
    [541, 81, 0, 575, 13, 0, 2060],
    [10748, 1787, 97, 1835, 2181, 2060, 0]
  ];

  const svg = document.getElementById('chord-svg');
  const cx = 320, cy = 320, outerR = 270, innerR = 250, labelR = 295;
  const total = matrix.map(row => row.reduce((a,b)=>a+b,0));
  const grandTotal = total.reduce((a,b)=>a+b,0);
  const gap = 0.02; // gap between arcs in radians
  const totalGap = gap * methods.length;
  const available = 2 * Math.PI - totalGap;

  // Compute arc angles proportional to total connections
  let angles = total.map(t => (t / grandTotal) * available);
  let starts = [];
  let cumAngle = -Math.PI/2;
  for(let i = 0; i < methods.length; i++){
    starts.push(cumAngle);
    cumAngle += angles[i] + gap;
  }

  function polarX(r, a){ return cx + r * Math.cos(a); }
  function polarY(r, a){ return cy + r * Math.sin(a); }

  function arcPath(r, startA, endA){
    const large = (endA - startA) > Math.PI ? 1 : 0;
    return `M ${polarX(r,startA)} ${polarY(r,startA)} A ${r} ${r} 0 ${large} 1 ${polarX(r,endA)} ${polarY(r,endA)}`;
  }

  // Draw outer arcs
  let html = '';
  for(let i = 0; i < methods.length; i++){
    const s = starts[i], e = starts[i] + angles[i];
    // Thick arc
    html += `<path d="${arcPath(outerR, s, e)}" fill="none" stroke="${colors[i]}" stroke-width="20" stroke-linecap="round" opacity="0.85"/>`;
    // Label
    const midA = (s + e) / 2;
    const lx = polarX(labelR + 10, midA);
    const ly = polarY(labelR + 10, midA);
    const anchor = midA > Math.PI/2 && midA < 3*Math.PI/2 ? 'end' : (Math.abs(midA - Math.PI/2) < 0.1 || Math.abs(midA + Math.PI/2) < 0.1 ? 'middle' : 'start');
    // Rotate label to follow arc
    let rotation = midA * 180 / Math.PI;
    if(rotation > 90 && rotation < 270) rotation += 180;
    if(rotation > 90 - 360 && rotation < -90) rotation += 180;
    html += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="central" font-size="12" font-weight="600" fill="currentColor" transform="rotate(${midA*180/Math.PI + (midA > Math.PI/2 - 0.01 && midA < 3*Math.PI/2 + 0.01 ? 180 : 0)}, ${lx}, ${ly})">${methods[i]}</text>`;
  }

  // Draw ribbons (chords)
  for(let i = 0; i < methods.length; i++){
    let subOffset_i = 0;
    for(let j = i+1; j < methods.length; j++){
      if(matrix[i][j] === 0) continue;
      const val = matrix[i][j];
      // Width proportional to value relative to this method's total
      const w_i = (val / total[i]) * angles[i];
      const w_j = (val / total[j]) * angles[j];

      // Find sub-offset for j
      let subOffset_j = 0;
      for(let k = 0; k < i; k++){
        if(matrix[j][k] > 0) subOffset_j += (matrix[j][k] / total[j]) * angles[j];
      }
      // Also account for earlier i connections to j
      for(let k = i+1; k < j; k++){
        // Skip — we handle only i<j pairs sequentially
      }

      const s_i = starts[i] + subOffset_i;
      const e_i = s_i + w_i;
      const s_j = starts[j] + subOffset_j;
      const e_j = s_j + w_j;

      // Mix color
      const opacity = Math.min(0.6, 0.15 + (val / 10748) * 0.45);

      html += `<path d="M ${polarX(innerR,s_i)} ${polarY(innerR,s_i)} 
        A ${innerR} ${innerR} 0 0 1 ${polarX(innerR,e_i)} ${polarY(innerR,e_i)}
        Q ${cx} ${cy} ${polarX(innerR,e_j)} ${polarY(innerR,e_j)}
        A ${innerR} ${innerR} 0 0 1 ${polarX(innerR,s_j)} ${polarY(innerR,s_j)}
        Q ${cx} ${cy} ${polarX(innerR,s_i)} ${polarY(innerR,s_i)}
        Z" fill="${colors[i]}" opacity="${opacity.toFixed(2)}" stroke="${colors[i]}" stroke-width="0.5" stroke-opacity="0.3">
        <title>${methods[i]} ↔ ${methods[j]}: ${val.toLocaleString()} co-authored papers</title>
      </path>`;

      subOffset_i += w_i;
    }
  }

  svg.innerHTML = html;
})();
</script>

<div style="display:flex;flex-wrap:wrap;gap:0.8rem;justify-content:center;margin:1rem 0;font-size:0.82em">
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#a0d468;display:inline-block"></span> Soil Carbon</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#8d6e63;display:inline-block"></span> Biochar</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#64b5f6;display:inline-block"></span> DAC</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#bcaaa4;display:inline-block"></span> Enhanced Weathering</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#ff8a65;display:inline-block"></span> BECCS</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#4dd0e1;display:inline-block"></span> Ocean CDR</span>
<span style="display:flex;align-items:center;gap:4px"><span style="width:12px;height:12px;border-radius:50%;background:#b39ddb;display:inline-block"></span> General CDR</span>
</div>

<p style="text-align:center;font-size:0.82em;color:var(--secondary);margin-top:0.5rem">Hover over ribbons to see co-authorship counts. Ribbon thickness is proportional to collaboration volume. The dominant Soil Carbon ↔ General CDR axis (10.7k papers) shows how broadly CDR policy research draws from soil science.</p>

