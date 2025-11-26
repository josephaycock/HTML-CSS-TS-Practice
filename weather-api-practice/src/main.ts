const APIKEY = "485f1a94006bd0469ea2c5e3af83b88e";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Input + button
const searchBox = document.getElementById("city") as HTMLInputElement;
const searchBtn = document.getElementById("btn") as HTMLButtonElement;

// Elements where we show the weather
const cityEl = document.querySelector(".city") as HTMLElement;
const tempEl = document.querySelector(".temp") as HTMLElement;
const humidityEl = document.querySelector(".humidity") as HTMLElement;
const windEl = document.querySelector(".wind") as HTMLElement;

async function checkWeather(city: string) {
  if (!city) return; // nothing typed

  try {
    const res = await fetch(
      `${API_URL}${encodeURIComponent(city)}&appid=${APIKEY}`
    );

    // If city is not found (404 etc.)
    if (!res.ok) {
      alert("City not found. Try again.");
      return;
    }

    const data = await res.json();

    // Update the page
    cityEl.textContent = data.name;
    tempEl.textContent = Math.round(data.main.temp) + "°C";
    humidityEl.textContent = data.main.humidity + "%";
    windEl.textContent = data.wind.speed + " km/h";
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Check your internet or API key.");
  }
}

// Click on the button
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// Press Enter in the input
searchBox.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

// Load a default city on page load
checkWeather("Tunisia");