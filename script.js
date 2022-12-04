var weatherApiRootUrl = 'https://api.openweathermap.org';
var APIKey = "977e39b7fac766a952c34f79bfdf663f";

var searchForm = document.querySelector
var searchInput = document.querySelector('#search-input');
var todayContainer = document.querySelector('#today');
var searchHistoryContainer = document.querySelector('#history');

function renderSearchHistory(){
    searchHistoryContainer.innerHTML = '';
    for (var i = searchHistory.length - 1; >=0; 1--){
        var btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-controls', 'today forecast');
        btn.classList.add('history-btn', 'btn-history');
        btn.setAttribute('data-search', searchHistory[i]);
        btn.textContent = searchHistory[i];
        searchHistoryContainer.append(btn);
    }
}

function appendHistory(search){
    if (searchHistory.indexOf(search) !== -1){
        return;
    }
    searchHistory.push(search);
    localStorage.setItem('search-history', JSON.stringify(searchHistory));
    renderSearchHistory();
}