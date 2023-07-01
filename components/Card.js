class Card {
  constructor(data, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector);
    return cardTemplate.content.cloneNode(true);
  }

  _handleLikeButton(evt) {
    // Add your logic for handling the like button click event
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

    const elementImageModal = document.querySelector('#element-image-modal');
    elementImageModal.classList.add('modal_opened');
    document.addEventListener('keyup', this._handleEscKey);
  }

  _handleEscKey(evt) {
    if (evt.key === 'Escape') {
      const elementImageModal = document.querySelector('#element-image-modal');
      elementImageModal.classList.remove('modal_opened');
      document.removeEventListener('keyup', this._handleEscKey);
    }
  }

  _setEventListeners(cardElement) {
    const likeButton = cardElement.querySelector('.element__like-button');
    const deleteButton = cardElement.querySelector('.element__delete-button');
    const imageElement = cardElement.querySelector('.element__img');

    likeButton.addEventListener('click', this._handleLikeButton.bind(this));
    deleteButton.addEventListener('click', this._handleDeleteButton.bind(this));
    imageElement.addEventListener('click', this._handleImageClick.bind(this));
  }

  generateCard() {
    const cardElement = this._getTemplate();
    const imageElement = cardElement.querySelector('.element__img');
    const titleElement = cardElement.querySelector('.element__text');

    imageElement.src = this._data.url;
    imageElement.alt = this._data.name;
    titleElement.textContent = this._data.name;

    this._setEventListeners(cardElement);

    return cardElement;
  }
}

export default Card;
