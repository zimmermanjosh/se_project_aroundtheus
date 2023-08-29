/*------------------------------ import statements ------------------------------
* from other files
*/
import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import { openModal, closeModal } from "/src/utils/utils.js";
import Section from '/src/components/Section.js';
import '/src/pages/index.css';
import PopupWithForm from '/src/components/PopupWithForm.js';
import UserInfo from '/src/components/UserInfo.js';
import {
  initializeCards,
  profileEditModal,
  profileEditButton,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  //elementAddModal,
  //elementAddButton,
  //elementAddForm,
  //elNameInput,
  //elUrlInput,
  elementImageModal,
  configValidation,
  profileAddButton
} from '/src/constants/variables'
import PopupWithImage from "../components/PopupWithImage";



/*------------------------------ Constants ------------------------------
Constants info /datasets
 */
const section = new Section({
  items: initializeCards,
  renderer:(cardData) => {
    const cardElement = renderCard(cardData);
    section.addItem(cardElement);
  }
})

section.renderItems();

const userInfo = new UserInfo(
  document.querySelector(".profile__title"),
  document.querySelector(".profile__descr")
);

/*const configValidation = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}*/

const editProfileValidator = new FormValidator(configValidation, profileEditForm);
//const editImageValidator = new FormValidator(configValidation, elementAddModal)
//const elementSection = new Section({ items: initializeCards, renderer: renderElement }, '.elements__list');


const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);
/*------------------------------ Functions------------------------------*/

function handleProfileEditSubmit(inputValues) {
  const { title, description } = inputValues;
  userInfo.setUserInfo({ title, description });
  profileEditPopup.close();
  //editProfileValidator.resetValidation();
  //closeModal(profileEditModal);
}

/*function renderElement(elementData) {
  //const card = new Card(elementData, "#element-template", handleImageClick)
  const card = new Card(elementData, "#element-template", elementImageModal, openModal)
  console.log("something something !! ")
  const cardElement = card.generateCard();
  elementSection.prependItem(cardElement);
}*/

// function handleElementImageModal(evt) {
//   evt.preventDefault();
//   editImageValidator.resetValidation();
//   const name = elNameInput.value;
//   const url = elUrlInput.value;
//   const elementData = {
//     name: name,
//     url: url,
//   };
//   renderElement(elementData);
//   closeModal(elementAddModal);
// }

/*------------------------------ Event listeners------------------------------*/

//editProfileValidator.enableValidation();
//editImageValidator.enableValidation();

//elementSection.renderItems();


const editFormValidator = new FormValidator(
  configValidation,
  profileEditForm
);

//profileEdit == .profile__edit-button
//profileEditModal.addEventListener("mousedown", handlePopupClose);
//const profileEditButton = document.querySelector(".profile__edit-button");
profileEditButton.addEventListener("click", () => {
  console.log("pressed profile edit");
  const { profileName, description } = userInfo.getUserInfo();
  profileTitleInput.value = profileName;
  profileDescriptionInput.value = description;
  profileEditPopup.open();
  editFormValidator.resetValidation();
});

const cardPreviewPopup = new PopupWithImage("#element-image-modal")


// function handleFormSubmit(inputValues) {
//   console.log("handle for submit")
//   const { title, description } = inputValues;
//   userInfo.setUserInfo({ title, description });
//   profileEditPopup.close();
// }
function handleCardPreviewClick(url, name) {
  cardPreviewPopup.open(url, name);
}

function renderCard(cardData) {
  const card = new Card(cardData, "#element-template", handleCardPreviewClick)
  return card.generateCard();
  //const cardElement = card.generateCard();
  //elementSection.prependItem(cardElement);
}


profileEditPopup.setEventListeners();
cardPreviewPopup.setEventListeners();

// profileEditForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   console.log("pressed")
//   const name = profileTitleInput.value;
//   const job = profileDescriptionInput.value;
//   handleProfileEditSubmit(name, job); // Pass input values to handleProfileEditSubmit function
// });

/*------------------------------ Event listeners------------------------------*/
//elementImageModal.addEventListener("mousedown", handlePopupClose);
//elementAddModal.addEventListener("mousedown", handlePopupClose);
//elementAddForm.addEventListener("submit", handleElementImageModal);

// elementAddButton.addEventListener("click", () => {
//   // elementAddForm.resetValidation();
//   openModal(elementAddModal);
// });