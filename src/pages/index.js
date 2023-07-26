// ... (previous code)

// Create an instance of the UserInfo class
const userInfo = new UserInfo({
  nameSelector: '.profile__title',
  jobSelector: '.profile__descr',
});

// object configuration
const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
}

const editProfileValidator = new FormValidator(config, profileEditForm);
editProfileValidator.enableValidation();

const editImageValidator = new FormValidator(config, elementAddModal)
editImageValidator.enableValidation();

const profileEditPopup = new Popup(profileEditModal);


// Functions
/*function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", elementImageModal);
  const cardElement = card.generateCard();
  elementGallery.prepend(cardElement);
}*/
function renderElement(elementData) {
  const card = new Card(elementData, "#element-template", elementImageModal);
  const cardElement = card.generateCard();
  elementSection.addItem(cardElement); // Use the addItem method of the Section class
}

// Create an instance of the Section class
const elementSection = new Section({ items: initializeCards, renderer: renderElement }, '.elements__list');

// Render the items on the page
elementSection.renderItems();

function handleProfileEditSubmit(name, job) {
  // Update the user info on the page
  userInfo.setUserInfo({ name, job });

  //closeModal(profileEditModal);
  profileEditPopup.close();

  editProfileValidator.resetValidation(); // Reset validation for the profile edit form
}

function handleElementImageModal(evt) {
  // ... (previous code)
}

/* event Listeners */
initializeCards.forEach((elementData) => {
  renderElement(elementData);
});

//add event listeners
elementImageModal.addEventListener("mousedown", handlePopupClose);
profileEditModal.addEventListener("mousedown", handlePopupClose);
elementAddModal.addEventListener("mousedown", handlePopupClose);
elementAddButton.addEventListener("click", () => {
  openModal(elementAddModal);
});

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  profileEditPopup.open();
  //openModal(profileEditModal);
});

// Event listener for profile edit form submission
profileEditForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  // Get the form values
  const name = profileTitleInput.value;
  const job = profileDescriptionInput.value;

  // Call the handleProfileEditSubmit function with the form values
  handleProfileEditSubmit(name, job);
});

elementAddForm.addEventListener("submit", handleElementImageModal);
