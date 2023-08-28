import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor({popupSelector}) {
    super(popupSelector);
    this._modalImage = this._modalImage.querySelector(".element__img");
    this._modalCaption = this._modalCaption.querySelector(".element__descr");
   }
   open(url, name){
    this._modalImage.src = url;
    this._modalImage.alt = name;
    this._modalCaption.textContent = name;
    super.open();
  };
};