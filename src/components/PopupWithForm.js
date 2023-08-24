import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._formElement.querySelector('.modal__form');
    this._popupInputs = this._popupForm.querySelector(".modal__input");
    //this._formElement = this._popup.querySelector('.modal__form');
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