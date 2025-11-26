var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const APIKEY = "485f1a94006bd0469ea2c5e3af83b88e";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");
function checkWeather() {
    return __awaiter(this, arguments, void 0, function* (city = 'tunisia') {
        const res = yield fetch(API_URL + encodeURIComponent(city) + `&appid=${APIKEY}`);
        let data = yield res.json();
        // use string selectors (IDs or classes) instead of undefined variables
        const cityEl = document.querySelector(`#${city}`);
        const tempEl = document.querySelector("#temp");
        const humidityEl = document.querySelector("#humidity");
        const windEl = document.querySelector("#wind");
        if (cityEl)
            cityEl.innerHTML = data.name;
        if (tempEl)
            tempEl.innerHTML = Math.floor(data.main.temp) + "°c";
        if (humidityEl)
            humidityEl.innerHTML = data.main.humidity + "+";
        if (windEl)
            windEl.innerHTML = data.wind.speed + "Km/h";
    });
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
checkWeather();
//npx tsc src/main.ts --target ES6 --outFile main.js
