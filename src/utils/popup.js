// Import the PopupWithImage class
import PopupWithImage from './PopupwithForm.js';

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

  _setEventListeners() {
    this._cardElement.querySelector('.element__like-button').addEventListener('click', this._handleLikeButton.bind(this));
    this._cardElement.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteButton.bind(this));
    this._cardElement.querySelector('.element__img').addEventListener('click', this._handleImageClick.bind(this));
  }

  _handleLikeButton(evt) {
    const cardLike = evt.currentTarget;
    cardLike.classList.toggle('element__like-button_active');
  }

  _handleDeleteButton(evt) {
    const cardElement = evt.target.closest('.element');
    cardElement.remove();
  }

  _handleImageClick(evt) {
    const imageUrl = this._data.url;
    const imageCaption = this._data.name;

    // Create an instance of the PopupWithImage class and pass the imageUrl and imageCaption
    const popupWithImage = new PopupWithImage(imageUrl, imageCaption);
    popupWithImage.open(); // Open the popup with the image and caption

    // Alternatively, you can use the existing elementImageModal and openModal function:
    // const modalImage = this._elementImageModal.querySelector('#element-modal-image');
    // const modalCaption = this._elementImageModal.querySelector('#element-modal-caption');
    // modalImage.src = imageUrl;
    // modalImage.alt = imageCaption;
    // modalCaption.textContent = imageCaption;
    // openModal(this._elementImageModal);
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
