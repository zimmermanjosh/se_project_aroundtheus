import Popup from './Popup.js';
import {profileDescriptionInput, profileEditForm, profileTitleInput} from "../constants/variables";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._formElement.querySelector(".modal__form");
    this._popupInputs = this._popupForm.querySelector(".modal__input");
    //this._formElement = this._popup.querySelector('.modal__form');
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  _getInputValues() {
    //const _inputElements = this._formElement.querySelectorAll('.modal__input');
    const inputs = {};
    this._popupInputs.forEach((input) => {
      if(input.value !== "") {
        inputs[input.name] = input.value;
      }
    });
    return inputs;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
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