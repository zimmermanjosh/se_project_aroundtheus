import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {openModal, closeModal, handleEscKey, handlePopupClose} from "../utils/utils";

///////////////////////////////////
// initialize the app with data //
///////////////////////////////////

const initializeCards = [

  {
    //object 1
    name: "legend of billie jean",
    url: "https://m.media-amazon.com/images/M/MV5BNjIwOTgzN2QtZTY2Mi00MmU1LWFjMTItN2EwZTFhYTMwZGRjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",
  },
  {
    //object 2
    name: "ski patrol",
    url: "https://m.media-amazon.com/images/I/81A408tMCCL._AC_UF894,1000_QL80_.jpg",
  },
  {
    //object 3
    name: "better off dead",
    url: "https://shatpod.com/movies/wp-content/uploads/Better-Off-Dead-Movie-Poster-1985.jpg",
  },
  {
    //object 4
    name: "less then zero",
    url: "https://upload.wikimedia.org/wikipedia/en/3/34/Less_than_zero_1987_poster.jpg",
  },
  {
    //object 5
    name: "sixteen candles",
    url: "https://shatpod.com/movies/wp-content/uploads/rzTrRQg5ek47Yl0Vfenc69r9gOd-e1585675704809.jpg",
  },
  {
    //object 6
    name: "Labyrinth",
    url: "https://m.media-amazon.com/images/M/MV5BOWI3OGEzOTUtYWY4MS00ZDgwLWFlZjgtNjJmNjcyNGM1ZDI3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpgv",
  },
  {
    //object
    name: "the last starfighter",
    url: "https://images.justwatch.com/poster/11067210/s718/the-last-starfighter.%7Bformat%7D",
  },
  {
    //object
    name: "real genius",
    url: "https://m.media-amazon.com/images/M/MV5BNTQ5MzU3ODg0OF5BMl5BanBnXkFtZTgwODM0MzQxMDE@._V1_.jpg",
  },
  {
    //object
    name: "secret of my success",
    url: "https://film-authority.com/wp-content/uploads/2021/07/maxresdefault-1.jpg",
  },
  {
    //object
    name: "legend",
    url: "https://twilightswarden.files.wordpress.com/2012/10/screenshot-lrg-07.png?w=1568",
  }
];

///////////////////////////////////
/* variables - constants */
///////////////////////////////////

/**  profile modal **/
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(
  "#modal-profile-close-button"
);
const profileTitleInput = document.querySelector("#title-input");
const profileDescriptionInput = document.querySelector("#profile-input");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__descr");
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");

/**  element modal **/
const elementAddModal = document.querySelector("#element-add-modal");
const elementAddButton = document.querySelector(".profile__add-button");
const elementCloseButton = elementAddModal.querySelector("#element-add-close");
const elementAddForm = elementAddModal.querySelector("#element-add-form");

/*URL List*/
const elementList = document.querySelector(".elements__list");
const elNameInput = elementAddModal.querySelector("#element-input");
const elUrlInput = elementAddModal.querySelector("#image-input");

// images and popup modal
const elementImageModal = document.querySelector("#element-image-modal");
//const modalImage = document.querySelector("#element-modal-image");
//const modalCaption = document.querySelector("#element-modal-caption");
const elementImageModalClose = document.querySelector("#element-image-close");
const elSaveButton = elementImageModal.querySelector("#imageSubmitButton");

//array of data element in elements
const elementGallery = document.querySelector(".elements__list");
const elementTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".el__element");

const modalInputs = Array.from(
  elementImageModal.querySelectorAll(".modal__input")
);

// object configuration
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}

// new vaildation logic
const editProfileValidator = new FormValidator(config, profileEditForm);
editProfileValidator.enableValidation();

const editImageValidator = new FormValidator(config, elementAddModal)
editImageValidator.enableValidation();

// Functions
/*function handleEscKey(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}*/

/*function handlePopupClose(evt) {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(evt.currentTarget);
  }
}*/

function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", elementImageModal);
  const cardElement = card.generateCard();
  elementGallery.prepend(cardElement);
}

function handleProfileEditSubmit(evt) {
  evt.preventDefault();
  if (
    profileTitle &&
    profileDescription &&
    profileTitleInput &&
    profileDescriptionInput
  ) {
    profileTitle.textContent = profileTitleInput.value;
    profileDescription.textContent = profileDescriptionInput.value;
    closeModal(profileEditModal);
    evt.target.reset();
  }
}

/*function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscKey);
}*/

function handleElementImageModal(evt) {
  evt.preventDefault();
  const name = elNameInput.value;
  const url = elUrlInput.value;

  const elementData = {
    name: name,
    url: url
  };

  renderElement(elementData);

  closeModal(elementAddModal);
  evt.target.reset();
}

/* event Listeners */
initializeCards.forEach((elementData) => {
  renderElement(elementData);
});

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
