import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super({ popupSelector });
    this._previewImageTitle =
      this._popupElement.querySelector(".modal__caption");
    this._previewImageModal = this._popupElement.querySelector(
      ".modal__image-preview"
    );
  }

  open(data) {
    this._previewImageModal.src = data.link;
    this._previewImageModal.alt = data.name;
    this._previewImageTitle.textContent = data.name;
    super.open();
  }
}
