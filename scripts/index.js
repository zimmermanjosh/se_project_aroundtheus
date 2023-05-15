import { Card } from './Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { openModal, closeModal, handleEscClose, handleOverlayClose } from '../utils/utils.js';

const settings = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__button',
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: 'modal__input_type_error',
  errorClass: 'modal__error_visible'
};

/*ormSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",*/

const cardsData = [
  {
    //object 1
    text: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    //object 2
    text: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    //object 3
    text: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    //object 4
    text: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    //object 5
    text: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    //object 6
    text: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
  {
    //object
    text: "the last starfighter",
    link: "https://images.justwatch.com/poster/11067210/s718/the-last-starfighter.%7Bformat%7D",
  },
  {
    //object
    text: "real genius",
    link: "https://m.media-amazon.com/images/M/MV5BNTQ5MzU3ODg0OF5BMl5BanBnXkFtZTgwODM0MzQxMDE@._V1_.jpg",
  },
];

const cardContainer = document.querySelector('.elements__list');
const formElement = document.querySelector(settings.formSelector);
const saveButton = formElement.querySelector(settings.submitButtonSelector);

const formValidator = new FormValidator(settings, formElement);
const cardTemplateSelector = '#element-template';
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
  //const inputText = formElement.querySelector('.modal__input_type_text').value;
  //const inputLink = formElement.querySelector('.modal__input_type_link').value;
  const inputText = formElement.querySelector('.modal__image-element').value;
  const inputLink = formElement.querySelector('.modal__caption-element').value;

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
