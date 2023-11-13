export default class Popup{
  constructor({popupSelector}){
    this._popupElement = document.querySelector(popupSelector);
    this._closeByEscapeButton = this._closeByEscapeButton.bind(this);
    //this._popupCloseButton = this._popupElement.querySelector(".modal__close");
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

  /*setEventListeners() {
    this._popupElement.addEventListener("mousedown", (e) => {
      console.log("setEventListeners popup!!!!");
      if (
        //removed '.' in front of target
        e.target.classList.contains("modal") ||
        e.target.classList.contains("modal__close")
      ){
        this.close(e.currentTarget);
      }
    })*/
setEventListeners() {
  // this._popupElement is the modal
  this._popupElement.addEventListener("mousedown", (event) => {
    // Check if the clicked element has the `modal__close` class or if the click is outside the `.modal__container`
    if (event.target.classList.contains("modal__close") ||
        event.target === this._popupElement) {
      this.close();
    }
  });
}

   // setEventListeners(){
      //this._popupElement.addEventListener("mousedown", this._closeClickOutside);
    //};

    _closeClickOutside = (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close-button")
    ) {
      this.close(e.currentTarget);
    }
  };

    /*this._popupCloseButton.addEventListener("click", (e) => {
      console.log("popup close button in popup !!!!");
      this.close();
      });*/
}