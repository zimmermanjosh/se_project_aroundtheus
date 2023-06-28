export default class card {
  constructor({name, link}, elementSelector) {
    this._name = data.name;
    this._link = data.url;
   this._elementSelector = elementSelector;
  }
  _setEventListeners() {
    this._likeButton.addEventListeners("click", () => {
      this._handleLikeButton();
      });
      //
    this._deleteButton.addEventListeners("click", () => {
      this._handleDeleteElement();
      });
      //
    this._imageElement.addEventListeners("click", () => {
      this._handleImageClick({ name: elNameInput.value, url: elUrlInput.value }
      )})
  }

  _handleLikeButton() {
    likeButton.classList.toggle("element__like-button_active");
  }

  _handleDeleteElement(){
    likeButton.classList.toggle("element__like-button_active");
  }

  getView() {
    this._elementCard = document
      .querySelector(this.elementSelector)
      .content.querySelector(".el__element")
      .cloneNode(true);

    this._setEventListeners()
  }
}