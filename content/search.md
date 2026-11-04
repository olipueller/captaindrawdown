---
title: "Search"
description: "Search every company, researcher profile, data page and article on Captain Drawdown's CDR Databases."
url: "/search/"
hidemeta: true
ShowShareButtons: false
---

<link href="/pagefind/pagefind-ui.css" rel="stylesheet">
<script src="/pagefind/pagefind-ui.js"></script>
<div id="search" class="cd-search"></div>
<script>
window.addEventListener('DOMContentLoaded', function () {
  if (window.PagefindUI) {
    new PagefindUI({ element: "#search", showSubResults: true, showImages: false, pageSize: 10,
      translations: { placeholder: "Company, researcher, pathway, country…", zero_results: "Nothing found for [SEARCH_TERM]." } });
    var q = new URLSearchParams(location.search).get("q");
    if (q) { var i = document.querySelector("#search input"); if (i) { i.value = q; i.dispatchEvent(new Event("input")); } }
  } else {
    document.getElementById("search").innerHTML = '<p class="cd-note-line">The search index is built on deploy; it is not available in a local preview.</p>';
  }
});
</script>
