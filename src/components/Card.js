import '/src/constants/variables.js';
import {elementImageModal} from "../constants/variables";
class Card {
  constructor(data, templateSelector, elementImageModal, handleImageClick) {
    //constructor(data, templateSelector, elementImageModal)
    this._data = data;
    this._templateSelector = templateSelector;
    this._openModalFunction = openModalFunction;
    this._elementImageModal = elementImageModal;

    this._handleImageClick = this._handleImageClick.bind(this);
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector);
    return cardTemplate.content.cloneNode(true);
  }

  _setEventListeners() {
    this._cardElement.querySelector('.element__like-button').addEventListener('click', this._handleLikeButton.bind(this));
    this._cardElement.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteButton.bind(this));
    this._cardElement.querySelector('.element__img').addEventListener('click', this._handleImageClick);
  }

  _handleLikeButton(evt) {
    const cardLike = evt.currentTarget;
    cardLike.classList.toggle('element__like-button_active')
  }

  _handleDeleteButton(evt) {
    const cardElement = evt.target.closest('.element');
    cardElement.remove();
  }

  _handleImageClick() {
    const imageUrl = this._data.url;
    const imageCaption = this._data.name;

    this._openModalFunction(imageUrl, imageCaption);
  }

  /*_handleImageClick() {
    const imageUrl = this._data.url;
    console.log("imageUrl", imageUrl);
    const imageCaption = this._data.name;
    console.log("imageCaption", imageCaption);

    const modalImage = document.querySelector("#element-modal-image");
    const modalCaption = document.querySelector("#element-modal-caption");

    modalImage.src = imageUrl;
    modalImage.alt = imageCaption;
    modalCaption.textContent = imageCaption;
    elementImageModal.classList.add("modal_opened");
    this._openModalFunction(this._elementImageModal);
  }*/

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

export default Card;
