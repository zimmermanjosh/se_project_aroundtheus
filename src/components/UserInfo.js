export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    return userData;
  }

  getUserInfo() {
    const userData= {};
    userData.profile = this._nameElement.textContent;
    userData.description = this._jobElement.textContent;
  }

  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}
