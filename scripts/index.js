import { Card } from 'scripts/Card.js';
import { FormValidator } from 'components/FormValidator.js';
import { openModal, closeModal, handleEscClose, handleOverlayClose } from 'utils/utils.js';

const settings = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save-button',
  inactiveButtonClass: 'form__save-button_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
};

const cardsData = [
  {
    text: 'Card 1',
    link: 'https://picsum.photos/seed/1/200/300'
  },
  {
    text: 'Card 2',
    link: 'https://picsum.photos/seed/2/200/300'
  },
  {
    text: 'Card 3',
    link: 'https://picsum.photos/seed/3/200/300'
  },
  {
    text: 'Card 4',
    link: 'https://picsum.photos/seed/4/200/300'
  },
  {
    text: 'Card 5',
    link: 'https://picsum.photos/seed/5/200/300'
  },
  {
    text: 'Card 6',
    link: 'https://picsum.photos/seed/6/200/300'
  }
];

const cardContainer = document.querySelector('.cards');
const formElement = document.querySelector(settings.formSelector);
const saveButton = formElement.querySelector(settings.submitButtonSelector);

const cardTemplateSelector = '#card-template';
const formValidator = new FormValidator(settings, formElement);

function createCard(data) {
  const card = new Card(data, cardTemplateSelector);
  const cardElement = card.createCard();
  cardContainer.prepend(cardElement);
}

function renderInitialCards() {
  cardsData.forEach(createCard);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  const inputText = formElement.querySelector('.form__input_type_title').value;
  const inputLink = formElement.querySelector('.form__input_type_link').value;
  const newCardData = {
    text: inputText,
    link: inputLink
  };
  createCard(newCardData);
  formValidator.resetValidation();
  saveButton.disabled = true;
  saveButton.classList.add(settings.inactiveButtonClass);
}

formValidator.enableValidation();

formElement.addEventListener('submit', handleAddCardSubmit);
renderInitialCards();

const modalCloseButtons = document.querySelectorAll('.modal__close-button');
modalCloseButtons.forEach((modalCloseButton) => {
  modalCloseButton.addEventListener('click', () => {
    const modal = modalCloseButton.closest('.modal');
    closeModal(modal);
  });
});

document.addEventListener('keydown', handleEscClose);
document.querySelectorAll('.modal').forEach((modal) => {
  modal.addEventListener('click', handleOverlayClose);
});
