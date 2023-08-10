import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import { openModal, closeModal, handlePopupClose } from "/src/utils/utils.js";
import Section from '/src/components/Section.js';
import UserInfo from '/src/components/UserInfo.js';
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
editProfileValidator.enableValidation();

const editImageValidator = new FormValidator(config, elementAddModal)
editImageValidator.enableValidation();

// Create an instance of the Section class
const elementSection = new Section({ items: initializeCards, renderer: renderElement }, '.elements__list');

// Render the items on the page
elementSection.renderItems();

// Functions
function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", elementImageModal ,openModal)
  const cardElement = card.generateCard();
  elementSection.prependItem(cardElement);
}
function handleProfileEditSubmit(name, job) {
  userInfo.setUserInfo({ name, job });
  editProfileValidator.resetValidation();
  closeModal(profileEditModal);

}

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
}

function handleImageClick(imageModalElement) {
  return function (evt) {
    const card = evt.target.closest('.element');
    const imageUrl = card.querySelector('.element__img').src;
    const imageCaption = card.querySelector('.element__text').textContent;

    const modalImage = imageModalElement.querySelector('#element-modal-image');
    const modalCaption = imageModalElement.querySelector('#element-modal-caption');

    modalImage.src = imageUrl;
    modalImage.alt = imageCaption;
    modalCaption.textContent = imageCaption;

    // Open the modal
    openModal(imageModalElement);
  };
}

/* event Listeners */
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

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = profileTitleInput.value;
  const job = profileDescriptionInput.value;
  handleProfileEditSubmit(name, job); // Pass input values to handleProfileEditSubmit function
});

elementAddForm.addEventListener("submit", handleElementImageModal);