import { characterCard } from "./component/card.js";
import { getAllCharacter } from "./module/requests.js";

    
// Agregamos un evento de submit al formulario de búsqueda
const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = document.getElementById('search-input').value.trim();
  const url = `https://rickandmortyapi.com/api/character/?name=${searchTerm}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const card = document.querySelector(".cards");
    card.innerHTML = await characterCard(data);
  } catch (error) {
    console.error(error);
  }
});

// Cargamos la lista de personajes al inicio
let data = await getAllCharacter();
let card = document.querySelector(".cards");
card.innerHTML = await characterCard(data);