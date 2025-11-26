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
// Input + button
const searchBox = document.getElementById("city");
const searchBtn = document.getElementById("btn");
// Elements where we show the weather
const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");
function checkWeather(city) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!city)
            return; // nothing typed
        try {
            const res = yield fetch(`${API_URL}${encodeURIComponent(city)}&appid=${APIKEY}`);
            // If city is not found (404 etc.)
            if (!res.ok) {
                alert("City not found. Try again.");
                return;
            }
            const data = yield res.json();
            // Update the page
            cityEl.textContent = data.name;
            tempEl.textContent = Math.round(data.main.temp) + "°C";
            humidityEl.textContent = data.main.humidity + "%";
            windEl.textContent = data.wind.speed + " km/h";
        }
        catch (err) {
            console.error(err);
            alert("Something went wrong. Check your internet or API key.");
        }
    });
}
// Click on the button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
// Press Enter in the input
searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
// Load a default city on page load
checkWeather("Tunisia");
