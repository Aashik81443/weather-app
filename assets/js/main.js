
const apiKey = '33db9b1e88366d1c114a3d23c45102cc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.Weather-icon')
const defaultCity = 'Nepal';

async function checkWeather(city) {
    if (!city) {
        city = defaultCity;
    }
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    if (response.status == 404) {
        alert('Please Enter valid city name')
    } else {

        document.querySelector('.city').innerHTML = data?.name;
        document.querySelector('.temp').innerHTML = Math.round(data?.main?.temp);
        document.querySelector('.humidity-value').innerHTML = data?.main?.humidity;
        document.querySelector('.wind-value').innerHTML = data?.wind?.speed;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./assets/images/clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./assets/images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./assets/images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./assets/images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./assets/images/mist.png";
        }
    }


}

checkWeather(defaultCity);
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    
    if (searchBox.value == '') {
        alert('Please Enter City Name')
    }

})