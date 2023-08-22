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
  elementImageModal,
  config
} from '/src/constants/constants'
import PopupWithForm from "/src/components/PopupWithForm.js";
import PopupWithImage from "/src/components/PopupWithImage.js";
/*------------------------------ Functions ------------------------------*/
function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", handleImageClick);
  const cardElement = card.generateCard();
  elementSection.prependItem(cardElement);
}
function handleProfileEditSubmit(name,job) {
  userInfo.setUserInfo({ name, job });
  editProfileValidator.resetValidation();
  closeModal(profileEditModal);
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
  closeModal(elementAddModal);
}
function handleImageClick(caption, url) {
  cardPreviewPoup.open(caption, url);

}
/*------------------------------ eventListeners ------------------------------*/
profileEditModal.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  profileEditModalPopup.open()
  editProfileValidator.resetValidation();
});

profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = profileTitleInput.value;
  const job = profileDescriptionInput.value;
  handleProfileEditSubmit(name, job); // Pass input values to handleProfileEditSubmit function
});

/*------------------------------ const ------------------------------*/
const elementSection = new Section(
  { items: initializeCards, renderer: renderElement },
  '.elements__list');

elementSection.renderItems();

const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__descr',
});

const addNewCardPopup = new PopupWithForm(
  "#element-add-modal",
  handleElementImageModal
);

const profileEditModalPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileEditSubmit
);

const cardPreviewPoup = new PopupWithImage(
  "#element-image-modal"
)

// instantiate the FormValidator class for the profile
const editProfileValidator = new FormValidator(config, profileEditForm);
editProfileValidator.enableValidation();

const editImageValidator = new FormValidator(config, elementAddModal)
editImageValidator.enableValidation();


addNewCardPopup.setEventListeners()
profileEditModalPopup.setEventListeners();
