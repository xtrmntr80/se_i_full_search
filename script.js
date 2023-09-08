<!-- script.js -->


const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const siteSelection = document.getElementById('site-selection');
const searchHistory = document.getElementById('search-history');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  let selectedSites = Array.from(siteSelection.selectedOptions).map(option => option.value);

  // If "all sites" option is selected, remove it from the array and use all other sites
  if (selectedSites.includes('all')) {
    selectedSites = Array.from(siteSelection.options).map(option => option.value).filter(site => site !== 'all');
  }

  selectedSites.forEach(site => {
    const query = `site:${site} ${searchTerm}`;
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    
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
