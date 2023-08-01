import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ modalSelector: popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._modalElement.querySelector(".modal__form");
  }

  _getInputValues() {
    const inputElements = this._formElement.querySelectorAll(".modal__input");
    const formValues = {};
    inputElements.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  openWithImage(imageData) {
    const imageUrl = imageData.url;
    const imageCaption = imageData.name;

    const modalImage = this._modalElement.querySelector("#element-modal-image");
    const modalCaption = this._modalElement.querySelector(
      "#element-modal-caption",
    );

    modalImage.src = imageUrl;
    modalImage.alt = imageCaption;
    modalCaption.textContent = imageCaption;

    this.open();
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}

export default PopupWithForm;
