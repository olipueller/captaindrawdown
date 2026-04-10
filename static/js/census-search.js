// Census search — loads full search-index.txt (pipe-delimited) and filters client-side
(function() {
  let data = [];
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  input.disabled = true;
  input.placeholder = 'Loading 112K researchers...';

  fetch('/data/census/search-index.txt?v=2026040901')
    .then(r => r.text())
    .then(txt => {
      data = txt.trim().split('\n').map(line => {
        const [name, openalex, country, pathway, papers, status] = line.split('|');
        return { name, openalex, country: country || '', pathway: pathway || '', papers: parseInt(papers) || 0, status: status || '' };
      });
      input.disabled = false;
      input.placeholder = `Search ${data.length.toLocaleString()} researchers by name, country, or pathway...`;
    })
    .catch(() => { input.placeholder = 'Failed to load researcher data'; });

  input.addEventListener('input', function() {
    const q = this.value.toLowerCase();
    if (q.length < 2) { results.innerHTML = ''; return; }
    const matches = data.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q) ||
      a.pathway.toLowerCase().includes(q)
    ).slice(0, 30);
    if (matches.length === 0) {
      results.innerHTML = '<div style="padding:12px;color:#888;">No researchers found.</div>';
      return;
    }
    results.innerHTML = matches.map(a =>
      `<div style="padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.1);">
        <strong>${a.name}</strong> — ${a.country || '?'}
        ${a.pathway ? ' — ' + a.pathway : ''}
        (${a.papers} papers, ${a.status})
        ${a.openalex ? ' <a href="' + a.openalex + '" target="_blank" style="color:#6ba3d6;">OpenAlex</a>' : ''}
      </div>`
    ).join('');
  });
})();
