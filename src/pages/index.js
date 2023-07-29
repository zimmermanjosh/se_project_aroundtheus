import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import { openModal, closeModal, handlePopupClose } from "/src/utils/utils.js";
import Section from '/src/utils/Section.js';
import UserInfo from '/src/utils/UserInfo.js';
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
  elementGallery,
} from '/src/constants/variables'

// Create an instance of the UserInfo class
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__descr',
});


// object configuration
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}

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

// Create an instance of the Section class
const elementSection = new Section({ items: initializeCards, renderer: renderElement }, '.elements__list');

// Render the items on the page
elementSection.renderItems();

function handleProfileEditSubmit(evt) {
  evt.preventDefault();

  // Get the form values
  const name = profileTitleInput.value;
  const job = profileDescriptionInput.value;

  // Update the user info on the page
  userInfo.setUserInfo({ name, job });

  closeModal(profileEditModal);
  editProfileValidator.resetValidation(); // Reset validation for the profile edit form
}

// Function to handle form submission for adding new elements
function handleElementImageModal(evt) {
  evt.preventDefault();
  const name = elNameInput.value;
  const url = elUrlInput.value;

  const elementData = {
    name: name,
    url: url,
  };

  renderElement(elementData);

  closeModal(elementAddModal);

  // Reset the form validation for the element add form
  editImageValidator.resetValidation();
}

/* event Listeners */
initializeCards.forEach((elementData) => {
  renderElement(elementData);
});

//add event listeners
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
