import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._modalImage = this._popupElement.querySelector(".element__img");
    this._modalCaption = this._popupElement.querySelector(".element__descr");
  }

  open(imageUrl, imageCaption) {
    this._modalImage.src = imageUrl;
    this._modalImage.alt = imageCaption;
    this._modalCaption.textContent = imageCaption;

    super.open();
  }

  close() {
    super.close();

    this._modalImage.src = "";
    this._modalImage.alt = "";
    this._modalCaption.textContent = "";
  }
}
