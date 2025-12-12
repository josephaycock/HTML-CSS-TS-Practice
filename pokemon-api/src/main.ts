const input = document.getElementById("pokemonName") as HTMLInputElement;
const button = document.getElementById("fetchBtn") as HTMLButtonElement;
const img = document.getElementById("pokemonSprite") as HTMLImageElement;

async function fetchData() {
  const name = input.value.trim().toLowerCase();
  if (!name) return;

  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      throw new Error("Pokemon not found");
    }

    const data = await res.json();

    img.src = data.sprites.front_default;
    img.style.display = "block";
  } catch (err) {
    console.error(err);
    img.style.display = "none";
  }
}

button.addEventListener("click", fetchData);