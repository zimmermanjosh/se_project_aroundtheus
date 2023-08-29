import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import Section from '/src/components/Section.js';
import '/src/pages/index.css';
import PopupWithImage from '/src/components/PopupWithImage';
import UserInfo from '/src/components/UserInfo.js';
import {
  initializeCards,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  configValidation,
} from '/src/constants/variables';

const cardPreviewPopup = new PopupWithImage( {popupSelector: "#element-image-modal" });

const section = new Section({
  items: initializeCards,
  renderer: renderCard,
});

section.renderItems();

const userInfo = new UserInfo(".profile__title", ".profile__descr");

const editFormValidator = new FormValidator(configValidation, profileEditForm);

const profileEditPopup = new PopupWithForm("#profile-edit-modal", handleProfileEditSubmit);

function handleProfileEditSubmit(inputValues) {
  const { title, description } = inputValues;
  userInfo.setUserInfo({ title, description });
  profileEditPopup.close();
}

function handleCardPreviewClick(url, name) {
  cardPreviewPopup.open(url, name);
}

function renderCard(cardData) {
  const card = new Card(cardData, "#element-template", handleCardPreviewClick);
  return card.generateCard();
}

profileEditButton.addEventListener("click", () => {
  const { profileName, description } = userInfo.getUserInfo();
  profileTitleInput.value = profileName;
  profileDescriptionInput.value = description;
  profileEditPopup.open();
  editFormValidator.resetValidation();
});

editFormValidator.enableValidation();

profileEditPopup.setEventListeners();
cardPreviewPopup.setEventListeners();
