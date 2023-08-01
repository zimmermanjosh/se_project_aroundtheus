export default class Popup {
  constructor({ modalSelector }) {
    this._modalElement = document.querySelector(modalSelector);
    this._modalCloseButton = this._modalElement.querySelector(".modal__close");
  }

  open() {
    this._modalElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._modalElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._modalCloseButton.addEventListener("click", () => {
      this.close();
    });
    this._modalElement.addEventListener("mousedown", (evt) => {
      if (evt.target.classList.contains("modal")) {
        this.close();
      }
    });
  }
}
