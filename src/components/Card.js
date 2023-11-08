import "/src/constants/constants.js";




export default class Card {
  constructor(
    title,
    url,
    isLiked,
    likes,
    _id,
    userId,
    cardSelector,
    handleCardClick,
    handleDeleteButton,
    handleLikeButton
  ) {
    this._title = title;
    this._url = url;
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

  /*  _handlePreviewDisplay() {
    this._handleCardClick(this._name, this._link);
  }*/

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__content")
      .cloneNode(true);
  }

  _getData() {
    return {
      title: this._title,
      url: this._url
    //  likes: this._likes,
    //  userId: this._userId,
    //  _id: this._id,
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

    this._cardImage.src = this._title;
    this._cardImage.alt = this._url;
    this._cardElement.querySelector(".element__text").textContent = this._title;

    this._setEventListeners();

    return this._cardElement;
  }
}
