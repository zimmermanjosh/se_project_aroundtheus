export class Card {
  constructor(data, templateSelector) {
    this._text = data.text;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }

  _setEventListeners(cardElement) {
    cardElement.querySelector('.card__image').addEventListener('click', () => {
      this._handleCardClick();
    });

    cardElement.querySelector('.card__delete-button').addEventListener('click', () => {
      this._handleDeleteClick();
    });
  }

  _handleCardClick() {
    const imageModal = document.querySelector('.modal_type_image');
    const modalImage = imageModal.querySelector('.modal__image');
    const modalCaption = imageModal.querySelector('.modal__caption');
    modalImage.src = this._link;
    modalImage.alt = this._text;
    modalCaption.textContent = this._text;
    this._openModal(imageModal);
  }

  _handleDeleteClick() {
    this._cardElement.remove();
  }

  _openModal(modal) {
    modal.classList.add('modal_open');
    document.addEventListener('keydown', this._handleEscClose);
    modal.addEventListener('click', this._handleOverlayClose);
  }

  _closeModal(modal) {
    modal.classList.remove('modal_open');
    document.removeEventListener('keydown', this._handleEscClose);
    modal.removeEventListener('click', this._handleOverlayClose);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      const modal = document.querySelector('.modal_open');
      this._closeModal(modal);
    }
  }

  _handleOverlayClose(event) {
    if (event.target === event.currentTarget) {
      const modal = document.querySelector('.modal_open');
      this._closeModal(modal);
    }
  }

  createCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners(this._cardElement);
    this._cardElement.querySelector('.card__image').src = this._link;
    this._cardElement.querySelector('.card__image').alt = this._text;
    this._cardElement.querySelector('.card__title').textContent = this._text;
    return this._cardElement;
  }
}
