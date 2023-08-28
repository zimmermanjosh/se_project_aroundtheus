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
  },
  {
    //object
    name: "teen wolf",
    url: "https://m.media-amazon.com/images/M/MV5BMGFmZTFhYjktMmYyZi00ZmE4LWI0NGEtMDY2MGEzMDY0YjdiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
  },
  {
    //object
    name: "weird science",
    url: "https://upload.wikimedia.org/wikipedia/en/d/d6/Movie_poster_for_Weird_Science_%281985%29.jpg",
  }
];

const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditButton = document.querySelector("#profile-edit-button");
const profileTitleInput = document.querySelector("#title-input");
const profileDescriptionInput = document.querySelector("#profile-input");
const profileEditForm = profileEditModal.querySelector("#profile-edit-form");
const elementAddModal = document.querySelector("#element-add-modal");
const elementAddButton = document.querySelector(".profile__add-button");
const elementAddForm = elementAddModal.querySelector("#element-add-form");
const elNameInput = elementAddModal.querySelector("#element-input");
const elUrlInput = elementAddModal.querySelector("#image-input");
const elementImageModal = document.querySelector("#element-image-modal");

const configValidation = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}
export {
  initializeCards,
  profileEditButton,
  profileEditModal,
  profileTitleInput,
  profileDescriptionInput,
  profileEditForm,
  elementAddModal,
  elementAddButton,
  elementAddForm,
  elNameInput,
  elUrlInput,
  elementImageModal,
  configValidation
}