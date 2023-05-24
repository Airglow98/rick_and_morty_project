import fetchCharacters from "./utils/fetchCharacters.js";
import Buttons from "./components/nav-button/nav-button.js";
/* const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
); hä?*/
const searchBar = document.querySelector('[data-js="search-bar"]');
/* const navigation = document.querySelector('[data-js="navigation"]'); hö?*/ 



// States

let searchQuery = "";

fetchCharacters();
Buttons();


searchBar.addEventListener("submit",(event)=>{
event.preventDefault();
const formData = new FormData(event.target);
const data = Object.fromEntries(formData);
searchQuery = data.query
console.log(searchQuery)
event.target.reset()
fetchCharacters();
});


