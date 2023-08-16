/*------------------------------ import statements ------------------------------
* from other files
*/
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
  elementImageModal
} from '/src/constants/variables'
import PopupWithForm from "../components/PopupWithForm";

/*------------------------------ Functions ------------------------------*/
function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", elementImageModal, handleImageClick);
  const cardElement = card.generateCard();
  elementSection.prependItem(cardElement);
}
function handleProfileEditSubmit(name,job) {
  userInfo.setUserInfo({ name, job });
  editProfileValidator.resetValidation();
  profileEditModalPopup.close();
  //addNewCardPopup.close()
  //closeModal(profileEditModal);
}

function handleElementImageModal(evt) {
  evt.preventDefault();
  editImageValidator.resetValidation();
  const name = elNameInput.value;
  const url = elUrlInput.value;
  const elementData = {
    name: name,
    url: url,
  }
  renderElement(elementData);
  profileEditModalPopup.close()
  //closeModal(elementAddModal);
}
function handleImageClick(caption, url) {
  cardPreviewPoup.open(caption, url);

}

/*------------------------------ const ------------------------------*/
const elementSection = new Section(
  { items: initializeCards, renderer: renderElement },
  '.elements__list');

elementSection.renderItems();

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__descr',
});

const profileEditModalPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);

const addNewCardPopup = new PopupWithForm(
  "#element-add-modal",
  handleElementImageModal
)

const cardPreviewPoup = new popupWithImage(
  "#element-image-modal",
)

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}

// instantiate the FormValidator class for the profile
const editProfileValidator = new FormValidator(config, profileEditForm);
editProfileValidator.enableValidation();

const editImageValidator = new FormValidator(config, elementAddModal)
editImageValidator.enableValidation();

/*------------------------------ eventListeners ------------------------------*/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModalPopup.open();
  //openModal(profileEditModal);
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = profileTitleInput.value;
  const job = profileDescriptionInput.value;
  handleProfileEditSubmit(name, job); // Pass input values to handleProfileEditSubmit function
});







/*------------------------------ Event listeners------------------------------*/
/*profileEditModal.addEventListener("mousedown", handlePopupClose);
elementImageModal.addEventListener("mousedown", handlePopupClose);
elementAddModal.addEventListener("mousedown", handlePopupClose);
elementAddForm.addEventListener("submit", handleElementImageModal);
elementAddButton.addEventListener("click", () => {
  // elementAddForm.resetValidation();
  openModal(elementAddModal);
});*/



