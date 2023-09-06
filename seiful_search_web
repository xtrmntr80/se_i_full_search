const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  const query = 'site:asahi.com OR site:yomiuri.co.jp OR site:kyoiku-press.net OR site:nikkei.com OR site:newspicks.com OR site:kyodo.co.jp OR site:nhk.or.jp OR site:kodomo-np.co.jp ' + searchTerm;
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
