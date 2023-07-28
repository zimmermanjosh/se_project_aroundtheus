//import {openModal} from "../utils/utils.js";

class Card {
  constructor(data, templateSelector, elementImageModal) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._elementImageModal = elementImageModal;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector);
    return cardTemplate.content.cloneNode(true);
  }

  /*_setEventListeners() {
    const likeButton = this._cardElement.querySelector('.element__like-button');
    const deleteButton = this._cardElement.querySelector('.element__delete-button');
    const imageElement = this._cardElement.querySelector('.element__img');


    likeButton.addEventListener('click', this._handleLikeButton.bind(this));
    deleteButton.addEventListener('click', this._handleDeleteButton.bind(this));
    imageElement.addEventListener('click', this._handleImageClick.bind(this));
  }*/

  _setEventListeners() {
    this._cardElement.querySelector('.element__like-button').addEventListener('click', this._handleLikeButton.bind(this));
    this._cardElement.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteButton.bind(this));
    this._cardElement.querySelector('.element__img').addEventListener('click', this._handleImageClick.bind(this));
  }

  /*_handleEscKey(evt) {
    if (evt.key === 'Escape') {
      const elementImageModal = document.querySelector('#element-image-modal');
      openModal(elementImageModal);
      //elementImageModal.classList.remove('modal_opened');
      //document.removeEventListener('keyup', this._handleEscKey);
    }
  }*/

  _handleLikeButton(evt) {
    const cardLike = evt.currentTarget;
    cardLike.classList.toggle('element__like-button_active')
  }

  _handleDeleteButton(evt) {
    // Add your logic for handling the delete button click event
    const cardElement = evt.target.closest('.element');
    cardElement.remove();
  }

  _handleImageClick(evt) {
    // Add your logic for handling the image click event
    const imageUrl = this._data.url;
    const imageCaption = this._data.name;

    const modalImage = document.querySelector('#element-modal-image');
    const modalCaption = document.querySelector('#element-modal-caption');

    modalImage.src = imageUrl;
    modalImage.alt = imageCaption;
    modalCaption.textContent = imageCaption;

    //const elementImageModal = document.querySelector('#element-image-modal');
    const elementImageModal = this._elementImageModal;

    openModal(elementImageModal);
    //elementImageModal.classList.add('modal_opened');
    //document.addEventListener('keyup', this._handleEscKey);
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

export default Card;
