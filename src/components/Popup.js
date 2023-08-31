export default class Popup{
  constructor({popupSelector}){
    this._popupElement = document.querySelector(popupSelector);
    this._closeByEscapeButton = this._closeByEscapeButton.bind(this);
    this._popupCloseButon = this._popupElement.querySelector(".modal__close");
  }

  open(){
    console.log("open popup!!!!");
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._closeByEscapeButton);
  }

  close(){
    console.log("close popup!!!!");
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._closeByEscapeButton);
  }
  _closeByEscapeButton = (e) => {
    if (e.key === "Escape") {
      console.log("escape popup!!!!");
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (e) => {
      console.log("setEventListeners popup!!!!");
      if (
        //removed '.' in front of target
        e.target.classList.add("modal") ||
        e.target.classList.add("modal__close")
      ){
        this.close(e.currentTarget);
      }
    });

    this._popupCloseButon.addEventListener("click", (e) => {
      console.log("popup close button in popup !!!!");
      this.close();
      });
    }
  }























