var weatherApiRootUrl = 'https://api.openweathermap.org';
var APIKey = "977e39b7fac766a952c34f79bfdf663f";


// var searchForm = document.querySelector
var searchInput = document.querySelector('#search-input');
// var todayContainer = document.querySelector('#today');
// var searchHistoryContainer = document.querySelector('#history');

// function renderSearchHistory(){
//     searchHistoryContainer.innerHTML = '';
//     for (var i = searchHistory.length - 1; >=0; 1--){
//         var btn = document.createElement('button');
//         btn.setAttribute('type', 'button');
//         btn.setAttribute('aria-controls', 'today forecast');
//         btn.classList.add('history-btn', 'btn-history');
//         btn.setAttribute('data-search', searchHistory[i]);
//         btn.textContent = searchHistory[i];
//         searchHistoryContainer.append(btn);
//     }
// }

// function appendHistory(search){
//     if (searchHistory.indexOf(search) !== -1){
//         return;
//     }
//     searchHistory.push(search);
//     localStorage.setItem('search-history', JSON.stringify(searchHistory));
//     renderSearchHistory();
// }

function getWeather(){
    var cityName = searchInput.value
    var currentWeatherApi = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKey
    fetch(currentWeatherApi)
    .then(response => response.json())
    .then(function(data){
        console.log (data)
        var cityNameEl = document.querySelector('#CityName')
        var tempEl = document.querySelector('#temp')
        var humidityEl = document.querySelector('#humidity')
        var windSpeedEl = document.querySelector('#windSpeed')
        cityNameEl.textContent = cityName
            tempEl.textContent = "temp: "+data.main.temp
            humidityEl.textContent = "humidity: "+data.main.humidity
            windSpeedEl.textContent = "windSpeed: "+data.wind.speed
            getForecast()
    })
}

function getForecast(){
    var cityName = searchInput.value
    var currentForeCastApi = "https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"&appid="+APIKey
    fetch(currentForeCastApi)
    .then(response => response.json())
    .then(function(data){
        console.log (data)
        var tempEl1 = document.querySelector('#temp1')
        var humidityEl1 = document.querySelector('#humidity1')
        var windSpeedEl1 = document.querySelector('#windSpeed1')
        tempEl1.textContent = "temp: "+data.list[0].main.temp
        humidityEl1.textContent = "humidity: "+data.list[0].main.humidity
        windSpeedEl1.textContent = "windSpeed: "+data.list[0].wind.speed

        var tempEl2 = document.querySelector('#temp2')
        var humidityEl2 = document.querySelector('#humidity2')
        var windSpeedEl2 = document.querySelector('#windSpeed2')
        tempEl2.textContent = "temp: "+data.list[8].main.temp
        humidityEl2.textContent = "humidity: "+data.list[8].main.humidity
        windSpeedEl2.textContent = "windSpeed: "+data.list[8].wind.speed

        var tempEl3 = document.querySelector('#temp3')
        var humidityEl3 = document.querySelector('#humidity3')
        var windSpeedEl3 = document.querySelector('#windSpeed3')
        tempEl3.textContent = "temp: "+data.list[16].main.temp
        humidityEl3.textContent = "humidity: "+data.list[16].main.humidity
        windSpeedEl3.textContent = "windSpeed: "+data.list[16].wind.speed
    })
}



var searchBtn = document.querySelector('#search-button')
searchBtn.addEventListener('click', getWeather)