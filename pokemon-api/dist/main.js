"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const input = document.getElementById("pokemonName");
const button = document.getElementById("fetchBtn");
const img = document.getElementById("pokemonSprite");
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const name = input.value.trim().toLowerCase();
        if (!name)
            return;
        try {
            const res = yield fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            if (!res.ok) {
                throw new Error("Pokemon not found");
            }
            const data = yield res.json();
            img.src = data.sprites.front_default;
            img.style.display = "block";
        }
        catch (err) {
            console.error(err);
            img.style.display = "none";
        }
    });
}
button.addEventListener("click", fetchData);
