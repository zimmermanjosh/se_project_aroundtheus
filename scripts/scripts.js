/**
=========================================================
this is my re-org to  help me apply work and school, this need to be the same
=========================================================
array of pics for app
**/
// these are not going to be reassigned in the future remove let
const initializeCard = [
  {
    //object 1
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    //object 2
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    //object 3
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    //object 4
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    //object 5
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    //object 6
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];
/**
=========================================================
javascript for app
=========================================================
elements hooks for app
=========================================================
const
**/
/**  profile **/
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseButton = document.querySelector("#modal-close-button");
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-descr");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-descr-input");
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");

/**  element **/

const elementTitle = document.querySelector("#element-title");
const elementImage = document.querySelector("#element-image");
const elementTitleInput = document.querySelector("#element-title-input");
const elementImageInput = document.querySelector("#element-image-input");
//const elementCloseButton = elementAddModal.querySelector("#element-add-close");

const elementListElement = document.querySelector(".elements__list");
const elementTemplate =
  document.querySelector("#element-template").content.firstElementChild;

const modalImage = document.querySelector("#element-modal-image");
const modalCaption = document.querySelector("#element-modal-caption");
const elementImageModal = document.querySelector("#element-image-modal");
const elementImageModalClose = document.querySelector("#element-image-close");

/**
=========================================================
javascript for app
=========================================================
elements hooks for app
=========================================================
functions
**/
function closePopUp(popUp) {
  popUp.classList.remove("modal_opened");
}
function openPopUp(popUp) {
  popUp.classList.add("modal_opened");
}
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}
function renderElement(element, container) {
  container.prepend(element);
}
function getElementView(elementData) {
  const element = elementTemplate.cloneNode(true);
  const elementImageElement = element.querySelector(".element__img");
  const elementTitleElement = element.querySelector(".element__text");

  elementImageElement.src = elementData.link;
  elementImageElement.alt = elementData.name;
  elementTitleElement.textContent = elementData.name;
  return element;
}

/**
=========================================================
javascript for app
=========================================================
elements hooks for app
=========================================================
event listeners
**/
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(profileEditModal);
});

profileCloseButton.addEventListener("click", () => {
  closePopUp(profileEditModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initializeCard.forEach((elementData) => {
  const elementView = getElementView(elementData);
  renderElement(elementView, elementListElement);
});

/**
=========================================================
javascript for app
=========================================================
elements hooks for app
=========================================================
heavy lifting
**/
