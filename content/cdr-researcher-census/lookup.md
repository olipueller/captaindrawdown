---
draft: false
hiddenInHomeList: true
title: "CDR Researcher Lookup"
date: 2026-03-18T03:00:00+01:00
url: "/cdr-researcher-census/lookup/"
description: "Search 122,675 CDR researchers. See what our census found about you — or anyone in the field."
robotsNoIndex: true
layout: "single"
type: "page"
---

<style>
.census-search { max-width: 700px; margin: 2rem auto; }
.census-search input {
    width: 100%;
    padding: 14px 18px;
    font-size: 1.1rem;
    border: 2px solid var(--border);
    border-radius: 8px;
    background: var(--code-bg);
    color: var(--primary);
    outline: none;
}
.census-search input:focus { border-color: var(--primary); }
.census-search input::placeholder { color: var(--secondary); }
.results { margin-top: 1rem; }
.result-item {
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.result-item:hover { background: var(--code-bg); }
.result-name { font-weight: 600; }
.result-meta { font-size: 0.85rem; color: var(--secondary); }
.result-h { 
    background: var(--code-bg); 
    padding: 2px 8px; 
    border-radius: 4px; 
    font-size: 0.8rem;
    white-space: nowrap;
}
.loading { text-align: center; padding: 2rem; color: var(--secondary); }
.profile-card {
    max-width: 700px;
    margin: 2rem auto;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px;
    background: var(--code-bg);
}
.profile-card h2 { margin-top: 0; }
.profile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 24px;
    margin: 16px 0;
}
.profile-label { color: var(--secondary); font-size: 0.85rem; }
.profile-value { font-weight: 500; }
.profile-papers { margin-top: 16px; }
.profile-papers table { width: 100%; font-size: 0.85rem; }
.profile-papers td { padding: 4px 8px; border-bottom: 1px solid var(--border); }
.back-link { cursor: pointer; color: var(--primary); margin-bottom: 1rem; display: inline-block; }
.badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
}
.badge-growing { background: #22c55e22; color: #22c55e; }
.badge-exiting { background: #ef444422; color: #ef4444; }
.badge-stable { background: #3b82f622; color: #3b82f6; }
.badge-entering { background: #a855f722; color: #a855f7; }
.caution {
    background: #f59e0b15;
    border: 1px solid #f59e0b44;
    border-radius: 8px;
    padding: 12px 16px;
    margin: 16px 0;
    font-size: 0.9rem;
}

.tier-badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-left: 4px;
}
.tier-verified { background: #22c55e22; color: #22c55e; }
.tier-confirmed { background: #3b82f622; color: #3b82f6; }
.tier-estimated { background: #f59e0b22; color: #f59e0b; }
.tier-incomplete { background: #6b728022; color: #6b7280; }
.source-info {
    font-size: 0.75rem;
    color: var(--secondary);
    font-style: italic;
    margin-top: 2px;
}
.orcid-cta {
    background: #a6ce3922;
    border: 1px solid #a6ce3966;
    border-radius: 8px;
    padding: 12px 16px;
    margin: 16px 0;
    font-size: 0.9rem;
}
.orcid-cta a { color: #a6ce39; font-weight: 600; }
.count-info { text-align: center; color: var(--secondary); font-size: 0.9rem; margin-top: 8px; }
</style>

> **⚠️ Beta** — This census profiles CDR researchers using data from [OpenAlex](https://openalex.org/) and [ORCID](https://orcid.org/). Each profile shows its data confidence level. Profiles marked 🟢 Verified are ORCID-confirmed; others are algorithmically assigned and may contain errors. [Report corrections on Bluesky](https://bsky.app/profile/captaindrawdown.bsky.social) or update your [ORCID profile](https://orcid.org/) — changes propagate automatically.

<div class="census-search">
  <input type="text" id="searchInput" placeholder="Type a researcher name..." autocomplete="off" />
  <div class="count-info" id="countInfo">Loading 122,675 researcher profiles...</div>
  <div class="results" id="results"></div>
</div>

<div id="profileView" style="display:none;"></div>

<script>
let searchData = [];
let searchReady = false;

// Load search index
fetch('/data/census/search-index.txt?v=2026031908')
  .then(r => r.text())
  .then(text => {
    searchData = text.trim().split('\n').map(line => {
      const [name, id, country, pathway, h, tier] = line.split('|');
      return { name, id, country, pathway, h: parseInt(h) || 0, tier: tier || '' };
    });
    searchReady = true;
    document.getElementById('countInfo').textContent = 
      searchData.length.toLocaleString() + ' researchers loaded. Start typing to search.';
  })
  .catch(err => {
    document.getElementById('countInfo').textContent = 'Failed to load data. Try refreshing.';
  });

const input = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');
const profileDiv = document.getElementById('profileView');
let debounceTimer;

input.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(doSearch, 150);
});

function doSearch() {
  const q = input.value.trim().toLowerCase();
  profileDiv.style.display = 'none';
  
  if (!searchReady || q.length < 2) {
    resultsDiv.innerHTML = '';
    return;
  }
  
  // Search with relevance ranking
  const candidates = [];
  const qParts = q.split(/\s+/);
  for (const item of searchData) {
    const nameLower = item.name.toLowerCase();
    if (!qParts.every(p => nameLower.includes(p))) continue;
    // Score: exact match > starts-with > contains. Bonus for h-index.
    let score = 0;
    if (nameLower === q) score += 1000;  // Exact match
    else if (nameLower.startsWith(q)) score += 500;  // Starts with full query
    else {
      // Check if last name matches (most useful signal)
      const lastQ = qParts[qParts.length - 1];
      const nameParts = nameLower.split(' ');
      if (nameParts[nameParts.length - 1] === lastQ) score += 300;
      else if (nameParts[nameParts.length - 1].startsWith(lastQ)) score += 200;
    }
    score += Math.min(item.h, 100);  // h-index tiebreak (capped)
    candidates.push({...item, score});
    if (candidates.length >= 100) break;  // Pre-filter cap
  }
  // Sort by score descending, take top 20
  candidates.sort((a, b) => b.score - a.score);
  const matches = candidates.slice(0, 20);
  
  if (matches.length === 0) {
    resultsDiv.innerHTML = '<div class="result-item"><span class="result-meta">No results found. Try a different spelling.</span></div>';
    return;
  }
  
  resultsDiv.innerHTML = matches.map(m => {
    const flag = m.country ? getFlagEmoji(m.country) + ' ' : '';
    const tierDot = {'verified':'🟢','confirmed':'🟡','estimated':'🟠','incomplete':'⚪'}[m.tier] || '';
    return `<div class="result-item" onclick="loadProfile('${m.id}')">
      <div>
        <span class="result-name">${tierDot} ${escapeHtml(m.name)}</span><br/>
        <span class="result-meta">${flag}${m.pathway || 'Unknown pathway'}</span>
      </div>
      <span class="result-h">h=${m.h}</span>
    </div>`;
  }).join('');
}

async function loadProfile(authorId) {
  resultsDiv.innerHTML = '';
  profileDiv.style.display = 'block';
  profileDiv.innerHTML = '<div class="loading">Loading profile...</div>';
  
  const prefix = authorId.substring(0, 4).toLowerCase();
  try {
    const resp = await fetch(`/data/census/authors/${prefix}.json`);
    const shard = await resp.json();
    const data = shard[authorId];
    
    if (!data) {
      profileDiv.innerHTML = '<div class="loading">Profile not found.</div>';
      return;
    }
    
    renderProfile(authorId, data);
  } catch (err) {
    profileDiv.innerHTML = '<div class="loading">Error loading profile. Try again.</div>';
  }
}

function renderProfile(id, d) {
  const trajBadge = {
    'Growing': 'badge-growing',
    'Exiting': 'badge-exiting', 
    'Stable': 'badge-stable',
    'Entering': 'badge-entering',
  }[d.trajectory] || '';
  
  const orcidLink = d.orcid 
    ? `<a href="${d.orcid}" target="_blank" rel="noopener">ORCID ↗</a>` 
    : 'Not available';
  
  const oaLink = `<a href="https://openalex.org/${id}" target="_blank" rel="noopener">OpenAlex ↗</a>`;
  
  const scholarLink = `<a href="https://scholar.google.com/scholar?q=author:${encodeURIComponent(d.name.split(' ').pop())}" target="_blank" rel="noopener">Google Scholar ↗</a>`;
  
  let papersHtml = '';
  if (d.papers && d.papers.length > 0) {
    papersHtml = `<div class="profile-papers">
      <h3>CDR Papers in Our Database (${d.papers.length}${d.papers.length >= 15 ? '+' : ''})</h3>
      <table>
        <tr><th>Year</th><th>Title</th><th>Pathway</th><th>Position</th></tr>
        ${d.papers.map(p => {
          const oaUrl = `https://openalex.org/W${p.oa.replace('W','')}`;
          return `<tr>
            <td>${p.y || '?'}</td>
            <td><a href="${oaUrl}" target="_blank" rel="noopener">${escapeHtml(p.t)}</a></td>
            <td>${p.w || ''}</td>
            <td>${p.pos || ''}</td>
          </tr>`;
        }).join('')}
      </table>
    </div>`;
  }
  
  profileDiv.innerHTML = `
    <div class="profile-card">
      <span class="back-link" onclick="profileDiv.style.display='none'; input.focus();">← Back to search</span>
      <h2>${escapeHtml(d.name)}</h2>
      ${d.aliases && d.aliases.length ? '<div style="color:var(--secondary);font-size:0.9rem;margin-top:-8px;margin-bottom:8px;">Also indexed as: ' + d.aliases.map(a => escapeHtml(a)).join(', ') + '</div>' : ''}
      
      <div class="caution">
        ⚠️ This profile was auto-generated from OpenAlex + ORCID data. 
        ${d.tier === 'verified' ? 'Institution and country are <strong>ORCID-verified</strong>.' : 
          d.tier === 'confirmed' ? 'Identity confirmed via ORCID. Institution from publication records (may be outdated).' :
          d.tier === 'estimated' ? 'No ORCID linked. All data from OpenAlex publication affiliations (~80% accurate).' :
          'Insufficient data for reliable profiling.'}
        <a href="https://bsky.app/profile/captaindrawdown.bsky.social" target="_blank">Report corrections</a>.
      </div>
      ${d.tier !== 'verified' ? '<div class="orcid-cta">' + 
        (d.orcid ? '🔗 You have an ORCID but your employment data is incomplete. <a href="' + d.orcid + '" target="_blank">Update your ORCID profile</a> — institution and country changes propagate to this census and all major research databases.' 
        : '🆔 No ORCID linked to this profile. <a href="https://orcid.org/register" target="_blank">Claim your free ORCID</a> (2 min) — it makes you findable across all research databases and improves your data here.') + 
        '</div>' : ''}
      
      <div class="profile-grid">
        <div>
          <span class="profile-label">Institution ${getTierBadge(d.tier)}</span><br/>
          <span class="profile-value">${escapeHtml(d.inst || 'Unknown')}</span>
          ${d.inst_source ? '<div class="source-info">Source: ' + d.inst_source + '</div>' : ''}
        </div>
        <div>
          <span class="profile-label">Country</span><br/>
          <span class="profile-value">${d.country ? getFlagEmoji(d.country) + ' ' + d.country : 'Unknown'}</span>
          ${d.country_source ? '<div class="source-info">Source: ' + d.country_source + '</div>' : ''}
        </div>
        <div><span class="profile-label">h-index</span><br/><span class="profile-value">${d.h}</span></div>
        <div><span class="profile-label">Total Citations</span><br/><span class="profile-value">${(d.cited || 0).toLocaleString()}</span></div>
        <div><span class="profile-label">Total Works</span><br/><span class="profile-value">${(d.works || 0).toLocaleString()}</span></div>
        <div><span class="profile-label">CDR Papers Found</span><br/><span class="profile-value">${d.papers ? d.papers.length : 0}${d.papers && d.papers.length >= 15 ? '+' : ''}</span></div>
        <div><span class="profile-label">First CDR Publication</span><br/><span class="profile-value">${d.first_year || 'Unknown'}</span></div>
        <div><span class="profile-label">Primary CDR Pathway</span><br/><span class="profile-value">${d.pathway || 'Unknown'}</span></div>
        <div><span class="profile-label">Career Stage</span><br/><span class="profile-value">${d.stage || 'Unknown'}</span></div>
        <div><span class="profile-label">CDR Commitment</span><br/><span class="profile-value">${d.commitment || 'Unknown'}${d.commitment_pct != null ? ' (' + d.commitment_pct + '%)' : ''}</span></div>
        <div><span class="profile-label">Trajectory</span><br/><span class="profile-value"><span class="badge ${trajBadge}">${d.trajectory || 'Unknown'}</span></span></div>
        <div><span class="profile-label">Sector</span><br/><span class="profile-value">${d.sector || 'Unknown'}</span></div>
      </div>
      
      <div style="margin-top: 16px; font-size: 0.9rem;">
        <strong>Verify:</strong> ${orcidLink} · ${oaLink} · ${scholarLink}
      </div>
      
      ${papersHtml}
      
      <div class="caution" style="margin-top: 16px;">
        <strong>What do these fields mean?</strong><br/>
        • <strong>CDR Commitment</strong>: % of total publications related to CDR (Dabbler <10%, Part-time 10-25%, Focused 25-50%, Pure CDR >50%)<br/>
        • <strong>Trajectory</strong>: Is your CDR output growing, stable, or declining compared to previous years?<br/>
        • <strong>Career Stage</strong>: Based on h-index and years since first publication<br/>
        • <strong>Primary Pathway</strong>: The CDR method you publish about most often
      </div>
    </div>
  `;
}

function getFlagEmoji(cc) {
  if (!cc || cc.length !== 2) return '';
  return String.fromCodePoint(...[...cc.toUpperCase()].map(c => 0x1F1E6 - 65 + c.charCodeAt(0)));
}

function escapeHtml(s) {
  const div = document.createElement('div');
  div.textContent = s;
  return div.innerHTML;
}
</script>
