const input = document.querySelector('.input-box');
const body=document.querySelector('.Weather-body');
const search = document.getElementById('search');
const found = document.querySelector('.location_found');
const img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temp');
const des = document.querySelector('.description');
const feels_like = document.querySelector('.feel');
const humid = document.getElementById('humidity');
const wind = document.getElementById('windspeed');

async function weather(city) {
    const api_key = '77269b666029ca3c2dc4702993830eb5';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    let weather_data = await fetch(url).then(respose => respose.json());
    // if (weather_data.cod === `404`) {
    //     found.style.display = "flex";
    //     body.style.display = "none";
    //     console.log("error");
    //     return;
    // }
    // found.style.display = "none";
    // body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273)}` + '°C';
    des.innerHTML = `${weather_data.weather[0].description}`;
    feels_like.innerHTML = 'Feels like:' + `${Math.round(weather_data.main.feels_like - 273)}` + '°C'
    humid.innerHTML = `${weather_data.main.humidity}` + '%';
    wind.innerHTML = `${weather_data.wind.speed}` + 'km/h';



    switch (weather_data.weather[0].main) {
        case 'Clouds':
            img.src = "/assets/cloud.png";
            break;
        case 'Clear':
            img.src = "/assets/clear.png";
            break;
        case 'Rain':
            img.src = "/assets/rain.png";
            break;
        case 'Mist':
            img.src = "/assets/mist.png";
            break;
        case 'Snow':
            img.src = "/assets/snow.png";
            break;
        case 'Drizzle':
            img.src = "/assets/drizzle.png";
            break;
    }
    console.log(weather_data);
}

search.addEventListener('click', () => {
    weather(input.value);
})