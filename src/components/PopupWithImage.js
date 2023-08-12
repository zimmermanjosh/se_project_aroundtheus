import Popup from "./Popup.js";
import {initializeCards} from "/src/constants/variables.js"
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._modalImage = this._modalImage.querySelector(".element__img");
    this._modalCaption = this._modalCaption.querySelector(".element__descr");
   }
   open(){
    super.open();
  };
};