import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {openModal, closeModal, handleEscKey, handlePopupClose} from "../utils/utils.js";
import{
  initializeCards,
  profileEditModal,
  profileEditButton,
  profileEditCloseButton,
  profileTitleInput,
  profileDescriptionInput,
  profileTitle,
  profileDescription,
  profileEditForm,
  elementAddModal,
  elementAddButton,
  elementCloseButton,
  elementAddForm,
  elementList,
  elNameInput,
  elUrlInput,
  elementImageModal,
  elementImageModalClose,
  elSaveButton,
  elementTemplate,
  elementGallery,
  modalInputs
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
  if (
    profileTitle &&
    profileDescription &&
    profileTitleInput &&
    profileDescriptionInput
  ) {
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(profileEditModal);
    evt.target.reset();
  }
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
  evt.target.reset();
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
