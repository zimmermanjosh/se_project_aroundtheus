export default class Api {
  constructor({baseUrl, headers}) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  _checkResponse(res) {
    if (res.status >= 200 && res.status < 300)
      return res.json();
    else{
      alert("there is a problem, error is :");
    }
  }
}