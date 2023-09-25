import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import Section from '/src/components/Section.js';
import PopupWithImage from '/src/components/PopupWithImage.js';
import PopupWithForm from '/src/components/PopupWithForm.js';
import UserInfo from '/src/components/UserInfo.js';
import {
  apiToken,
  apiUrl,
  cardAddButton,
  cardAddForm,
  cardsList,
  configValidation,
  initializeCards,
  profileDescriptionInput,
  profileEditButton,
  profileEditForm,
  profileTitleInput,
} from '/src/constants/constants';
import '/src/pages/index.css';
import Api from "../components/Api";

const api = new Api({
  baseUrl: apiUrl,
  baseHeader: {
    authorization: apiToken,
    "Content-Type": "application/json"
  }
});

Promise.all([api.getUserInfo()])
  .then(([userData]) => {
    userInfo.setUserInfo(userData);
})
  //.then(res => res.json())
  //.then((result) => {
    //console.log(result);
 // })
  .catch(console.error);

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

//edit form
const userInfo = new UserInfo({
  profileDescriptionSelector: ".profile__description",
  profileNameSelector: ".profile__title",
  profileAvatarSelector: ".profile__img",
})


const editFormValidator = new FormValidator(
  configValidation,
  profileEditForm
);

const addFormValidator = new FormValidator(
  configValidation,
  cardAddForm
);

const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

const
  addNewCardPopup = new PopupWithForm(
  "#element-add-modal"
  , handleNewCardSubmit
);

const cardPreviewPopup = new PopupWithImage("#preview-modal");



function handleProfileFormSubmit(inputValues) {
  //profileEditPopup.renderLoading(api);
  api
    .updateProfileInfo(inputValues)
  .then(() => {
    userInfo.setUserInfo(inputValues);
    profileEditPopup.close();
  })
    .catch((err) => {
   console.log(err);
  })
    .finally(() => {
      //profileEditPopup.renderLoading(false,"Save");
    console.log("done");
    });
}

//function handleProfileFormSubmit(inputValues) {
//  const { title, description } = inputValues;
//  userInfo.setUserInfo( title, description );
//  profileEditPopup.close();
//}

function handleNewCardSubmit(inputValues) {
  const { title , url } = inputValues;
  const newElementData = renderCard({ name: title, url: url });
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

function handleProfileEditClick() {
  const user = userInfo.getUserInfo();
  profileTitleInput.value = user.name;
  profileDescriptionInput.value = user.about;
  profileEditPopup.open();
}

profileEditButton.addEventListener("click", () => {
  handleProfileEditClick();
  editFormValidator.resetValidation();
});

cardAddButton.addEventListener("click", () => {
  addNewCardPopup.open();
  addFormValidator.resetValidation();
});

editFormValidator.enableValidation();
addFormValidator.enableValidation();

profileEditPopup.setEventListeners();
cardPreviewPopup.setEventListeners();
addNewCardPopup.setEventListeners();
