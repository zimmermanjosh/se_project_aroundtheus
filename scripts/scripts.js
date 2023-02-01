/**
=========================================================
this is my re-org to  help me apply work and school, this need to be the same
=========================================================
array of pics for app
**/
// these are not going to be reassigned in the future remove let
const initialCards = [
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
const profileCloseButton = document.querySelector("#modal-close-button");
const profileEditModal = document.querySelector("#profile-edit-modal");

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

// event listeners

cardCloseButton.addEventListener("click", () => {
  closePopUp(cardAddModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

profileCloseButton.addEventListener("click", () => {
  closePopUp(profileEditModal);
});

/**
=========================================================
javascript for app
=========================================================
elements hooks for app
=========================================================
heavy lifting
**/
