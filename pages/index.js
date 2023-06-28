/***************************************************************************/
/***************************** Initialize Data *****************************/
/***************************************************************************/
import Card from '../components/Card.js'
import formValidator from "./components/formValidator";

console.log("Initializing Data");
const initializeCards = [
  {
    //object 1
    name: "Yosemite Valley",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    //object 2
    name: "Lake Louise",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    //object 3
    name: "Bald Mountains",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    //object 4
    name: "Latemar",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    //object 5
    name: "Vanoise National Park",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    //object 6
    name: "Lago di Braies",
    url: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
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
];

/***************************************************************************/
/***************************** Constants****** *****************************/
/***************************************************************************/

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
const modalImage = document.querySelector("#element-modal-image");
const modalCaption = document.querySelector("#element-modal-caption");
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

/***************************************************************************/
/***************************** Functions ***********************************/
/***************************************************************************/

function handleEscKey(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}

function handlePopupClose(evt) {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(evt.currentTarget);
  }
}

/*function getElementView(elementData) {
  const elementCardTemp = elementTemplate.cloneNode(true);
  const imageElement = elementCardTemp.querySelector(".element__img");
  const titleElement = elementCardTemp.querySelector(".element__text");
  const likeButton = elementCardTemp.querySelector(".element__like-button");
  const elementDeleteButton = elementCardTemp.querySelector(
    ".element__delete-button"
  );

  //likeButton.addEventListener("click", () => {
  //  likeButton.classList.toggle("element__like-button_active");
  //});

  elementDeleteButton.addEventListener("click", () => elementCardTemp.remove());

  imageElement.src = elementData.url;
  imageElement.alt = elementData.name;
  titleElement.textContent = elementData.name;

  imageElement.addEventListener("click", () => {
    modalImage.src = elementData.url;
    modalImage.alt = elementData.name;
    modalCaption.textContent = elementData.name;
    openModal(elementImageModal);
  });
  return elementCardTemp;
}*/

/*function handleElementImageModal(evt) {
  evt.preventDefault();

  const newData = { name: elNameInput.value, url: elUrlInput.value };
  renderElement(newData);
  closeModal(elementAddModal);
  evt.target.reset();

  const createButton = elementAddForm.querySelector(".modal__button");
  createButton.classList.add("modal__button_disabled");
  createButton.disabled = true;
}*/

/*function deleteElement(evt) {
  evt.target.closest(".element").remove();
}*/

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscKey);
}


function renderElement(elementData){
  elementGallery.prepend(createCard(elementData));
}
function createCard(data) {
  //invoke instance
  const card = new Card(data, '#element-template', () => {} );
  // return action of instance
  return  card.getElementView();
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

/***************************************************************************/
/***************************** event Listeners *****************************/
/***************************************************************************/
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