import { createCharacterCard } from "./components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
let page = 1;
const searchQuery = "";



 async function fetchCharacters(){
try {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  
  if(response.ok){
  const data = await response.json();
  cardContainer.innerHTML=``;
  data.results.forEach((character)=>{createCharacterCard(character.image,"altText",character.name, character.status, character.type, character.episode.length )})  
  return data;
} else {
  console.error("Bad Response");
 }
}
catch(error) {
console.error("Total Error");
}
}
fetchCharacters();

prevButton.addEventListener("click",()=>{
if(page > 1){
page--;
fetchCharacters();
pagination.textContent = page +" / 42";
}
});

nextButton.addEventListener("click",()=>{
if(page < 42){
  page++;
  fetchCharacters();
  pagination.textContent = page +" / 42";
}
});


