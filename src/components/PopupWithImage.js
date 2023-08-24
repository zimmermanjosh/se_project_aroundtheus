import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({popupSelector});
    this._previewImageTitle = this._popupElement.querySelector(".element__descr");
    this._previewImageCaption = this._popupElement.querySelector(".element__img");
  }

  open(imageUrl, imageCaption) {
    this._previewImageCaption.src = imageUrl;
    this._previewImageCaption.alt = imageCaption;
    this._previewImageTitle.textContent = imageCaption;

    super.open();
  }

  /*close() {
    super.close();

    this._modalImage.src = "";
    this._modalImage.alt = "";
    this._modalCaption.textContent = "";
  }*/
}
