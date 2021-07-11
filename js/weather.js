const API_KEY = "df93a67b250b6475e1d139b000ad67f7";

function onGeoOk(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
        });
}

function onGeoError() {
    alert("cant find");
}

//navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
