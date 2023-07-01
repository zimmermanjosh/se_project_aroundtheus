function showInputError(formElements , inputElement , {inputErrorClass , errorClass}){
  const errorMessageElement = formElements.querySelector(`#${inputElement.id}_error`)
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);

}

function hideInputError(formElements , inputElement , {inputErrorClass , errorClass}){
  const errorMessageElement = formElements.querySelector(`#${inputElement.id}_error`)
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = " ";
  errorMessageElement.classList.remove(errorClass);

}

function checkInputValidity(formElements , inputElement , config){
  if(!inputElement.validity.valid) {
    return showInputError(formElements , inputElement , config);
  }
  hideInputError(formElements , inputElement , config)

}

function hasValidInput(input){
  return input.validity.valid
}

function toggleButtonState(inputElements , submitButton, {inactiveButtonSelector}){
  if(!getFormValidity(inputElements)) {
    submitButton.classList.add(inactiveButtonSelector)
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonSelector)
    submitButton.disabled = false;
  }
}

function getFormValidity(inputElements) {
  return inputElements.every(input => hasValidInput(input));
}

function setEventListeners(formElements, config){
  const { inputSelector } = config;
  const { inactiveButtonSelector } = config;
  const { submitButtonSelector } = config;
  const inputElements = [...formElements.querySelectorAll(inputSelector)];
  const submitButton = formElements.querySelector(submitButtonSelector);
  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input" , (e) => {
      checkInputValidity(formElements , inputElement , config);
      toggleButtonState(inputElements , submitButton, {inactiveButtonSelector});
    });
  });
}

function enableValidation(config){
  const formElements = [...document.querySelectorAll(config.formSelector)];
  formElements.forEach((formElements) => {
    formElements.addEventListener("submit" , (e) => {
      e.preventDefault();
    })
    setEventListeners(formElements , config);
  })
};


const config = {
  formSelector : ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonSelector: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visable",
};

enableValidation(config);