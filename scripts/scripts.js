/**
=========================================================
this is my re-org to  help me apply work and school, this need to be the same
=========================================================
array of pics for app
**/
// these are not going to be reassigned in the future remove let
// Import/Exports
import validation from "./validation.js";

//Initial URL Setup
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
];
//variables

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
const elementAddButton = document.querySelector("#element-add-button");
const elementAddModal = document.querySelector("#element-add-modal");

/*const elementTitle = document.querySelector("#element-title");
const elementImage = document.querySelector("#element-image");
const elementTitleInput = document.querySelector("#element-title-input");
const elementImageInput = document.querySelector("#element-image-input");*/

const elementCloseButton = elementAddModal.querySelector("#element-add-close");
const elementList = document.querySelector(".elements__list");
const elementTemplate =
  document.querySelector("#element-template").content.firstElementChild;
const elementAddForm = elementAddModal.querySelector("#element-add-form");
const modalImage = document.querySelector("#element-modal-image");
const modalCaption = document.querySelector("#element-modal-caption");
const elementImageModal = document.querySelector("#element-image-modal");
const elementImageModalClose = document.querySelector("#element-image-close");

//Functions
function getElementView(elementData) {
  const element = elementTemplate.cloneNode(true);
  const imageElement = element.querySelector(".element__img");
  const titleElement = element.querySelector(".element__text");
  const likeButton = element.querySelector(".element__like-button");
  const elementDeleteButton = element.querySelector("#element-delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("element__like-button_active");
  });

  elementDeleteButton.addEventListener("click", deleteElement);

  imageElement.addEventListener("click", () => {
    handleElementImageModal(elementData);
  });

  imageElement.src = elementData.url;
  imageElement.alt = elementData.name;
  titleElement.textContent = elementData.name;
  return element;
}

function deleteElement(e) {
  e.target.closest(".element").remove();
}

function closePopUp(popUp) {
  popUp.classList.remove("modal_opened");
}

function openPopUp(popUp) {
  popUp.classList.add("modal_opened");
}

function renderElement(element, container) {
  container.prepend(element);
}

function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closePopUp(profileEditModal);
}

function handleEscKey(event) {
  if (event.keyCode === "esc") {
    closePopUp(profileEditModal);
    closePopUp(elementAddModal);
    closePopUp(elementImageModal);
  }
}

function handleElementImageModal(elementData) {
  modalImage.src = elementData.url;
  modalImage.alt = elementData.name;
  modalCaption.textContent = elementData.name;
  openPopUp(elementImageModal);
}

//Event Listeners
profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileCloseButton.addEventListener("click", () => {
  closePopUp(profileEditModal);
});

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openPopUp(profileEditModal);
});

elementAddButton.addEventListener("click", () => {
  openPopUp(elementAddModal);
});

elementCloseButton.addEventListener("click", () => {
  closePopUp(elementAddModal);
});

elementImageModalClose.addEventListener("click", () => {
  closePopUp(elementImageModal);
});

elementAddForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const url = e.target.url.value;
  const elementView = getElementView({ name, url });
  renderElement(elementView, elementList);
  closePopUp(elementAddModal);
  elementAddForm.reset();
});

initializeCards.forEach((elementData) => {
  const elementView = getElementView(elementData);
  renderElement(elementView, elementList);
});

//profile modal validation
const nameInput = document.getElementById("profile-title-input");
const aboutInput = document.getElementById("profile-descr-input");
const saveBtn = document.getElementById("save");
const nameErrorMessage = document.getElementById("name-error-message");
const aboutErrorMessage = document.getElementById("about-error-message");

function validateForm(ev) {
  ev.preventDefault();
  if (nameInput.checkValidity() && aboutInput.checkValidity()) {
    saveBtn.classList.remove("inactive");
    saveBtn.disabled = false;
    nameErrorMessage.textContent = "";
    aboutErrorMessage.textContent = "";
  } else {
    saveBtn.classList.add("inactive");
    saveBtn.disabled = true;
    if (nameInput.validity.valueMissing) {
      nameErrorMessage.textContent = "Please enter your name.";
    } else if (nameInput.validity.tooShort || nameInput.validity.tooLong) {
      nameErrorMessage.textContent =
        "Name must be between 2 and 40 characters.";
    } else {
      nameErrorMessage.textContent = "";
    }

    if (aboutInput.validity.valueMissing) {
      aboutErrorMessage.textContent = "Please enter something about yourself.";
    } else if (aboutInput.validity.tooShort || aboutInput.validity.tooLong) {
      aboutErrorMessage.textContent =
        "About must be between 2 and 200 characters.";
    } else {
      aboutErrorMessage.textContent = "";
    }
  }
}

nameInput.addEventListener("input", validateForm);
aboutInput.addEventListener("input", validateForm);

//title element and url element validation

const titleElInput = document.getElementById("element-title-input");
const urlElInput = document.getElementById("element-image-input");
const createBtn = document.getElementById("create");
const titleErrorMessage = document.getElementById("title-error-message");
const urlErrorMessage = document.getElementById("url-error-message");

function validateElement(ev) {
  ev.preventDefault();
  if (titleElInput.checkValidity() && urlElInput.checkValidity()) {
    createBtn.classList.remove("inactive");
    createBtn.disabled = false;
    titleErrorMessage.textContent = "";
    urlErrorMessage.textContent = "";
  } else {
    createBtn.classList.add("inactive");
    createBtn.disabled = true;
    if (titleElInput.validity.valueMissing) {
      titleErrorMessage.textContent = "Please enter some title.";
    } else if (
      titleElInput.validity.tooShort ||
      titleElInput.validity.tooLong
    ) {
      titleErrorMessage.textContent =
        "Name must be between 1 and 30 characters.";
    }
    if (urlElInput.validity.value) {
      urlErrorMessage.textContent = "Please enter a valid URL.";
    } else {
      urlErrorMessage.textContent = "this is not a valid url";
    }
  }
}

titleElInput.addEventListener("input", validateElement);
urlElInput.addEventListener("input", validateElement);
document.addEventListener("keydown", handleEscKey);
