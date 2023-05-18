function showInputError (formElement, inputElement, config)
{
  //const{ errorClass, inputErrorClass } = options;
  const{ errorClass, inputErrorClass } = config;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

function hideInputError (formElement, inputElement, config)
{
  const {inputErrorClass} = options;
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = " ";
};

function checkInputValidity (formElement, inputElement, config) {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
}
/*const checkInputValidity = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      config
    );
  } else {
    hideInputError(formElement, inputElement, config);
  }
};*/
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

function disableSubmitButton(submitButton, config) {
  const { inactiveButtonClass } = config;

  buttonElement.classList.add(config.inactiveButtonClass);
  buttonElement.disabled = true;

}

function enableSubmitButton(submitButton, config) {
  const { inactiveButtonClass } = config;

  buttonElement.classList.remove(config.inactiveButtonClass);
  buttonElement.disabled = false;
}

function toggleButtonState = (inputList, buttonElement, config) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(submitButton, config)
    //buttonElement.classList.add(config.inactiveButtonClass);
    //buttonElement.disabled = true;
  } else {
    enableSubmitButton(submitButton, config)
    //buttonElement.classList.remove(config.inactiveButtonClass);
    //buttonElement.disabled = false;
  }
};

function setEventListeners = (formElement, config){
  const inputList = [...formElement.querySelectorAll(config.inputSelector)];
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, config);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, config);
      toggleButtonState(inputList, buttonElement, config);
    });
  });
};

const enableValidation = (config)  {
  const { formSelector } = config;
  const formList = [...document.querySelectorAll(config.formSelector)];

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
};

const configurationObjects = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(configurationObjects);
