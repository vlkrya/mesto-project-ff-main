// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу



const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;


function createCard(data, handleDelete) {
  const cardElement = cardTemplate.cloneNode(true).firstElementChild;

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  deleteButton.addEventListener('click', () => handleDelete(cardElement));

  return cardElement;
}

function renderInitialCards() {
  initialCards.forEach(data => {
    const card = createCard(data, handleDeleteCard);
    placesList.append(card);
  });
}

function handleDeleteCard(cardElement) {
  if (cardElement) {
    cardElement.remove();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderInitialCards();
});
