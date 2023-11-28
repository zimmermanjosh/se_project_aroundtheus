export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeByEscapeButton = this._closeByEscapeButton.bind(this);
  }

  open() {
    console.log("open popup!!!!");
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._closeByEscapeButton);
  }

  close() {
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
    // this._popupElement is the modal
    this._popupElement.addEventListener("mousedown", (event) => {
      // Check if the clicked element has the `modal__close` class or if the click is outside the `.modal__container`
      if (
        event.target.classList.contains("modal__close") ||
        event.target === this._popupElement
      ) {
        this.close();
      }
    });
  }
  _closeClickOutside = (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close-button")
    ) {
      this.close(e.currentTarget);
    }
  };
}
