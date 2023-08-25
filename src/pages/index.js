/*------------------------------ import statements ------------------------------
* from other files
*/
import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import { openModal, closeModal, handlePopupClose } from "/src/utils/utils.js";
import Section from '/src/components/Section.js';
import UserInfo from '/src/components/UserInfo.js';
import '/src/pages/index.css';
import PopupWithForm from '/src/components/PopupWithForm.js';
import {
  initializeCards,
  profileEditModal,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  elementAddModal,
  elementAddButton,
  elementAddForm,
  elNameInput,
  elUrlInput,
  elementImageModal
} from '/src/constants/variables'



/*------------------------------ Constants ------------------------------
Constants info /datasets
 */
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


const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleFormSubmit
);
/*------------------------------ Functions------------------------------*/

function handleProfileEditSubmit(name,job) {
  userInfo.setUserInfo({ name, job });
  editProfileValidator.resetValidation();
  closeModal(profileEditModal);
}

function renderElement(elementData) {
  //const card = new Card(elementData, "#element-template", handleImageClick)
  const card = new Card(elementData, "#element-template", elementImageModal, openModal)
  console.log("something something !! ")
  const cardElement = card.generateCard();
  elementSection.prependItem(cardElement);
}

function handleElementImageModal(evt) {
  evt.preventDefault();
  editImageValidator.resetValidation();
  const name = elNameInput.value;
  const url = elUrlInput.value;
  const elementData = {
    name: name,
    url: url,
  };
  renderElement(elementData);
  closeModal(elementAddModal);
}

/*------------------------------ Event listeners------------------------------*/

editProfileValidator.enableValidation();
editImageValidator.enableValidation();
elementSection.renderItems();

//profileEdit == .profile__edit-button
//profileEditModal.addEventListener("mousedown", handlePopupClose);
//const profileEditButton = document.querySelector(".profile__edit-button");
/*profileEditButton.addEventListener("click", () => {
  console.log("pressed profile edit");
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});*/



function handleFormSubmit(inputValues) {
  console.log("handle for submit")
  const { title, description } = inputValues;
  userInfo.setUserInfo({ title, description });
  profileEditPopup.close();
}

profileEditPopup.setEventListeners();

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  console.log("pressed")
  const name = profileTitleInput.value;
  const job = profileDescriptionInput.value;
  handleProfileEditSubmit(name, job); // Pass input values to handleProfileEditSubmit function
});

/*------------------------------ Event listeners------------------------------*/
elementImageModal.addEventListener("mousedown", handlePopupClose);
elementAddModal.addEventListener("mousedown", handlePopupClose);
elementAddForm.addEventListener("submit", handleElementImageModal);

elementAddButton.addEventListener("click", () => {
  // elementAddForm.resetValidation();
  openModal(elementAddModal);
});