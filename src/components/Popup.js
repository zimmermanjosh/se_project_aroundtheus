export default class Popup {
  constructor({popupSelector}) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeByEsc = this.closeByEsc.bind(this);
    this._closebyClickOutside = this.closeByClickOutside.bind(this);
    //this._popupCloseButon = this._popupElement.querySelector(".modal__close");
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    this.setEventListeners();
    //document.addEventListener("keyup", this._handleEscKey);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    this._popupElement.removeEventListener("click", this._closebyClickOutside);
    document.removeEventListener("keydown", this._closeByEsc);
  }

  _closeByEsc = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  _closeByClickOutside = (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      this.close(e.currentTarget);
    }
  };

  setEventListeners() {
    document.addEventListener("keydown", this._closeByEsc);
    this._popupElement.addEventListener("click", this._closebyClickOutside);
  }
}

  /*setEventListeners() {
    this._popupCloseButton.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("modal")) {
        this.close();
      }
    });
  }*/
