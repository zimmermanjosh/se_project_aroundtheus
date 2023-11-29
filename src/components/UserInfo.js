export default class UserInfo {
  constructor(selectors) {
    this._nameElement = document.querySelector(selectors.profileNameSelector);
    this._descriptionElement = document.querySelector(selectors.profileDescriptionSelector);
    //this._nameElement = nameElement;
    //this._jobElement = jobElement;
    this._avatarElement = document.querySelector(selectors.profileAvatarSelector);
  }

  getUserInfo() {
  return {
    name: this._nameElement.textContent,
    about: this._descriptionElement.textContent,
    //avatar: this._avatarElement.textContent
    };
  }

setUserInfo(inputValues) {
  this._nameElement.textContent = inputValues.name;
  this._descriptionElement.textContent = inputValues.about;
  console.log("userInfo.js:InputValues Are:", inputValues);
  }

setAvatarInfo(avatar) {
  this._avatarElement.src = avatar;
  console.log("userInfo.js:Avatar Are:", avatar);
  }
}