export default class Popup {
  constructor( popupSelector ) {
    this.popup = document.getElementById('popup');
  }

  open(){
    //open methods
  }

  close(){
    //close methods
  }

  _handleEscapeClose(){
    this.popup.classList.remove('open');
  }

  setEventListeners(){

  }
}