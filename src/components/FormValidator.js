export default class FormValidator {
  constructor(config, formElement) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;

    this._formElement = formElement;

    //this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._inputList = [
      ...this._formElement.querySelectorAll(this._inputSelector),
    ];

    this._submitButton = this._formElement.querySelector(
      this._submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _enableButtonState() {
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.disabled = false;
  }

  _disableButtonState() {
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.disabled = true;
  }

  toggleButtonState() {
    if (this._hasInvalidInput(this._input)) {
      this._disableButtonState();
    } else {
      this._enableButtonState();
    }
  }

  resetValidation() {
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    //this._toggleButtonState();
    this._setEventListeners();
  }
}
