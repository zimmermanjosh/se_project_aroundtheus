export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }

  getUserInf0(){
    const data ={};
    data.proileName = this._nameElement.textContent;
    data.description = this._jobElement.textContent;
    return data;
    // return {
    //   name: this._nameElement.textContent,
    //   job: this._jobElement.textContent,
    // };
  }

  setUserInfo({ name, job }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = job;
  }
}