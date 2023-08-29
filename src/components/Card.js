import '/src/constants/variables.js';
import {elementImageModal} from "../constants/variables";
export default class Card {
  constructor({name, url}, templateSelector, handleCardClick) {

    this._name = name;
    this._url = url;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    //this._data = data;
    //this._templateSelector = templateSelector;
    //this._openModalFunction = openModalFunction;
    //this._elementImageModal = elementImageModal;
    //this._handleImageClick = this._handleImageClick.bind(this);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like-button').addEventListener('click', this._handleLikeButton);
    this._cardElement.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteButton);
    this._cardElement.querySelector('.element__img').addEventListener('click', this._handleImagePreviewClick);
  }

  _handleLikeButton() {
    this._cardElement.querySelector('.element__like-button').classList.toggle('element__like-button_active');
    //const cardLike = evt.currentTarget;
    //cardLike.classList.toggle('element__like-button_active')
  }

  _handleDeleteButton() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleImagePreviewClick() {
    this._handleCardClick(this._name, this._url);
    //const cardElement = evt.target.closest('.element');
    //this._cardSelect(cardElement);
  }

  _getTemplate() {
   return document
     .querySelector(this._templateSelector).content.querySelector(".elements__content").cloneNode(true);
    //const cardTemplate = document.querySelector(this._templateSelector);
   // return cardTemplate.content.cloneNode(true);
  }

  // _handleImageClick() {
  //   const imageUrl = this._data.url;
  //   console.log("imageUrl", imageUrl);
  //   const imageCaption = this._data.name;
  //   console.log("imageCaption", imageCaption);
  //
  //   const modalImage = document.querySelector("#element-modal-image");
  //   const modalCaption = document.querySelector("#element-modal-caption");
  //
  //   modalImage.src = imageUrl;
  //   modalImage.alt = imageCaption;
  //   modalCaption.textContent = imageCaption;
  //   elementImageModal.classList.add("modal_opened");
  //   this._openModalFunction(this._elementImageModal);
  // }

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

//export default Card;
