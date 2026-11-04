/* Captain Drawdown's CDR Databases — directory table (relaunch 2026-11).
   The rows are server-rendered (lib/directory_index.py); this script only
   filters and sorts them in place, keeps the count current, and draws the
   country map from the rows. No fetch, no cap. */
(function () {
  'use strict';
  const table = document.getElementById('company-table');
  if (!table) return;
  const tbody = table.tBodies[0];
  const rows = Array.from(tbody.rows);
  const q = document.getElementById('dir-q');
  const selPathway = document.getElementById('dir-pathway');
  const selCountry = document.getElementById('dir-country');
  const selStatus = document.getElementById('dir-status');
  const selSize = document.getElementById('dir-size');
  const count = document.getElementById('dir-count');
  const empty = document.getElementById('dir-empty');
  const STATUS_ORDER = { active: 0, moderate: 1, suspect: 2, dead: 3 };
  let sortKey = 'name', sortDir = 1;

  function apply() {
    const term = (q && q.value || '').trim().toLowerCase();
    const pw = selPathway && selPathway.value || '';
    const co = selCountry && selCountry.value || '';
    const st = selStatus && selStatus.value || '';
    const sz = selSize && selSize.value || '';
    let shown = 0;
    for (const r of rows) {
      const d = r.dataset;
      const ok = (!term || d.text.indexOf(term) !== -1) && (!pw || d.pathway === pw) && (!co || d.country === co)
        && (!st || d.status === st) && (!sz || d.size === sz);
      r.hidden = !ok;
      if (ok) shown++;
    }
    if (count) count.textContent = shown === rows.length ? rows.length.toLocaleString('en') + ' companies'
      : shown.toLocaleString('en') + ' of ' + rows.length.toLocaleString('en') + ' companies';
    if (empty) empty.hidden = shown > 0;
    const params = new URLSearchParams();
    if (term) params.set('q', term);
    if (pw) params.set('pathway', pw);
    if (co) params.set('country', co);
    if (st) params.set('status', st);
    if (sz) params.set('size', sz);
    const qs = params.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
  }

  function keyOf(r) {
    const d = r.dataset;
    if (sortKey === 'size') return parseInt(d.size, 10) || 9;
    if (sortKey === 'status') return STATUS_ORDER[d.status] ?? 9;
    if (sortKey === 'method') return (r.cells[2].textContent || '').toLowerCase();
    return (d[sortKey] || '').toLowerCase();
  }

  function sort() {
    const sorted = rows.slice().sort((a, b) => {
      const ka = keyOf(a), kb = keyOf(b);
      if (ka < kb) return -sortDir;
      if (ka > kb) return sortDir;
      return a.dataset.name < b.dataset.name ? -1 : 1;
    });
    for (const r of sorted) tbody.appendChild(r);
    for (const th of table.tHead.rows[0].cells) {
      if (!th.dataset.sort) continue;
      th.setAttribute('aria-sort', th.dataset.sort === sortKey ? (sortDir === 1 ? 'ascending' : 'descending') : 'none');
    }
  }

  for (const th of table.tHead.rows[0].cells) {
    if (!th.dataset.sort) continue;
    th.tabIndex = 0;
    th.addEventListener('click', () => {
      if (sortKey === th.dataset.sort) sortDir = -sortDir; else { sortKey = th.dataset.sort; sortDir = 1; }
      sort();
    });
    th.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); th.click(); } });
  }
  for (const el of [q, selPathway, selCountry, selStatus, selSize]) {
    if (el) el.addEventListener('input', apply);
  }

  // Deep links: /directory/?country=Germany&status=active
  const init = new URLSearchParams(location.search);
  if (q && init.get('q')) q.value = init.get('q');
  if (selPathway && init.get('pathway')) selPathway.value = init.get('pathway');
  if (selCountry && init.get('country')) selCountry.value = init.get('country');
  if (selStatus && init.get('status')) selStatus.value = init.get('status');
  if (selSize && init.get('size')) selSize.value = init.get('size');
  apply();

  // Country map: counts per country from the rows, world-110m topojson.
  const mapEl = document.getElementById('cd-map');
  if (!mapEl) return;
  const ISO_NUM = { 840: 'United States', 826: 'United Kingdom', 276: 'Germany', 124: 'Canada', 752: 'Sweden', '036': 'Australia', 250: 'France', 756: 'Switzerland', 356: 'India', 528: 'Netherlands', 156: 'China', 392: 'Japan', '076': 'Brazil', 410: 'South Korea', 578: 'Norway', 208: 'Denmark', 246: 'Finland', '040': 'Austria', 380: 'Italy', 724: 'Spain', 372: 'Ireland', '056': 'Belgium', 376: 'Israel', 404: 'Kenya', 710: 'South Africa', 702: 'Singapore', 360: 'Indonesia', 554: 'New Zealand', 152: 'Chile', 484: 'Mexico', 352: 'Iceland', 620: 'Portugal', 233: 'Estonia', 203: 'Czech Republic', 616: 'Poland', 792: 'Turkey', 784: 'UAE', 682: 'Saudi Arabia', 512: 'Oman', 288: 'Ghana', 566: 'Nigeria', 608: 'Philippines', 764: 'Thailand', 704: 'Vietnam', 170: 'Colombia', '032': 'Argentina', 604: 'Peru', 504: 'Morocco', 818: 'Egypt', 834: 'Tanzania', 800: 'Uganda', 646: 'Rwanda', 508: 'Mozambique', 384: 'Ivory Coast', 400: 'Jordan', '048': 'Bahrain', 634: 'Qatar', 442: 'Luxembourg', 470: 'Malta', 300: 'Greece', 642: 'Romania', 100: 'Bulgaria', 348: 'Hungary', 703: 'Slovakia', 191: 'Croatia', 440: 'Lithuania', 428: 'Latvia', 705: 'Slovenia', 196: 'Cyprus', 158: 'Taiwan', 643: 'Russia', 804: 'Ukraine', 586: 'Pakistan', '050': 'Bangladesh', 116: 'Cambodia', 104: 'Myanmar', 458: 'Malaysia', 524: 'Nepal', 144: 'Sri Lanka', 231: 'Ethiopia', 894: 'Zambia', 716: 'Zimbabwe', 454: 'Malawi', 120: 'Cameroon', 686: 'Senegal', 788: 'Tunisia', 862: 'Venezuela', 218: 'Ecuador', 858: 'Uruguay', 600: 'Paraguay', '068': 'Bolivia', 188: 'Costa Rica', 591: 'Panama', 320: 'Guatemala', 214: 'Dominican Republic', 388: 'Jamaica', 398: 'Kazakhstan', 268: 'Georgia', '051': 'Armenia', '031': 'Azerbaijan', 364: 'Iran', 368: 'Iraq', 414: 'Kuwait', 422: 'Lebanon', 496: 'Mongolia', 408: 'North Korea', '008': 'Albania', '070': 'Bosnia and Herzegovina', 688: 'Serbia', 807: 'North Macedonia', 499: 'Montenegro', 112: 'Belarus', 498: 'Moldova', 304: 'Greenland' };
  const counts = {};
  for (const r of rows) { const c = r.dataset.country; if (c) counts[c] = (counts[c] || 0) + 1; }
  const max = Math.max(1, ...Object.values(counts));
  const tip = document.getElementById('cd-map-tip');
  const css = getComputedStyle(document.documentElement);
  const petrol = (css.getPropertyValue('--petrol') || '#0e5a6a').trim();
  const line = (css.getPropertyValue('--line') || '#d8d3c8').trim();
  const surface = (css.getPropertyValue('--surface-2') || '#eef2f2').trim();

  function decode(topo, obj) {
    const t = topo.transform, arcs = topo.arcs;
    function arc(i) {
      const a = arcs[i < 0 ? ~i : i], out = []; let x = 0, y = 0;
      for (const p of a) { x += p[0]; y += p[1]; out.push([x * t.scale[0] + t.translate[0], y * t.scale[1] + t.translate[1]]); }
      if (i < 0) out.reverse();
      return out;
    }
    function ring(ids) { const out = []; for (const i of ids) { const a = arc(i); if (out.length) a.shift(); out.push(...a); } return out; }
    function geom(g) {
      if (g.type === 'Polygon') return { type: 'Polygon', coordinates: g.arcs.map(ring) };
      if (g.type === 'MultiPolygon') return { type: 'MultiPolygon', coordinates: g.arcs.map(p => p.map(ring)) };
      return g;
    }
    return obj.geometries.map(g => ({ id: g.id, geometry: geom(g) }));
  }

  fetch('/data/world-110m.json').then(r => r.json()).then(topo => {
    const W = 960, H = 440;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'World map of company counts per country');
    const proj = (lon, lat) => [(lon + 180) / 360 * W, (84 - lat) / 174 * H];
    const path = coords => {
      let out = '', prev = null;
      for (const p of coords) {
        const [x, y] = proj(p[0], p[1]);
        const jump = prev !== null && Math.abs(p[0] - prev) > 180; // antimeridian wrap
        out += (out === '' || jump ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1);
        prev = p[0];
      }
      return out + 'Z';
    };
    const d = g => g.type === 'Polygon' ? g.coordinates.map(path).join(' ') : g.coordinates.map(poly => poly.map(path).join(' ')).join(' ');
    for (const f of decode(topo, topo.objects.countries)) {
      if (String(f.id).padStart(3, '0') === '010') continue; // Antarctica
      const name = ISO_NUM[f.id];
      const n = name ? (counts[name] || 0) : 0;
      const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      p.setAttribute('d', d(f.geometry));
      p.setAttribute('stroke', line);
      p.setAttribute('stroke-width', '0.5');
      if (n > 0) {
        p.setAttribute('fill', petrol);
        p.setAttribute('fill-opacity', (0.25 + 0.75 * Math.sqrt(n / max)).toFixed(2));
        p.style.cursor = 'pointer';
        p.addEventListener('mousemove', e => {
          if (!tip) return;
          const b = mapEl.getBoundingClientRect();
          tip.hidden = false;
          tip.textContent = name + ': ' + n + (n === 1 ? ' company' : ' companies');
          tip.style.left = (e.clientX - b.left + 12) + 'px';
          tip.style.top = (e.clientY - b.top - 28) + 'px';
        });
        p.addEventListener('mouseleave', () => { if (tip) tip.hidden = true; });
        p.addEventListener('click', () => {
          if (selCountry) { selCountry.value = name; apply(); }
          document.getElementById('all-companies')?.scrollIntoView({ behavior: 'smooth' });
        });
      } else {
        p.setAttribute('fill', surface);
      }
      svg.appendChild(p);
    }
    mapEl.insertBefore(svg, tip);
  }).catch(() => { mapEl.hidden = true; });
})();
