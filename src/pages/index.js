import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import Section from '/src/components/Section.js';
import '/src/pages/index.css';
import PopupWithImage from '/src/components/PopupWithImage.js';
import PopupWithForm from '/src/components/PopupWithForm.js';
import UserInfo from '/src/components/UserInfo.js';
import {
  initializeCards,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  configValidation,
  cardAddButton,
  cardAddForm, cardsList
} from '/src/constants/variables';

const section = new Section({
  items: initializeCards,
  renderer: (cardData) => {
    const cardElement = renderCard(cardData);
    section.addItem(cardElement);
    },
  },
  cardsList,
);

section.renderItems();

const userInfo = new UserInfo(
  document.querySelector(".profile__title"),
  document.querySelector( ".profile__descr"),
)

const editFormValidator = new FormValidator(configValidation, profileEditForm);

const addFormValidator = new FormValidator(configValidation, cardAddForm);

const profileEditPopup = new PopupWithForm("#profile-edit-modal", handleProfileEditSubmit);

const addNewCardPopup = new PopupWithForm("#element-add-modal", handleNewCardSubmit);

const cardPreviewPopup = new PopupWithImage("#preview-modal");

addFormValidator.enableValidation();
editFormValidator.enableValidation();

function handleProfileEditSubmit(inputValues) {
  const { profileName, description } = inputValues;
  userInfo.setUserInfo( profileName, description );
  profileEditPopup.close();
}

function handleNewCardSubmit(inputValues) {
  const { name, url } = inputValues;
  const newElementData = renderCard({ name:name, link:url });
  section.addItem(newElementData);
  addNewCardPopup.close();
}

function handleCardPreviewClick(caption, imageUrl) {
  cardPreviewPopup.open(caption, imageUrl);
}

function renderCard(cardData) {
  //const card = new Card(cardData, "#element-template", handleCardPreviewClick);
  const card = new Card(cardData, "#element-template", handleCardPreviewClick);
  return card.generateCard();
}

profileEditButton.addEventListener("click", () => {
  //debugger;
  const { profileName, description } = userInfo.getUserInfo();
  profileTitleInput.value = profileName;
  profileDescriptionInput.value = description;
  profileEditPopup.open();
  //editFormValidator.resetValidation();
});

cardAddButton.addEventListener("click", () => {
  addNewCardPopup.open();
  editFormValidator.resetValidation();
});

//editFormValidator.enableValidation();

profileEditPopup.setEventListeners();
cardPreviewPopup.setEventListeners();
addNewCardPopup.setEventListeners();
