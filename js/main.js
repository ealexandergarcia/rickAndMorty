import { characterCard } from "./component/card.js";
import { getAllCharacter } from "./module/requests.js";

let data = await getAllCharacter();
console.log(data);
let card = document.querySelector(".cards")

card.innerHTML = await characterCard(data);


