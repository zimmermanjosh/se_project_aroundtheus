///////////////////////////////////
// initialize the app with data //
///////////////////////////////////

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
///////////////////////////////////
/* variables - constants */
///////////////////////////////////

/**  profile modal **/
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileEditCloseButton = document.querySelector(
  "#modal-profile-close-button"
);
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile-descr");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector("#profile-descr-input");

/**  element modal **/
const elementAddModal = document.querySelector("#element-add-modal");
const elementAddButton = document.querySelector(".profile__add-button");
const elementCloseButton = elementAddModal.querySelector("#element-add-close");
const elementAddForm = elementAddModal.querySelector("#element-add-form");
const elementTitleInput = document.querySelector("#element-title-input");
const elementImageInput = document.querySelector("#element-image-input");
const elementImage = document.querySelector("#element-image");

/*URL List*/
const elementList = document.querySelector(".elements__list");
/*Template*/
const elementTemplate = document
  .querySelector("#element-template")
  .content.querySelector(".element");

// images and popup modal
const elementImageModal = document.querySelector("#element-image-modal");
const elementImageModalClose = document.querySelector("#element-image-close");
const modalImage = document.querySelector("#element-modal-image");
const modalCaption = document.querySelector("#element-modal-caption");

///////////////////////////////////
/* function - statements */
///////////////////////////////////
const elementGallery = document.querySelector(".elements__list");

/* event Listeners */
initializeCards.forEach((elementData) => {
  getElementView(elementData);
  renderElement(elementData);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileEditButton.addEventListener("click", () => {
  openModal(profileEditModal);
});

profileEditCloseButton.addEventListener("click", () => {
  closeModal(profileEditModal);
});
profileEditModal.addEventListener("mousedown", profileOverlayClick);

elementAddForm.addEventListener("submit", (e) => {
  const name = e.target.title.value;
  const url = e.target.url.value;
  const elementView = getElementView({ name, url });
  renderElement(elementView, elementList);
  closeModal(elementAddModal);
  //elementAddForm.reset();
});
elementAddModal.addEventListener("mousedown", elementOverlayClick);

elementAddButton.addEventListener("click", () => {
  openModal(elementAddModal);
});

elementCloseButton.addEventListener("click", () => {
  closeModal(elementAddModal);
});

elementImageModalClose.addEventListener("click", () => {
  closeModal(elementImageModal);
});

elementImageModal.addEventListener("mousedown", imageOverlayClick);

function handleEscKey(evt) {
  const activeModal = document.querySelector(".modal_opened");
  if (evt.key === "Escape") {
    closeModal(activeModal);
  }
}

function profileOverlayClick(evt) {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(profileEditModal);
  }
}

function elementOverlayClick(evt) {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(elementAddModal);
  }
}

function imageOverlayClick(evt) {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(elementImageModal);
  }
}

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

  imageElement.src = elementData.url;
  imageElement.alt = elementData.name;
  titleElement.textContent = elementData.name;

  imageElement.addEventListener("click", () => {
    modalImage.src = elementData.url;
    modalImage.alt = elementData.name;
    modalCaption.textContent = elementData.name;
    openModal(elementImageModal);
  });
  return element;
}

function handleElementImageModal(elementData) {
  modalImage.src = elementData.url;
  modalImage.alt = elementData.name;
  modalCaption.textContent = elementData.name;
  openModal(elementImageModal);
}

function deleteElement(e) {
  e.target.closest(".element").remove();
}

function openEditModal() {
  fillProfileForm();
  openModal(profileEditModal);
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscKey);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscKey);
}

function fillProfileForm() {
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function renderElement(elementData) {
  elementGallery.prepend(getElementView(elementData));
}

function handleProfileEditSubmit(e) {
  //e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(profileEditModal);
}

function resetForm(form) {
  document.getElementById(form).reset();
}
