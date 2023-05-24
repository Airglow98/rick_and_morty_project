import { createCharacterCard } from "../components/card/card.js";
const cardContainer = document.querySelector('[data-js="card-container"]');
let maxPage = 1
let page = 1
const pagination = document.querySelector('[data-js="pagination"]');

export async function fetchCharacters(){
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