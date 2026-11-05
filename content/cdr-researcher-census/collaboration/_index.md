---
draft: false
hiddenInHomeList: true
title: "CDR Collaboration Atlas"
date: 2026-03-22T13:00:00+00:00
url: "/cdr-researcher-census/collaboration/"
description: "Interactive map of collaboration networks across 55,865+ CDR researchers — who works with whom, which institutions connect, and how CDR methods cross-pollinate."
type: "page"
build:
  render: always
  list: never
  publishResources: true
sitemap:
  _disable: true
---

## What This Page Shows

This atlas maps the co-authorship network of the **55,865 researchers** in my CDR Researcher Census (public scope: DAC, BECCS, enhanced weathering, ocean CDR, biochar and cross-cutting CDR papers since 2021), built from OpenAlex. The 189,805 co-authorship links show who publishes with whom across institutions and countries, and which communities bridge different carbon dioxide removal methods. Names appear only for researchers in the public top lists; everyone else is counted, not named.

### How It Was Built

1. **Co-authorship networks**: Every paper co-authored by CDR researchers creates a connection in the network
2. **Louvain community detection**: Algorithmic clustering identified 108 distinct research communities that frequently publish together
3. **Pathway classification**: Each community's dominant method was determined by OpenAlex classification + LLM filtering
4. **Bridge scoring**: Researchers with high network betweenness centrality — spanning multiple methods and geographies — are flagged as "bridge researchers"

### What the Data Means

- **Communities** = clusters of researchers who co-author papers frequently (strong scientific coupling)
- **Bridges** = individuals whose network position connects otherwise disconnected research areas
- **Cross-method links** = co-authorships between researchers from different CDR pathways
- **Institutions** = research centers where CDR work concentrates

<div style="background:var(--code-bg);border-left:4px solid #f0ad4e;border-radius:4px;padding:1rem 1.2rem;margin:1.5rem 0">
<strong>Experimental Analysis</strong>
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
<div class="stat-card"><div class="stat-number">51,779</div><div class="stat-label">Connected Researchers</div></div>
<div class="stat-card"><div class="stat-number">189,805</div><div class="stat-label">Co-authorship Links</div></div>
<div class="stat-card"><div class="stat-number">108</div><div class="stat-label">Research Communities</div></div>
<div class="stat-card"><div class="stat-number">1,950</div><div class="stat-label">Cross-Method Bridges</div></div>
</div>

---

---

## CDR Method Collaboration Chord

How do CDR research methods connect through co-authorship? This chord diagram shows the flow of collaboration between pathways — thicker ribbons mean more co-authored papers linking researchers across methods.

<div id="chord-container" style="max-width:640px;margin:1.5rem auto;position:relative">
<svg id="chord-svg" viewBox="0 0 640 640" style="width:100%;height:auto"></svg>
</div>

<script>
(function(){
  const methods = ["Biochar", "DAC", "EW", "BECCS", "Ocean", "Cross-cutting"];
  const colors = ["#8c5a2b", "#2a7fa8", "#5e4fa2", "#6a8b1e", "#1bb5a5", "#a23b72"];
  const matrix = [[0, 756, 1372, 1691, 1004, 2064], [756, 0, 600, 911, 416, 2923], [1372, 600, 0, 293, 1680, 908], [1691, 911, 293, 0, 153, 2268], [1004, 416, 1680, 153, 0, 1316], [2064, 2923, 908, 2268, 1316, 0]];

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
    html += '<text x="' + lx + '" y="' + ly + '" text-anchor="middle" dominant-baseline="central" font-size="15" font-weight="600" font-family="Inter, Helvetica Neue, Arial, sans-serif" fill="currentColor" transform="rotate(' + rot + ', ' + lx + ', ' + ly + ')">' + methods[i] + '</text>';
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

<div style="display:flex;flex-wrap:wrap;gap:0.8rem 1.2rem;justify-content:center;margin:1rem 0;font-family:var(--font-sans);font-size:14px">
<span style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;border-radius:50%;background:#8c5a2b;display:inline-block"></span> Biochar</span>
<span style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;border-radius:50%;background:#2a7fa8;display:inline-block"></span> DAC</span>
<span style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;border-radius:50%;background:#5e4fa2;display:inline-block"></span> Enhanced Weathering</span>
<span style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;border-radius:50%;background:#6a8b1e;display:inline-block"></span> BECCS</span>
<span style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;border-radius:50%;background:#1bb5a5;display:inline-block"></span> Ocean CDR</span>
<span style="display:flex;align-items:center;gap:6px"><span style="width:12px;height:12px;border-radius:50%;background:#a23b72;display:inline-block"></span> Cross-cutting CDR</span>
</div>

<p style="text-align:center;font-family:var(--font-sans);font-size:14px;color:var(--ink-muted);margin-top:0.5rem">Hover over a ribbon to see the number of co-authored papers; ribbon thickness is proportional to it.</p>

## How CDR Methods Cross-Pollinate

This matrix shows co-authorship links between researchers from different CDR methods. Higher numbers = more collaboration.

<div style="overflow-x:auto;margin:1.5rem 0">
<table style="border-collapse:collapse;font-size:0.82em;min-width:500px">
<tr><th style="padding:6px 8px"></th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">Biochar</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">DAC</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">EW</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">BECCS</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">Ocean</th>
<th style="padding:6px 4px;text-align:center;font-size:0.85em;writing-mode:vertical-lr;transform:rotate(180deg);height:80px">Cross-cutting</th>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">Biochar</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Biochar ↔ Biochar: 105,492">105k</td>
<td style="padding:4px;text-align:center;background:rgb(203,208,229);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ DAC: 756">756</td>
<td style="padding:4px;text-align:center;background:rgb(161,170,208);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ Enhanced Weathering: 1,372">1.4k</td>
<td style="padding:4px;text-align:center;background:rgb(139,150,197);color:#fff;min-width:50px;font-size:0.85em" title="Biochar ↔ BECCS: 1,691">1.7k</td>
<td style="padding:4px;text-align:center;background:rgb(186,193,220);color:#333;min-width:50px;font-size:0.85em" title="Biochar ↔ Ocean CDR: 1,004">1.0k</td>
<td style="padding:4px;text-align:center;background:rgb(113,127,184);color:#fff;min-width:50px;font-size:0.85em" title="Biochar ↔ General CDR: 2,064">2.1k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">DAC</td>
<td style="padding:4px;text-align:center;background:rgb(203,208,229);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Biochar: 756">756</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="DAC ↔ DAC: 17,896">18k</td>
<td style="padding:4px;text-align:center;background:rgb(213,218,234);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Enhanced Weathering: 600">600</td>
<td style="padding:4px;text-align:center;background:rgb(192,198,223);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ BECCS: 911">911</td>
<td style="padding:4px;text-align:center;background:rgb(226,229,240);color:#333;min-width:50px;font-size:0.85em" title="DAC ↔ Ocean CDR: 416">416</td>
<td style="padding:4px;text-align:center;background:rgb(55,75,155);color:#fff;min-width:50px;font-size:0.85em" title="DAC ↔ General CDR: 2,923">2.9k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">EW</td>
<td style="padding:4px;text-align:center;background:rgb(161,170,208);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Biochar: 1,372">1.4k</td>
<td style="padding:4px;text-align:center;background:rgb(213,218,234);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ DAC: 600">600</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Enhanced Weathering: 20,222">20k</td>
<td style="padding:4px;text-align:center;background:rgb(234,236,244);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ BECCS: 293">293</td>
<td style="padding:4px;text-align:center;background:rgb(140,151,197);color:#fff;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ Ocean CDR: 1,680">1.7k</td>
<td style="padding:4px;text-align:center;background:rgb(192,199,223);color:#333;min-width:50px;font-size:0.85em" title="Enhanced Weathering ↔ General CDR: 908">908</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">BECCS</td>
<td style="padding:4px;text-align:center;background:rgb(139,150,197);color:#fff;min-width:50px;font-size:0.85em" title="BECCS ↔ Biochar: 1,691">1.7k</td>
<td style="padding:4px;text-align:center;background:rgb(192,198,223);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ DAC: 911">911</td>
<td style="padding:4px;text-align:center;background:rgb(234,236,244);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Enhanced Weathering: 293">293</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="BECCS ↔ BECCS: 10,486">10k</td>
<td style="padding:4px;text-align:center;background:rgb(244,245,249);color:#333;min-width:50px;font-size:0.85em" title="BECCS ↔ Ocean CDR: 153">153</td>
<td style="padding:4px;text-align:center;background:rgb(99,115,177);color:#fff;min-width:50px;font-size:0.85em" title="BECCS ↔ General CDR: 2,268">2.3k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">Ocean</td>
<td style="padding:4px;text-align:center;background:rgb(186,193,220);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Biochar: 1,004">1.0k</td>
<td style="padding:4px;text-align:center;background:rgb(226,229,240);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ DAC: 416">416</td>
<td style="padding:4px;text-align:center;background:rgb(140,151,197);color:#fff;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Enhanced Weathering: 1,680">1.7k</td>
<td style="padding:4px;text-align:center;background:rgb(244,245,249);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ BECCS: 153">153</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ Ocean CDR: 20,644">21k</td>
<td style="padding:4px;text-align:center;background:rgb(164,173,209);color:#333;min-width:50px;font-size:0.85em" title="Ocean CDR ↔ General CDR: 1,316">1.3k</td>
</tr>
<tr><td style="padding:4px 8px;font-weight:600;white-space:nowrap;font-size:0.9em">Cross-cutting</td>
<td style="padding:4px;text-align:center;background:rgb(113,127,184);color:#fff;min-width:50px;font-size:0.85em" title="General CDR ↔ Biochar: 2,064">2.1k</td>
<td style="padding:4px;text-align:center;background:rgb(55,75,155);color:#fff;min-width:50px;font-size:0.85em" title="General CDR ↔ DAC: 2,923">2.9k</td>
<td style="padding:4px;text-align:center;background:rgb(192,199,223);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ Enhanced Weathering: 908">908</td>
<td style="padding:4px;text-align:center;background:rgb(99,115,177);color:#fff;min-width:50px;font-size:0.85em" title="General CDR ↔ BECCS: 2,268">2.3k</td>
<td style="padding:4px;text-align:center;background:rgb(164,173,209);color:#333;min-width:50px;font-size:0.85em" title="General CDR ↔ Ocean CDR: 1,316">1.3k</td>
<td style="padding:4px;text-align:center;background:#555;color:#fff;min-width:50px;font-size:0.85em" title="General CDR ↔ General CDR: 30,466">30k</td>
</tr>
</table></div>

---

## Top Country Collaborations

The strongest international research partnerships in CDR, measured by co-authored papers.

<div style="margin:1.5rem 0">
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ United States</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:100%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">6,463 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">United Kingdom ↔ United States</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:29%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">1,885 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ United Kingdom</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:28%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">1,815 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">Australia ↔ China</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:28%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">1,786 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ Hong Kong</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:22%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">1,442 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">India ↔ United States</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:17%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">1,086 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">Germany ↔ United States</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:15%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">968 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">Canada ↔ United States</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:13%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">872 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ Germany</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:13%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">848 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">Canada ↔ China</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:13%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">847 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">Germany ↔ United Kingdom</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:12%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">780 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ Japan</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:11%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">694 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">South Korea ↔ United States</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:11%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">689 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">Australia ↔ United States</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:10%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">678 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ Pakistan</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:10%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">661 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">France ↔ United States</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:9%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">609 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ Singapore</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:9%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">563 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ South Korea</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:9%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">559 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ France</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:9%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">551 papers</span></div>
<div style="display:flex;align-items:center;margin:0.4rem 0;font-family:var(--font-sans);font-size:15px;line-height:22px"><span style="width:240px;flex-shrink:0;font-weight:600;color:var(--ink)">China ↔ Spain</span><div style="height:18px;background:var(--petrol);border-radius:3px;width:7%;min-width:3px"></div><span style="margin-left:10px;color:var(--ink-muted);font-variant-numeric:tabular-nums;white-space:nowrap">473 papers</span></div>
</div>

---

## Bridge Researchers

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
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">1</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/noah-j-planavsky-a5031830/" style="text-decoration:none;color:inherit"><strong>Noah J. Planavsky</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">181</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Yale University</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">2</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/phil-renforth-a5011758/" style="text-decoration:none;color:inherit"><strong>Phil Renforth</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">6</td><td style="padding:0.4rem 0.5rem;text-align:center">185</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Heriot-Watt University</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">3</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ondrej-masek-a5087096/" style="text-decoration:none;color:inherit"><strong>Ondřej Mašek</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">149</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Edinburgh</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">4</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/david-j-beerling-a5073877/" style="text-decoration:none;color:inherit"><strong>David J. Beerling</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">179</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Sheffield</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">5</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/daniel-cw-tsang-a5076771/" style="text-decoration:none;color:inherit"><strong>Daniel C.W. Tsang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">81</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Hong Kong University of Science and Technology</td><td style="padding:0.4rem 0.5rem">Hong Kong</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">6</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/andreas-oschlies-a5063745/" style="text-decoration:none;color:inherit"><strong>Andreas Oschlies</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">123</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">GEOMAR Helmholtz Centre for Ocean Research Kiel</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">7</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ulf-riebesell-a5005675/" style="text-decoration:none;color:inherit"><strong>Ulf Riebesell</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">113</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">GEOMAR Helmholtz Centre for Ocean Research Kiel</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">8</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/lennart-t-bach-a5044360/" style="text-decoration:none;color:inherit"><strong>Lennart T. Bach</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">86</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Tasmania</td><td style="padding:0.4rem 0.5rem">Australia</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">9</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jens-hartmann-a5019869/" style="text-decoration:none;color:inherit"><strong>Jens Hartmann</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">6</td><td style="padding:0.4rem 0.5rem;text-align:center">148</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Universität Hamburg</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">10</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/sara-vicca-a5006929/" style="text-decoration:none;color:inherit"><strong>Sara Vicca</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">117</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Antwerp</td><td style="padding:0.4rem 0.5rem">Belgium</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">11</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/raymond-r-tan-a5016388/" style="text-decoration:none;color:inherit"><strong>Raymond R. Tan</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">57</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">De La Salle University</td><td style="padding:0.4rem 0.5rem">Philippines</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">12</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/christopher-t-reinhard-a5061963/" style="text-decoration:none;color:inherit"><strong>Christopher T. Reinhard</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">75</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Georgia Institute of Technology</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">13</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/philip-ae-pogge-von-strandmann-a5063694/" style="text-decoration:none;color:inherit"><strong>Philip A.E. Pogge von Strandmann</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">121</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Johannes Gutenberg University Mainz</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">14</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/philippe-ciais-a5070378/" style="text-decoration:none;color:inherit"><strong>Philippe Ciais</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">6</td><td style="padding:0.4rem 0.5rem;text-align:center">109</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#6a8b1e;color:#fff">BECCS</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Laboratoire des Sciences du Climat et de l'Envi…</td><td style="padding:0.4rem 0.5rem">France</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">15</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yi-wang-a5108047/" style="text-decoration:none;color:inherit"><strong>Yì Wáng</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">117</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Chinese University of Hong Kong</td><td style="padding:0.4rem 0.5rem">Hong Kong</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">16</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/niall-mac-dowell-a5002701/" style="text-decoration:none;color:inherit"><strong>Niall Mac Dowell</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">58</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Imperial College London</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">17</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/kathleen-b-aviso-a5009843/" style="text-decoration:none;color:inherit"><strong>Kathleen B. Aviso</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">46</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">De La Salle University</td><td style="padding:0.4rem 0.5rem">Philippines</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">18</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/nikolas-hagemann-a5062868/" style="text-decoration:none;color:inherit"><strong>Nikolas Hagemann</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">91</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Ithaka Institute for Carbon Strategies</td><td style="padding:0.4rem 0.5rem">Switzerland</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">19</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/spyros-foteinis-a5057305/" style="text-decoration:none;color:inherit"><strong>Spyros Foteinis</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">6</td><td style="padding:0.4rem 0.5rem;text-align:center">107</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Heriot-Watt University</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">20</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/david-p-keller-a5068205/" style="text-decoration:none;color:inherit"><strong>David P. Keller</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">104</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">GEOMAR Helmholtz Centre for Ocean Research Kiel</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">21</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ian-power-a5058336/" style="text-decoration:none;color:inherit"><strong>Ian Power</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">64</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Trent University</td><td style="padding:0.4rem 0.5rem">Canada</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">22</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/pete-smith-a5028843/" style="text-decoration:none;color:inherit"><strong>Pete Smith</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">98</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Aberdeen</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">23</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/benjamin-k-sovacool-a5088822/" style="text-decoration:none;color:inherit"><strong>Benjamin K. Sovacool</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">41</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Boston University</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">24</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/matthew-gidden-a5012881/" style="text-decoration:none;color:inherit"><strong>Matthew Gidden</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">94</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Climate Analytics</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">25</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/haewon-mcjeon-a5062879/" style="text-decoration:none;color:inherit"><strong>Haewon McJeon</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">104</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Korea Advanced Institute of Science and Technology</td><td style="padding:0.4rem 0.5rem">South Korea</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">26</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/weihsin-chen-a5057352/" style="text-decoration:none;color:inherit"><strong>Wei‐Hsin Chen</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">62</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">National Cheng Kung University</td><td style="padding:0.4rem 0.5rem">Taiwan</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">27</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/junfeng-su-a5101652/" style="text-decoration:none;color:inherit"><strong>Junfeng Su</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">1</td><td style="padding:0.4rem 0.5rem;text-align:center">58</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Xi'an University of Architecture and Technology</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">28</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jay-fuhrman-a5034052/" style="text-decoration:none;color:inherit"><strong>Jay Fuhrman</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">90</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Joint Global Change Research Institute</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">29</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/vishnu-d-rajput-a5084567/" style="text-decoration:none;color:inherit"><strong>Vishnu D. Rajput</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">1</td><td style="padding:0.4rem 0.5rem;text-align:center">82</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Southern Federal University</td><td style="padding:0.4rem 0.5rem">Russia</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">30</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/david-t-ho-a5080281/" style="text-decoration:none;color:inherit"><strong>David T. Ho</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">75</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Hawaiʻi at Mānoa</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">31</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/matthew-j-realff-a5078923/" style="text-decoration:none;color:inherit"><strong>Matthew J. Realff</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">37</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#2a7fa8;color:#fff">DAC</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Georgia Institute of Technology</td><td style="padding:0.4rem 0.5rem">United States</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">32</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/sasha-wilson-a5073578/" style="text-decoration:none;color:inherit"><strong>Sasha Wilson</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">6</td><td style="padding:0.4rem 0.5rem;text-align:center">68</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">University of Alberta</td><td style="padding:0.4rem 0.5rem">Canada</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">33</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/sabine-fuss-a5011197/" style="text-decoration:none;color:inherit"><strong>Sabine Fuss</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">65</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Potsdam Institute for Climate Impact Research</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">34</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yong-sik-ok-a5053298/" style="text-decoration:none;color:inherit"><strong>Yong Sik Ok</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">81</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Korea University</td><td style="padding:0.4rem 0.5rem">South Korea</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">35</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/christian-breyer-a5078913/" style="text-decoration:none;color:inherit"><strong>Christian Breyer</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">63</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Lappeenranta-Lahti University of Technology</td><td style="padding:0.4rem 0.5rem">Finland</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">36</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/eilhann-e-kwon-a5076854/" style="text-decoration:none;color:inherit"><strong>Eilhann E. Kwon</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">55</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Hanyang University</td><td style="padding:0.4rem 0.5rem">South Korea</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">37</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/eder-c-lima-a5011032/" style="text-decoration:none;color:inherit"><strong>Éder C. Lima</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">68</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Universidade Federal do Rio Grande do Sul</td><td style="padding:0.4rem 0.5rem">Brazil</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">38</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/yunting-fang-a5012369/" style="text-decoration:none;color:inherit"><strong>Yunting Fang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">94</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Chinese Academy of Sciences</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">39</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/julia-pongratz-a5054849/" style="text-decoration:none;color:inherit"><strong>Julia Pongratz</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">80</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Ludwig-Maximilians-Universität München</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">40</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/wilfried-rickels-a5020112/" style="text-decoration:none;color:inherit"><strong>Wilfried Rickels</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">50</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Kiel Institute for the World Economy</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">41</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/christine-merk-a5135538/" style="text-decoration:none;color:inherit"><strong>Christine Merk</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">52</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Kiel Institute for the World Economy</td><td style="padding:0.4rem 0.5rem">Germany</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">42</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jongseong-kug-a5091389/" style="text-decoration:none;color:inherit"><strong>Jong‐Seong Kug</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">53</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Seoul National University</td><td style="padding:0.4rem 0.5rem">South Korea</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">43</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/shengsen-wang-a5001287/" style="text-decoration:none;color:inherit"><strong>Shengsen Wang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">1</td><td style="padding:0.4rem 0.5rem;text-align:center">59</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Yangzhou University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">44</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/hailong-wang-a5100367/" style="text-decoration:none;color:inherit"><strong>Hailong Wang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">4</td><td style="padding:0.4rem 0.5rem;text-align:center">79</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Foshan University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">45</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/shengdao-shan-a5110527/" style="text-decoration:none;color:inherit"><strong>Shengdao Shan</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">82</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Zhejiang University of Science and Technology</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">46</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/ke-sun-a5066774/" style="text-decoration:none;color:inherit"><strong>Ke Sun</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">55</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Beijing Normal University</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">47</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/thomas-gasser-a5062044/" style="text-decoration:none;color:inherit"><strong>Thomas Gasser</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">6</td><td style="padding:0.4rem 0.5rem;text-align:center">77</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">International Institute for Applied Systems Ana…</td><td style="padding:0.4rem 0.5rem">Austria</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">48</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/jorg-schwinger-a5026788/" style="text-decoration:none;color:inherit"><strong>Jörg Schwinger</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">3</td><td style="padding:0.4rem 0.5rem;text-align:center">59</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">NORCE Research AS</td><td style="padding:0.4rem 0.5rem">Norway</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">49</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/zhaofeng-chang-a5003993/" style="text-decoration:none;color:inherit"><strong>Zhaofeng Chang</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">2</td><td style="padding:0.4rem 0.5rem;text-align:center">73</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Kunming University of Science and Technology</td><td style="padding:0.4rem 0.5rem">China</td></tr>
<tr style="border-bottom:1px solid var(--border)"><td style="padding:0.4rem 0.5rem">50</td><td style="padding:0.4rem 0.5rem"><a href="/cdr-researcher-census/researchers/mijndert-van-der-spek-a5062642/" style="text-decoration:none;color:inherit"><strong>Mijndert van der Spek</strong></a></td><td style="padding:0.4rem 0.5rem;text-align:center">5</td><td style="padding:0.4rem 0.5rem;text-align:center">66</td><td style="padding:0.4rem 0.5rem"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#2a7fa8;color:#fff">DAC</span></td><td style="padding:0.4rem 0.5rem;font-size:0.9em">Heriot-Watt University</td><td style="padding:0.4rem 0.5rem">United Kingdom</td></tr>
</tbody></table></div>

---

## Research Communities by CDR Method

A community is a cluster in the co-authorship network: researchers who publish with each other far more than with the rest of the census (Louvain method on the weighted co-author graph). 50 communities were found; the three largest per pathway are shown. Each card names the community's size, the share of its members whose primary pathway is the dominant one, the most common country and institution of its members, and its most connected members among the researchers with a profile page.


## Biochar

<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 47: Biochar, 510 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span> 82% of the members work mainly on Biochar · 30% are based in China · most common institution: Hanyang University</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/weihsin-chen-a5057352/">Wei‐Hsin Chen</a>, <a href="/cdr-researcher-census/researchers/eilhann-e-kwon-a5076854/">Eilhann E. Kwon</a>, <a href="/cdr-researcher-census/researchers/hailong-wang-a5100367/">Hailong Wang</a>, <a href="/cdr-researcher-census/researchers/chengdi-dong-a5015918/">Cheng‐Di Dong</a>, <a href="/cdr-researcher-census/researchers/jorg-rinklebe-a5039520/">Jörg Rinklebe</a> and 5 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 31: Biochar, 504 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span> 77% of the members work mainly on Biochar · 54% are based in India · most common institution: Indian Agricultural Research Institute</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/vishnu-d-rajput-a5084567/">Vishnu D. Rajput</a>, <a href="/cdr-researcher-census/researchers/tatiana-minkina-a5082791/">Tatiana Minkina</a>, <a href="/cdr-researcher-census/researchers/chandra-mohan-mehta-a5008862/">Chandra Mohan Mehta</a> and 7 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 32: Biochar, 430 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#8c5a2b;color:#fff">Biochar</span> 85% of the members work mainly on Biochar · 45% are based in China · most common institution: University of Alberta</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/daniel-cw-tsang-a5076771/">Daniel C.W. Tsang</a>, <a href="/cdr-researcher-census/researchers/yong-sik-ok-a5053298/">Yong Sik Ok</a>, <a href="/cdr-researcher-census/researchers/scott-x-chang-a5086611/">Scott X. Chang</a>, <a href="/cdr-researcher-census/researchers/xinde-cao-a5010856/">Xinde Cao</a>, <a href="/cdr-researcher-census/researchers/mohamed-gamal-eldin-a5037765/">Mohamed Gamal El‐Din</a> and 5 more without a profile page</p>
</div>

## Cross-cutting CDR

<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 3: Cross-cutting CDR, 830 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span> 60% of the members work mainly on Cross-cutting CDR · 15% are based in United Kingdom · most common institution: International Institute for Applied Systems Analysis</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/philippe-ciais-a5070378/">Philippe Ciais</a>, <a href="/cdr-researcher-census/researchers/matthew-gidden-a5012881/">Matthew Gidden</a>, <a href="/cdr-researcher-census/researchers/sabine-fuss-a5011197/">Sabine Fuss</a>, <a href="/cdr-researcher-census/researchers/thomas-gasser-a5062044/">Thomas Gasser</a>, <a href="/cdr-researcher-census/researchers/vassilis-daioglou-a5020000/">Vassilis Daioglou</a> and 5 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 0: Cross-cutting CDR, 562 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span> 33% of the members work mainly on Cross-cutting CDR · 44% are based in United States · most common institution: National Laboratory of the Rockies</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/haewon-mcjeon-a5062879/">Haewon McJeon</a>, <a href="/cdr-researcher-census/researchers/jay-fuhrman-a5034052/">Jay Fuhrman</a>, <a href="/cdr-researcher-census/researchers/david-t-ho-a5080281/">David T. Ho</a>, <a href="/cdr-researcher-census/researchers/jeffrey-dankwa-ampah-a5044399/">Jeffrey Dankwa Ampah</a>, <a href="/cdr-researcher-census/researchers/steven-j-davis-a5021527/">Steven J. Davis</a> and 5 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 65: Cross-cutting CDR, 357 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#a23b72;color:#fff">Cross-cutting CDR</span> 42% of the members work mainly on Cross-cutting CDR · 31% are based in Germany · most common institution: GEOMAR Helmholtz Centre for Ocean Research Kiel</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/andreas-oschlies-a5063745/">Andreas Oschlies</a>, <a href="/cdr-researcher-census/researchers/david-p-keller-a5068205/">David P. Keller</a>, <a href="/cdr-researcher-census/researchers/julia-pongratz-a5054849/">Julia Pongratz</a>, <a href="/cdr-researcher-census/researchers/wilfried-rickels-a5020112/">Wilfried Rickels</a>, <a href="/cdr-researcher-census/researchers/jorg-schwinger-a5026788/">Jörg Schwinger</a> and 5 more without a profile page</p>
</div>

## Ocean CDR

<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 6: Ocean CDR, 442 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span> 82% of the members work mainly on Ocean CDR · 47% are based in United States · most common institution: Pacific Northwest National Laboratory</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/chinmayee-v-subban-a5062579/">Chinmayee V. Subban</a>, <a href="/cdr-researcher-census/researchers/jessica-cross-a5031991/">Jessica Cross</a>, <a href="/cdr-researcher-census/researchers/weijun-cai-a5062468/">Wei‐Jun Cai</a>, <a href="/cdr-researcher-census/researchers/matthew-d-eisaman-a5005365/">Matthew D. Eisaman</a>, <a href="/cdr-researcher-census/researchers/brendan-r-carter-a5008670/">Brendan R. Carter</a> and 5 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 46: Ocean CDR, 425 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span> 76% of the members work mainly on Ocean CDR · 56% are based in China · most common institution: Xiamen University</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/nianzhi-jiao-a5024666/">Nianzhi Jiao</a>, <a href="/cdr-researcher-census/researchers/minhan-dai-a5000330/">Minhan Dai</a>, <a href="/cdr-researcher-census/researchers/jihua-liu-a5100629/">Jihua Liu</a>, <a href="/cdr-researcher-census/researchers/yubin-hu-a5040781/">Yubin Hu</a> and 6 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 37: Ocean CDR, 262 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#1bb5a5;color:#fff">Ocean CDR</span> 41% of the members work mainly on Ocean CDR · 39% are based in United States · most common institution: Woods Hole Oceanographic Institution</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/filip-j-r-meysman-a5039479/">Filip J. R. Meysman</a>, <a href="/cdr-researcher-census/researchers/emily-cox-a5033239/">Emily Cox</a>, <a href="/cdr-researcher-census/researchers/adam-v-subhas-a5048374/">Adam V. Subhas</a>, <a href="/cdr-researcher-census/researchers/astrid-hylen-a5047703/">Astrid Hylén</a>, <a href="/cdr-researcher-census/researchers/zhaohui-aleck-wang-a5031746/">Zhaohui Aleck Wang</a> and 5 more without a profile page</p>
</div>

## Enhanced Weathering

<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 58: Enhanced Weathering, 476 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span> 62% of the members work mainly on Enhanced Weathering · 39% are based in United States · most common institution: Yale University</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/noah-j-planavsky-a5031830/">Noah J. Planavsky</a>, <a href="/cdr-researcher-census/researchers/david-j-beerling-a5073877/">David J. Beerling</a>, <a href="/cdr-researcher-census/researchers/christopher-t-reinhard-a5061963/">Christopher T. Reinhard</a>, <a href="/cdr-researcher-census/researchers/pete-smith-a5028843/">Pete Smith</a>, <a href="/cdr-researcher-census/researchers/rachael-h-james-a5075056/">Rachael H. James</a> and 5 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 17: Enhanced Weathering, 418 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span> 45% of the members work mainly on Enhanced Weathering · 21% are based in Germany · most common institution: University of Antwerp</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/jens-hartmann-a5019869/">Jens Hartmann</a>, <a href="/cdr-researcher-census/researchers/sara-vicca-a5006929/">Sara Vicca</a>, <a href="/cdr-researcher-census/researchers/nikolas-hagemann-a5062868/">Nikolas Hagemann</a>, <a href="/cdr-researcher-census/researchers/arthur-vienne-a5086565/">Arthur Vienne</a>, <a href="/cdr-researcher-census/researchers/claudia-kammann-a5061014/">Claudia Kammann</a> and 5 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 14: Enhanced Weathering, 359 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#5e4fa2;color:#fff">Enhanced Weathering</span> 41% of the members work mainly on Enhanced Weathering · 25% are based in United Kingdom · most common institution: Pacific Northwest National Laboratory</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/phil-renforth-a5011758/">Phil Renforth</a>, <a href="/cdr-researcher-census/researchers/spyros-foteinis-a5057305/">Spyros Foteinis</a>, <a href="/cdr-researcher-census/researchers/mijndert-van-der-spek-a5062642/">Mijndert van der Spek</a>, <a href="/cdr-researcher-census/researchers/liam-a-bullock-a5076444/">Liam A. Bullock</a>, <a href="/cdr-researcher-census/researchers/james-campbell-a5089134/">James Campbell</a> and 5 more without a profile page</p>
</div>

## BECCS

*No research communities detected for BECCS in this dataset.*


## DAC

<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 74: DAC, 350 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#2a7fa8;color:#fff">DAC</span> 56% of the members work mainly on DAC · 48% are based in United States · most common institution: Georgia Institute of Technology</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/matthew-j-realff-a5078923/">Matthew J. Realff</a>, <a href="/cdr-researcher-census/researchers/ryan-p-lively-a5021581/">Ryan P. Lively</a>, <a href="/cdr-researcher-census/researchers/christopher-w-jones-a5052807/">Christopher W. Jones</a>, <a href="/cdr-researcher-census/researchers/dongyeun-koh-a5082658/">Dong‐Yeun Koh</a>, <a href="/cdr-researcher-census/researchers/klaus-s-lackner-a5040701/">Klaus S. Lackner</a> and 5 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 28: DAC, 258 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#2a7fa8;color:#fff">DAC</span> 23% of the members work mainly on DAC · 27% are based in United States · most common institution: North Carolina State University</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/marco-mazzotti-a5038211/">Marco Mazzotti</a>, <a href="/cdr-researcher-census/researchers/william-joe-sagues-a5008564/">William Joe Sagues</a>, <a href="/cdr-researcher-census/researchers/katja-fennel-a5000863/">Katja Fennel</a>, <a href="/cdr-researcher-census/researchers/andre-bardow-a5054788/">André Bardow</a>, <a href="/cdr-researcher-census/researchers/daniel-l-sanchez-a5016864/">Daniel L. Sanchez</a> and 5 more without a profile page</p>
</div>
<div style="background:var(--surface-2);border-radius:8px;padding:1rem 1.2rem;margin:0.8rem 0">
<h3 style="margin:0 0 0.5rem 0;font-size:1em">Community 38: DAC, 226 researchers</h3>
<p style="margin:0 0 0.4rem;font-family:var(--font-sans);font-size:15px;line-height:22px;color:var(--ink)"><span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:600;background:#2a7fa8;color:#fff">DAC</span> 42% of the members work mainly on DAC · 62% are based in United States · most common institution: Lawrence Livermore National Laboratory</p>
<p style="margin:0;font-family:var(--font-sans);font-size:14px;line-height:20px;color:var(--ink-muted)">Most connected members: <a href="/cdr-researcher-census/researchers/benjamin-z-houlton-a5072170/">Benjamin Z. Houlton</a>, <a href="/cdr-researcher-census/researchers/simon-h-pang-a5037709/">Simon H. Pang</a> and 8 more without a profile page</p>
</div>
