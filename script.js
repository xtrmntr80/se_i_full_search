const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const siteSelection = document.getElementById('site-selection');
const searchHistory = document.getElementById('search-history');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  const selectedSites = Array.from(siteSelection.selectedOptions).map(option => option.value);
  
  selectedSites.forEach(site => {
    const query = `site:${site} ${searchTerm}`;
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    
    // 履歴機能の追加
    searchHistory.innerText += `${searchTerm} (${site}), `;
    
    openNewTab(searchUrl);
  });
});

function openNewTab(url) {
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
