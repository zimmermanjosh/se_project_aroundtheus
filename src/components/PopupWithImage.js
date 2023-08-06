import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._title = this.popup.querySelector(".element-input");
    this._image = this.popup.querySelector(".image-input");
  };

  open({ link, name }) {
    this._title.textContent = name;
    this._image.src = link;
    this._image.alt = name;
    super.open();
  };
};