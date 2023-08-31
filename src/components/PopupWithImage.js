import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    //modal__caption-element
    //this._modalImage = this._popupElement.querySelector(".element__img");
    this._modalImage = this._popupElement.querySelector(".modal__preview-image");
    //this._modalCaption = this._popupElement.querySelector(".element__descr");
    this._modalCaption = this._popupElement.querySelector(".modal__caption-element");
    //modal__preview-image
  }

  open(url, name) {
    this._modalImage.src = url;
    this._modalImage.alt = name;
    this._modalCaption.textContent = name;
    super.open();
  }
}
