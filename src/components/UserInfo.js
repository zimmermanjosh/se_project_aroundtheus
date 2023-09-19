export default class UserInfo {
  constructor(selectors) {
    this._nameElement = document.querySelector(selectors.profileTitle);
    this._jobElement = document.querySelector(selectors.profileDescription);
    //this._nameElement = nameElement;
    //this._jobElement = jobElement;
    this._imageElement = document.querySelector(selectors.profileImage);
  }

  getUserInfo() {
  return {
    profileName: this._nameElement.textContent,
    description: this._jobElement.textContent,
    //profileImage: this._imageElement.src
    };
  }


/*getUserInfo(){
    const data ={};
    data.profileName = this._nameElement.textContent;
    data.description = this._jobElement.textContent;
    return data;
  }*/

  setUserInfo(nameData, jobData) {
    this._nameElement.textContent = nameData;
    this._jobElement.textContent = jobData;
  }
}