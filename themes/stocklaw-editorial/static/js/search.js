// StocKlaw client-side search using Hugo's JSON output
(function() {
  let searchIndex = null;
  const input = document.getElementById('search-input');
  const resultsContainer = document.getElementById('search-results');
  if (!input || !resultsContainer) return;

  // Determine lang and base path from URL
  const path = window.location.pathname;
  const lang = path.includes('/en/') ? 'en' : 'zh';
  const base = path.substring(0, path.indexOf('/en/') !== -1 ? path.indexOf('/en/') : path.indexOf('/', 1)) || '';
  const indexUrl = lang === 'en' ? base + '/en/index.json' : base + '/index.json';

  async function loadIndex() {
    if (searchIndex) return searchIndex;
    try {
      const res = await fetch(indexUrl);
      if (!res.ok) return [];
      searchIndex = await res.json();
      return searchIndex;
    } catch { return []; }
  }

  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<mark>$1</mark>');
  }

  function renderResults(items, query) {
    if (!items.length) {
      resultsContainer.innerHTML = '<p style="color:var(--text-muted);padding:1rem 0;">No results.</p>';
      return;
    }
    resultsContainer.innerHTML = items.map(item => `
      <article class="post-card">
        <div class="post-card-meta">
          <time>${item.date || ''}</time>
          ${item.section ? `<span class="post-category">${item.section}</span>` : ''}
        </div>
        <h3 class="post-card-title"><a href="${item.permalink}">${highlight(item.title, query)}</a></h3>
        ${item.description ? `<p class="post-card-desc">${highlight(item.description, query)}</p>` : ''}
      </article>
    `).join('');
  }

  let debounce;
  input.addEventListener('input', function() {
    clearTimeout(debounce);
    debounce = setTimeout(async () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        resultsContainer.style.display = 'none';
        // Show original list if on list page
        const origList = document.querySelector('.post-list:not(#search-results)');
        if (origList) origList.style.display = '';
        return;
      }
      const index = await loadIndex();
      const filtered = index.filter(item => {
        const haystack = [item.title, item.description, item.content, item.section, ...(item.tags || [])].join(' ').toLowerCase();
        return q.split(/\s+/).every(term => haystack.includes(term));
      }).slice(0, 20);
      // Hide original list, show results
      const origList = document.querySelector('.post-list:not(#search-results)');
      if (origList) origList.style.display = 'none';
      resultsContainer.style.display = '';
      renderResults(filtered, q);
    }, 200);
  });
})();
