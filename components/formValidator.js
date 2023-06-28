class formValidator {
  constructor(config, formElement) {
    this._inputSelector = config._inputSelector;
    this._submitButtonSelector = config._submitButtonSelector;
    this._inactiveButtonClass = config._inactiveButtonClass;
    this._inputErrorClass = config._inputErrorClass;
    this._errorClass = config._errorClass;

    this._formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorMessageElements = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.add(this._inputErrorClass);
    errorMessageElements.textContent = inputElement.validationMessage;
    errorMessageElements.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorMessageElements = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );

    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElements.textContent = "";
    errorMessageElements.classList.remove(this._errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!this._inputElement.validity.valid) {
      return this._showInputError(inputElement);
    }
    this._hideInputError(inputElement);
  }

  _hasinValidInput(inputList) {
    return !this._inputList.every((inputElement) => inputElement.validity.valid);
  }

  _toggleButtonState(inputElements, submitButton, { inactiveButtonClass }) {
    if (this._hasInvalidInput(inputElements)) {
      this._disableSubmitButton(submitButton, inactiveButtonClass);
    } else {
      this._enableSubmitButton(submitButton, inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputElements = [...formElement.querySelectorAll(inputSelector)];
    this._submitButton = formElement.querySelector(this._submitButtonSelector);
    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(this._formElement);
  }
}

export default formValidator;
