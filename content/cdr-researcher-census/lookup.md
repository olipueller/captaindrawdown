---
title: "Researcher Lookup"
description: "Search 112,000+ CDR researchers by name, country, or pathway"
---

<style>
.census-search{max-width:700px;margin:2rem auto}
.census-search input{width:100%;padding:14px 18px;font-size:1.1rem;border:2px solid var(--border);border-radius:8px;background:var(--code-bg);color:var(--primary);outline:none}
.census-search input:focus{border-color:var(--primary)}
.census-search input::placeholder{color:var(--secondary)}
.results{margin-top:1rem}
.result-item{padding:12px 16px;border-bottom:1px solid var(--border);cursor:pointer;display:flex;justify-content:space-between;align-items:center}
.result-item:hover{background:var(--code-bg)}
.result-name{font-weight:600}
.result-meta{font-size:.85rem;color:var(--secondary)}
.result-h{background:var(--code-bg);padding:2px 8px;border-radius:4px;font-size:.8rem;white-space:nowrap}
.profile-card{max-width:700px;margin:2rem auto;border:1px solid var(--border);border-radius:12px;padding:24px;background:var(--code-bg)}
.profile-card h2{margin-top:0}
.profile-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px 24px;margin:16px 0}
.profile-label{color:var(--secondary);font-size:.85rem}
.profile-value{font-weight:500}
.back-link{cursor:pointer;color:var(--primary);margin-bottom:1rem;display:inline-block}
.tier-badge{display:inline-block;padding:2px 8px;border-radius:4px;font-size:.75rem;font-weight:600;margin-left:4px}
.tier-verified{background:#22c55e22;color:#22c55e}
.tier-confirmed{background:#3b82f622;color:#3b82f6}
.tier-estimated{background:#f59e0b22;color:#f59e0b}
.tier-incomplete{background:#6b728022;color:#6b7280}
.count-info{text-align:center;color:var(--secondary);font-size:.9rem;margin-top:8px}
</style>

<blockquote><p><strong>⚠️ Beta</strong> — This census profiles CDR researchers using data from <a href="https://openalex.org/">OpenAlex</a> and <a href="https://orcid.org/">ORCID</a>. Each profile shows its data confidence level. Profiles marked 🟢 Verified are ORCID-confirmed; others are algorithmically assigned and may contain errors. <a href="https://bsky.app/profile/captaindrawdown.bsky.social">Report corrections on Bluesky</a>.</p></blockquote>

<div class="census-search">
<input type="text" id="searchInput" placeholder="Type a researcher name..." autocomplete="off">
<div class="count-info" id="countInfo">Loading researcher profiles...</div>
<div class="results" id="results">&nbsp;</div>
</div>
<div id="profileView" style="display:none">&nbsp;</div>

<script>
let searchData=[], searchReady=false;

fetch("/data/census/search-index.txt?v=2026040901")
  .then(r => r.text())
  .then(txt => {
    searchData = txt.trim().split("\n").map(line => {
      const [name, id, country, pathway, h, tier] = line.split("|");
      return { name, id, country: country||"", pathway: pathway||"", h: parseInt(h)||0, tier: tier||"" };
    });
    searchReady = true;
    document.getElementById("countInfo").textContent =
      searchData.length.toLocaleString() + " researchers loaded. Start typing to search.";
  })
  .catch(() => {
    document.getElementById("countInfo").textContent = "Failed to load data. Try refreshing.";
  });

const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const profileDiv = document.getElementById("profileView");
let debounceTimer;

input.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(doSearch, 150);
});

function getFlagEmoji(cc) {
  if (!cc || cc.length !== 2) return "";
  return String.fromCodePoint(...[...cc.toUpperCase()].map(c => 0x1F1E6 + c.charCodeAt(0) - 65));
}

function escapeHtml(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

function doSearch() {
  const q = input.value.trim().toLowerCase();
  profileDiv.style.display = "none";
  if (!searchReady || q.length < 2) { resultsDiv.innerHTML = ""; return; }

  const matches = [];
  const words = q.split(/\s+/);

  for (const r of searchData) {
    const name = r.name.toLowerCase();
    if (!words.every(w => name.includes(w))) continue;

    let score = 0;
    if (name === q) score += 1000;
    else if (name.startsWith(q)) score += 500;
    else {
      const last = words[words.length - 1];
      const parts = name.split(" ");
      if (parts[parts.length - 1] === last) score += 300;
      else if (parts[parts.length - 1].startsWith(last)) score += 200;
    }
    score += Math.min(r.h, 100);
    matches.push({ ...r, score });
    if (matches.length >= 100) break;
  }

  matches.sort((a, b) => b.score - a.score);
  const top = matches.slice(0, 20);

  if (top.length === 0) {
    resultsDiv.innerHTML = '<div class="result-item"><span class="result-meta">No results found. Try a different spelling.</span></div>';
    return;
  }

  resultsDiv.innerHTML = top.map((r, i) => {
    const flag = r.country ? getFlagEmoji(r.country) + " " : "";
    const tierIcon = { verified: "🟢", confirmed: "🟡", estimated: "🟠", incomplete: "⚪" }[r.tier] || "";
    return `<div class="result-item" onclick="showProfile(${i})">
      <div>
        <span class="result-name">${tierIcon} ${escapeHtml(r.name)}</span><br/>
        <span class="result-meta">${flag}${r.pathway || "Unknown pathway"}</span>
      </div>
      <span class="result-h">h=${r.h}</span>
    </div>`;
  }).join("");

  // Store current results for profile rendering
  window._currentResults = top;
}

function showProfile(idx) {
  const r = window._currentResults[idx];
  if (!r) return;

  resultsDiv.innerHTML = "";
  profileDiv.style.display = "block";

  const flag = r.country ? getFlagEmoji(r.country) : "";
  const tierLabel = { verified: "Verified", confirmed: "Confirmed", estimated: "Estimated", incomplete: "Incomplete" }[r.tier] || r.tier;
  const tierClass = { verified: "tier-verified", confirmed: "tier-confirmed", estimated: "tier-estimated", incomplete: "tier-incomplete" }[r.tier] || "";

  profileDiv.innerHTML = `
    <div class="profile-card">
      <div class="back-link" onclick="profileDiv.style.display='none'; doSearch();">← Back to results</div>
      <h2>${flag} ${escapeHtml(r.name)} <span class="tier-badge ${tierClass}">${tierLabel}</span></h2>
      <div class="profile-grid">
        <div><span class="profile-label">Country</span><br><span class="profile-value">${r.country || "Unknown"}</span></div>
        <div><span class="profile-label">CDR Pathway</span><br><span class="profile-value">${r.pathway || "Unknown"}</span></div>
        <div><span class="profile-label">h-index (CDR)</span><br><span class="profile-value">${r.h}</span></div>
        <div><span class="profile-label">Data Confidence</span><br><span class="profile-value">${tierLabel}</span></div>
      </div>
      <div style="margin-top:16px; font-size:.9rem;">
        <strong>External Links:</strong><br>
        ${r.id ? `<a href="${r.id}" target="_blank" rel="noopener">View on OpenAlex ↗</a>` : ""}
        &nbsp;·&nbsp;
        <a href="https://scholar.google.com/scholar?q=author:${encodeURIComponent(r.name.split(' ').pop())}" target="_blank" rel="noopener">Google Scholar ↗</a>
      </div>
    </div>`;
}
</script>
