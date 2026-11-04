---
title: "Researcher lookup"
description: "Find a researcher in the public top lists of the CDR Researcher Census by name, with a link to the profile page."
url: "/cdr-researcher-census/lookup/"
wide: false
---

Search covers the researchers in the public top lists of the [CDR Researcher Census](/cdr-researcher-census/): the 100 most active and the 100 most cited per pathway worldwide and the 50 of each in Europe, about 590 people with a profile page. Everyone else in the census is counted in aggregates only ([data](/data/researchers/)). Names, institutions and metrics come from [OpenAlex](https://openalex.org/) and [ORCID](https://orcid.org/); corrections and removal: [info@carbon-drawdown.de](mailto:info@carbon-drawdown.de?subject=Census%20correction) ([privacy notice](/privacy/)).

<div class="cd-lookup">
<label class="cd-lookup-label" for="searchInput">Name</label>
<input type="search" id="searchInput" placeholder="Start typing a name, e.g. Planavsky" autocomplete="off" spellcheck="false">
<p class="cd-count" id="countInfo" aria-live="polite">Loading the index…</p>
<ol class="cd-results" id="results" aria-live="polite"></ol>
</div>

<script>
(function () {
  let rows = [], ready = false;
  const input = document.getElementById("searchInput");
  const out = document.getElementById("results");
  const info = document.getElementById("countInfo");
  const TIER = { verified: "verified", confirmed: "confirmed", estimated: "estimated", incomplete: "incomplete" };
  function slugOf(name, id) {
    const base = name.normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^\w\s-]/g, "").trim().replace(/[-\s]+/g, "-").toLowerCase().slice(0, 50).replace(/-+$/, "");
    return base + "-" + (id ? id.split("/").pop().slice(0, 8).toLowerCase() : "unknown");
  }
  fetch("/data/census/search-index.txt?v=20261105").then(r => r.text()).then(txt => {
    rows = txt.trim().split("\n").map(line => {
      const [name, id, country, pathway, h, tier, slug] = line.split("|");
      return { name, id, country: country || "", pathway: pathway || "", h: parseInt(h, 10) || 0, tier: tier || "", slug: slug || slugOf(name, id) };
    });
    ready = true;
    info.textContent = rows.length.toLocaleString("en") + " researchers in the index.";
    if (input.value) search();
  }).catch(() => { info.textContent = "The index did not load. Reload the page to try again."; });
  function esc(s) { const d = document.createElement("div"); d.textContent = s; return d.innerHTML; }
  let timer;
  input.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(search, 120); });
  function search() {
    const q = input.value.trim().toLowerCase();
    if (!ready || q.length < 2) { out.innerHTML = ""; if (ready) info.textContent = rows.length.toLocaleString("en") + " researchers in the index."; return; }
    const words = q.split(/\s+/);
    const hits = [];
    for (const r of rows) {
      const name = r.name.toLowerCase();
      if (!words.every(w => name.includes(w))) continue;
      let score = 0;
      if (name === q) score += 1000; else if (name.startsWith(q)) score += 500;
      else { const last = words[words.length - 1]; const parts = name.split(" "); if (parts[parts.length - 1] === last) score += 300; else if (parts[parts.length - 1].startsWith(last)) score += 200; }
      score += Math.min(r.h, 100);
      hits.push({ r, score });
    }
    hits.sort((a, b) => b.score - a.score);
    const top = hits.slice(0, 20);
    info.textContent = hits.length === 0 ? "No name matches. Try another spelling; only the top-list researchers are in the index." : hits.length + (hits.length === 1 ? " match" : " matches") + (hits.length > 20 ? ", showing 20" : "");
    out.innerHTML = top.map(({ r }) => `<li class="cd-result">
      <a class="cd-result-name" href="/cdr-researcher-census/researchers/${esc(r.slug)}/">${esc(r.name)}</a>
      <span class="cd-result-meta">${esc(r.pathway || "pathway unknown")}${r.country ? " · " + esc(r.country) : ""} · h-index ${r.h}${r.tier ? " · data " + esc(TIER[r.tier] || r.tier) : ""}</span>
      ${r.id ? `<a class="cd-result-ext" href="${esc(r.id)}">OpenAlex</a>` : ""}
    </li>`).join("");
  }
})();
</script>
