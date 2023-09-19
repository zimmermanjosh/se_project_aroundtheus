export default class Api {
  constructor({baseUrl, baseHeader}) {
    this._baseUrl = baseUrl;
    this._baseHeader = baseHeader;
  }


  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._baseHeader
    })
    .then(res => this._checkRequest(res))
    .then(res => res.data);
  }
  _checkRequest(res) {
    if (res.ok) {
      return res.json();
    }
    // if the server returns an error, reject the promise
    return Promise.reject(`Error: ${res.status}`);
  }


/*getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1", {
      headers: {
        authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6"
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        // if the server returns an error, reject the promise
        return Promise.reject(`Error: ${res.status}`);
      });
  }*/

}