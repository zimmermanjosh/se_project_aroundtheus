// Imports-------------------------------------------------------------------

import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import { open, close, handlePopupClose } from "/src/components/popup.js";
import Section from '/src/components/Section.js';
import UserInfo from '/src/components/UserInfo.js';
import PopupWithImage from "/src/components/PopupWithImage";
import '/src/pages/index.css';
import {
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
} from '/src/constants/variables'

// Constants-------------------------------------------------------------------
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__descr',
});

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}

const editProfileValidator = new FormValidator(config, profileEditForm);
const editImageValidator = new FormValidator(config, elementAddModal)
const elementSection = new Section({ items: initializeCards, renderer: renderElement }, '.elements__list');
const previewImagePopup = new PopupWithImage("#element-image-modal");

editProfileValidator.enableValidation();
editImageValidator.enableValidation();
elementSection.renderItems();

//Functions ---------------------------------------------------------------------------------------------------
function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", handleImageClick)
  const cardElement = card.generateCard();
  elementSection.prependItem(cardElement);
}

/*function handleProfileEditSubmit(name, job) {
  userInfo.setUserInfo({ name, job });
  close(profileEditModal);
  //profileEditModal.close();
  //editProfileValidator.resetValidation();
}*/

function handleElementImageModal(evt) {
  evt.preventDefault();
  const name = elNameInput.value;
  const url = elUrlInput.value;
  renderElement(name, url);
  close(evt);
}
function handleImageClick(evt) {
preventDefault.open(evt)
}

/* event Listeners */
elementImageModal.addEventListener("mousedown", handlePopupClose);
profileEditModal.addEventListener("mousedown", handlePopupClose);
elementAddModal.addEventListener("mousedown", handlePopupClose)
previewImagePopup.addEventListener();
elementAddButton.addEventListener("click", () => {
  //close();
  open(elementAddModal);
});

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  open(profileEditModal);
});

/*profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = profileTitleInput.value;
  const job = profileDescriptionInput.value;
  handleProfileEditSubmit(name, job); // Pass input values to handleProfileEditSubmit function
});*/

elementAddForm.addEventListener("submit", handleElementImageModal);
