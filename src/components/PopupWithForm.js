import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({popupSelector});
    this._formElement = this._popupElement.querySelector(".modal__form");
    this._formInputs = this._formElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    console.log("close popup w/form !!!!");
    this._formElement.reset();
    this._formElement.removeEventListener("submit", this._submitForm);
    super.close()
  }

  _getInputValues() {
    //console.log("popup w/form -- get inputs value !!!!");
    const inputs = {};
    //console.log("Inputs value:", inputs);
    this._formInputs.forEach((input) => {
      //console.log("Inputs forEach:", inputs);
      if (input.value !== "") {
        inputs[input.name] = input.value;
        //console.log("Inputs value:", inputs);
      }
    });
    //console.log("popup w/form -- return inputs value !!!!");

    return inputs;
  }

  _submitForm = (e) => {
    e.preventDefault();
    console.log("popup w/form -- submit e !!!!", e);
    const inputValues = this._getInputValues();
    this._handleFormSubmit(inputValues);
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._submitForm);
  }
}