import "/src/constants/constants.js";

export default class Card {
  constructor(
    name,
    link,
    isLiked,
    likes,
    _id,
    userId,
    cardSelector,
    handleCardClick,
    handleDeleteButton,
    handleLikeButton
  ) {
    this._name = name;
    this._link = link;
    this.isLiked = isLiked;
    this._likes = likes;
    this.cardId = _id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteButton = handleDeleteButton;
    this._handleLikeButton = handleLikeButton;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._getData());
    });
    this._cardLikeButton.addEventListener("click", () => {
      this._handleLikeButton(this);
    });
    this._cardDeleteButton.addEventListener("click", () => {
      this._handleDeleteButton(this);
    });
  }

  /*_setEventListeners() {
    this._cardElement
      .querySelector('.element__like-button')
      .addEventListener('click', () => {
        this._handleLikeButton();
      });
    this._cardElement
      .querySelector('.element__delete-button')
      .addEventListener('click', () => {
        this._handleDeleteButton();
      });
    this._cardElement
      .querySelector('.element__img')
      .addEventListener('click', ()=> {
        this._handlePreviewDisplay();
      });
  }*/

  _showCardLikes() {
    this._cardLikeCounter.textContent = this._likes.length;
    if (this.cardIsLiked) {
      this._cardLikeButton.classList.add("cards__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("cards__like-button_active");
    }
  }

  _renderLikes() {
    if (this.isLiked) {
      this._cardLikeButton.classList.add("cards__like-button_active");
    } else {
      this._cardLikeButton.classList.remove("cards__like-button_active");
    }
  }

  updateLikes(isLiked) {
    this.isLiked = isLiked;
    this._renderLikes();
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button_active");
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  handleDeleteCard() {
    // Logic to remove the card element from the DOM
    this._element.remove();
  }

  handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__content")
      .cloneNode(true);
  }

  _getData() {
    return {
      name: this._name,
      link: this._link,
    };
  }

  generateCard() {
    this._cardElement = this._getTemplate();

    this._cardImage = this._cardElement.querySelector(".element__img");

    this._cardLikeButton = this._cardElement.querySelector(
      ".element__like-button"
    );

    this._cardDeleteButton = this._cardElement.querySelector(
      ".element__delete-button"
    );

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".element__text").textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
