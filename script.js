// script.js

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const crossSiteSearchCheckbox = document.getElementById('cross-site-search');
const checkboxesContainer = document.getElementById('checkboxes-container');

// サイトのリストを配列として定義
const sites = Array.from(checkboxesContainer.querySelectorAll('input[type="checkbox"]:not(#cross-site-search)'))
  .map(checkbox => checkbox.value);

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;

  let selectedSites;
  if (crossSiteSearchCheckbox.checked) {
    selectedSites = sites;
  } else {
    selectedSites = Array.from(checkboxesContainer.querySelectorAll('input[type="checkbox"]:checked:not(#cross-site-search)'))
      .map(checkbox => checkbox.value);
  }

  const siteQueries = selectedSites.map(site => `site:${site}`).join(' OR ');
  const query = `${siteQueries} ${searchTerm}`;
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
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

crossSiteSearchCheckbox.addEventListener('change', function() {
  if (crossSiteSearchCheckbox.checked) {
    Array.from(checkboxesContainer.querySelectorAll('input[type="checkbox"]:not(#cross-site-search)')).forEach(checkbox => {
      checkbox.checked = false;
    });
  }
});

checkboxesContainer.addEventListener('change', function() {
  if (Array.from(checkboxesContainer.querySelectorAll('input[type="checkbox"]:checked:not(#cross-site-search)')).length) {
    crossSiteSearchCheckbox.checked = false;
  }
});
