import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);

    this._popupForm = document.querySelector(".modal__form");
    this._inputElements = this._popupForm.querySelector(".modal__input");
    this.handleFormSubmit = handleFormSubmit;
  }
  close() {
    this._popupForm.reset();
    this._popupForm.removeEventListener('submit', this._submitForm);
    super.close();
  }

  _getInputValues() {
    this._formValues = {};
    this._inputElements.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );
    return this._formValues;
  }

  _submitForm = (event) =>  {
    event.preventDefault();
    const inputValues = this._getInputValues();
    this.handleFormSubmit(inputValues);
  };

  setEventListeners() {
    console.trace(this);
    this._popupForm.addEventListener('submit', this._submitForm);
    super.setEventListeners();
  }
}