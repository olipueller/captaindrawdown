(function() {
  let companies = [];
  fetch('/data/companies.json').then(r => r.json()).then(data => {
    companies = data;
    populateFilters(data);
    renderCompanies(data);
  });

  function populateFilters(data) {
    const cats = [...new Set(data.map(c => c.category).filter(Boolean))].sort();
    const countries = [...new Set(data.map(c => c.country).filter(Boolean))].sort();
    const catSel = document.getElementById('dir-cat');
    const coSel = document.getElementById('dir-country');
    if (catSel) cats.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; catSel.appendChild(o); });
    if (coSel) countries.forEach(c => { const o = document.createElement('option'); o.value = c; o.textContent = c; coSel.appendChild(o); });
  }

  function renderCompanies(list) {
    const el = document.getElementById('company-list');
    const cnt = document.getElementById('result-count');
    if (!el) return;
    const show = list.slice(0, 300);
    el.innerHTML = show.map(c => {
      const health = (c.health_tier || '').includes('🟢') ? '🟢' : (c.health_tier || '').includes('🟠') ? '🟠' : (c.health_tier || '').includes('🔴') ? '🔴' : '';
      const emp = c.employee_count || c.employee_count_inferred;
      const meta = [c.country, emp ? `~${emp} emp` : ''].filter(Boolean).join(' · ');
      return '<div class="company-card"><h3><a href="/directory/' + slugify(c.name) + '/">' + (c.name||'') + '</a> <span class="health-badge">' + health + '</span></h3>' +
        '<div class="meta"><span class="pathway-badge">' + (c.category||'') + '</span> ' + meta + '</div></div>';
    }).join('');
    if (cnt) cnt.textContent = list.length > 300 ? `Showing 300 of ${list.length}. Use search to narrow.` : `${list.length} companies`;
  }

  function slugify(t) { return (t||'').toLowerCase().replace(/[^\w\s-]/g,'').replace(/[\s_]+/g,'-').substring(0,80); }

  window.filterDir = function() {
    const q = (document.getElementById('dir-search')?.value || '').toLowerCase();
    const cat = document.getElementById('dir-cat')?.value || '';
    const co = document.getElementById('dir-country')?.value || '';
    const h = document.getElementById('dir-health')?.value || '';
    const filtered = companies.filter(c => {
      if (q && !(c.name||'').toLowerCase().includes(q) && !(c.description||'').toLowerCase().includes(q)) return false;
      if (cat && c.category !== cat) return false;
      if (co && c.country !== co) return false;
      if (h === 'active' && !(c.health_tier||'').includes('🟢')) return false;
      if (h === 'suspect' && !(c.health_tier||'').includes('🟠')) return false;
      if (h === 'dead' && !(c.health_tier||'').includes('🔴')) return false;
      return true;
    });
    renderCompanies(filtered);
  };
})();
