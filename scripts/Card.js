export default class Card {
  constructor({ name, url }, cardSelector) {
    this._name = name;
    this._url = url;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    const likeButton = this._elementCardTemp.querySelector(
      ".element__like-button"
    );
    if (likeButton) {
      likeButton.addEventListener("click", () => {
        this._handleLikeIcon();
      });
    }

    const deleteButton = this._elementCardTemp.querySelector(
      ".element__delete-button"
    );
    if (deleteButton) {
      deleteButton.addEventListener("click", () => {
        this.deleteButton();
      });
    }
  }

  _handleLikeIcon() {
    this._elementCardTemp
      .querySelector(".element__like-button")
      .classList.toggle("element__like-button--active");
  }

  _handleDeleteCard() {
    this._elementCardTemp.remove();
    this._elementCardTemp = null;
  }

  getView() {
    this._elementCardTemp = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    //get the card
    //view set event
    this._setEventListeners();

    //return the card
  }
}
