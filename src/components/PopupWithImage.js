import Popup from "./Popup.js";
import {initializeCards} from "/src/constants/variables.js"
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._modalImage = this._modalImage.querySelector(".modal__image-element");
    this._modalCaption = this._modalCaption.querySelector(".modal__caption-element");
  };

  open(initializeCards) {
    this._title.textContent = name;
    this._image.src = url;
    this._image.alt = name;
    super.open();
  };
};