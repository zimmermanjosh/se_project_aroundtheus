import '/src/constants/constants.js';
export default class Card {
  constructor({name, url}, templateSelector, handleCardClick) {
    this._name = name;
    this._url = url;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector);
    return cardTemplate.content.cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like-button').addEventListener(
      'click', this._handleLikeButton.bind(this));

    this._cardElement.querySelector('.element__delete-button').addEventListener(
      'click', this._handleDeleteButton.bind(this));

    this._cardElement.querySelector('.element__img').addEventListener('click', () => {
      this._handleCardClick({name: this._name, url: this._url});
    });
  }

    _handleLikeButton()
    {
      this._cardElement.querySelector('.element__like-button').classList.toggle('element__like-button_active')
    }

    _handleDeleteButton()
    {
      this._cardElement.remove();
      this._cardElement = null;
    }

    generateCard()
    {
      this._cardElement = this._getTemplate().querySelector('.element');
      this._cardElement.querySelector('.element__img');
      this._cardElement.querySelector('.element__text');

      //imageElement.src = this._data.url;
      //imageElement.alt = this._data.name;
      //titleElement.textContent = this._data.name;

      this._setEventListeners();

      return this._cardElement;
    }

  }