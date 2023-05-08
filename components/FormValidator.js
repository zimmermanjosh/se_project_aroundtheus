export class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
    } else {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => !inputElement.validity.valid);
  }

  _setEventListeners() {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });

    this._toggleButtonState();
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
}
