const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

// サイトのリストを配列として定義
const sites = [
  "baby-calendar.jp", "kidsna.com", "conobie.jp", 
  "h-navi.jp", "j-depo.com", "feature.cozre.jp",
  "hugkum.sho.jp", "huffingtonpost.jp", "ure.pia.co.jp",
  "asahi.com", "kyoiku.sho.jp", "juken-mikata.net",
  "mamari.jp", "sensei-no-gakkou.com", "kyoiku-press.co.jp",
  "megaphone.school-voice-pj.org", "inter-edu.com", "jobrainbow.jp",
  "sdgs.media", "imakosochihou.com", "fnn.jp",
  "meiiku.com", "yomiuri.co.jp", "kyobun.co.jp",
  "edujump.net", "ikuhaku.com"
];

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  const siteQueries = sites.map(site => `site:${site}`).join(' OR ');
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

document.getElementById('search-button').addEventListener('click', function() {
    var selectedSites = [];
    var checkboxes = document.querySelectorAll('#checkboxes-container input[type="checkbox"]:checked');
    checkboxes.forEach(function(checkbox) {
        selectedSites.push(checkbox.value);
    });

    var searchQuery = document.getElementById('search-input').value;
    // ここでselectedSitesとsearchQueryを使用して検索クエリを実行する
});

