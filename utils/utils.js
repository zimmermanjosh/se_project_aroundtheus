// modal

function handleElementImageModal(evt) {
  evt.preventDefault();

  const newData = { name: elNameInput.value, url: elUrlInput.value };
  renderElement(newData);
  closeModal(elementAddModal);
  evt.target.reset();

  const createButton = elementAddForm.querySelector(".modal__button");
  createButton.classList.add("modal__button_disabled");
  createButton.disabled = true;
}

elementAddForm.addEventListener("submit", handleElementImageModal);

function handleEscKey(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal_opened");
    closeModal(activeModal);
  }
}