export default class UserInfo {
  constructor(nameElement, jobElement) {
    this._nameElement = nameElement;
    this._jobElement = jobElement;
  }

  getUserInfo(){
    const data ={};
    data.profileName = this._nameElement.textContent;
    data.description = this._jobElement.textContent;
    return data;
  }

  setUserInfo(nameData, jobData) {
    this._nameElement.textContent = nameData;
    this._jobElement.textContent = jobData;
  }
}