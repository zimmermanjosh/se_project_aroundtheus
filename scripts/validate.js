function enableValidation(config) {
  const forms = document.querySelectorAll(config.formSelector);

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    const inputs = Array.from(form.querySelectorAll(config.inputSelector));

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        validateInput(input, config);
      });
    });
  });
}

function validateInput(input, config) {
  const errorElement = input
    .closest("form")
    .querySelector(`#${input.id}-error`);
  const isValid = input.checkValidity();

  if (!isValid) {
    showError(input, errorElement, input.validationMessage, config);
  } else {
    hideError(input, errorElement, config);
  }

  toggleButtonState(input.form, config);
}

function showError(input, errorElement, errorMessage, config) {
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.errorClass);
}

function hideError(input, errorElement, config) {
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(config.errorClass);
}

function toggleButtonState(form, config) {
  const submitButton = form.querySelector(config.submitButtonSelector);
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const isValid = inputs.every((input) => input.checkValidity());

  if (isValid) {
    submitButton.classList.remove(config.inactiveButtonClass);
    submitButton.disabled = false;
  } else {
    submitButton.classList.add(config.inactiveButtonClass);
    submitButton.disabled = true;
  }
}
