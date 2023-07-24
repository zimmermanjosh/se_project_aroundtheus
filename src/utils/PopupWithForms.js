import Popup from './popup.js';
class PopupWithForm extends Popup {
  constructor(popupSelector, handleForSubmit) {
    super({popupSelector})
    this._popupElement.querySelector('.popup_form')
    this._handleForSubmit = handleForSubmit;

  }
  close() {
    this._popupForm.reset();
  }
  }

