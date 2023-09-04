import '/src/constants/variables.js';
import {elementImageModal} from "../constants/variables";
export default class Card {
  constructor({name, url}, templateSelector, handleCardClick) {

    this._name = name;
    this._url = url;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
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
  }

  _handleLikeButton() {
    this._cardElement
      .querySelector('.element__like-button')
      .classList.toggle('element__like-button_active');
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handlePreviewDisplay() {
    this._handleCardClick(this._name, this._url);
  }

  _getTemplate() {
   return document
     .querySelector(this._templateSelector).content.querySelector(".elements__content").cloneNode(true);

  }

  generateCard() {
    this._cardElement = this._getTemplate();
    const cardImage = this._cardElement.querySelector(".element__img");
    const cardTitle = this._cardElement.querySelector(".element__text");

    cardImage.src = this._url;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}

