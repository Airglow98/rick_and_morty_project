import fetchCharacters from "../../utils/fetchCharacters.js";
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
let page = 1;
let maxPage = 1;

export function Buttons (){
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
  }