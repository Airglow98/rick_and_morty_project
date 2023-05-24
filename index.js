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
let maxPage = 1
let page = 1;
let searchQuery = "";



 async function fetchCharacters(){
try {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`);
  
  if(response.ok){
  const data = await response.json();
  cardContainer.innerHTML=``;
  maxPage = data.info.pages;
  data.results.forEach((character)=>{createCharacterCard(character.image,"altText",character.name, character.status, character.type, character.episode.length )})  
  pagination.textContent = page + " / " + maxPage;
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
}
});

nextButton.addEventListener("click",()=>{
if(page < maxPage){
  page++;
  fetchCharacters();
}
});

searchBar.addEventListener("submit",(event)=>{
event.preventDefault();
const formData = new FormData(event.target);
const data = Object.fromEntries(formData);
searchQuery = data.query
console.log(searchQuery)
event.target.reset()
fetchCharacters();
});


