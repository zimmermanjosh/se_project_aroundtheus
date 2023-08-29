import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector }); // Pass the selector to the parent constructor
    this._modalImage = this._popup.querySelector(".element__img"); // Use this._popup instead of this._modalImage
    this._modalCaption = this._popup.querySelector(".element__descr"); // Use this._popup instead of this._modalCaption
  }

  open(url, name) {
    this._modalImage.src = url;
    this._modalImage.alt = name;
    this._modalCaption.textContent = name;
    super.open();
  }
}
