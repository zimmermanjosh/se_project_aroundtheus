export default class Popup {
  constructor({popupSelector}) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeByEsc = this._closeByEsc.bind(this);
    this._popupClosebutton = this._popupElement.querySelector(".modal__close");
  }

  open() {
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._closeByEsc);
  }

  close() {
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._closeByEsc);
  }

  _closeByEsc = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("modal__close") || e.target.classList.contains("modal_opened")) {
        this.close();
      }
  });

    this._popupClosebutton.addEventListener("click", () => {
      this.close();
    });
  }
}

