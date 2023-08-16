/*------------------------------ import statements ------------------------------
* from other files
*/
import Card from '/src/components/Card.js';
import FormValidator from '/src/components/FormValidator.js';
import PopupWithImage from "/src/components/PopupWithImage.js";
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
import Popup from "../components/Popup";
import section from "/src/components/Section.js";

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
/*------------------------------ profile  ------------------------------ */
/*------------------------------ profile  ------------------------------ */

// instantiate the FormValidator class for the profile
const editProfileValidator = new FormValidator(config, profileEditForm);
editProfileValidator.enableValidation();

/*------------------------------ Functions------------------------------*/
function handleProfileEditSubmit(name,job) {
  userInfo.setUserInfo({ name, job });
  editProfileValidator.resetValidation();
  closeModal(profileEditModal);
}
/*------------------------------ Event listeners------------------------------*/

profileEditModal.addEventListener("mousedown", handlePopupClose);
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

/*------------------------------ Image Modal   ------------------------------ */
/*------------------------------ Image Modal   ------------------------------ */
// instantiate the FormValidator class for the add image modal
const editImageValidator = new FormValidator(config, elementAddModal)
editImageValidator.enableValidation();

// Create an instance of the Section class // this renders images
const elementSection = new Section({ items: initializeCards, renderer: renderElement }, '.elements__list');
elementSection.renderItems();

const popupImageInstance = new PopupWithImage('#element-image-modal');

/*------------------------------ Functions------------------------------*/


function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", elementImageModal, handleImageClick);
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
   }
  renderElement(elementData);
  closeModal(elementAddModal);
}

function handleImageClick(imageUrl, imageCaption) {
  popupImageInstance.open(imageUrl, imageCaption);
}


/*------------------------------ Event listeners------------------------------*/
elementImageModal.addEventListener("mousedown", handlePopupClose);
elementAddModal.addEventListener("mousedown", handlePopupClose);
elementAddForm.addEventListener("submit", handleElementImageModal);

elementAddButton.addEventListener("click", () => {
  // elementAddForm.resetValidation();
  openModal(elementAddModal);
});


