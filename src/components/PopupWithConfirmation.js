import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._saveButton = this._popupForm.querySelector(".modal__button");
  }

  setSubmitAction(action) {
    this._handleConfirm = action;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._saveButton.textContent = "Loading...";
    } else {
      this._saveButton.textContent = "Yes";
    }
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleConfirm();
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleSubmit);
  }
}
