export default class Api {
  constructor({baseUrl, baseHeader}) {
    this._baseUrl = baseUrl;
    this._baseHeader = baseHeader;
  }

getInitialCards(cardId) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._baseHeader,
    }).then(this._checkRequest);
  }


  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._baseHeader
    })
    .then(this._checkRequest)
  }
  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
  }

  updateProfileInfo(inputValues) {
    console.log(`!! updateProfileInfo, ${inputValues}`);
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._baseHeader,
      body: JSON.stringify({
        name: inputValues.name,
        about: inputValues.about,
      }),
    }).then(this._checkRequest);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._baseHeader,
    }).then(this._checkRequest);
  }
  removeCardLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._baseHeader,
    }).then(this._checkRequest);
  }

  addCardLikes(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._baseHeader,
    }).then(this._checkRequest);
  }

  addNewCard(inputValues) {
    console.log(`!! addNewCard, ${inputValues}`);
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._baseHeader,
      body: JSON.stringify(inputValues),
    }).then(this._checkRequest);
  }
}