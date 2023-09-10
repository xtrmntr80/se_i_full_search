const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const allSitesCheckbox = document.getElementById('all-sites');
const checkboxesContainer = document.getElementById('checkboxes-container');

// サイトのリストを配列として定義
const sites = [
  // ... 同様のサイトのリスト...
];

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;

  let selectedSites;
  if (allSitesCheckbox.checked) {
    selectedSites = sites;
  } else {
    selectedSites = Array.from(checkboxesContainer.querySelectorAll('input[type="checkbox"]:checked'))
      .map(checkbox => checkbox.name);
  }

  const siteQueries = selectedSites.map(site => `site:${site}`).join(' OR ');
  const query = `${siteQueries} ${searchTerm}`;
  const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  openNewTab(searchUrl);
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

function deselectOthers() {
  if (allSitesCheckbox.checked) {
    Array.from(checkboxesContainer.querySelectorAll('input[type="checkbox"]:not(#all-sites)')).forEach(checkbox => {
      checkbox.checked = false;
    });
  }
}
