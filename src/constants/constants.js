//export const initializeCards = [
/*
name: "legend of billie jean",
url: "https://m.media-amazon.com/images/M/MV5BNjIwOTgzN2QtZTY2Mi00MmU1LWFjMTItN2EwZTFhYTMwZGRjXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg",

name: "ski patrol",
url: "https://m.media-amazon.com/images/I/81A408tMCCL._AC_UF894,1000_QL80_.jpg",

name: "better off dead",
url: "https://shatpod.com/movies/wp-content/uploads/Better-Off-Dead-Movie-Poster-1985.jpg",

name: "less then zero",
url: "https://upload.wikimedia.org/wikipedia/en/3/34/Less_than_zero_1987_poster.jpg",

name: "sixteen candles",
url: "https://shatpod.com/movies/wp-content/uploads/rzTrRQg5ek47Yl0Vfenc69r9gOd-e1585675704809.jpg",

name: "Labyrinth",
url: "https://m.media-amazon.com/images/M/MV5BOWI3OGEzOTUtYWY4MS00ZDgwLWFlZjgtNjJmNjcyNGM1ZDI3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpgv",

name: "the last starfighter",
url: "https://images.justwatch.com/poster/11067210/s718/the-last-starfighter.%7Bformat%7D",

name: "real genius",
url: "https://m.media-amazon.com/images/M/MV5BNTQ5MzU3ODg0OF5BMl5BanBnXkFtZTgwODM0MzQxMDE@._V1_.jpg",

name: "secret of my success",
url: "https://film-authority.com/wp-content/uploads/2021/07/maxresdefault-1.jpg",

name: "legend",
url: "https://twilightswarden.files.wordpress.com/2012/10/screenshot-lrg-07.png?w=1568",

name: "teen wolf",
url: "https://m.media-amazon.com/images/M/MV5BMGFmZTFhYjktMmYyZi00ZmE4LWI0NGEtMDY2MGEzMDY0YjdiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",

name: "weird science",
link: "https://upload.wikimedia.org/wikipedia/en/d/d6/Movie_poster_for_Weird_Science_%281985%29.jpg",*/

export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileEditButton = document.querySelector("#profile-edit-button");

export const profileTitleInput = document.querySelector("#title-input");
export const profileDescriptionInput = document.querySelector("#profile-input");

export const profileEditForm =
  profileEditModal.querySelector("#profile-edit-form");
export const elementAddModal = document.querySelector("#element-add-modal");
export const elementImageModal = document.querySelector("#element-image-modal");
export const cardAddButton = document.querySelector("#profile-add-button");

export const apiUrl = "https://around-api.en.tripleten-services.com/v1";
export const apiToken = "2ac20083-7dba-4483-94f0-c00ccc6d0155";

export const cardsList = document.querySelector(".elements__list");

export const cardAddForm = elementAddModal.querySelector(".modal__form");

export const configValidation = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const selectors = {
  cardSection: ".elements__list",
  cardTemplate: "#element-template",
  previewModal: "#preview-modal",
  addCardPopupSelector: "#element-add-modal",
  profilePopupSelector: "#profile-edit-modal",
  avatarPopupSelector: "",
};

export const avatarEditForm = document.querySelector("#avatar-edit-form");
export const avatarEditButton = document.querySelector(
  "#profile-avatar__image-button"
);
