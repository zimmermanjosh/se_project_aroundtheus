//profile modal validation
const nameInput = document.getElementById("profile-title-input");
const aboutInput = document.getElementById("profile-descr-input");
const saveBtn = document.getElementById("save");
const nameErrorMessage = document.getElementById("name-error-message");
const aboutErrorMessage = document.getElementById("about-error-message");

function validateForm(ev) {
  ev.preventDefault();
  if (nameInput.checkValidity() && aboutInput.checkValidity()) {
    saveBtn.classList.remove("inactive");
    saveBtn.disabled = false;
    nameErrorMessage.textContent = "";
    aboutErrorMessage.textContent = "";
  } else {
    saveBtn.classList.add("inactive");
    saveBtn.disabled = true;
    if (nameInput.validity.valueMissing) {
      nameErrorMessage.textContent = "Please enter your name.";
    } else if (nameInput.validity.tooShort || nameInput.validity.tooLong) {
      nameErrorMessage.textContent =
        "Name must be between 2 and 40 characters.";
    } else {
      nameErrorMessage.textContent = "";
    }

    if (aboutInput.validity.valueMissing) {
      aboutErrorMessage.textContent = "Please enter something about yourself.";
    } else if (aboutInput.validity.tooShort || aboutInput.validity.tooLong) {
      aboutErrorMessage.textContent =
        "About must be between 2 and 200 characters.";
    } else {
      aboutErrorMessage.textContent = "";
    }
  }
}

nameInput.addEventListener("input", validateForm);
aboutInput.addEventListener("input", validateForm);

//title element and url element validation

const titleElInput = document.getElementById("element-title-input");
const urlElInput = document.getElementById("element-image-input");
const createBtn = document.getElementById("create");
const titleErrorMessage = document.getElementById("title-error-message");
const urlErrorMessage = document.getElementById("url-error-message");

function validateElement(ev) {
  ev.preventDefault();
  if (titleElInput.checkValidity() && urlElInput.checkValidity()) {
    createBtn.classList.remove("inactive");
    createBtn.disabled = false;
    titleErrorMessage.textContent = "";
    urlErrorMessage.textContent = "";
  } else {
    createBtn.classList.add("inactive");
    createBtn.disabled = true;
    if (titleElInput.validity.valueMissing) {
      titleErrorMessage.textContent = "Please enter some title.";
    } else if (
      titleElInput.validity.tooShort ||
      titleElInput.validity.tooLong
    ) {
      titleErrorMessage.textContent =
        "Name must be between 1 and 30 characters.";
    }
    if (urlElInput.validity.value) {
      urlErrorMessage.textContent = "Please enter a valid URL.";
    } else {
      urlErrorMessage.textContent = "";
    }
  }
}

titleElInput.addEventListener("input", validateElement);
urlElInput.addEventListener("input", validateElement);
document.addEventListener("keydown", handleEscKey);

/*
document.addEventListener("click", (event) => {
  const modal = document.querySelector(".modal_opened");
  if (modal && !modal.contains(event.target)) {
    if (profileEditModal) {
      closePopUp(profileEditModal);
    }
    if (elementAddModal) {
      closePopUp(elementAddModal);
    }
    if (elementImageModal) {
      closePopUp(elementImageModal);
    }
  }
});*/
