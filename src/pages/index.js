import Card from "/src/components/Card.js";
import FormValidator from "/src/components/FormValidator.js";
import PopupWithImage from "/src/components/PopupWithImage.js";
import PopupWithForm from "/src/components/PopupWithForm.js";
import UserInfo from "/src/components/UserInfo.js";
import "/src/pages/index.css";
import PopupWithConfirmation from "../components/PopupWithConfirmation";
("src/components/PopupWithConfirmation.js");
import Api from "../components/Api";
import {
  apiToken,
  apiUrl,
  cardAddButton,
  cardAddForm,
  configValidation,
  profileDescriptionInput,
  profileEditButton,
  profileEditForm,
  profileTitleInput,
  selectors,
} from "../constants/constants";
import Section from "../components/Section";

const api = new Api({
  baseUrl: apiUrl,
  baseHeader: {
    authorization: apiToken,
    "Content-Type": "application/json",
  },
});

const cardSelector = selectors.cardTemplate;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    newCardSection = new Section(
      {
        items: cardData,
        renderer: (data) => {
          const newCard = renderCard(data);
          newCardSection.addItem(newCard);
        },
      },
      selectors.cardSection
    );
    newCardSection.renderItems();
  })
  .catch(console.error);

//edit form
const userInfo = new UserInfo({
  profileDescriptionSelector: ".profile__description",
  profileNameSelector: ".profile__title",
  profileAvatarSelector: ".profile__img",
});

api
  .clearAllCards()
  .then(() => {
    console.log("All cards have been deleted.");
  })
  .catch((error) => {
    console.error("Failed to delete all cards:", error);
  });

const editFormValidator = new FormValidator(configValidation, profileEditForm);

const addFormValidator = new FormValidator(configValidation, cardAddForm);

const profileEditPopup = new PopupWithForm(
  "#profile-edit-modal",
  handleProfileFormSubmit
);

const addNewCardPopup = new PopupWithForm(
  "#element-add-modal",
  handleNewCardSubmit
);

const cardPreviewPopup = new PopupWithImage("#preview-modal");

//const for functions
let userId;
let newCardSection;
function handleProfileFormSubmit(inputValues) {
  //profileEditPopup.renderLoading(api);
  console.log("attempting to submit");
  api
    .updateProfileInfo(inputValues)
    .then(() => {
      userInfo.setUserInfo(inputValues);
      profileEditPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profileEditPopup.renderLoading("Save");
      console.log("done");
    });
}

function handleNewCardSubmit(inputValues) {
  addNewCardPopup.renderLoading(true);
  api
    .addNewCard(inputValues)
    .then((cardData) => {
      const newCardData = renderCard(cardData);
      newCardSection.addItem(newCardData);
      addNewCardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      addNewCardPopup.renderLoading(false, "Create");
    });
}

function handleCardClick(cardData) {
  cardPreviewPopup.open(cardData);
}

function renderCard(cardData) {
  const card = new Card(
    cardData.name,
    cardData.link,
    cardData.isLiked,
    cardData.likes,
    cardData._id,
    userId,
    cardSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick
  );
  console.log("index.js.:card values Are:", card);
  return card.generateCard();
}

function handleDeleteClick(card) {
  // Set the submit action for the delete confirmation
  deleteCardPopup.setSubmitAction(() => {
    deleteCardPopup.renderLoading(true);
    api
      .deleteCard(card.cardId)
      .then(() => {
        card.handleDeleteCard(); // This should be a method in your Card class that removes the card from the DOM
        deleteCardPopup.close();
      })
      .catch((err) => {
        console.error(err); // Updated to use console.error for better error visibility
      })
      .finally(() => {
        deleteCardPopup.renderLoading(false); // Reset the button text back to "Yes"
      });
  });

  // Open the delete confirmation popup
  deleteCardPopup.open();
}

function handleLikeClick(card) {
  if (card.isLiked) {
    api
      .removeCardLikes(card.cardId)
      .then((res) => {
        card.updateLikes(res.isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    api
      .addCardLikes(card.cardId)
      .then((res) => {
        card.updateLikes(res.isLiked);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

function handleProfileEditClick() {
  const user = userInfo.getUserInfo();
  profileTitleInput.value = user.name;
  profileDescriptionInput.value = user.about;
  profileEditPopup.open();
}

profileEditButton.addEventListener("click", () => {
  handleProfileEditClick();
  editFormValidator.resetValidation();
});

cardAddButton.addEventListener("click", () => {
  addNewCardPopup.open();
  addFormValidator.resetValidation();
});

const deleteCardPopup = new PopupWithConfirmation("#delete-modal");

deleteCardPopup.setEventListeners();

editFormValidator.enableValidation();
addFormValidator.enableValidation();

profileEditPopup.setEventListeners();
cardPreviewPopup.setEventListeners();
addNewCardPopup.setEventListeners();
