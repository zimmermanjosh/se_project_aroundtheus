export class Card {
  constructor(data, templateSelector) {
    this._text = data.text;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this.elementTemplate = null; // Initialize the elementTemplate property
  }

  _getTemplate() {
    const elementTemplate = document.querySelector(this._templateSelector);
    const clonedTemplate = elementTemplate.content.querySelector(".element").cloneNode(true);
    return clonedTemplate;
  }

  _setEventListeners(elementTemplate) {
    elementTemplate.querySelector(".element__img").addEventListener('click', () => {
      this._handleCardClick();
    });

    elementTemplate.querySelector('.element__delete-button').addEventListener('click', () => {
      this._handleDeleteClick();
    });
  }

  _handleCardClick() {
    const imageModal = document.querySelector('.modal__container-element');
    const modalImage = imageModal.querySelector('.modal__image-element');
    const modalCaption = imageModal.querySelector('.modal__caption-element');
    modalImage.src = this._link;
    modalImage.alt = this._text;
    modalCaption.textContent = this._text;
    this._openModal(imageModal);
  }

  _handleDeleteClick() {
    this.elementTemplate.remove();
  }

  _openModal(modal) {
    modal.classList.add('modal_opened');
    document.addEventListener('keydown', this._handleEscClose);
    modal.addEventListener('click', this._handleOverlayClose);
  }

  _closeModal(modal) {
    modal.classList.remove('modal_opened');
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
    this.elementTemplate = this._getTemplate();
    this._setEventListeners(this.elementTemplate);
    this.elementTemplate.querySelector('.element__img').src = this._link;
    this.elementTemplate.querySelector('.element__img').alt = this._text;
    this.elementTemplate.querySelector('.element__descr').textContent = this._text;
    return this.elementTemplate ;
  }
}
