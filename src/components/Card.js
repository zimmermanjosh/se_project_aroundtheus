import '/src/constants/variables.js';
export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._data = data;
    this._url = data.url;
    this._name = data.name;
    this._templateSelector = templateSelector;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like-button').addEventListener('click', this._handleLikeButton.bind(this));
    this._cardElement.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteButton.bind(this));
    this._cardElement.querySelector('.element__img').addEventListener('click', this._handleImageClick);
  }
  _handleLikeButton() {
    this._cardElement.querySelector('.element__like-button').classList.toggle('element__like-button_active')
    //const cardLike = evt.currentTarget;
    //cardLike.classList.toggle('element__like-button_active')
  }
  _handleDeleteButton() {
    //this._cardElement.querySelector('.element__delete-button').classList.toggle('element__delete')
    this._cardElement.remove();
    this._cardElement = null;
    //const cardElement = evt.target.closest('.element');

  }

  _handleImageClick() {
    this._handleCardClick(this._url, this._name);
  }


  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector);
    return cardTemplate.content.cloneNode(true);
  }

  generateCard() {
    this._cardElement = this._getTemplate().querySelector('.element');
    const imageElement = this._cardElement.querySelector('.element__img');
    const titleElement = this._cardElement.querySelector('.element__text');

    imageElement.src = this._data.url;
    imageElement.alt = this._data.name;
    titleElement.textContent = this._data.name;

    this._setEventListeners();

    return this._cardElement;
  }
}
