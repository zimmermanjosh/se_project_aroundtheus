export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);

  }

  getUserInfo() {
    const userData= {};
    userData.profile = this._nameElement.textContent;
    userData.description = this._jobElement.textContent;
    return userData;
  }

  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}
