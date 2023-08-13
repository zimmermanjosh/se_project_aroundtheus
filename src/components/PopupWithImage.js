import Popup from "./Popup.js";
import { initializeCards } from "/src/constants/variables.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._modalImage = this._modalElement.querySelector(".element__img");
    this._modalCaption = this._modalElement.querySelector(".element__descr");
  }

  open(imageUrl, imageCaption) {
    this._modalImage.src = imageUrl;
    this._modalImage.alt = imageCaption;
    this._modalCaption.textContent = imageCaption;

    super.open();
  }
}
