import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {openModal, closeModal, handlePopupClose} from "../utils/utils.js";
import{
  initializeCards,
  profileEditModal,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileTitle,
  profileDescription,
  profileEditForm,
  elementAddModal,
  elementAddButton,
  elementAddForm,
  elNameInput,
  elUrlInput,
  elementImageModal,
  elementGallery,
}from '../constants/variables.js'

// object configuration
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}

// new vaildation logic
const editProfileValidator = new FormValidator(config, profileEditForm);
editProfileValidator.enableValidation();

const editImageValidator = new FormValidator(config, elementAddModal)
editImageValidator.enableValidation();


// Functions
function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", elementImageModal);
  const cardElement = card.generateCard();
  elementGallery.prepend(cardElement);
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
  editProfileValidator.resetValidation(); // Reset validation for the profile edit form
}

function handleElementImageModal(evt) {
  evt.preventDefault();
  const name = elNameInput.value;
  const url = elUrlInput.value;

  const elementData = {
    name: name,
    url: url
  };

  renderElement(elementData);

  closeModal(elementAddModal);

  // Disable the submit button
  const createButton = elementAddForm.querySelector('.modal__button');
  createButton.disabled = true;
  evt.target.reset();
  editImageValidator.resetValidation();
}

/* event Listeners */
initializeCards.forEach((elementData) => {
  renderElement(elementData);
});

elementImageModal.addEventListener("mousedown", handlePopupClose);

profileEditModal.addEventListener("mousedown", handlePopupClose);

elementAddModal.addEventListener("mousedown", handlePopupClose);
elementAddButton.addEventListener("click", () => {
  openModal(elementAddModal);
});

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

elementAddForm.addEventListener("submit", handleElementImageModal);
