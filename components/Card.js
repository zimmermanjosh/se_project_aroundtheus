export default class Card {
  constructor(data, templateSelector, handleImageClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleImageClick = handleImageClick;
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

  getElementView() {
    this._elementCardTemp = document
      .querySelector(this._templateSelector)
      .content.querySelector(".el__element")
      .cloneNode(true);
    this._imageElement = elementCardTemp.querySelector(".element__img");
    this._titleElement = elementCardTemp.querySelector(".element__text");
    this._likeButton = elementCardTemp.querySelector(".element__like-button");
    this._elementDeleteButton = elementCardTemp.querySelector(
      ".element__delete-button"
    );
    this._titleElement.textContent = this._name;
    this._imageElement.alt = this._name;
    this._imageElement.src = this._url;

    this._setEventListeners();
    return this._elementCardTemp
  }
}