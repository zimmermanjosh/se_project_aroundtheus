export default class Popup{
  constructor({popupSelector}){
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButon = this._popupElement.querySelector(".modal__close");
  }

  openModal(){
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscKey);
  }
  closeModal(){
    this._popupElement.classList.add("modal_opened");
    document.removeEventListener("keyup", this._handleEscKey);
  }
  _handleEscClose = (e) => {
    if (e.key === "Escape") {
      this.close();
    }
  };

  setEventListeners() {
    this._handlePopupClose.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("modal")) {
        this.close();
      }
    });
  }
}























/*const overlay = document.querySelector(".page");

export function handleEscKey(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscKey);
  overlay.addEventListener("mousedown", handlePopupClose);
}

export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscKey);
  overlay.removeEventListener("mousedown", handlePopupClose);
}

export function handlePopupClose(evt) {
  if (
    evt.target.classList.contains("modal") ||
    evt.target.classList.contains("modal__close")
  ) {
    closeModal(evt.currentTarget);
  }
}*/