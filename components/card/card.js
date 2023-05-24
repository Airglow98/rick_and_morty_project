export function createCharacterCard(imgPath, altImgPathDescription, name, status, typeDescription, occurrencesNumber){
    const cardContainer = document.querySelector('[data-js="card-container"]')
    const cardElement = document.createElement('li')
    cardElement.classList.add('card')
     cardElement.innerHTML =
    `<div class="card__image-container">
        <img
          class="card__image"
          src="${imgPath}"
          alt="${altImgPathDescription}"
        />
        <div class="card__image-gradient"></div>
      </div>
      <div class="card__content" data-js="cardContent">
    <h2 class="card__title">${name}</h2>
    <dl class="card__info">
      <dt class="card__info-title">Status</dt>
      <dd class="card__info-description">${status}</dd>
      <dt class="card__info-title">Type</dt>
      <dd class="card__info-description">${typeDescription}</dd>
      <dt class="card__info-title">Occurrences</dt>
      <dd class="card__info-description">${occurrencesNumber}</dd>
    </dl>
    </div>`;
    cardContainer.append(cardElement)
  return cardElement;
}
