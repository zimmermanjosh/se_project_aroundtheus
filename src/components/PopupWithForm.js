import Popup from './Popup.js';
import {profileDescriptionInput, profileEditForm, profileTitleInput} from "../constants/variables";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.modal__form');
  }

  _getInputValues() {
    const inputElements = this._formElement.querySelectorAll('.modal__input');
    const formValues = {};
    inputElements.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}

//export default PopupWithForm;

/*
profileEditForm.addEventListener("submit", handleProfileEditSubmit);
profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = profileTitleInput.value;
  const job = profileDescriptionInput.value;
  handleProfileEditSubmit(name, job); // Pass input values to handleProfileEditSubmit function
});*/