export default class Popup{
  constructor({popupSelector}){
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButon = this._popupElement.querySelector(".modal__close");
  }

  open(){
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscKey);
  }
  close(){
    this._popupElement.classList.add("modal_opened");
    document.removeEventListener("keyup", this._handleEscKey);
  }
  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("modal")) {
        this.close();
      }
    });
  }
}